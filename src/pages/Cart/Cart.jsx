import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { 
      cartItems, 
      entree_list, 
      tajine_list, 
      couscous_list, 
      dessert_list, 
      drink_list, 
      bread_list, 
      soup_list, 
      grill_list, 
      pastilla_list, 
      removeFromCart,
      getTotalCartAmount 
  } = useContext(StoreContext);

  // Combine toutes les listes en une seule liste temporaire
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

  const totalAmount = getTotalCartAmount(); // Obtenez le montant total ici
  console.log(`Total Amount in Cart Component: ${totalAmount}`); // Log pour vérifier le montant total

  const navigate= useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p></p>
          <p></p>
          <p>Preis</p>
          <p>Menge</p>
          <p>Gesamt</p>
          <p></p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          const quantity = cartItems[item._id];
          if (quantity > 0) {
            return (
              <div key={item._id} className='cart-items-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}€</p>
                <p>{quantity}</p>
                <p>{(item.price * quantity).toFixed(2)}€</p>
                <p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
                <hr />
              </div>
            );
          }
          return null; // N'affiche rien si la quantité est 0
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Gesamtpreis Ihrer Bestellung</h2>
          <div>
            <div className="cart-total-details">
              <p>Zwischensumme</p>
              <p>{totalAmount.toFixed(2)}€</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Kostenlose Lieferung</p>
              <p>{0}€</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Gesamt</b>
              <b>{(totalAmount).toFixed(2)}€</b>
            </div>
          </div>
          <button onClick={()=> navigate('/order')} >Zu Zahlung</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Wenn Sie einen Aktionscode haben, geben Sie ihn hier ein.</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Gutschein oder Aktionscode' />
              <button>Einlösen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
