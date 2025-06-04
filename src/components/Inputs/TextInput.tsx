import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #2c3e50;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #bdc3c7;
  border-radius: 8px;
  font-size: 16px;
  color: #2c3e50;
  background-color: #fff;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3498db;
  }
  
  &::placeholder {
    color: #95a5a6;
  }
`;

const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;

interface TextInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  error,
  type = 'text'
}) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default TextInput; 