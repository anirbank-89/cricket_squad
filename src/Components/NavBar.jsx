import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    header: {
        background: '#111111'
    },
    tabs:{
        color: "#ffffff",
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }
});

const NavBar = ()=>{
    const classes = useStyles();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="/" exact>Code for interview</NavLink>
                <NavLink className={classes.tabs} to="all" exact>All cricketers</NavLink>
                <NavLink className={classes.tabs} to="add" exact>Add cricketers</NavLink>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;