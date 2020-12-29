import './App.css';
import React, { useState} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './headersty.css'
import Home from './pages/Home.js'
import Projeto from './pages/Projeto.js'
import Conhecimentos from './pages/Conhecimentos.js'
import Sobre from './pages/Sobre.js'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="background">
      
        <Navbar expand="md" className='background-menu' light>
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHhcQs_Xhty6A/profile-displayphoto-shrink_100_100/0/1606271354952?e=1613606400&v=beta&t=ytLeE0QTRqdjA3zDQY9r9EeeY3DStykGZbQ7OQn-NyE" alt={'perfil-Edson'} className="perfil" />
          <strong className='user'>Édson Araújo</strong>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar >
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/portifolio/Home" className="options">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/portifolio/Projetos" className="options">Projetos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/portifolio/Habilidades" className="options">Nivel de Habilidade</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/portifolio/Sobre" className="options">Sobre</NavLink>
              </NavItem>
            </Nav>
            <NavbarText className="welcome">Seja Bem-vindo</NavbarText>
          </Collapse>
        </Navbar>
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portifolio/Home" component={Home} />
          <Route path="/portifolio/" component={Home} />
          <Route path="/portifolio/Projetos" component={Projeto} />
          <Route path="/portifolio/Habilidades" component={Conhecimentos} />
          <Route path="/portifolio/Sobre" component={Sobre} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
