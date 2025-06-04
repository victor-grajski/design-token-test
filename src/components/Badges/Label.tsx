import React from 'react';
import styled from 'styled-components';

const LabelTag = styled.div<{ type: 'primary' | 'secondary' | 'danger' | 'success' }>`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
  
  ${props => {
    switch (props.type) {
      case 'primary':
        return `
          background: #007bff;
          color: white;
        `;
      case 'secondary':
        return `
          background: #6c757d;
          color: white;
        `;
      case 'danger':
        return `
          background: #dc3545;
          color: white;
        `;
      case 'success':
        return `
          background: #28a745;
          color: white;
        `;
      default:
        return `
          background: #f8f9fa;
          color: #212529;
        `;
    }
  }}
`;

type LabelProps = {
  text: string;
  type: 'primary' | 'secondary' | 'danger' | 'success';
};

const Label: React.FC<LabelProps> = ({ text, type }) => {
  return (
    <LabelTag type={type}>
      {text}
    </LabelTag>
  );
};

export default Label; 