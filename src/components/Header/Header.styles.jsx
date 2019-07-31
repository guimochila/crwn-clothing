import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderWelcome = styled.span`
  margin-left: 15px;

  @media screen and (max-width: 800px) {
    position: absolute;
    top: 8px;
    right: 15px;
    margin-left: 0;
  }
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
