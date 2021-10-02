import NavBar from './Components/NavBar';
import CodeForInterview from './Components/CodeForInterview';
import CricketerList from './Components/CricketerList';
import AddCricketer from './Components/AddCricketer';
import EditCricketer from './Components/EditCricketer';
import NotFound from './Components/NotFound';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={CodeForInterview} />
        <Route exact path="/all" component={CricketerList} />
        <Route exact path="/add" component={AddCricketer} />
        <Route exact path="/edit/:id" component={EditCricketer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
