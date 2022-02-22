import React from 'react';

// Краткое описание товара
function ItemDesc(props) {
  const { itemDesc } = props;
  return <h3>{itemDesc}</h3>;
}

export default ItemDesc;
