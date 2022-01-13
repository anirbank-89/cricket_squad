import { AppBar, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';

var useStyle = makeStyles({
    header: {
        backgroundColor: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }
});

var NavBar = ()=>{
    var classes = useStyle();

    return (
        <AppBar className={classes.header} position='static'>
            <Toolbar>
                <NavLink className={classes.tabs} to='./' exact>Team India</NavLink>
                <NavLink className={classes.tabs} to='all' exact>All users</NavLink>
                <NavLink className={classes.tabs} to='add' exact>Add user</NavLink>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;