import React, { useState, useEffect } from 'react';
import {Form,Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function PostMenu() {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);

    // function saveMenu(){
        // console.log({image,name,desc,price});
        // let data={image,name,desc,price};
        // fetch("/menus",{
        //     method:'POST',
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-type':'application/json',
        //     },
        //     body: JSON.stringify(data)
        // }).then((result)=>{
        //     console.warn(result);
        //     result.json().then((res)=>{
        //        console.warn(res);
        //     })
        // })
    //}
    function handleSubmit(event){
         event.preventDefault();
         //console(image,name,desc,price);
         //console.log({image,name,desc,price});
         let data={image,name,desc,price};
         console.log(data);
         fetch("/menus",{
             method:'POST',
             headers:{
                 'Accept':'application/json',
                 'Content-type':'application/json',
             },
             body: JSON.stringify(data)
         }).then((result)=>{
             console.warn(result);
             result.json().then((res)=>{
                console.warn(res);
             })
         })
    }
    return (<>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Enter Image url</Form.Label>
                <Form.Control type="text" id="image" placeholder="Enter Image url" name="image" value={image} onChange={(e)=>{setImage(e.target.value)}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Enter Item Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Item Name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Enter Item Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Item Description" name="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Enter Price</Form.Label>
                <Form.Control type="text" placeholder="Enter Price" name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            </Form.Group>
            <Button variant="primary"  type="submit">
                Add Item
            </Button>
            <br/> 
            <br/>
            <NavLink to="/dashboard"><Button variant="info">
                Move to admin
            </Button></NavLink>
        </Form>
    </>)
}
export default PostMenu;