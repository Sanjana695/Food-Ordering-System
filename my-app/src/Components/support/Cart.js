
import { useEffect, useState } from "react";
import { Button, Table } from 'react-bootstrap';


function Cart({ cart, setCart, handleChange }) {


  const [price, setPrice] = useState(0);

  function handlePrice() {
    let ans = 0;

    cart.map((item) => ans += item.amount * item.price);
    setPrice(ans);
  }

  function handleRemove(id) {
    const arr = cart.filter((item) => item.id !== id) ;
    setCart(arr);
    handlePrice();
  }

  useEffect(() => {
    handlePrice();
  });

  return (<>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>

      {cart.map((item) => ( 
      <>
          <tbody key={item.id}>
            <tr>
              <td>{item.name}</td>
              <td><img src={item.image} alt="" width={100}/></td>
              <td>
                <Button variant="primary" onClick={() => handleChange(item, 1)}>+</Button>
                <h3 style={{color: "black"}}>{item.amount}</h3>
                <Button variant="danger" onClick={() => handleChange(item, -1)}>-</Button>
              </td>
              <td>{item.price}</td>
              <td><Button variant="danger" onClick={() => handleRemove(item.id)}>Remove</Button></td>
            </tr>
          </tbody>
        </>)
      )}
    </Table>
    
    <div className="total">
      <span>Total Price of your cart</span>
      <span style={{color: "black"}}>{price} Rs/-</span>
    </div>

  </>)
}
export default Cart;