import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MotionAction = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  onClick,
  ...props
}) => {
  const buttonRef = useRef(null);
  const isOutline = variant === 'outline';
  const sizeClass = ` motion-button--${size}`;

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const handleEnter = () => {
      gsap.to(button, {
        '--tw-shadow': '0 12px 44px rgba(0, 0, 0, 0.22)',
        duration: 0.32,
        ease: 'power3.out',
      });
    };
    const handleLeave = () => {
      gsap.to(button, {
        '--tw-shadow': '0 0 0 0px transparent',
        duration: 0.32,
        ease: 'power3.out',
      });
    };

    button.addEventListener('pointerenter', handleEnter);
    button.addEventListener('pointerleave', handleLeave);

    return () => {
      button.removeEventListener('pointerenter', handleEnter);
      button.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`motion-button${isOutline ? ' motion-button--outline' : ''}${sizeClass} ${className}`.trim()}
      onClick={onClick}
      type="button"
      {...props}
    >
      <span className="motion-button__label">{children}</span>
      <span className="motion-button__arrow" aria-hidden="true">
        ↗
      </span>
    </button>
  );
};

export default MotionAction;
