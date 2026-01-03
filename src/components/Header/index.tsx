import React from "react";

import logo from "../../assets/logo-mercado-livre.png";
import promo from "../../assets/malu.jpeg";

import { Container, Img, Nav, HeaderInner, SearchArea, SearchForm, SearchInput, SearchBtn, Promo } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <div className='header-content'>
          <HeaderInner>
            
            <div className='logo'>
            <a href='/'>
              <Img alt='logo-mercado-livre' title='Logo Do Mercado Livre' src={logo} />
            </a>
            </div>

            <SearchArea>
              <SearchForm onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
                <SearchInput placeholder='Buscar produtos, marcas e muito mais...' />
                <SearchBtn type='submit'>🔍</SearchBtn>
              </SearchForm>
            </SearchArea>

            <Promo>
              <img alt='promo' src={promo} />
            </Promo>
          </HeaderInner>
        </div>
      </header>
    </Container>
  );
};

function formatTime(sec: number) {
  const s = Math.max(0, sec);
  const m = Math.floor(s / 60).toString().padStart(2, '0');
  const secs = (s % 60).toString().padStart(2, '0');
  return `${m}:${secs}`;
}

export default Header;
