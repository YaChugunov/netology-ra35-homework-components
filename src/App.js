import React from 'react';
import '../css/main.css';

// import ShopItemFunc from './ShopItemFunc';
import React from 'react';

// Название бренда
function ItemBrand(props) {
  const { itemBrand } = props;
  return <h2>{itemBrand}</h2>;
}
// Название товара
function ItemTitle(props) {
  const { itemTitle } = props;
  return <h1>{itemTitle}</h1>;
}
// Краткое описание товара
function ItemDesc(props) {
  const { itemDesc } = props;
  return <h3>{itemDesc}</h3>;
}
// Полное описание товара
function ItemDescfull(props) {
  const { itemDescfull } = props;
  return <div className="description">{itemDescfull}</div>;
}
// Компонент : фото товара
function ItemImage(props) {
  const { itemImage } = props;
  return (
    <div className="highlight-window mobile">
      <div className="highlight-overlay"></div>
    </div>
  );
}
// Компонент : цена и кнопка Купить
function ItemBuyAction(props) {
  const { itemBuy } = props;
  return (
    <div className="purchase-info">
      <div className="price">
        {itemBuy.currency}
        {itemBuy.price.toFixed(2)}
      </div>
      <button>{itemBuy.button}</button>
    </div>
  );
}

// Основной компонент
function ShopItemFunc(props) {
  const { shopItem } = props;
  return (
    <div className="main-content">
      <ItemBrand itemBrand={shopItem.brand} />
      <ItemTitle itemTitle={shopItem.title} />
      <ItemDesc itemDesc={shopItem.description} />
      <ItemDescfull itemDescfull={shopItem.descriptionFull} />
      <ItemImage />
      <div className="divider"></div>
      <ItemBuyAction itemBuy={shopItem} />
    </div>
  );
}

// Исходные данные и финальный рендеринг
export default function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull:
      "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399.354632,
    currency: '£',
    button: 'Добавить в корзину',
  };

  return (
    <div>
      <ShopItemFunc shopItem={item} />
    </div>
  );
}
