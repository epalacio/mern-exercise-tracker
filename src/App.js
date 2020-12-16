import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing all relevant components
import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercises from './components/edit-exercises.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    //The router is a "container" where all the routes will be in
    <Router>
      <div className="container">
        <Navbar /> {/*Normal React component*/}
        {/*There is 1 route element for every route in the app*/}
        {/*Each routed url, will load that specific component*/}
        <Route path = '/' exact component={ExercisesList} />
        <Route path = '/edit/:id' exact component={EditExercises} />
        <Route path = '/create' exact component={CreateExercise} />
        <Route path = '/user' exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
