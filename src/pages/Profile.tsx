import React from 'react';
import styled from 'styled-components';
import InfoCard from '../components/Cards/InfoCard';
import SubmitBtn from '../components/Buttons/SubmitBtn';

const ProfileWrapper = styled.div`
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: calc(100vh - 70px);
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #ee5a24);
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: white;
  font-weight: bold;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const UserName = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const UserTitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  margin-bottom: 0;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatsSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const StatsTitle = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const StatLabel = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
`;

const StatValue = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

const ActivitySection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const ActivityTitle = styled.h3`
  color: #2c3e50;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #007bff;
`;

const ActivityIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: white;
  font-weight: bold;
`;

const ActivityText = styled.div`
  flex: 1;
`;

const ActivityDescription = styled.p`
  color: #2c3e50;
  font-size: 14px;
  margin: 0 0 4px 0;
  font-weight: 500;
`;

const ActivityTime = styled.span`
  color: #6c757d;
  font-size: 12px;
`;

const ActionsRow = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 32px;
`;

const EditButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`;

const Profile: React.FC = () => {
  return (
    <ProfileWrapper>
      <ProfileHeader>
        <Avatar>JS</Avatar>
        <UserName>John Smith</UserName>
        <UserTitle>Senior Product Manager</UserTitle>
      </ProfileHeader>

      <ContentGrid>
        <StatsSection>
          <StatsTitle>Profile Stats</StatsTitle>
          <StatItem>
            <StatLabel>Projects Completed</StatLabel>
            <StatValue>24</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Team Members</StatLabel>
            <StatValue>8</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Success Rate</StatLabel>
            <StatValue>94%</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Years Experience</StatLabel>
            <StatValue>6</StatValue>
          </StatItem>
        </StatsSection>

        <ActivitySection>
          <ActivityTitle>Recent Activity</ActivityTitle>
          <ActivityList>
            <ActivityItem>
              <ActivityIcon>P</ActivityIcon>
              <ActivityText>
                <ActivityDescription>Completed Project Alpha</ActivityDescription>
                <ActivityTime>2 hours ago</ActivityTime>
              </ActivityText>
            </ActivityItem>
            <ActivityItem>
              <ActivityIcon>M</ActivityIcon>
              <ActivityText>
                <ActivityDescription>Attended team meeting</ActivityDescription>
                <ActivityTime>1 day ago</ActivityTime>
              </ActivityText>
            </ActivityItem>
            <ActivityItem>
              <ActivityIcon>R</ActivityIcon>
              <ActivityText>
                <ActivityDescription>Submitted quarterly report</ActivityDescription>
                <ActivityTime>3 days ago</ActivityTime>
              </ActivityText>
            </ActivityItem>
          </ActivityList>
        </ActivitySection>
      </ContentGrid>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
        <InfoCard
          heading="About Me"
          text="Passionate product manager with 6+ years of experience leading cross-functional teams to deliver innovative solutions. Specialized in agile methodologies and user-centered design."
          buttonText="View Resume"
          onButtonClick={() => console.log('Resume viewed')}
        />
        <InfoCard
          heading="Skills & Expertise"
          text="Product Strategy • Agile/Scrum • User Research • Data Analysis • Team Leadership • Stakeholder Management • UI/UX Design • Market Research"
          buttonText="Endorse Skills"
          onButtonClick={() => console.log('Skills endorsed')}
        />
      </div>

      <ActionsRow>
        <EditButton>Edit Profile</EditButton>
        <SubmitBtn 
          label="Download CV" 
          onSubmit={() => console.log('CV downloaded')}
        />
      </ActionsRow>
    </ProfileWrapper>
  );
};

export default Profile; 