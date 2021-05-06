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

export const delItemFromCart = (cartItems, cartItemToDel) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToDel.id);
    if(existingCartItem) {
        console.log("found the item and now deleting it")
        return cartItems.filter(cartItem => cartItem !== cartItemToDel)
    } 
    //else:
    console.log("didn't find this time. What are you trying to do??")
    return cartItems
};

// Note:  
// Suppose the item object has elementA, elementB,  etc.  Then form 
// { ...item, elementA } separates out elementA from the rest and allows us to access it, and 
// { ...item, elementA: <value> } modify it and return a new object with the updated elementA.