import React,{useState} from 'react'
import {Form,Button,FormControl} from 'react-bootstrap'
import axios from 'axios';
import { useNavigate} from 'react-router-dom'


export default function AddPlayer() {
    let navigate = useNavigate();
    let [pdata,updatePdata]=useState({
        "player_name": "",
        "nationality": "",
        "born": "",
        "birthplace": "",
        "height": "",
        "role": null,
        "batting_style": "",
        "bowling_style": "",
        "teams": "",
        "total_ing": null,
        "total_run": null,
        "total_hun": null,
        "total_fif": null,
        "total_bowling_ing": null,
        "total_wicket": null,
        "total_economy": null,
        "total_avg": null,
        "small_info": "",
        "photo": null
    })
    const formhandle=(event)=>{
        updatePdata({...pdata,[event.target.name] : event.target.value });
    }

    const imghandle=(event)=>{
        updatePdata({...pdata,photo:event.target.files[0]});
        console.log(pdata.photo)
    }
    
    const submits = (e)=> {
        e.preventDefault();
        console.log(pdata)
        postData();
    }
    let postData = ()=>{
        console.log('post')
        let form_data = new FormData();
        form_data.append('player_name',pdata.player_name);
        form_data.append('nationality',pdata.nationality);
        form_data.append('born',pdata.born);
        form_data.append('birthplace',pdata.birthplace);
        form_data.append('height',pdata.height);
        form_data.append('role',pdata.role);
        form_data.append('batting_style',pdata.batting_style);
        form_data.append('bowling_style',pdata.bowling_style);
        form_data.append('teams',pdata.teams);
        form_data.append('total_ing',pdata.total_ing);
        form_data.append('total_run',pdata.total_run);
        form_data.append('total_hun',pdata.total_hun);
        form_data.append('total_fif',pdata.total_fif);
        form_data.append('total_bowling_ing',pdata.total_bowling_ing);
        form_data.append('total_wicket',pdata.total_wicket);
        form_data.append('total_economy',pdata.total_economy);
        form_data.append('total_avg',pdata.total_avg);
        form_data.append('small_info',pdata.small_info);
        form_data.append('photo',pdata.photo,pdata.photo.name);
        console.log(...form_data);
        axios.post("http://127.0.0.1:8000/player/", form_data, {
            headers: {
            'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res.data);
                alert('Player Added Successfully');
                navigate("/");
            })
            .catch(err => console.log(err))
    };
    return (
    <div className="mt-4 mb-4">
        <h1>Add Player</h1>
        <div className="mt-4">
        <Form onSubmit={submits} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Name</strong></Form.Label>
            <Form.Control type="text" placeholder="Enter Player Name" name="player_name" value={pdata.player_name} onChange={formhandle}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Nationality</strong></Form.Label>
            <Form.Control type="text" placeholder="Enter Player Nationality" name="nationality" value={pdata.nationality} onChange={formhandle}/> 
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Birth Date</strong></Form.Label>
            <Form.Control type="text" placeholder="Enter Player Birth Date" name="born" value={pdata.born} onChange={formhandle}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Birth Place</strong></Form.Label>
            <Form.Control type="text" placeholder="Enter Player Birth Place" name="birthplace" value={pdata.birthplace} onChange={formhandle}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Height</strong></Form.Label>
            <Form.Control type="text" placeholder="Enter Player Height" name="height" value={pdata.height} onChange={formhandle}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Role</strong></Form.Label>
            <Form.Control type="text" placeholder="Enter Player Role" name="role" value={pdata.role} onChange={formhandle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Batting Style</strong></Form.Label>
            <Form.Control type="text" placeholder="Enter Player Batting Style" name="batting_style" value={pdata.batting_style} onChange={formhandle}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Bowling Style</strong></Form.Label>
            <Form.Control type="text" placeholder="Enter Player Bowling Style" name="bowling_style" value={pdata.bowling_style} onChange={formhandle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Teams</strong></Form.Label>
            <FormControl as="textarea" placeholder="Enter Player Teams" name="teams" value={pdata.teams} onChange={formhandle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Total Batting Innings</strong></Form.Label>
            <Form.Control type="number" placeholder="Enter Player Total Batting Innings" name="total_ing" value={pdata.total_ing} onChange={formhandle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Total Runs</strong></Form.Label>
            <Form.Control type="number" placeholder="Enter Player Total Runs" name="total_run" value={pdata.total_run} onChange={formhandle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Total Hundred</strong></Form.Label>
            <Form.Control type="number" placeholder="Enter Player Total Hundred" name="total_hun" value={pdata.total_hun} onChange={formhandle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Total Fifties</strong></Form.Label>
            <Form.Control type="number" placeholder="Enter Player Total Fifties" name="total_fif" value={pdata.total_fif} onChange={formhandle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Total Bowling Innings</strong></Form.Label>
            <Form.Control type="number" placeholder="Enter Player Total Bowling Innings" name="total_bowling_ing" value={pdata.total_bowling_ing} onChange={formhandle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Total Wickets</strong></Form.Label>
            <Form.Control type="number" placeholder="Enter Player Total Wickets" name="total_wicket" value={pdata.total_wicket} onChange={formhandle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Bowling Economy</strong></Form.Label>
            <Form.Control type="number" placeholder="Enter Player Bowling Economy" name="total_economy" value={pdata.total_economy} onChange={formhandle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Bowling Average</strong></Form.Label>
            <Form.Control type="number" placeholder="Enter Player Bowling Average" name="total_avg" value={pdata.total_avg} onChange={formhandle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Enter Player Information</strong></Form.Label>
            <FormControl as="textarea" placeholder="Enter Player Information" name="small_info" value={pdata.small_info} onChange={formhandle} />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label><strong>Enter Player Photo</strong></Form.Label>
            <Form.Control type="file"
                name="photo"
                accept="photo/png, photo/jpeg"  onChange={imghandle} />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </div>
    </div>
  )
}

