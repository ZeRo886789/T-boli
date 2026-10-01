import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let animationId;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      setPosition({ x: mouseX, y: mouseY });
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleMouseLeaveWindow = () => {
      setHidden(true);
    };

    const handleMouseEnterWindow = () => {
      setHidden(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnterWindow);
    window.addEventListener('mouseleave', handleMouseLeaveWindow);

    const hoverElements = document.querySelectorAll(
      'a, button, .magnetic-button, .nav-link'
    );
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnterWindow);
      window.removeEventListener('mouseleave', handleMouseLeaveWindow);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(animationId);
    };
  }, []);

  const cursorClass = `custom-cursor ${isHovered ? 'hovered' : ''} ${hidden ? 'hidden' : ''}`;

  return (
    <div
      className={cursorClass}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
};

export default CustomCursor;
