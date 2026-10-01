import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

let isRegistered = false;

const registerGSAPPlugins = () => {
  if (isRegistered) return;
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  isRegistered = true;
};

export default registerGSAPPlugins;
