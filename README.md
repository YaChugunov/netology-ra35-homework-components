# netology-ra35-homework-components-d8piuv

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/netology-ra35-homework-components-d8piuv)

Необходимо создать React-компонент ShopItemFunc (функциональный компонент), с помощью которого мы могли бы реализовывать представление информации о товарах из нашего каталога на сайте в таком виде (компонент обведён пунктирной линией).

**Пример использования**

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

**Описание компонента**

Компонент должен иметь один props item, в котором он ожидает объект с информацией о товаре со следующими свойствами:

brand — название производителя товара,
title — название товара,
description — краткое описание товара,
descriptionFull — подробное описание товара,
price — цена товара,
currency — валюта товара.

Соответственно название производителя необходимо подставить в "h2", название товара в "h1", краткое описание в "h3", подробное описание в "div.description", цену и валюту в "div.price". При этом символ валюты должен следовать перед ценой, а цена должна быть представлена с двумя числами после запятой.

**Реализация**
  
Реализуйте полноценный проект с помощью create-react-app, не забудьте задействовать prop-types (для item можете использовать либо тип object, либо вынести item в класс и использовать instanceOf.

Используйте расположенный в данном каталоге css для стилизации.
