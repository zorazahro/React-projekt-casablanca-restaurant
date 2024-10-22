import { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';

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

  // Function to select the correct list based on the category
  const getFoodList = (category) => {
    switch(category) {
      case 'entree':
        return entree_list;
      case 'tajine':
        return tajine_list;
      case 'couscous':
        return couscous_list;
      case 'dessert':
        return dessert_list;
      case 'drink':
        return drink_list;
      case 'bread':
        return bread_list;
      case 'soup':
        return soup_list;
      case 'grill':
        return grill_list;
      case 'pastilla':
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
        {foodList.map((item, index) => (
          <div key={index} className="food-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay;
