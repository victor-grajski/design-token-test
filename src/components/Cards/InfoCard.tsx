import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 2px solid #ecf0f1;
  margin: 12px 0;
`;

const Title = styled.h2`
  color: #34495e;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Content = styled.div`
  color: #95a5a6;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 18px;
`;

const Button = styled.button`
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-transform: capitalize;
  
  &:hover {
    background: linear-gradient(45deg, #8e44ad, #732d91);
    transform: scale(1.02);
  }
`;

type InfoCardProps = {
  heading: string;
  text: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const InfoCard: React.FC<InfoCardProps> = ({ 
  heading, 
  text, 
  buttonText,
  onButtonClick 
}) => {
  return (
    <Card>
      <Title>{heading}</Title>
      <Content>{text}</Content>
      {buttonText && (
        <Button onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </Card>
  );
};

export default InfoCard; 