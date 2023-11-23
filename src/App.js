import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import {useSelector} from 'react-redux';
import { SelectSignIn } from './features/userSlice';
import Blog from './components/Blog';
function App() {
  const isSignIn = useSelector(SelectSignIn)
  return (
    <div className="App">
      <NavBar/>
       <HomePage/>
       {isSignIn ? <Blog/>: ""}
    </div>
  );
}

export default App;
