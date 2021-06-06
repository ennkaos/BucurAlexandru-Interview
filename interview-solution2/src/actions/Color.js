
import {useSelector,useDispatch} from "react-redux"
import {reset} from "./index.js"

function Color() {
    const dispatch=useDispatch()
    const counter=useSelector(state=>state.counter)
    if(counter===0){
        return "black"
    }else if(counter<0){
        alert("You can not go bellow 0")
        dispatch(reset())
    }else if(counter%2===0){
        return "red"
    }else if(counter%2!==0){
        return "green"
    }
}

export default Color

