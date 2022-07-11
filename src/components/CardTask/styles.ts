import styled, { css } from 'styled-components';

export const Card = styled.div`
  width: 300px;
  height: 450px;
  position: relative;

  button {
    position: absolute;
    left: 112.5px;
    bottom: -37.5px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    font-size: 0.85rem;
    ${({ theme }) => css`
      color: ${theme.colors.evidence};
    `}

    .date {
      display: flex;
      align-items: center;
      justify-content: center;
      .day {
        font-weight: 700;
        font-size: 2.7rem;
        margin-right: 5px;
      }

      .month {
        font-weight: 700;
        margin-bottom: 0.25rem;
      }
      .year {
        font-weight: 500;
      }
    }
    .week {
      font-size: 1.4rem;
      font-weight: 700;
    }
  }
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`;
export const Container = styled.div`
  padding: 25px;
`;
