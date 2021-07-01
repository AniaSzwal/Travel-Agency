export const promoPrice = (price, promo) => {
  console.log(price, promo, '!!');
  if (typeof(price) === 'string' && price.includes('$')){
    price = price.slice(1).replace(',', '');
    price = parseFloat(price);
    let happyHourPrice = price - (price * promo / 100);
    console.log(happyHourPrice, 'happyhourprice');
    return (happyHourPrice);
  }
  price = parseFloat(price);
  return price - (price * promo / 100);
};
