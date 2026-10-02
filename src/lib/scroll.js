let instance = null;

export const setLenis = (l) => { instance = l; };
export const getLenis = () => instance;

export const scrollToTarget = (target) => {
  if (instance) instance.scrollTo(target, { duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 4) });
  else document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
};
