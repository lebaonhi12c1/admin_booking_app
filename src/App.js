import './globalstyle.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { router } from './routes';
import { useSelector } from 'react-redux';
import { darkModeSelector } from './redux/reducer/themeSlice';
function App() {
  const theme = useSelector(darkModeSelector)
  return (
    <div className={`app ${theme ?'dark':''}`}>
      <Router>
        <Routes>
          {router.map(function(route,index){
            var Layout = route.layout
            if(route.layout == null){
              Layout = 'div'
            }
            const Element = route.element
            return <Route path={route.path} element={
              <Layout>
                <Element/>
              </Layout>
            } key={index}/>
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;