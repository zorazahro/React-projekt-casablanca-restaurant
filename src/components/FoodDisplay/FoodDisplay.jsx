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
    if (category === 'All') {
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
    // Si la catégorie est spécifique, renvoyer uniquement les éléments de cette catégorie
    switch (category) {
      case 'Vorspeise':
        return entree_list;
      case 'Tajine':
        return tajine_list;
      case 'Couscous':
        return couscous_list;
      case 'Dessert':
        return dessert_list;
      case 'Boisson':
        return drink_list;
      case 'Brot':
        return bread_list;
      case 'Suppe':
        return soup_list;
      case 'Grill':
        return grill_list;
      case 'Pastilla':
        return pastilla_list;
      default:
        return [];
    }
  };

  const foodList = getFoodList(category);

  return (
    <div className='food-display' id='food-display'>
      <h2>Feinste Spezialitäten direkt bei Ihnen</h2>
      <div className="food-display-list">
        {foodList.map((item) => (
          <FoodItem
            key={item._id}
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

