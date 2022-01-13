import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddCricketer from "./components/AddCricketer";
import AllCricketers from "./components/AllCricketers";
import EditCricketer from './components/EditCricketer';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/all" element={<AllCricketers />} />
        <Route exact path="/add" element={<AddCricketer />} />
        <Route exact path="/edit/:id" element={<EditCricketer />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
