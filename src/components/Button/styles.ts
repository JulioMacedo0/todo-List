import styled, { css } from 'styled-components';

export const Button = styled.button`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  outline: none;
  border: none;
  ${({ theme }) => css`
    background: ${theme.colors.primary};
  `}
`;
