
import './App.css';
import { Route,Switch } from 'react-router-dom';
// import Form from './Component/Form'
import Personal from './Component/Personal';
import Guardian from './Component/Guardian';
import Employment from './Component/Employment';
import Education from './Component/Education';
import Reference from './Component/Reference';
import Device from './Component/Device';


// function App() {
//   return (
//     <>
//     <Form />
//     </>
//   );
// }
function App() {
  return(
  
     <Switch>
      <Route exact path="/" component={Personal} />
      <Route path="/guardian" component={Guardian} />
      <Route path="/employment" component={Employment} />
      <Route path="/education" component={Education} />
      <Route path="/reference" component={Reference} />
      <Route path="/device" component={Device} />
    </Switch>
    
  );
};

export default App;
