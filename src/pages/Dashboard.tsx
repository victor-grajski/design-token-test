import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/Cards/ProductCard';
import InfoCard from '../components/Cards/InfoCard';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import ActionButton from '../components/Buttons/ActionButton';

const PageContainer = styled.div`
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  color: #2c3e50;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const StatCard = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  border-left: 4px solid #3498db;
`;

const StatNumber = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #2980b9;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  color: #7f8c8d;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CardsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const ActionsSection = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
`;

const RecentActivity = styled.div`
  background: #ffffff;
  padding: 28px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

const ActivityTitle = styled.h3`
  color: #34495e;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ActivityItem = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #ecf0f1;
  color: #95a5a6;
  font-size: 15px;
  
  &:last-child {
    border-bottom: none;
  }
`;

const Dashboard: React.FC = () => {
  return (
    <PageContainer>
      <PageTitle>Dashboard</PageTitle>
      
      <StatsGrid>
        <StatCard>
          <StatNumber>1,247</StatNumber>
          <StatLabel>Total Users</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>$52,890</StatNumber>
          <StatLabel>Revenue</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>89</StatNumber>
          <StatLabel>Orders</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>12</StatNumber>
          <StatLabel>Products</StatLabel>
        </StatCard>
      </StatsGrid>

      <ActionsSection>
        <PrimaryButton onClick={() => console.log('Primary clicked')}>
          Create Report
        </PrimaryButton>
        <ActionButton 
          text="View Analytics" 
          handleClick={() => console.log('Action clicked')}
        />
      </ActionsSection>

      <CardsSection>
        <ProductCard
          title="Premium Widget"
          description="Our best-selling widget with advanced features and premium support."
          price="99.99"
          onAddToCart={() => console.log('Added to cart')}
        />
        <InfoCard
          heading="Welcome to Dashboard"
          text="This is your central hub for managing all aspects of your business. From here you can view analytics, manage products, and track your growth."
          buttonText="Get Started"
          onButtonClick={() => console.log('Get started clicked')}
        />
      </CardsSection>

      <RecentActivity>
        <ActivityTitle>Recent Activity</ActivityTitle>
        <ActivityItem>User john@example.com created a new account</ActivityItem>
        <ActivityItem>Order #1234 was completed successfully</ActivityItem>
        <ActivityItem>New product "Super Widget" was added to catalog</ActivityItem>
        <ActivityItem>Payment of $299.99 was processed</ActivityItem>
      </RecentActivity>
    </PageContainer>
  );
};

export default Dashboard; 