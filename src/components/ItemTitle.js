import React from 'react';

// Название товара
function ItemTitle(props) {
  const { itemTitle } = props;
  return <h1>{itemTitle}</h1>;
}

export default ItemTitle;
