import React, { useState } from 'react';
import styled from 'styled-components';
import FormField from '../components/Inputs/FormField';
import TextInput from '../components/Inputs/TextInput';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import ActionButton from '../components/Buttons/ActionButton';

const SettingsContainer = styled.div`
  padding: 20px 30px;
  max-width: 900px;
  margin: 0 auto;
  background: #f7f8fc;
  min-height: calc(100vh - 80px);
`;

const PageHeader = styled.h1`
  color: #1e2d3d;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const PageSubtitle = styled.p`
  color: #6c7b8a;
  font-size: 16px;
  margin-bottom: 32px;
  line-height: 1.5;
`;

const SettingsGrid = styled.div`
  display: grid;
  gap: 32px;
`;

const SettingSection = styled.div`
  background: #ffffff;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e8eaed;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 6px;
`;

const SectionDescription = styled.p`
  color: #798186;
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 1.4;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid #f0f1f3;
`;

const CancelButton = styled.button`
  background: transparent;
  color: #6c757d;
  border: 2px solid #dee2e6;
  padding: 11px 20px;
  border-radius: 7px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background: #f8f9fa;
    border-color: #adb5bd;
  }
`;

const DangerSection = styled(SettingSection)`
  border-left: 4px solid #dc3545;
`;

const DangerButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    background-color: #c82333;
  }
`;

const Settings: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SettingsContainer>
      <PageHeader>Account Settings</PageHeader>
      <PageSubtitle>
        Manage your account preferences and security settings. Changes will be saved automatically.
      </PageSubtitle>

      <SettingsGrid>
        <SettingSection>
          <SectionTitle>Personal Information</SectionTitle>
          <SectionDescription>
            Update your personal details and contact information.
          </SectionDescription>
          
          <FormRow>
            <FormField
              labelText="First Name"
              placeholderText="Enter your first name"
              inputValue={firstName}
              onInputChange={setFirstName}
            />
            <FormField
              labelText="Last Name"
              placeholderText="Enter your last name"
              inputValue={lastName}
              onInputChange={setLastName}
            />
          </FormRow>
          
          <FormGroup>
            <TextInput
              label="Email Address"
              placeholder="your.email@company.com"
              value={email}
              onChange={setEmail}
              type="email"
            />
          </FormGroup>
          
          <FormGroup>
            <TextInput
              label="Company"
              placeholder="Your company name"
              value={company}
              onChange={setCompany}
            />
          </FormGroup>

          <ButtonGroup>
            <CancelButton>Cancel</CancelButton>
            <PrimaryButton onClick={() => console.log('Profile saved')}>
              Save Changes
            </PrimaryButton>
          </ButtonGroup>
        </SettingSection>

        <SettingSection>
          <SectionTitle>Security Settings</SectionTitle>
          <SectionDescription>
            Keep your account secure by updating your password regularly.
          </SectionDescription>
          
          <FormGroup>
            <FormField
              labelText="Current Password"
              placeholderText="Enter current password"
              inputValue={currentPassword}
              onInputChange={setCurrentPassword}
              inputType="password"
            />
          </FormGroup>
          
          <FormRow>
            <TextInput
              label="New Password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={setNewPassword}
              type="password"
            />
            <TextInput
              label="Confirm Password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              type="password"
            />
          </FormRow>

          <ButtonGroup>
            <ActionButton 
              text="Generate Password" 
              handleClick={() => console.log('Password generated')}
            />
            <PrimaryButton onClick={() => console.log('Password updated')}>
              Update Password
            </PrimaryButton>
          </ButtonGroup>
        </SettingSection>

        <DangerSection>
          <SectionTitle>Danger Zone</SectionTitle>
          <SectionDescription>
            These actions cannot be undone. Please proceed with caution.
          </SectionDescription>
          
          <ButtonGroup>
            <DangerButton onClick={() => console.log('Account deleted')}>
              Delete Account
            </DangerButton>
          </ButtonGroup>
        </DangerSection>
      </SettingsGrid>
    </SettingsContainer>
  );
};

export default Settings; 