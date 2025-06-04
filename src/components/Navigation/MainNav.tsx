import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #2c3e50;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${props => props.$isActive ? '#3498db' : '#ecf0f1'};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? '600' : '400'};
  font-size: 16px;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
    background-color: rgba(52, 152, 219, 0.1);
  }
`;

const Logo = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-right: auto;
`;

const MainNav: React.FC = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <NavList>
        <Logo>DesignTest</Logo>
        <NavItem>
          <NavLink to="/" $isActive={location.pathname === '/'}>
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/products" $isActive={location.pathname === '/products'}>
            Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/settings" $isActive={location.pathname === '/settings'}>
            Settings
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile" $isActive={location.pathname === '/profile'}>
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login" $isActive={location.pathname === '/login'}>
            Login
          </NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default MainNav; 