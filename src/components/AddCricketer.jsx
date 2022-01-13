import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addCricketer } from "../service/Api";

let useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
});

let initialValues = {
    name: '',
    name_error: '',
    email: '',
    email_error: '',
    pwd: '',
    pwd_error: '',
    loc: '',
    loc_error: '',
    age: 0,
    age_error: '',
    sex: '',
    sex_error: '',
    lang: [],
    lang_error: ''
}

var AddCricketer = () => {
    const [cricketer, setCricketer] = useState(initialValues);
    const { name, email, pwd, loc, age, sex, lang } = cricketer;
    let classes = useStyle();
    const navigate = useNavigate();

    var onValueChange = (e)=>{
        let index;
        if (e.target.name=="lang") {
            if (e.target.checked) {
                console.log(e.target.checked);
                initialValues.lang.push(e.target.value);
                // setCricketer({ ...cricketer, [e.target.name]: e.target.value });
            }
            else {
                index=initialValues.lang.indexOf(e.target.value);
                initialValues.lang.splice(index, 1);
                // setCricketer({ ...cricketer, [e.target.name]: e.target.value });
            }
        }
        else {
            console.log(e.target.value);
            setCricketer({ ...cricketer, [e.target.name]: e.target.value });
            console.log(cricketer);
        }
    }

    var mySubmitHandler = (e) => {
        e.preventDefault();  // to prevent default page loading
        var count=0;
        if (initialValues.name=='') {
            initialValues.name_error = 'Name cannot be blank';
            count++
        } else { initialValues.name_error = ''}
        if (initialValues.email=='') {
            initialValues.email_error = 'Email cannot be blank';
            count++
        } else { initialValues.email_error = ''}
        if (initialValues.pwd=='') {
            initialValues.pwd_error = 'Password cannot be blank';
            count++
        } else { initialValues.pwd_error = ''}
        if (initialValues.loc=='') {
            initialValues.loc_error = 'Location cannot be blank';
            count++
        } else { initialValues.loc_error = ''}
        if (initialValues.age=='') {
            initialValues.age_error = 'Age cannot be blank';
            count++
        } else { initialValues.age_error = ''}
        if (initialValues.sex=='') {
            initialValues.sex_error = 'Age cannot be blank';
            count++
        } else { initialValues.sex_error = ''}
        if (initialValues.lang.length < 0) {
            initialValues.lang_error = 'Age cannot be blank';
            count++
        } else { initialValues.lang_error = ''}
        if (count==0) {
            alert("Form submitted successfully!");
        }
        else {
            return false;
        }
    }

    const addData = async () => {
        await addCricketer(cricketer);
        navigate('./all');
    }

    return (
        <FormGroup className={classes.container} onSubmit={(e)=>mySubmitHandler(e)}>
            <Typography variant="h6">Add cricketer</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input name="name" onChange={(e)=>onValueChange(e)} /><Typography>{initialValues.name_error}</Typography>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input type="email" name="email" onChange={(e)=>onValueChange(e)} /><Typography>{initialValues.email_error}</Typography>
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input type="password" name="pwd" onChange={(e)=>onValueChange(e)} /><Typography>{initialValues.pwd_error}</Typography>
            </FormControl>
            <FormControl>
                <FormLabel>Location</FormLabel>
                <Select name="loc" onChange={(e)=>onValueChange(e)} >
                    <MenuItem value="india">Ind</MenuItem>
                    <MenuItem value="australia">Aus</MenuItem>
                    <MenuItem value="sri lanka">SL</MenuItem>
                    <MenuItem value="china">PRC</MenuItem>
                </Select><Typography>{initialValues.loc_error}</Typography>
            </FormControl>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input type="number" name="age" onChange={(e)=>onValueChange(e)} /><Typography>{initialValues.age_error}</Typography>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup row aria-label="gender" name="sex" onChange={(e)=>onValueChange(e)} >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel control={<Radio value="male" />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    {/* <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio />}
                        label="other"
                    /> */}
                </RadioGroup><Typography>{initialValues.sex_error}</Typography>
            </FormControl>
            <FormControl>
                <FormLabel>Languages</FormLabel>
                <FormControlLabel control={<Checkbox name="lang" value="bengali" onChange={(e)=>onValueChange(e)} />} label="Bengali" />
                <FormControlLabel control={<Checkbox name="lang" value="english" onChange={(e)=>onValueChange(e)} />} label="English" />
                <FormControlLabel control={<Checkbox name="lang" value="hindi" onChange={(e)=>onValueChange(e)} />} label="Hindi" />
            </FormControl><Typography>{initialValues.lang_error}</Typography>
            <Button variant="contained" color="primary" onClick={() => addData()}>Submit</Button>
        </FormGroup>
    );
}

// row-radio-buttons-group

export default AddCricketer;