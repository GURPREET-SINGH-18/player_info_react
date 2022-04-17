import React from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios';
import { Container,Row,Col,Button,Card,ListGroup,ListGroupItem,Table} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

export default function MoreContent(props) {
  let navigate = useNavigate();
  let {id}=useParams();
  var [pdata,updatepdata] = useState({});
  async function getPdata() {
    let d = await axios.get(`http://127.0.0.1:8000/player/${id}/`);
      updatepdata(d.data);
      console.log(d.data);
    }
  useEffect(() => {
    getPdata();
  },[]);
  return (
    <div>
      <Container className="mt-4">
      <Row>
        <Col xs={3}>
          {/* <img src={pdata.photo} alt="" style={{ width:"100%"}}/> */}
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pdata.photo} />
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <Row>
                <Col xs={5}><strong style={{fontSize: '14px'}}>Born</strong></Col>
                <Col style={{fontSize: '15px'}}>{pdata.born}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col xs={5}><strong style={{fontSize: '14px'}}>Birth Place</strong></Col>
                <Col style={{fontSize: '15px'}}>{pdata.birthplace}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col xs={5}><strong style={{fontSize: '14px'}}>Height</strong></Col>
                <Col style={{fontSize: '15px'}}>{pdata.height}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col xs={5}><strong style={{fontSize: '14px'}}>Role</strong></Col>
                <Col style={{fontSize: '15px'}}>{pdata.role}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col xs={5}><strong style={{fontSize: '14px'}}>Batting Style</strong></Col>
                <Col style={{fontSize: '15px'}}>{pdata.batting_style}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col xs={5}><strong style={{fontSize: '14px'}}>Bowling Style</strong></Col>
                <Col style={{fontSize: '15px'}}>{pdata.bowling_style}</Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <LinkContainer to={`/updateplayer/${id}`}>
              <Button variant="warning" className="me-3">Update</Button>
            </LinkContainer>
            <Button variant="danger" onClick={async()=>{
              await axios.delete(`http://127.0.0.1:8000/player/${id}/`).then(()=>{
              alert("Deleted Successfully")  
              navigate("/");})
            }}>Delete</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
          <div>
            <h1 style={{marginBottom:'0rem',}}>{pdata.player_name}</h1>
            <p style={{    fontSize: '18px',fontWeight: 700,color: '#6c6c6c',marginBottom: '0.3rem',marginLeft: '2px'}}>{pdata.nationality}</p>
          </div>
          <div className="mt-3">
            {pdata.small_info}
          </div>
          <div className="mt-4">
            <h4>Batting Records</h4>
            <Table striped bordered hover size="sm" className="mt-3">
            <thead className="table-dark">
              <tr>
                <th>Total Innings</th>
                <th>Total Run</th>
                <th>Total Hundred</th>
                <th>Total Fifties</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pdata.total_ing}</td>
                <td>{pdata.total_run}</td>
                <td>{pdata.total_hun}</td>
                <td>{pdata.total_fif}</td>
              </tr>
            </tbody>
          </Table>
          </div>
          <div className="mt-4">
            <h4>Bowling Records</h4>
            <Table striped bordered hover size="sm" className="mt-3">
            <thead className="table-dark">
              <tr>
                <th>Total Innings</th>
                <th>Total Wickets</th>
                <th>Economy</th>
                <th>Average</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pdata.total_bowling_ing}</td>
                <td>{pdata.total_wicket}</td>
                <td>{pdata.total_economy}</td>
                <td>{pdata.total_avg}</td>
              </tr>
            </tbody>
          </Table>
          </div>
          <div className="mt-4">
            <h4>Teams</h4>
            <Card className="mt-3">
              <Card.Body>{pdata.teams}</Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
