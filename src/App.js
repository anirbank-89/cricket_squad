import NavBar from './Components/NavBar';
import CodeForInterview from './Components/CodeForInterview';
import CricketerList from './Components/CricketerList';
import AddCricketer from './Components/AddCricketer';
import NotFound from './Components/NotFount';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={CodeForInterview} />
        <Route exact path="/all" component={CricketerList} />
        <Route exact path="/add" component={AddCricketer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
