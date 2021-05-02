export const addItemsToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity +1} : cartItem
            )
    } 
    //else:
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

// Note:  
// Suppose the item object has elementA, elementB,  etc.  Then form 
// { ...item, elementA } separates out elementA from the rest and allows us to access it, and 
// { ...item, elementA: <value> } modify it and return a new object with the updated elementA.