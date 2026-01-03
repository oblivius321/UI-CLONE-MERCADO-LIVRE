import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items:center;
  padding: 16px 0;

  > a {
    font-size: 14px;
    text-decoration: none;
    color: var(--color-blue);
    padding: 2.5px 0;

    & + a {
      padding-left: 10px;
      border-left: 1px solid var(--color-border);
      margin-left: 10px;
    }
  }
`;

export const Panel = styled.div`
  background: var(--color-white);
  box-shadow: var(--panel-shadow);

  display: grid;
  grid-template-columns: 65% 35%;

  @media (max-width: 768px) {
    /* switch to a column layout on small screens and allow ordering */
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

export const Column = styled.div`
  &:first-child {
    border-right: 1px solid var(--color-border);
  }

  @media (max-width: 768px) {
    /* When stacked, place the second column (actions) before the gallery */
    &:first-child {
      order: 2;
      border-right: none;
    }
    &:last-child {
      order: 1;
    }
  }
`;

export const Galery = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 24px 32px;
  min-height: 540px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const Thumbs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 84px;
  flex-shrink: 0;
  overflow: auto;

  @media (max-width: 900px) {
    flex-direction: row;
    width: 100%;
    padding: 8px 12px;
    justify-content: flex-start;
    gap: 8px;
    overflow-x: auto;
  }
  @media (max-width: 420px) {
    padding: 6px 8px;
    gap: 6px;
  }
`;

export const ThumbButton = styled.button<{selected?: boolean}>`
  width: 72px;
  height: 72px;
  padding: 0;
  border-radius: 6px;
  overflow: hidden;
  display: inline-block;
  background: var(--color-white);
  cursor: pointer;
  transition: transform .14s ease, box-shadow .14s ease, border-color .14s ease;
  border: ${props => props.selected ? '2px solid var(--color-blue)' : '1px solid var(--color-border)'};
  box-sizing: border-box;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  }

  @media (max-width: 900px) {
    width: 64px;
    height: 64px;
    flex: 0 0 auto;
  }
  @media (max-width: 420px) {
    width: 56px;
    height: 56px;
  }
`;

export const FirstPhoto = styled.button`
  width: 72px;
  height: 72px;
  padding: 0;
  margin-top: 12px;
  border-radius: 6px;
  overflow: hidden;
  display: inline-block;
  background: var(--color-white);
  cursor: pointer;
  border: 1px solid var(--color-border);
  transition: transform .14s ease, box-shadow .14s ease, border-color .14s ease;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 6px 18px rgba(0,0,0,0.12);
    border-color: var(--color-blue);
  }

  @media (max-width: 900px) {
    width: 64px;
    height: 64px;
    flex: 0 0 auto;
  }
  @media (max-width: 420px) {
    width: 56px;
    height: 56px;
  }
`;

export const MainImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 760px;
  background: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  padding: 18px;
  /* Allow the gallery to grow naturally instead of forcing a fixed height */
  max-height: 480px;

  /* CSS vars used to control transform-origin from JS */
  --ox: 50%;
  --oy: 50%;

  > img {
    width: auto;
    height: auto;
    max-height: 440px;
    max-width: 100%;
    object-fit: contain;
    transition: transform .25s ease, box-shadow .25s ease;
    display: block;
    transform-origin: var(--ox) var(--oy);
  }

  &.hovered > img {
    transform: scale(1.18);
    box-shadow: 0 18px 44px rgba(0,0,0,0.24);
  }

  @media (max-width: 768px) {
    max-width: 520px;
    padding: 12px;
  }

  /* Additional mobile tweaks for main image */
  @media (max-width: 420px) {
    max-width: 100%;
    padding: 6px;
    /* Limit the main image height on small devices so it doesn't push content down */
    max-height: 360px;

    > img {
      width: 100%;
      height: auto;
      max-height: 360px;
      object-fit: contain;
    }
  }
`;

/* Section/Description/Options mobile padding adjustments */
export const Section = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 48px 32px;
  display: flex;
  flex-direction: column;

  > h4 { font-size: 18px; margin-bottom: 40px; }
  > div { display: flex; flex-direction: column; }
  > a { margin-top: 20px; font-size: 14px; font-weight: 600; color: var(--color-blue); text-decoration: none; }

  @media (max-width: 900px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Description = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 44px 32px;

  > h2 { font-size: 24px; margin-bottom: 32px; }
  > p { font-size: 20px; color: var(--color-gray); line-height: 27px; }

  @media (max-width: 900px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Options = styled.div`
  padding: 24px 32px;
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 900px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Color = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ColorImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);

  > img { width: 100%; height: 100%; object-fit: cover; }
`;

export const Height = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const HeightOptions = styled.div`
  display: flex;
  gap: 8px;
`;

export const HeightButton = styled.button<{selected?: boolean}>`
  padding: 8px 12px;
  background: ${props => props.selected ? 'var(--color-blue)' : 'var(--color-white)'};
  color: ${props => props.selected ? 'var(--color-white)' : 'var(--color-black)'};
  border: 1px solid ${props => props.selected ? 'var(--color-blue)' : 'var(--color-border)'};
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;

  &:hover { filter: brightness(0.95); }
`;
