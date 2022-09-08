import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  transition: transform 0.5s ease-in-out 0.5s, opacity 0.5s ease-in-out 0.5s;
`;
export const Heading = styled.div`
  margin-top: 16vh;
  text-align: center;
  > h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.6px;
    color: rgb(23, 26, 32);
  }

  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgb(23, 26, 32);
    padding-top: 14px;
    outline-offset: 2px;
  }
`;

export const Buttons = styled.div`
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  > button {
    min-width: 342px;
    background: #1a1720;
    color: #fff;
    opacity: 0.8;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    padding: 13px 40px;
    border-radius: 8px;
    border: none;
    outline: 0;
    width: 100%;

    &.white {
      background: #fff;
      color: #1a1720;
      opacity: 0.65;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    margin-bottom: 8rem;
  }
`;
