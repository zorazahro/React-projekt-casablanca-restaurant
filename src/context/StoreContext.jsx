import { createContext } from "react";
import{pastilla_list, grill_list, soup_list, bread_list, dessert_list, tajine_list, couscous_list, entree_list, drink_list} from "../assets/assets"

export const StoreContext = createContext(null);

const StoreContextProvider =(props) => {
   const contextValue =  {
    entree_list, 
    tajine_list, 
    couscous_list, 
    dessert_list, 
    drink_list,
    bread_list,
    soup_list,
    grill_list,
    pastilla_list,


   }
   return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
   )
}
export default StoreContextProvider;