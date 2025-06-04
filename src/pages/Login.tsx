import React, { useState } from 'react';
import styled from 'styled-components';
import FormField from '../components/Inputs/FormField';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import ActionButton from '../components/Buttons/ActionButton';

const LoginContainer = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
  padding: 20px;
`;

const LoginCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 48px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 440px;
  position: relative;
`;

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const WelcomeText = styled.h1`
  color: #2d3748;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const SubText = styled.p`
  color: #718096;
  font-size: 16px;
  margin: 0;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RememberSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0 24px 0;
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: #4a5568;
`;

const Checkbox = styled.input`
  margin-right: 8px;
  width: 16px;
  height: 16px;
`;

const ForgotLink = styled.a`
  color: #3182ce;
  font-size: 14px;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e2e8f0;
  }
  
  span {
    padding: 0 16px;
    color: #a0aec0;
    font-size: 14px;
  }
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  color: #4a5568;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #cbd5e0;
    background: #f7fafc;
  }
`;

const SignupPrompt = styled.div`
  text-align: center;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e2e8f0;
  color: #718096;
  font-size: 14px;
`;

const SignupLink = styled.a`
  color: #3182ce;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  background: #fed7d7;
  border: 1px solid #feb2b2;
  color: #c53030;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    // Mock login logic
    console.log('Login attempt:', { email, password, rememberMe });
    setError('');
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginHeader>
          <WelcomeText>Welcome Back!</WelcomeText>
          <SubText>Sign in to your account to continue</SubText>
        </LoginHeader>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <LoginForm onSubmit={handleSubmit}>
          <FormField
            labelText="Email Address"
            placeholderText="Enter your email"
            inputValue={email}
            onInputChange={setEmail}
            inputType="email"
          />
          
          <FormField
            labelText="Password"
            placeholderText="Enter your password"
            inputValue={password}
            onInputChange={setPassword}
            inputType="password"
          />

          <RememberSection>
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </CheckboxContainer>
            <ForgotLink href="#" onClick={(e) => e.preventDefault()}>
              Forgot password?
            </ForgotLink>
          </RememberSection>

          <ButtonGroup>
            <PrimaryButton type="submit">
              Sign In
            </PrimaryButton>
          </ButtonGroup>
        </LoginForm>

        <Divider>
          <span>or continue with</span>
        </Divider>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <SocialButton onClick={() => console.log('Google login')}>
            🔍 Continue with Google
          </SocialButton>
          <SocialButton onClick={() => console.log('GitHub login')}>
            📱 Continue with GitHub
          </SocialButton>
        </div>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <ActionButton
            text="Demo Login"
            handleClick={() => {
              setEmail('demo@example.com');
              setPassword('password123');
            }}
          />
        </div>

        <SignupPrompt>
          Don't have an account?{' '}
          <SignupLink href="#" onClick={(e) => e.preventDefault()}>
            Sign up here
          </SignupLink>
        </SignupPrompt>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login; 