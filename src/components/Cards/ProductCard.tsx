import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e8ed;
  margin-bottom: 16px;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const ProductTitle = styled.h3`
  color: #2c3e50;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.3;
`;

const ProductDescription = styled.p`
  color: #7f8c8d;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 16px;
`;

const ProductPrice = styled.div`
  color: #27ae60;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ActionButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #2980b9;
  }
`;

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  price, 
  onAddToCart 
}) => {
  return (
    <CardContainer>
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>${price}</ProductPrice>
      <ActionButton onClick={onAddToCart}>
        Add to Cart
      </ActionButton>
    </CardContainer>
  );
};

export default ProductCard; 