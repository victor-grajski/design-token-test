import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #2980b9;
  }
  
  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  children, 
  onClick, 
  disabled = false,
  type = 'button'
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );
};

export default PrimaryButton; 