// run command node shop
// shop card array information
var shopCards = [];
// addToCart
var addToCart = function (id, name, price, category) {
    shopCards.push({ id: id, name: name, price: price, category: category });
    return shopCards;
};
console.log("Add to cart");
console.log(addToCart(1, "Kompyuter", 100, "Electronics"));
console.log(addToCart(2, "Milk", 50, "Food"));
console.log(addToCart(3, "Pants", 80, "Clothe"));
// removeFromCart
var removeFromCart = function (id) {
    var updateCard = shopCards.filter(function (item) { return item.id !== id; });
    return updateCard;
};
console.log(" Delete Card");
console.log(removeFromCart(2));
// updateCard
var updateCard = function (id, name, price, category) {
    var updateCard = shopCards.map(function (item) {
        if (item.id === id) {
            return { id: id, name: name, price: price, category: category };
        }
        return item;
    });
    return updateCard;
};
console.log("Update Card");
console.log(updateCard(1, "Victus", 200, "Electronics"));
