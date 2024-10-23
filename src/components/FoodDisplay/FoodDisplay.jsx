import { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const {
    entree_list, 
    tajine_list, 
    couscous_list, 
    dessert_list, 
    drink_list,
    bread_list,
    soup_list,
    grill_list,
    pastilla_list
  } = useContext(StoreContext);

  // Fonction pour sélectionner la liste de nourriture correcte en fonction de la catégorie
  const getFoodList = (category) => {
    switch (category) {
      case 'All':
        return [
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
      
    }
  };

  const foodList = getFoodList(category);

  return (
    <div className='food-display' id='food-display'>
      <h2>Feinste Spezialitäten direkt bei Ihnen</h2>
      <div className="food-display-list">
        {foodList.map((item, index) => (
          <FoodItem 
            key={index} 
            id={item._id} 
            name={item.name} 
            description={item.description} 
            price={item.price} 
            image={item.image} 
          />
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay;
