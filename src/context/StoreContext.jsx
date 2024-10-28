import { createContext, useState } from "react";
import {
    pastilla_list,
    grill_list,
    soup_list,
    bread_list,
    dessert_list,
    tajine_list,
    couscous_list,
    entree_list,
    drink_list
} from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            if (newCartItems[itemId] > 1) {
                newCartItems[itemId] -= 1;
            } else {
                delete newCartItems[itemId];
            }
            return newCartItems;
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        const food_list = [
            ...entree_list,
            ...tajine_list,
            ...couscous_list,
            ...dessert_list,
            ...drink_list,
            ...bread_list,
            ...soup_list,
            ...grill_list,
            ...pastilla_list
        ];
    
        console.log("cartItems:", cartItems); // Log pour vérifier le contenu de cartItems
    
        for (const itemId in cartItems) {
            const quantity = cartItems[itemId];
            const itemInfo = food_list.find(item => item._id === Number(itemId));//forcer le id d'etre un nombre
            console.log(`itemId: ${itemId}, quantity: ${quantity}, itemInfo:`, itemInfo); // Log pour chaque item
    
            if (itemInfo) {
                totalAmount += itemInfo.price * quantity;
            }
        }
    
        console.log(`Total Amount: ${totalAmount}`); // Pour le débogage
        return totalAmount;
    };
    


    return (
        <StoreContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            getTotalCartAmount,
            entree_list,
            tajine_list,
            couscous_list,
            dessert_list,
            drink_list,
            bread_list,
            soup_list,
            grill_list,
            pastilla_list
        }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
