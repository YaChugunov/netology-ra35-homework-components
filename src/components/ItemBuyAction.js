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
