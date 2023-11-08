import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Funcomp from './components/Funcomp'
import Home from './components/Home'

function App() {
  const obj1={name:'rohan', age:20}
  return (
    <>
     <Nav/>
     <Home/>
     <Funcomp {...obj1}  />
     </>
  );
}

export default App;
