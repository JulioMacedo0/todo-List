import styled, { css } from 'styled-components';

export const Container = styled.form`
  display: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  border-radius: 8px;
  padding: 5px;
  outline: none;
  margin-right: 10px;
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
