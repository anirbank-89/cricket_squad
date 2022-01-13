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
            color: '#FFFFFF',
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
        console.log(res.data);
        setCricketers(res.data.data);
    }

    var deleteData = async (id) => {
        await deleteCricketer(id);
        getAllCricketers();
    }

    var sl = 1;

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Gender</TableCell>
                    {/* <TableCell>Languages</TableCell> */}
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    cricketers.map(cricketer => {
                        <TableRow className={classes.row}>
                            <TableCell>{sl++}</TableCell>
                            <TableCell>{cricketer.name}</TableCell>
                            <TableCell>{cricketer.email}</TableCell>
                            <TableCell>{cricketer.password}</TableCell>
                            <TableCell>{cricketer.location}</TableCell>
                            <TableCell>{cricketer.age}</TableCell>
                            <TableCell>{cricketer.gender}</TableCell>
                            {/* <TableCell>{cricketer.languages}</TableCell> */}
                            <TableCell>
                                <Button variant="contained" color="primary" style={{marginRight: 10}} component={Link} to={`/edit/${cricketer._id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteData(cricketer._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    })
                }
            </TableBody>
        </Table>
    );
}

export default AllCricketers;