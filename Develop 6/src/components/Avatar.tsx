import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
}

const AvatarComponent: React.FC<AvatarProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="candidate-avatar" />;
};

export default AvatarComponent;