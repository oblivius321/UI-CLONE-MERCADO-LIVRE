import React from 'react';
import { Container, Summary, Histogram, FeatureRatings, Right, PhotoRow, Controls, Highlight, List, ReviewItem, Stars } from './styles';
import img1 from '../../assets/arvre6.jpeg';
import img2 from '../../assets/arvre9.jpeg';
import img3 from '../../assets/arvre10.jpeg';

const Reviews: React.FC = () => {
  return (
    <Container>
      <Summary>
        <h3>Opiniões do produto</h3>
        <div className="big-score">4.5</div>
        <div className="stars">★★★★★ <small style={{color:'var(--color-gray)', fontWeight:600}}>1.830 avaliações</small></div>

        <Histogram>
          {[5,4,3,2,1].map((n, i) => (
            <div key={n} className="bar-row">
              <div className="label">{n}</div>
              <div className="bar"><i style={{width: `${(5 - i) * 14}%`}}/></div>
            </div>
          ))}
        </Histogram>

        <FeatureRatings>
          <p>Qualidade dos materiais <Stars>★★★★☆</Stars></p>
          <p>Custo-benefício <Stars>★★★★☆</Stars></p>
          <p>Fácil para montar <Stars>★★★★☆</Stars></p>
        </FeatureRatings>
      </Summary>

      <Right>
        <h4 style={{marginTop:0}}>Opiniões com fotos</h4>
        <PhotoRow>
          <img src={img1} alt="p1" />
          <img src={img2} alt="p2" />
          <img src={img3} alt="p3" />
        </PhotoRow>

        <Controls>
          <button>Ordenar</button>
          <button>Qualificação</button>
        </Controls>

        <Highlight>
          <strong>Opiniões em destaque</strong>
          <p>A árvore de Natal é elogiada por sua beleza, qualidade e facilidade de montagem.</p>
        </Highlight>

        <List>
          <ReviewItem>
            <div className="thumb"><img src={img1} alt="r1" style={{width:'100%', height:'100%', objectFit:'cover'}}/></div>
            <div className="content">
              <Stars>★★★★★</Stars>
              <div className="meta">03 dez. 2023</div>
              <p>Ótima árvore, ficou bem cheia.</p>
            </div>
          </ReviewItem>

          <ReviewItem>
            <div className="thumb"><img src={img2} alt="r2" style={{width:'100%', height:'100%', objectFit:'cover'}}/></div>
            <div className="content">
              <Stars>★★★★★</Stars>
              <div className="meta">27 nov. 2024</div>
              <p>Linda, grande e bem cheia. Recomendo.</p>
            </div>
          </ReviewItem>
        </List>
      </Right>
    </Container>
  );
};

export default Reviews;
