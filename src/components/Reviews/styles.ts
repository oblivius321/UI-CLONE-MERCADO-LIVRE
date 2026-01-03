import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 32px;
  padding: 32px;
  border-top: 1px solid var(--color-border);
`;

export const Summary = styled.div`
  color: var(--color-white);
  > h3 { font-size: 18px; margin-bottom: 18px; color: var(--color-white); }
  .big-score { font-size: 40px; color: var(--color-blue); font-weight: 700; }
  .stars { margin-top: 8px; }
`;

export const Histogram = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  .bar-row { display:flex; align-items:center; gap:8px; }
  .label { width:24px; text-align:right; color:var(--color-gray); }
  .bar { height:8px; background:var(--color-border); border-radius:4px; flex:1; overflow:hidden; }
  .bar > i { display:block; height:100%; background:var(--color-blue); }
`;

export const FeatureRatings = styled.div`
  margin-top: 18px;
  color: var(--color-gray);
  > p { margin: 6px 0; }
`;

export const Right = styled.div`
  color: var(--color-white);
`;

export const PhotoRow = styled.div`
  display:flex; gap:12px; align-items:center; margin-bottom:14px;
  img { width:96px; height:96px; object-fit:cover; border-radius:6px; }
`;

export const Controls = styled.div`
  display:flex; gap:8px; margin-bottom:18px; align-items:center;
  button { background:var(--color-background); color:var(--color-white); border:1px solid var(--color-border); padding:8px 12px; border-radius:20px; cursor:pointer }
`;

export const Highlight = styled.div`
  background: var(--color-background);
  padding: 18px;
  border-radius:8px;
  margin-bottom: 18px;
  color: var(--color-gray);
`;

export const List = styled.div`
  display:flex; flex-direction:column; gap:28px; margin-top: 8px;
`;

export const ReviewItem = styled.div`
  display:flex; gap:12px; align-items:flex-start; color:var(--color-white);
  .thumb { width:76px; height:76px; border-radius:6px; overflow:hidden; flex-shrink:0; }
  .content { flex:1; }
  .meta { color:var(--color-gray); font-size:12px; }
`;

export const Stars = styled.div`
  color: var(--color-blue);
  font-weight:700;
`;
