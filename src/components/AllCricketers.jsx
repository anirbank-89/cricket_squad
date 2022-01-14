import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { deleteCricketer, getCricketers } from "../service/Api";

var useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: "white",
            fontSize: 20
        }
    },
    row: {
        '& > *': {
            fontSize: 20
        }
    }
});

var AllCricketers = () => {

    const [cricketers, setCricketers] = useState([]);

    var classes = useStyle();

    useEffect(() => {
        getAllCricketers();
    }, []);

    var getAllCricketers = async () => {
        var res = await getCricketers();
        console.log("api data",res.data.data);
        let data = res.data.data;
        setCricketers(data);
    }

    var deleteData = async (id) => {
        await deleteCricketer(id);
        getAllCricketers();
    }

    var sl = 1;

    return (
        <Table style={useStyle.table}>
            <TableHead >
                <TableRow style={useStyle.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Languages</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    cricketers.map((cricketer) => {
                        return(
                            <TableRow style={useStyle.row}>
                            <TableCell>{sl++}</TableCell>
                            <TableCell>{cricketer.name}</TableCell>
                            <TableCell>{cricketer.email}</TableCell>
                            <TableCell>{cricketer.pwd}</TableCell>
                            <TableCell>{cricketer.loc}</TableCell>
                            <TableCell>{cricketer.age}</TableCell>
                            <TableCell>{cricketer.sex}</TableCell>
                            <TableCell>{cricketer.lang.map((lang) => {
                                return(
                                    <ul>
                                        <li>{lang}</li>
                                    </ul>
                                )    
                            })}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{marginRight: 10}} component={Link} to={`/edit/${cricketer._id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteData(cricketer._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                        )
                        
                    })
                }
            </TableBody>
        </Table>
    );
}

export default AllCricketers;