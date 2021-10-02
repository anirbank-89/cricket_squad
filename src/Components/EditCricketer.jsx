import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { editCricketer, getCricketers } from "../Service/api";

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
});

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const EditCricketer = ()=>{
    const [ cricketer, setCricketer ] = useState(initialValue);
    const { name, username, email, phone } = cricketer;
    const { id } = useParams();
    const classes = useStyles();
    const history = useHistory();

    useEffect(()=>{
        loadUserData();
    },[]);

    const loadUserData = async ()=>{
        var res = await getCricketers(id);
        setCricketer(res.data);
    }

    const onValueChange = (e)=>{
        console.log(e);
        setCricketer({ ...cricketer, [e.target.name]: e.target.value })
    }

    const editCricketerDetails = async ()=>{
        await editCricketer(id,cricketer);
        history.push('./all');
    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit user</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input name='name' onChange={(e)=>onValueChange(e)} value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input name='username' onChange={(e)=>onValueChange(e)} value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input name='email' onChange={(e)=>onValueChange(e)} value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input name='phone' onChange={(e)=>onValueChange(e)} value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={()=>editCricketerDetails()}>SUBMIT EDIT</Button>
            </FormControl>
        </FormGroup>
    );
}

export default EditCricketer;