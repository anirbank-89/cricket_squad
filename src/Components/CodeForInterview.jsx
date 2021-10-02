import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import youtube from '../Assets/Images/31SUpAGALNL.jpg';
import instate from '../Assets/Images/instate.jpg';

const useStyles = makeStyles({
    image:{
        width: '20%',
        height: '20%'
    },
    component:{
        margin: 50
    }
});

const CodeForInterview = ()=>{
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h6" style={{marginBottom: 50}}>Code For Interview</Typography>
            <Box style={{display: 'flex'}}>
                <img className={classes.image} src={youtube} alt="" />
                <img className={classes.image} src={instate} alt="" /> 
            </Box>
        </Box>
    );
}

export default CodeForInterview;