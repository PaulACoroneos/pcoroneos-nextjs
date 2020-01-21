import styled from 'styled-components';

export const StyledFooter = styled.footer`

  background: ${props => props.theme.color.quaternary};
  color:#fff;
  flex-shrink: 0;
  width:100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SocialMediaContainer = styled.div`
  display:flex;
  padding: 24px;
  width:250px;
  a,a:visited, a:active {
    color: #fff;
    text-decoration:none
  }
  a:hover {
    color:#6A85B7;
    transition: all 0.3s ease-in-out 0s;
  }
  svg {
    margin: 0px 16px;
  }
`;

