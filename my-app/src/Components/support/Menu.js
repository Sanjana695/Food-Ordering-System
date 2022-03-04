import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuCard from "./MenuCard";
import {Row,Col} from 'react-bootstrap';

function Menu({handleClick}) {

    const [state, setState] = useState({ products: [] })
  

    useEffect(() => {
        fetch('/menus').then(res => res.json()).then(res => {
            setState({ products: res })
        })
    }, [])

    const { products } = state;

    return (<>
    <Row>
        {products.map((item) => {
            return (<>
            <Col md={4}>
                  <MenuCard key={item._id} item={item} handleClick={handleClick}/>
            </Col>
                </>)
        })}
        </Row>
    </>);
}

export default Menu;