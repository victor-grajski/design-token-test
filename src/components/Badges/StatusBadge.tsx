import React from 'react';
import styled from 'styled-components';

const Badge = styled.span<{ variant: 'success' | 'warning' | 'error' | 'info' }>`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${props => {
    switch (props.variant) {
      case 'success':
        return `
          background-color: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        `;
      case 'warning':
        return `
          background-color: #fff3cd;
          color: #856404;
          border: 1px solid #ffeaa7;
        `;
      case 'error':
        return `
          background-color: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        `;
      case 'info':
        return `
          background-color: #d1ecf1;
          color: #0c5460;
          border: 1px solid #bee5eb;
        `;
      default:
        return `
          background-color: #e9ecef;
          color: #495057;
          border: 1px solid #ced4da;
        `;
    }
  }}
`;

interface StatusBadgeProps {
  children: React.ReactNode;
  variant: 'success' | 'warning' | 'error' | 'info';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ children, variant }) => {
  return (
    <Badge variant={variant}>
      {children}
    </Badge>
  );
};

export default StatusBadge; 