import React from "react";

import { Container, FooterEstilo } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterEstilo>
        <div className='footer-content'>
          <ul>
            <li>
              <a href='/'>Trabalhe conosco</a>
            </li>
            <li>
              <a href='/'> Termos e condições</a>
            </li>
            <li>
              <a href='/'>Como cuidamos da sua privacidade</a>
            </li>
            <li>
              <a href='/'>Contato</a>
            </li>
          </ul>
          <p>
          Copyright © 1999-2077 medaumempregoaaa.com LTDA. <br/>
          CNPJ n.º 40.0289.222/451-77 / Av. dos commits unidos, nº 3.003, Bonfim, github/DEV - CEP 52525-52 - 
          empresa do grupo DevOps LTDA.
          </p>
        </div>
      </FooterEstilo>
    </Container>
  );
};

export default Footer;