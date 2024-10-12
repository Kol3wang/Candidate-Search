import React from 'react';

interface ButtonGroupProps {
  onSave: () => void;
  onSkip: () => void;
}

const ButtonGroupComponent: React.FC<ButtonGroupProps> = ({ onSave, onSkip }) => {
  return (
    <div className="buttons">
      <button onClick={onSkip} className="skip-button">-</button>
      <button onClick={onSave} className="save-button">+</button>
    </div>
  );
};

export default ButtonGroupComponent;