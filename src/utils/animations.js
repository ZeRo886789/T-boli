export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const slideIn = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: 0.3, ease: 'easeOut' },
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItems = (count, delay = 0.1) => ({
  animate: {
    transition: {
      staggerChildren: delay,
      delayChildren: 0.2,
    },
  },
});

export const parallaxVariant = {
  initial: { y: 0 },
  animate: { y: -50 },
  transition: { duration: 1, ease: 'easeOut' },
};

export const textReveal = {
  initial: { width: 0, opacity: 0 },
  animate: { width: '100%', opacity: 1 },
  transition: { duration: 1, ease: 'easeOut' },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
  exit: { opacity: 0 },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: { opacity: 0, y: -20 },
};

export const animationVariants = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  slideIn,
  staggerChildren,
  staggerItems,
  parallaxVariant,
  textReveal,
  containerVariants,
  itemVariants,
};

export default animationVariants;
