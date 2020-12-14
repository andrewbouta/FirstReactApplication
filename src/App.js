import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';

//<script src="https://unpkg.com/react-popper/dist/index.umd.js"></script>


function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand> 
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
