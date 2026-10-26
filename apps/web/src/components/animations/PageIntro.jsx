import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PageIntro = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false);
      return undefined;
    }
    const hide = window.setTimeout(() => setVisible(false), 700);
    return () => window.clearTimeout(hide);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] bg-[#050505]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        />
      )}
    </AnimatePresence>
  );
};

export default PageIntro;
