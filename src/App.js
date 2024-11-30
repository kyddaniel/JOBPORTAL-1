import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AllPosts from './components/AllPosts';
import Create from './components/Create';
import Edit from './components/Edit';
import Search from './components/Search';

function App() {
  return (
    <>
     <Navbar/>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<AllPosts/>}/>
     <Route path="/create" element={<Create />} />
     <Route path="/edit" element={<Edit />} />
     </Routes>
     </BrowserRouter> 
    </>
    );
}

export default App;
