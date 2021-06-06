import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Avatar,Paper,Button,Box} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles({
    user: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      width:'500px',
      height:'200px',
      margin:'20px'
    },
  });
function User({name,image,job,handle,saved}) {
    const classes = useStyles();
    return (
        <Paper className={classes.user}>
            <Avatar src={image} alt={name}/>
            <Box className="description">
                <h1>{name}</h1>
                <p>{job}</p>
            </Box>
           {saved?
            <Button variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}onClick={handle}>Delete</Button>
           :<Box></Box>}
        </Paper>
    )
}

export default User

