import styled, { css } from 'styled-components';

export const Task = styled.div<{ isOk: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  svg {
    cursor: pointer;
  }
  p {
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.2rem;
  }
  ${({ theme, isOk }) => css`
    color: ${isOk ? theme.colors.realized : theme.colors.evidence};
  `}
`;

export const Check = styled.input`
  width: 1.5em;
  height: 1.5em;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;

  &&:checked {
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
    `}
  }
`;
