import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

function Dashboard() {
    const [menu, setMenu] = useState([]);
    const [status, setStatus] = useState();
    const [show, setShow] = useState(false);

    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [menuId, setmenuId] = useState();

    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    useEffect(() => {
        getMenu();
    }, [])

    //const { products } = state

    function getMenu() {
        fetch('/menus', {
            method: 'GET'
        }).then(result => result.json()).then(res => {
            setMenu(res);
            setName(res[0].name)
            setPrice(res[0].price)
            setmenuId(res[0].menuId);
        })
    }

    ////////////****Delete Menu*****/////
    function removeItem(_id) {
        if (window.confirm("Are you sure?")) {
            fetch("/menus/" + _id, { method: 'DELETE' })
                .then(() => setStatus('Delete successful'));
        }
    }
    function selectMenu(_id,i) {
        //console.log(_id);
         setShow(true);
        console.log(menu[i])
         let item = menu[i];
         setName(item.name);
         setPrice(item.price);
         setmenuId(item._id);
        //  console.log(menuId);
    }
    function updateMenu() {
           let item={name,price,menuId};
           console.log(item);
            fetch("/menus/"+menuId, {
                 method: 'PATCH',
                 headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(item)
             }).then((result)=>{
                 result.json().then((res)=>{
                     console.warn(res)
                     getMenu();
                 })
             })
       setShow(false);

    }
    return (<>
        <NavLink to="/postMenu"><Button variant="primary">Add a Menu</Button></NavLink>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Item Code</th>
                    <th>Price</th>
                    <th>Item Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {menu.map((itm,i) => {
                    return (<>
                        <tr key={i}>
                            <td>{itm.name}</td>
                            <td>{itm._id}</td>
                            <td>{itm.price}</td>
                            <td><img src={itm.image} alt="menu" width={100} /></td>
                            <td>
                                <Button variant="info" key={i} onClick={() => selectMenu(itm._id,i)}>Edit</Button>
                                <br />
                                <Button variant="danger" onClick={() => removeItem(itm._id)}>Delete</Button>
                            </td>
                        </tr>
                    </>)
                })}
            </tbody>

        </Table>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                {/* <Modal.Title>{itm.name}</Modal.Title>  */}
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
            </Modal.Header>
            <Modal.Body>
                {/* <p>{itm.price}</p> */}
                <input type="text" value={price} onChange={(e) => {setPrice(e.target.value)}} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={updateMenu}>Update</Button>
                <Button variant='danger' onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    </>);
}
export default Dashboard;