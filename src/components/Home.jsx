import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import YouTube from '../assets/images/youtube.png';
import InstaTele from '../assets/images/InstaTele.jpeg';

var useStyle = makeStyles({
    image: {
        width: '50%',
        height: '50%'
    },
    components: {
        margin: 50
    }
});

var Home = () => {
    var classes = useStyle();

    return (
        <Box className={classes.components}>
            <Typography variant='h4' style={{marginBottom: 50}}>Team India</Typography>
            <Box style={{ diplay: 'flex' }}>
                <img className={classes.image} src={YouTube} alt="" />
                <img className={classes.image} src={InstaTele} alt="" />
            </Box>
        </Box>
    );
}

export default Home;