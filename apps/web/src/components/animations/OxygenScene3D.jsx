import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Html, Sparkles } from '@react-three/drei';
import { Bot, Brain, Cpu, MessageSquare, Sparkles as AiSpark } from 'lucide-react';
import * as THREE from 'three';

function CameraRig() {
  const intro = useRef(0);

  useFrame((state, delta) => {
    intro.current = Math.min(1, intro.current + delta * 0.55);
    const ease = 1 - (1 - intro.current) ** 3;
    const targetZ = THREE.MathUtils.lerp(12.5, 5.8, ease);
    const targetY = THREE.MathUtils.lerp(2.2, 0.2, ease);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.08);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.08);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.7, 0.045);
    state.camera.lookAt(0, 0.05, 0);
  });

  return null;
}

function GlowOrb({
  radius = 2.1,
  speed = 0.4,
  offset = 0,
  size = 0.28,
  color = '#5ec8ff',
}) {
  const group = useRef();
  const pulse = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    if (group.current) {
      group.current.position.set(
        Math.cos(t) * radius,
        Math.sin(t * 1.15) * 0.55,
        Math.sin(t) * radius * 0.68
      );
    }
    if (pulse.current) {
      const s = 1 + Math.sin(clock.getElapsedTime() * 2 + offset) * 0.08;
      pulse.current.scale.setScalar(s);
    }
  });

  return (
    <group ref={group}>
      <group ref={pulse}>
        <mesh>
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.2} roughness={0.15} />
        </mesh>
        <mesh>
          <sphereGeometry args={[size * 1.85, 24, 24]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.22}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[size * 3.1, 20, 20]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.08}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>
    </group>
  );
}

function EnergyCore() {
  const inner = useRef();
  const halo = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pulse = 1 + Math.sin(t * 1.4) * 0.07;
    if (inner.current) inner.current.scale.setScalar(pulse);
    if (halo.current) {
      halo.current.rotation.y = t * 0.25;
      halo.current.rotation.x = t * 0.12;
    }
  });

  return (
    <group>
      <mesh ref={inner}>
        <sphereGeometry args={[0.62, 48, 48]} />
        <meshStandardMaterial
          color="#7ad7ff"
          emissive="#3db7ff"
          emissiveIntensity={1.6}
          roughness={0.12}
          metalness={0.25}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.15, 32, 32]} />
        <meshBasicMaterial
          color="#4cc9ff"
          transparent
          opacity={0.16}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.85, 32, 32]} />
        <meshBasicMaterial
          color="#7aa8ff"
          transparent
          opacity={0.07}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <group ref={halo}>
        <mesh rotation={[Math.PI / 2.2, 0.2, 0]}>
          <torusGeometry args={[1.28, 0.018, 12, 80]} />
          <meshBasicMaterial color="#8fd9ff" transparent opacity={0.55} />
        </mesh>
      </group>
    </group>
  );
}

function FlowParticles() {
  const count = 900;
  const { positions, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      const radius = 0.6 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      seeds[i] = Math.random() * Math.PI * 2;
    }
    return { positions, seeds };
  }, []);
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const arr = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      const s = seeds[i];
      const radius = 0.7 + ((Math.sin(t * 0.7 + s) + 1) / 2) * 2.2;
      const spin = t * 0.35 + s;
      const phi = s * 0.7;
      arr[i3] = radius * Math.cos(spin) * Math.cos(phi);
      arr[i3 + 1] = radius * Math.sin(phi) * 0.9;
      arr[i3 + 2] = radius * Math.sin(spin) * Math.cos(phi);
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8fd9ff"
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function OrbitIcon({ radius = 2.3, speed = 0.4, offset = 0, Icon, color = '#7ad7ff' }) {
  const group = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    if (!group.current) return;
    group.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 0.95) * 0.72,
      Math.sin(t) * radius * 0.62
    );
  });

  return (
    <group ref={group}>
      <Billboard follow>
        <Html center distanceFactor={7} zIndexRange={[10, 0]}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 16,
              display: 'grid',
              placeItems: 'center',
              background: 'rgba(14, 24, 34, 0.88)',
              border: `1px solid ${color}`,
              boxShadow: `0 0 18px ${color}88`,
              color,
              pointerEvents: 'none',
            }}
          >
            <Icon size={26} strokeWidth={2.1} />
          </div>
        </Html>
      </Billboard>
    </group>
  );
}

function Scene({ compact = false }) {
  return (
    <>
      <color attach="background" args={['#1c2733']} />
      <fog attach="fog" args={['#1c2733', 8, 20]} />
      <ambientLight intensity={0.55} />
      <pointLight position={[3.2, 2.4, 3]} intensity={18} color="#5ec8ff" distance={12} />
      <pointLight position={[-3.4, -1.6, 2]} intensity={12} color="#7a6bff" distance={12} />
      <spotLight position={[0, 6, 4]} angle={0.5} intensity={16} color="#d7f4ff" />
      <CameraRig />
      <EnergyCore />
      <FlowParticles />
      <Sparkles count={compact ? 50 : 110} scale={[7, 5, 5]} size={3} speed={0.65} color="#9be7ff" />
      <GlowOrb radius={2.15} speed={0.42} offset={0} color="#5ec8ff" size={0.26} />
      <GlowOrb radius={2.55} speed={-0.33} offset={1.2} color="#7ad7ff" size={0.2} />
      <GlowOrb radius={1.9} speed={0.55} offset={2.1} color="#b197ff" size={0.18} />
      <GlowOrb radius={2.9} speed={-0.22} offset={0.6} color="#3dffb0" size={0.16} />
      {!compact && <GlowOrb radius={1.5} speed={0.7} offset={3} color="#8fd9ff" size={0.14} />}
      {!compact && <GlowOrb radius={3.15} speed={-0.18} offset={1.8} color="#6d5cff" size={0.22} />}
      <OrbitIcon Icon={Brain} color="#7ad7ff" radius={2.55} speed={0.38} offset={0.2} />
      <OrbitIcon Icon={Cpu} color="#7aa8ff" radius={2.85} speed={-0.3} offset={1.6} />
      <OrbitIcon Icon={Bot} color="#b197ff" radius={2.2} speed={0.46} offset={2.8} />
      <OrbitIcon Icon={MessageSquare} color="#5ec8ff" radius={3.05} speed={-0.24} offset={0.9} />
      {!compact && <OrbitIcon Icon={AiSpark} color="#3dffb0" radius={1.75} speed={0.52} offset={3.4} />}
    </>
  );
}

const OxygenScene3D = ({ className = '', compact = false }) => {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 2.2, 12.5], fov: 42 }}
        gl={{ antialias: true, alpha: false }}
      >
        <Scene compact={compact} />
      </Canvas>
    </div>
  );
};

export default OxygenScene3D;
