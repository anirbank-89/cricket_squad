import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteCricketer, getCricketers } from '../Service/api';

const useStyles = makeStyles({
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

const CricketerList = ()=>{
    const [crickters, setCricketers] = useState([]);// data will be in 'cricketers' variable
    const classes = useStyles();

    useEffect(()=>{
        getAllCricketers();
    },[]);

    const getAllCricketers = async ()=>{
        var res = await getCricketers();
        console.log(res.data);
        setCricketers(res.data);
    }

    const deleteCricketerData = async (id)=>{
        await deleteCricketer(id);
        getAllCricketers();
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {crickters.map(user=>{
                        <TableRow className={classes.row}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{marginRight: 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={()=>deleteCricketerData(user._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    })}
            </TableBody>
        </Table>
    );
}

export default CricketerList;