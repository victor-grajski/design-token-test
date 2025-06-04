import React from 'react';
import styled from 'styled-components';

const FieldWrapper = styled.div`
  margin-bottom: 24px;
`;

const FieldLabel = styled.label`
  display: block;
  color: #34495e;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 14px 12px;
  border: 1px solid #d5dbdb;
  border-radius: 4px;
  font-size: 15px;
  color: #2c3e50;
  background: #fafbfc;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
  
  &:focus {
    outline: none;
    border-color: #27ae60;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(39, 174, 96, 0.1);
  }
  
  &::placeholder {
    color: #a0a0a0;
    font-style: italic;
  }
`;

const ValidationError = styled.div`
  color: #c0392b;
  font-size: 13px;
  margin-top: 6px;
  font-weight: 500;
`;

type FormFieldProps = {
  labelText: string;
  placeholderText?: string;
  inputValue: string;
  onInputChange: (val: string) => void;
  validationError?: string;
  inputType?: string;
};

const FormField: React.FC<FormFieldProps> = ({ 
  labelText, 
  placeholderText, 
  inputValue, 
  onInputChange, 
  validationError,
  inputType = 'text'
}) => {
  return (
    <FieldWrapper>
      <FieldLabel>{labelText}</FieldLabel>
      <InputField
        type={inputType}
        placeholder={placeholderText}
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
      />
      {validationError && <ValidationError>{validationError}</ValidationError>}
    </FieldWrapper>
  );
};

export default FormField; 