import React from 'react';
import { Container, Grid, Card, Row, Label, Value, SectionTitle } from './styles';

const Specs: React.FC = () => {
  return (
    <Container>
      <SectionTitle>Características do produto</SectionTitle>

      <Grid>
        <Card>
          <h4>Características principais</h4>
          <div>
            <Row><Label>Marca</Label><Value>Olly Pop</Value></Row>
            <Row><Label>Modelo</Label><Value>Coleção Búzios</Value></Row>
            <Row><Label>Forma</Label><Value>Tradicional</Value></Row>
            <Row><Label>Cor</Label><Value>Verde</Value></Row>
          </div>
        </Card>

        <div>
          <Card>
            <h4>Peso e dimensões</h4>
            <div>
              <Row><Label>Altura x Largura máxima da árvore</Label><Value>2.1 m x 90 cm</Value></Row>
              <Row><Label>Peso</Label><Value>6 kg</Value></Row>
            </div>
          </Card>

          <Card>
            <h4>Outros</h4>
            <div>
              <Row><Label>Quantidade de galhos</Label><Value>650</Value></Row>
              <Row><Label>Tipo de folhagem</Label><Value>Natural</Value></Row>
              <Row><Label>Materiais da árvore</Label><Value>PVC, Ferro, Plástico</Value></Row>
              <Row><Label>Material da base</Label><Value>Ferro</Value></Row>
              <Row><Label>É desmontável</Label><Value>Sim</Value></Row>
              <Row><Label>Largura da base</Label><Value>45 cm</Value></Row>
              <Row><Label>É dobrável</Label><Value>Sim</Value></Row>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default Specs;
