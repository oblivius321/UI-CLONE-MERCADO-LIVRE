import React, { useState } from 'react';

import productImage from '../../assets/arvre.jpeg'
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';
import Reviews from '../Reviews';
import Countdown from '../Countdown';

import { Container, Row, Panel, Column, Galery, Section, Description, Options, Color, ColorImage, Height, HeightOptions, HeightButton, Thumbs, ThumbButton, MainImage, FirstPhoto } from './styles2';
import Specs from '../Specs';

const Product: React.FC = () => {
  // Try to load all images from `src/assets/product/` folder. If you want
  // to use your own images, put them in that folder (e.g. `src/assets/product/1.jpg`).
  let images: string[] = [];
  try {
    // Webpack require.context (works in CRA / react-scripts setups)
    // load images from the `src/assets` folder (not just `assets/product`) so
    // images you placed directly into `src/assets/` (e.g. arvre2.jpeg) are found.
    const req = (require as any).context('../../assets', false, /\.(png|jpe?g|webp)$/);
    // Only include product images (files starting with "arvre") to avoid
    // including logos or unrelated assets in the thumbnail list.
    const keys = req.keys().filter((k: string) => /arvre/i.test(k));
    images = keys.map((k: string) => {
      const m = req(k);
      return m && m.default ? m.default : m;
    });
    // Deduplicate and keep order
    images = Array.from(new Set(images));
    // Remove imagens específicas da galeria (não apagar dos assets)
    const blacklist = ['arvre10', 'arvre6', 'arvre9'];
    images = images.filter(img => {
      const s = String(img).toLowerCase();
      return !blacklist.some(b => s.includes(b));
    });
  } catch (err) {
    // fallback to the single productImage already in assets
    images = [productImage];
  }

  // DEBUG: print loaded images to console so you can confirm how many images are available
  // Open browser devtools and look for "product images:" when this component mounts.
  // If there's only one image, hover won't visibly change the main image because
  // hoverIndex and selectedIndex will point to the same image.
  // Remove this log after verifying.
  // images are loaded from `src/assets` via require.context above

  // `selectedIndex` is the currently selected image (persisted).
  // `hoverIndex` is a temporary index while hovering thumbnails/previews.
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mainImage = images[hoverIndex ?? selectedIndex] || productImage;

  const handleMainImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    // set CSS variables used by styled-component for transform-origin
    try {
      el.style.setProperty('--ox', `${x}%`);
      el.style.setProperty('--oy', `${y}%`);
    } catch (err) {
      // ignore if setting custom properties fails in older browsers
    }
  };

  // lift height state up so ProductAction can receive price updates
  const [height, setHeight] = useState('2.1 m');

  // map heights to prices
  const priceMap: Record<string, number> = {
    '1.8 m': 89.99,
    '2.1 m': 99.99,
    '2.4 m': 109.0,
  };

  const price = priceMap[height] ?? 99.99;

  // track small screen so we can render the purchase panel above the gallery on mobile
  const [isMobile, setIsMobile] = useState<boolean>(() => typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  

  return (
    <Container>
      <Row>
        <Countdown targetDate={Date.now() + 10 * 60 * 1000} />
      </Row>

      {/* On mobile we render the purchase panel first so the offer is visible when the page opens */}
      {isMobile && <ProductAction price={price} />}

      <Panel>
        <Column>

          <Galery>
            <Thumbs>
              {images.map((img, idx) => (
                  <ThumbButton
                    key={idx}
                    selected={idx === selectedIndex}
                    onMouseEnter={() => { setHoverIndex(idx); setIsHovered(true); }}
                    onMouseLeave={() => { setHoverIndex(null); setIsHovered(false); }}
                    onClick={() => setSelectedIndex(idx)}
                  >
                    <img alt={`thumb-${idx}`} src={img} />
                  </ThumbButton>
                ))}
              {/* First photo preview under thumbnails - hover to switch main image */}
              <FirstPhoto
                onMouseEnter={() => { setHoverIndex(0); setIsHovered(true); }}
                onMouseLeave={() => { setHoverIndex(null); setIsHovered(false); }}
                onClick={() => setSelectedIndex(0)}
              >
                <img alt="first-photo" src={images[0]} />
              </FirstPhoto>
            </Thumbs>

            <MainImage
              className={isHovered ? 'hovered' : ''}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMainImageMouseMove}
            >
              <img alt="Produto" src={mainImage} />
            </MainImage>
          </Galery>

          <ProductOptions height={height} setHeight={setHeight} />
          
          <Reviews />
          <Specs />
        </Column>

        <Column>
          {!isMobile && <ProductAction price={price} />}
          <Info />
          <SellerInfo />

          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que você está esperando ou devolvemos o seu dinheiro </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia </p>
      </span>
    </div>

    <a href="/">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Árvore de natal tradicional Olly Pop Premium Coleção Búzios de 2.1m verde

      O que você precisa saber sobre este produto
Linha Premium para uma decoração sofisticada.
650 galhos para uma montagem rica e cheia de detalhes.
Folhagem natural que imita pinheiro.
Dimensões: largura máxima de 90 cm e base de 45 cm.
Estrutura de ferro na base para estabilidade.
É desmontável e dobrável para fácil armazenamento.

    </p>
  </Description>
)

export default Product;

type ProductOptionsProps = {
  height: string;
  setHeight: (h: string) => void;
};

const ProductOptions: React.FC<ProductOptionsProps> = ({ height, setHeight }) => {
  const heights = ['1.8 m', '2.1 m', '2.4 m'];

  return (
    <Options>
      <Color>
        <div>
          <small>Cor:</small>
          <span style={{ display: 'block', fontWeight: 600 }}>Verde</span>
        </div>

        <ColorImage>
          <img alt="cor" src={productImage} />
        </ColorImage>
      </Color>

      <Height>
        <p>Altura: <strong>{height}</strong></p>
        <HeightOptions>
          {heights.map(h => (
            <HeightButton
              key={h}
              selected={h === height}
              onClick={() => setHeight(h)}
            >
              {h}
            </HeightButton>
          ))}
        </HeightOptions>
      </Height>
    </Options>
  )
}
