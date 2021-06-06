import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import User from "./User.js"
import {Button,Box} from "@material-ui/core"
import SaveIcon from '@material-ui/icons/Save';
import {removeUsers,saveUsers} from "../redux/reducer.js"
const mapStatetoProps=(state)=>{
    return{
        users:state,
    }
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        removeUser:(id)=>dispatch(removeUsers(id)),
        saveUser:()=>dispatch(saveUsers())
    }
}

const useStyles = makeStyles({
    users: {
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     flexDirection:'column'
    },
    text:{
       textAlign:'center',

    },
    textContainer:{
        width:'50%',
    }
  });
const Users = (props) => {
    const [save, setSave] = useState(true)
    const [savedUsers, setsavedUsers] = useState([])
    const handleDelete=(id)=>{
        props.removeUser(id)
        
    }
    
    const handleSave=()=>{
        setSave(false)
        props.saveUser()
        let  usersSaved=JSON.parse(localStorage.getItem('users'))
        setsavedUsers(usersSaved) 
        
    }
    console.log(savedUsers)
    const classes = useStyles();
    
    return (
        
       <Box className={classes.users}>
           <h1>Users List</h1>
           {save? <Box className="usersList">
                {props.users.map((item)=>{
                    return <User saved={save} handle={()=>{handleDelete(item.id)}} key={item.id} name={item.name} job={item.job} image={item.image}/>
                    
                })}
           </Box>:null}
        {save?<Button variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={handleSave}>Save</Button> :<Box className={classes.users}>
            <Box className={classes.textContainer}>
                <p className={classes.text}>I am sorry for all the delays , since i was busy with a design for a page at Mia Sicilia i couldn't find time to finish this friday . Since the time was limited for me i did not create a rest API and i used a local storage system for this .I also code using functional components not class components . Sorry for the inconvenience .If you consider that is not enough I am very sorry but I promice you i will do my best to learn and adapt because it is my dream of becoming a programmer.</p>
                   
            </Box>
            <h1>Here are the saved users from local Storage</h1>
            {savedUsers.map((item)=>{
                    return <User saved={save} handle={()=>{handleDelete(item.id)}} key={item.id} name={item.name} job={item.job} image={item.image}/>
                    
                })}
            </Box>}
       </Box>
       
       
    )
    
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Users);
