import './PlaceOrder.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const totalAmount = getTotalCartAmount(); // Obtenez le montant total à partir du contexte

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Lieferinformationen</p>
        <div className="mutli-fields">
          <input type="text" placeholder='Vorname' />
          <input type="text" placeholder='Nachname' />
        </div>
        <input type="email" placeholder='Email-Adresse' />
        <input type="text" placeholder='Hausnummer und Straße' />
        <div className="mutli-fields">
          <input type="text" placeholder='Stadt' />
          <input type="text" placeholder='Bundesland' />
        </div>
        <div className="mutli-fields">
          <input type="text" placeholder='PLZ' />
          <input type="text" placeholder='Land' />
        </div>
        <input type="text" placeholder='Telefonnummer' />
      </div>
      <div className="place-order-right">
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
          <button type="submit">Zu Zahlung fortfahren</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
