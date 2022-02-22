import React from 'react';
import PropTypesfrom from 'prop-types';
import '../css/main.css';

import ItemBrand from '../components/ItemBrand';
import ItemTitle from '../components/ItemTitle';
import ItemDesc from '../components/ItemDesc';
import ItemDescfull from '../components/ItemDescfull';
import ItemImage from '../components/ItemImage';
import ItemBuyAction from '../components/ItemBuyAction';

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
ShopItemFunc.propTypes = {
  brand: PropTypes.instanceOf(shopItem).isRequired,
};

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
