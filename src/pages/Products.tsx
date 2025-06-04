import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/Cards/ProductCard';
import SubmitBtn from '../components/Buttons/SubmitBtn';
import TextInput from '../components/Inputs/TextInput';

const Container = styled.div`
  padding: 24px 40px;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #fafbfc;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e8ebed;
`;

const Title = styled.h1`
  color: #1a252f;
  font-size: 36px;
  font-weight: 800;
  margin: 0;
`;

const AddProductBtn = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 16px 32px;
  font-size: 15px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
  }
`;

const FilterSection = styled.div`
  background: white;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 28px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f3f4;
`;

const FilterTitle = styled.h3`
  color: #2d3748;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const FilterRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: end;
  flex-wrap: wrap;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 28px;
  margin-bottom: 40px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #8b9dc3;
  font-size: 18px;
`;

const LoadMoreSection = styled.div`
  text-align: center;
  margin-top: 32px;
`;

const LoadMoreButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  min-width: 140px;
  
  &:hover {
    background-color: #ff5252;
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  }
  
  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const products = [
    {
      id: 1,
      title: 'Ultra Pro Widget',
      description: 'The most advanced widget in our catalog with premium materials and extended warranty coverage.',
      price: '149.99'
    },
    {
      id: 2,
      title: 'Standard Widget',
      description: 'A reliable widget for everyday use. Great value for money.',
      price: '49.99'
    },
    {
      id: 3,
      title: 'Compact Widget',
      description: 'Perfect for small spaces. All the functionality in a smaller package.',
      price: '79.99'
    },
    {
      id: 4,
      title: 'Deluxe Widget Set',
      description: 'Complete widget solution with accessories. Everything you need to get started.',
      price: '199.99'
    },
    {
      id: 5,
      title: 'Eco-Friendly Widget',
      description: 'Made from sustainable materials. Same great performance with environmental consciousness.',
      price: '89.99'
    },
    {
      id: 6,
      title: 'Professional Widget',
      description: 'Designed for professionals who demand the best. Commercial grade quality.',
      price: '299.99'
    }
  ];

  return (
    <Container>
      <Header>
        <Title>Product Catalog</Title>
        <AddProductBtn>+ Add New Product</AddProductBtn>
      </Header>

      <FilterSection>
        <FilterTitle>Filter Products</FilterTitle>
        <FilterRow>
          <div style={{ minWidth: '250px' }}>
            <TextInput
              label="Search Products"
              placeholder="Enter product name..."
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </div>
          <div style={{ minWidth: '200px' }}>
            <TextInput
              label="Category"
              placeholder="Select category..."
              value={categoryFilter}
              onChange={setCategoryFilter}
            />
          </div>
          <SubmitBtn 
            label="Apply Filters" 
            onSubmit={() => console.log('Filters applied')}
          />
        </FilterRow>
      </FilterSection>

      <ProductsGrid>
        {products.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            onAddToCart={() => console.log(`Added ${product.title} to cart`)}
          />
        ))}
      </ProductsGrid>

      <LoadMoreSection>
        <LoadMoreButton>
          Load More Products
        </LoadMoreButton>
      </LoadMoreSection>
    </Container>
  );
};

export default Products; 