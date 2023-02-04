import './globalstyle.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './page/home/Home';
import Login from './page/login/Login';
import List from './page/list/List';
import New from './page/new/New';
import Single from './page/single/Single';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='users'>
              <Route index element={<List/>}></Route>
              <Route path=':id' element={<Single/>}></Route>
              <Route path='new' element={<New/>}></Route>
            </Route>
            <Route path='products'>
              <Route index element={<List/>}></Route>
              <Route path=':id' element={<Single/>}></Route>
              <Route path='new' element={<New/>}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
