import React from 'react';

const OxygenMolecule3D = ({ className = '', size = 88, delay = 0 }) => {
  return (
    <div
      className={`o2-stage pointer-events-none ${className}`}
      style={{ width: size * 1.8, height: size, animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      <div className="o2-molecule" style={{ animationDelay: `${delay}s` }}>
        <span className="o2-bond" />
        <span className="o2-atom o2-atom-a">O</span>
        <span className="o2-atom o2-atom-b">O</span>
      </div>
    </div>
  );
};

export default OxygenMolecule3D;
