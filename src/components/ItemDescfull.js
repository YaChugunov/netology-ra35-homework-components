import React from 'react';

// Полное описание товара
function ItemDescfull(props) {
  const { itemDescfull } = props;
  return <div className="description">{itemDescfull}</div>;
}

export default ItemDescfull;
