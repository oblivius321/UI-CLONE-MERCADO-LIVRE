import React from "react";

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from "./styles";

type Props = { price?: number };

const ProductAction: React.FC<Props> = ({ price = 99.99 }) => {
  const intPart = Math.floor(price);
  const cents = Math.round((price - intPart) * 100).toString().padStart(2, '0');
  const installment = price / 3;
  const installmentStr = installment.toFixed(2).replace('.', ',');

  return (
    <Container>
      <Condition>Novo | 9 vendidos</Condition>

      <Row>
        <h1>Árvore de natal tradicional Olly Pop Premium Coleção Búzios de 2.1m verde</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className='symbol'>R$</span>
          <span className='fraction'>{intPart}</span>
          <span className='cents'>{cents}</span>
        </PriceRow>

        <InstallmentsInfo>em 3x de R$ {installmentStr}</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className='title'>Frete Grátis</span>
          <span className='details'>Benefício Lorem Ipsum</span>
          <a href='/' className='more'>
            Ver mais opções
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Compra Garantida, receba o produto que está esperando ou devolvemos
            seu dinheiro.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
