import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderWelcome = styled.span`
  margin-left: 15px;
`;

export const ProfileImageContainer = styled.div`
  width: 40px;
  height: 40px;
  padding: 5px;
`;

export const ProfileImage = styled.span`
  background-size: 32px 32px;
  border-radius: 50%;
  display: block;
  margin: 0;
  overflow: hidden;
  height: 32px;
  width: 32px;

  &::before {
    display: inline-block;
    content: url(${({ photoURL }) => photoURL});
    transform: scale(0.5);
    transform-origin: left 0;
  }

  &:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  }
`;
