import { Route, Routes, } from 'react-router-dom';
import Home from './components/home.js'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path='*' element={<div>NotFound</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

