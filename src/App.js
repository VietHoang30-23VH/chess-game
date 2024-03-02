import Nav from './components/navigation/Nav';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './components/Login/Login';
import Resgister from './components/Register/register';
import IntervalCarousel from './components/Carousel/IntervalCarousel';
function App() {
  return (
    <BrowserRouter> 
    <header>
    <div className='app-container'>
      <Nav/>
      <Routes>
          <Route path="/puzzle" elemens={<div>Puzzle</div>} />
          <Route path="/analyze" element={<div>Analyze</div>} />
          <Route path="/profile" element={<div>Profile</div>} />
          <Route path="/upgrade" element={<div>Upgrade</div>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Resgister/>} />
          <Route path="/login" element={<div>Sign in</div>} />
          <Route path="/" element={<div>Home</div>} />
          <Route path="*" element={<div>404 NOT FOUND</div>} />
        </Routes>
    </div>
    </header>
    <body>
    <div className='body_home' style={{ backgroundColor: 'grey' }}>
  <IntervalCarousel />
    </div>
    </body>
    </BrowserRouter>
  );
}

export default App;
