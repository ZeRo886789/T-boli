import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const revealPresets = [
  { selector: '[data-motion="reveal"]', from: { y: 30 } },
  { selector: '[data-motion="reveal-left"]', from: { x: -42 } },
  { selector: '[data-motion="reveal-right"]', from: { x: 42 } },
  { selector: '[data-motion="reveal-scale"]', from: { scale: 0.965, y: 14 } },
];

export function usePageMotion(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef?.current;
    if (!root) return undefined;

    let media;

    const context = gsap.context(() => {
      media = gsap.matchMedia();

      media.add(
        {
          reduceMotion: '(prefers-reduced-motion: reduce)',
          desktop: '(min-width: 1025px)',
          finePointer: '(hover: hover) and (pointer: fine)',
        },
        (mediaContext) => {
          const { reduceMotion, desktop, finePointer } = mediaContext.conditions;
          if (reduceMotion) return undefined;

          const eventCleanup = [];

          revealPresets.forEach(({ selector, from }) => {
            root.querySelectorAll(selector).forEach((element) => {
              gsap.fromTo(
                element,
                { autoAlpha: 0, ...from },
                {
                  autoAlpha: 1,
                  y: 0,
                  x: 0,
                  scale: 1,
                  duration: 0.82,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: element,
                    start: 'top 88%',
                    once: true,
                  },
                },
              );
            });
          });

          const hero = root.querySelector('[data-motion="hero"]');
          if (hero) {
            const lines = hero.querySelectorAll('[data-motion-line]');
            const eyebrow = hero.querySelector('[data-motion-eyebrow]');
            const copy = hero.querySelector('[data-motion-copy]');
            const actions = hero.querySelectorAll('[data-motion-action]');
            const image = hero.querySelector('[data-motion-hero-image]');
            const indexBadge = hero.querySelector('[data-motion-index]');
            const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

            if (eyebrow) {
              timeline.fromTo(
                eyebrow,
                { autoAlpha: 0, y: 12, letterSpacing: '0.32em' },
                { autoAlpha: 1, y: 0, letterSpacing: '0.18em', duration: 0.65 },
                0,
              );
            }
            if (lines.length) {
              timeline.fromTo(
                lines,
                { yPercent: 112, autoAlpha: 0, rotate: 1.5 },
                {
                  yPercent: 0,
                  autoAlpha: 1,
                  rotate: 0,
                  duration: 1.05,
                  stagger: 0.11,
                },
                0.12,
              );
            }
            if (indexBadge) {
              timeline.fromTo(
                indexBadge,
                { autoAlpha: 0, x: -12 },
                { autoAlpha: 1, x: 0, duration: 0.55 },
                0.1,
              );
            }
            if (copy) {
              timeline.fromTo(
                copy,
                { autoAlpha: 0, y: 18 },
                { autoAlpha: 1, y: 0, duration: 0.72 },
                0.5,
              );
            }
            if (actions.length) {
              timeline.fromTo(
                actions,
                { autoAlpha: 0, y: 12 },
                { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.09 },
                0.68,
              );
            }
            if (image) {
              timeline.fromTo(
                image,
                { autoAlpha: 0.6, scale: 1.075 },
                { autoAlpha: 1, scale: 1, duration: 1.35 },
                0,
              );
            }
          }

          root.querySelectorAll('[data-motion="stagger"]').forEach((group) => {
            const items = group.querySelectorAll('[data-motion-item]');
            if (!items.length) return;

            gsap.fromTo(
              items,
              { autoAlpha: 0, y: 22 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.72,
                stagger: 0.085,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: group,
                  start: 'top 86%',
                  once: true,
                },
              },
            );
          });

          root.querySelectorAll('[data-motion="draw-line"]').forEach((path) => {
            if (typeof path.getTotalLength !== 'function') return;
            const length = path.getTotalLength();
            gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
            gsap.to(path, {
              strokeDashoffset: 0,
              duration: 1.6,
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: path.closest('svg') || path,
                start: 'top 85%',
                once: true,
              },
            });
          });

          root.querySelectorAll('[data-motion="scroll-progress"]').forEach((bar) => {
            gsap.fromTo(
              bar,
              { scaleX: 0 },
              {
                scaleX: 1,
                ease: 'none',
                scrollTrigger: {
                  trigger: root,
                  start: 'top top',
                  end: 'bottom bottom',
                  scrub: 0.25,
                },
              },
            );
          });

          root.querySelectorAll('[data-motion="parallax"]').forEach((element) => {
            gsap.to(element, {
              yPercent: Number(element.dataset.parallaxAmount || -7),
              ease: 'none',
              scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.6,
              },
            });
          });

          root.querySelectorAll('[data-motion="parallax-slow"]').forEach((element) => {
            gsap.to(element, {
              yPercent: Number(element.dataset.parallaxAmount || -4),
              ease: 'none',
              scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            });
          });

          if (desktop) {
            root.querySelectorAll('[data-motion="parallax"]').forEach((element) => {
              gsap.to(element, {
                yPercent: Number(element.dataset.parallaxAmount || -7),
                ease: 'none',
                scrollTrigger: {
                  trigger: element,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 0.6,
                },
              });
            });
          }

          if (finePointer) {
            root.querySelectorAll('[data-motion="image-hover"]').forEach((frame) => {
              const image = frame.querySelector('img');
              if (!image) return;

              const onEnter = () => gsap.to(image, {
                scale: 1.045,
                duration: 0.7,
                ease: 'power3.out',
                overwrite: 'auto',
              });
              const onLeave = () => gsap.to(image, {
                scale: 1,
                duration: 0.7,
                ease: 'power3.out',
                overwrite: 'auto',
              });

              frame.addEventListener('pointerenter', onEnter);
              frame.addEventListener('pointerleave', onLeave);
              eventCleanup.push(() => {
                frame.removeEventListener('pointerenter', onEnter);
                frame.removeEventListener('pointerleave', onLeave);
              });
            });

            root.querySelectorAll('[data-motion="magnetic"]').forEach((element) => {
              const quickX = gsap.quickTo(element, 'x', { duration: 0.35, ease: 'power3.out' });
              const quickY = gsap.quickTo(element, 'y', { duration: 0.35, ease: 'power3.out' });
              const onMove = (event) => {
                const bounds = element.getBoundingClientRect();
                const relativeX = event.clientX - bounds.left - bounds.width / 2;
                const relativeY = event.clientY - bounds.top - bounds.height / 2;
                quickX(Math.max(-7, Math.min(7, relativeX * 0.12)));
                quickY(Math.max(-5, Math.min(5, relativeY * 0.12)));
              };
              const onLeave = () => { quickX(0); quickY(0); };

              element.addEventListener('pointermove', onMove);
              element.addEventListener('pointerleave', onLeave);
              eventCleanup.push(() => {
                element.removeEventListener('pointermove', onMove);
                element.removeEventListener('pointerleave', onLeave);
                gsap.killTweensOf(element, 'x,y');
                gsap.set(element, { x: 0, y: 0 });
              });
            });

            root.querySelectorAll('[data-motion="tilt"]').forEach((element) => {
              const rotateX = gsap.quickTo(element, 'rotationX', { duration: 0.35, ease: 'power2.out' });
              const rotateY = gsap.quickTo(element, 'rotationY', { duration: 0.35, ease: 'power2.out' });
              const onMove = (event) => {
                const bounds = element.getBoundingClientRect();
                const x = (event.clientX - bounds.left) / bounds.width - 0.5;
                const y = (event.clientY - bounds.top) / bounds.height - 0.5;
                rotateX(-y * 3.5);
                rotateY(x * 4.5);
              };
              const onLeave = () => { rotateX(0); rotateY(0); };

              element.addEventListener('pointermove', onMove);
              element.addEventListener('pointerleave', onLeave);
              eventCleanup.push(() => {
                element.removeEventListener('pointermove', onMove);
                element.removeEventListener('pointerleave', onLeave);
                gsap.killTweensOf(element, 'rotationX,rotationY');
                gsap.set(element, { rotationX: 0, rotationY: 0 });
              });
            });
          }

          return () => eventCleanup.forEach((cleanup) => cleanup());
        },
      );
    }, root);

    return () => {
      media?.revert();
      context.revert();
    };
  }, [rootRef]);
}

export default usePageMotion;
