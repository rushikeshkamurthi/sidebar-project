import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import FileManager from './pages/FileManager';
import Sidebar from './component/Sidebar';
import RouteConfig from './RouteConfig';
function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar>
        <Routes>
        {RouteConfig.map((route, index) => {
          if(route.subRoutes){
            route.subRoutes.map((route,index) =>(<Route key={index} to={route.path} element={route.component} />))
          }
          return <Route key={index} to={route.path} element={route.component} />
        })}
        </Routes>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
