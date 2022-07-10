import React from "react";
// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";

export default function Listing(props) {  // КОМПОНЕНТ ОТРТСОВКИ ЭДЕМЕНТОВ
  const { dataArr } = props;
    

  function showItems(itemArray) { // функция отрисовки элемента

    const { listing_id } = itemArray;
    const { url } = itemArray;

    let MainImg;
    if (itemArray.MainImage !== undefined) { // "танцы с бубном", ибо откуда-то беруться элементы массива, в которых (почему-то..) нет объекта "MainImage"
    MainImg = itemArray.MainImage.url_570xN;
    };
    
    const { title } = itemArray;

    const { currency_code } = itemArray;
    let currency1 = '';
    let currency2 = '';
    if (currency_code === 'EUR') currency1 = `\u20AC`;
    if (currency_code === 'USD') currency1 = '$';
    if (currency1 === '') currency2 = currency_code;
    
    const { price } = itemArray;
    const { quantity } = itemArray;

    let level = '';
    if ((quantity >= 0) && (quantity <= 10)) level = ' level-low';
    if ((quantity > 10) && (quantity <= 20)) level = ' level-medium';
    if (quantity > 20) level = ' level-high';

    const fullLevel = 'item-quantity' + level; 

  return (
    <div className="item" key={listing_id}>
    <div className="item-image">
      <a href={url}>
        <img src={MainImg} alt=""/>
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{title}</p>
      <p className="item-price">{currency1}{price}{currency2}</p>
      <p className={fullLevel}>{quantity} left</p>
    </div>
  </div>
  )
  };
  
  return ( // отрисовка всех элементов
    <div className="item-list">
      {dataArr.map((itemArray) => showItems(itemArray))}
    </div>
  );
};

Listing.defaultProps = {
  dataArr: []
  };

/*
ShopItemFunc.propTypes = {
  itemArray: PropTypes.arrayOf(UserModel).isRequired
}
*/