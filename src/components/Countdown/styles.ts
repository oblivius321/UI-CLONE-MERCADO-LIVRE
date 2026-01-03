import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: rgba(255,255,255,0.03);
  padding: 12px;
  border-radius: 12px;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Number = styled.h3`
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: var(--color-blue);
  text-align: center;
`;

export const Label = styled.p`
  margin: 4px 0 0 0;
  font-size: 12px;
  color: var(--color-blue);
  opacity: 0.9;
  text-align: center;
`;

export const Sep = styled.h3`
  margin: 0 4px;
  font-size: 22px;
  color: var(--color-gray);
`;
