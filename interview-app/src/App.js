import { makeStyles } from '@material-ui/core/styles';
import Users from "./components/Users.js"
const useStyles = makeStyles({
  App: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Users/>
     
    </div>
  );
}

export default App;
