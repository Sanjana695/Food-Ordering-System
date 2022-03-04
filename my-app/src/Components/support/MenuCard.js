import { Card, Button, Row, Col, CardGroup } from 'react-bootstrap';

function MenuCard({ item, handleClick }) {

    const { name, image, price, desc } = item;

    return (<>
        <Row>
            <Col md={4} xs={12} className="g-4">
                <Card style={{ width: '20rem'}}>
                    <Card.Body>
                        <Card.Title><h2>{name}</h2></Card.Title>
                        <Card.Img variant="top" src={image} />
                        <Card.Text>
                            {desc}
                        </Card.Text>
                        <Card.Text>
                            <h2>{price}</h2>
                        </Card.Text>
                        <Button variant="danger" onClick={() => handleClick(item)}>Add to cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>)
}
export default MenuCard;

// import Button from "./Button";
// import React from 'react';

// function MenuCard({ item, handleClick }) {
//     return (<>
//         <div class="row">
//             <div class="col-sm-6">
//                 <div class="card" style="width: 17rem;">
//                     <img class="card-img-top" src={item.image} alt="Card image cap" />
//                     <div class="card-body">
//                         <h5 class="card-title">{item.title}</h5>
//                         <p class="card-text">{item.description}</p>
//                         <Button variant="danger" onClick={() => handleClick(item)}>Add to cart</Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//         );
// }

//         export default MenuCard;