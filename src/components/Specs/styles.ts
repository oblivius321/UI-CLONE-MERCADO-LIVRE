import styled from 'styled-components';

export const Container = styled.section`
  margin: 24px 0 48px;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 12px;
  color: #333;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #e6e6e6;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.02);

  h4 {
    margin: 0 0 8px;
    font-size: 14px;
    color: #333;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-top: 1px solid #f2f2f2;
  &:first-of-type { border-top: none; }
`;

export const Label = styled.span`
  color: #666;
  font-size: 13px;
`;

export const Value = styled.span`
  color: #222;
  font-size: 13px;
  font-weight: 600;
`;
