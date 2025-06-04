import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: #c0392b;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:focus {
    outline: 2px solid #f39c12;
    outline-offset: 2px;
  }
`;

type SubmitBtnProps = {
  label: string;
  onSubmit?: () => void;
  disabled?: boolean;
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({ 
  label, 
  onSubmit, 
  disabled 
}) => {
  return (
    <Button onClick={onSubmit} disabled={disabled} type="submit">
      {label}
    </Button>
  );
};

export default SubmitBtn; 