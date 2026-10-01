import { useState } from 'react';

const MagneticButton = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon: Icon,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClass = 'magnetic-button';
  const variantClass = `magnetic-button--${variant}`;
  const sizeClass = `magnetic-button--${size}`;
  const widthClass = fullWidth ? 'magnetic-button--full' : '';

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${widthClass} ${
        isHovered ? 'hovered' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      {Icon && <span className="magnetic-button-icon">{<Icon />}</span>}
      <span className="magnetic-button-text">{children}</span>
    </button>
  );
};

export default MagneticButton;
