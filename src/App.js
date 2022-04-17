import Mynav from './components/Mynav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Content from './components/Content';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import MoreContent from './components/MoreContent';
import AddPlayer from './components/AddPlayer';
import UpdatePlayer from './components/UpdatePlayer'

function App() {

  return (
    <Router>
    <div >
      <Mynav />
      <div className="container mt-3">
      {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
      <Routes>
        <Route path='/' element={<Content />}>
        </Route>
        <Route path='/more/:id' element={<MoreContent />}>
        </Route>
        <Route path='/addplayer' element={<AddPlayer />}>
        </Route>
        <Route path='/updateplayer/:id' element={<UpdatePlayer />}>
        </Route>
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
