import React from 'react';
import { Card,Row,Col,Button } from 'react-bootstrap';
// import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
// import MoreContent from './MoreContent';
import {useState, useEffect} from 'react'
import axios from 'axios';
import {LinkContainer} from 'react-router-bootstrap'

const Content = (props) => {
    var [data,updatedata] = useState([]);
  
    async function getData() {
        let d = await axios.get("http://127.0.0.1:8000/player/");
        updatedata(d.data);
        console.log(d.data);
    }
    useEffect(() => {
        getData();
    },[]);

    return (
        <div>
            <Row xs={1} md={4} className="g-3">
            {data.map((d, i) => (
                <Col key={i}>
                <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={d.photo} style={{height: '250px'}} />
                <Card.Body>
                    <Card.Title style={{ marginBottom:'0rem'}}>{d.player_name}</Card.Title>
                    <p style={{    fontSize: '14px',fontWeight: 600,color: '#6c6c6c',marginBottom: '0.3rem'}}>{d.nationality}</p>
                    <Card.Text>
                    {d.small_info}
                    </Card.Text>
                    <LinkContainer to={'/more/'+d.id}>
                        <Button variant="primary">More</Button>
                    </LinkContainer>
                </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </div>
    );
}

export default Content;
