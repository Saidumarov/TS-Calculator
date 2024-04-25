// run command node shop

// Type information
type ShopCardType = {
  id: number;
  name: string;
  price: number;
  category: string;
};

// shop card array information
const shopCards: ShopCardType[] = [];

// addToCart
const addToCart = (
  id: number,
  name: string,
  price: number,
  category: string
) => {
  shopCards.push({ id, name, price, category });
  return shopCards;
};

console.log("Add to cart");
console.log(addToCart(1, "Kompyuter", 100, "Electronics"));
console.log(addToCart(2, "Milk", 50, "Food"));
console.log(addToCart(3, "Pants", 80, "Clothe"));

// removeFromCart
const removeFromCart = (id: number) => {
  const updateCard = shopCards.filter((item) => item.id !== id);
  return updateCard;
};
console.log(" Delete Card");
console.log(removeFromCart(2));

// updateCard
const updateCard = (
  id: number,
  name: string,
  price: number,
  category: string
) => {
  const updateCard = shopCards.map((item) => {
    if (item.id === id) {
      return { id, name, price, category };
    }
    return item;
  });
  return updateCard;
};

console.log("Update Card");
console.log(updateCard(1, "Victus", 200, "Electronics"));
