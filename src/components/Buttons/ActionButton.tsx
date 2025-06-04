import React from 'react';
import styled from 'styled-components';

const ActionBtn = styled.button`
  background: #2ecc71;
  color: #fff;
  border: 0;
  padding: 10px 20px;
  font-size: 15px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: #27ae60;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

interface ActionButtonProps {
  text: string;
  handleClick?: () => void;
  isDisabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  text, 
  handleClick, 
  isDisabled = false 
}) => {
  return (
    <ActionBtn onClick={handleClick} disabled={isDisabled}>
      {text}
    </ActionBtn>
  );
};

export default ActionButton; 