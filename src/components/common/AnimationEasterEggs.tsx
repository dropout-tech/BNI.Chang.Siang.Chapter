import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type EggKind = 'logo' | 'bni' | 'changsiang';

type ActiveEgg = {
  id: number;
  kind: EggKind;
};

const burstParticles = [
  [-42, -34], [-18, -52], [18, -48], [44, -28], [58, 4], [34, 36],
  [0, 54], [-34, 34], [-56, 2], [-28, -8], [24, 12], [4, -28],
];

const confetti = [
  ['12%', '18%', 0], ['24%', '12%', 0.12], ['36%', '22%', 0.24], ['48%', '10%', 0.06],
  ['60%', '18%', 0.18], ['72%', '14%', 0.3], ['84%', '24%', 0.1], ['18%', '42%', 0.2],
  ['32%', '52%', 0.04], ['50%', '46%', 0.26], ['68%', '54%', 0.14], ['82%', '44%', 0.34],
];

const LogoBurst = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed left-24 top-20 z-[80] h-1 w-1 pointer-events-none"
  >
    {burstParticles.map(([x, y], index) => (
      <motion.span
        key={`${x}-${y}`}
        initial={{ x: 0, y: 0, scale: 0.4, opacity: 0 }}
        animate={{ x, y, scale: [0.8, 1.25, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 1.1, delay: index * 0.025, ease: 'easeOut' }}
        className={`absolute h-2 w-2 rounded-full shadow-[0_0_18px_rgba(207,32,48,0.45)] ${index % 3 === 0 ? 'bg-[#D4AF37]' : 'bg-[#CF2030]'}`}
      />
    ))}
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: [0.7, 1.08, 1], opacity: [0, 1, 0] }}
      transition={{ duration: 1.4, ease: 'easeOut' }}
      className="absolute -left-16 -top-8 rounded-full border border-[#CF2030]/20 bg-white/90 px-4 py-2 text-xs font-black tracking-[0.28em] text-[#CF2030] shadow-[0_18px_45px_rgba(207,32,48,0.18)] backdrop-blur-md"
    >
      長翔展翼
    </motion.div>
  </motion.div>
);

const BniToast = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[80] pointer-events-none overflow-hidden"
  >
    {confetti.map(([left, top, delay], index) => (
      <motion.span
        key={`${left}-${top}`}
        style={{ left, top }}
        initial={{ y: -16, rotate: 0, opacity: 0 }}
        animate={{ y: 90, rotate: index % 2 ? 180 : -180, opacity: [0, 1, 0] }}
        transition={{ duration: 1.8, delay: Number(delay), ease: 'easeInOut' }}
        className={`absolute h-3 w-1.5 rounded-sm ${index % 2 ? 'bg-[#CF2030]' : 'bg-[#D4AF37]'}`}
      />
    ))}
    <div className="absolute inset-0 flex items-center justify-center px-4">
      <motion.div
        initial={{ y: 18, scale: 0.96, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: -12, opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="rounded-[1.5rem] border border-[#CF2030]/15 bg-white/88 px-7 py-5 text-center shadow-[0_26px_80px_rgba(207,32,48,0.18)] backdrop-blur-xl"
      >
        <div className="text-xs font-black uppercase tracking-[0.38em] text-[#CF2030]">BNI Spirit</div>
        <div className="mt-2 text-2xl font-black text-[#19191d]">Givers Gain</div>
        <div className="mt-1 text-sm font-semibold text-gray-500">先給予，後獲得</div>
      </motion.div>
    </div>
  </motion.div>
);

const ChangSiangSweep = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[80] pointer-events-none overflow-hidden"
  >
    <motion.div
      initial={{ x: '-120%', rotate: -12 }}
      animate={{ x: '120%', rotate: -12 }}
      transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-0 top-[34%] h-24 w-[120vw] bg-[linear-gradient(90deg,transparent,rgba(207,32,48,0.0),rgba(207,32,48,0.18),rgba(212,175,55,0.18),transparent)] blur-xl"
    />
    <motion.div
      initial={{ x: '120%', rotate: 10 }}
      animate={{ x: '-120%', rotate: 10 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      className="absolute left-0 top-[52%] h-20 w-[120vw] bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.16),rgba(207,32,48,0.16),transparent)] blur-xl"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: [0.92, 1.02, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="rounded-full border border-[#CF2030]/15 bg-white/80 px-6 py-3 text-sm font-black tracking-[0.32em] text-[#CF2030] shadow-[0_18px_60px_rgba(207,32,48,0.14)] backdrop-blur-md"
      >
        CHANG SIANG
      </motion.div>
    </div>
  </motion.div>
);

const AnimationEasterEggs = () => {
  const [activeEgg, setActiveEgg] = useState<ActiveEgg | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const clickRef = useRef({ count: 0, lastAt: 0 });

  useEffect(() => {
    const trigger = (kind: EggKind) => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      setActiveEgg({ kind, id: Date.now() });
      timeoutRef.current = window.setTimeout(() => setActiveEgg(null), 2200);
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('[data-easter-burst="true"]')) {
        trigger('logo');
        return;
      }

      if (target.closest('[data-easter-sweep="true"]')) {
        trigger('changsiang');
        return;
      }

      if (target.closest('[data-easter-bni="true"]')) {
        trigger('bni');
        return;
      }

      if (!target.closest('[data-easter-logo="true"]')) return;

      const now = window.performance.now();
      const nextCount = now - clickRef.current.lastAt < 900 ? clickRef.current.count + 1 : 1;
      clickRef.current = { count: nextCount, lastAt: now };

      if (nextCount >= 3) {
        clickRef.current.count = 0;
        trigger('logo');
      }
    };

    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('click', onClick);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {activeEgg?.kind === 'logo' && <LogoBurst key={activeEgg.id} />}
      {activeEgg?.kind === 'bni' && <BniToast key={activeEgg.id} />}
      {activeEgg?.kind === 'changsiang' && <ChangSiangSweep key={activeEgg.id} />}
    </AnimatePresence>
  );
};

export default AnimationEasterEggs;
