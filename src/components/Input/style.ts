import styled, { css } from 'styled-components';
interface formProps {
  isVisible: boolean;
}
export const Container = styled.div<formProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: visibility 0s, opacity 0.5s linear;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 5px;
  outline: none;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.primary};
  `}
`;

export const Button = styled.button`
  padding: 5px;
  border: none;
  border-radius: 8px;
  ${({ theme }) => css`
    background: ${theme.colors.primary};
  `}
`;
