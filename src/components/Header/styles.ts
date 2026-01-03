import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);
  box-sizing: border-box;
  margin: 0;
`;

export const Img = styled.img`
  width: 170px;
  display: block;
`;

export const Nav = styled.nav`
  display: none;
`;

/* Header content layout */
export const HeaderContent = styled.div``;

/* Use a wrapper to layout logo, search and promo */
export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 15px 26px;
  flex-wrap: nowrap;

  @media (max-width: 900px) {
    gap: 12px;
    padding: 10px 12px;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  @media (max-width: 420px) {
    gap: 8px;
    padding: 8px 10px;
  }
`;

export const Timer = styled.div`
  background: rgba(0,0,0,0.8);
  color: #fff;
  padding: 20px 60px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 18px;
  min-width: 110px;
  text-align: center;
  flex-shrink: 0;

  @media (max-width: 900px) {
    padding: 8px 12px;
    font-size: 14px;
    min-width: unset;
  }

  @media (max-width: 420px) {
    display: none; /* hide timer on very small screens to save space */
  }
`;

/* Search area centered */
export const SearchArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const SearchForm = styled.form`
  width: 720px;
  max-width: 60%;
  display: flex;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 420px) {
    max-width: calc(100% - 40px); /* leave room for logo and small actions */
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 12px 16px;
  font-size: 14px;
  outline: none;
`;

export const SearchBtn = styled.button`
  background: #ffe000;
  border: none;
  padding: 0 18px;
  cursor: pointer;
`;

export const Promo = styled.div`
  width: 320px;
  flex-shrink: 0;

  > img { width: 100%; height: auto; display: block; border-radius: 6px; }

  @media (max-width: 900px) {
    display: none;
  }

  @media (max-width: 420px) {
    display: none;
  }
`;
