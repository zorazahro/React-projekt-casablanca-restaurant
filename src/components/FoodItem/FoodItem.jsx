import { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
        {!cartItems[id] ? (
          <img 
            className='add' 
            onClick={() => {
              console.log('Icon clicked'); // Debugging
              addToCart(id);
            }} 
            src={assets.add_icon_orange} 
            alt="Add" 
          />
        ) : (
          <div className="food-item-counter">
            <img 
              className='remove-icon'
              onClick={() => {
                if (cartItems[id] > 0) {
                  removeFromCart(id);
                }
              }} 
              src={assets.remove_icon_grey} 
              alt="Remove" 
            />
            <p>{cartItems[id]}</p>
            <img 
              className='add-icon-orange'
              onClick={() => addToCart(id)} 
              src={assets.add_icon_orange} 
              alt="Add" 
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">{price}€</p>
      </div>
    </div>
  );
}

export default FoodItem;
