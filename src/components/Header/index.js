import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BsBoxArrowInRight } from 'react-icons/bs';
import './style.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const Nome = localStorage.getItem('nome');
  const type = localStorage.getItem('type');
  const history = useHistory();
  useEffect(() => {
    if(type == undefined){
      if(window.location.href != 'https://vaccine-frontend-ns6ric6tg-erickcristhian.vercel.app/usuarios'){
        history.push('/login')
        }
    }
  }, [])
  const toggle = () => setIsOpen(!isOpen);

  function handleLogout(){
    localStorage.clear();
    history.push('/login')
  }
  return (
    <div>
      <Navbar dark expand="md">
      <Link to="/dashboard"><NavbarBrand><h1>Vaccine</h1></NavbarBrand></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { type == 'ADMIN' && 
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Vacinação
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/vacinacao">Vacinações Cadastradas</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
             }
             { type == 'ADMIN' && 
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Usuários
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/usuarios">Usuários Cadastrados</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/usuarios/novo">Cadastrar Usuário</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            }
            {type == 'ADMIN' && 
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Vacinas
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/vacinas">Vacinas Cadastradas</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/vacinas/novo">Cadastrar Vacina</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            }
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Calendários
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/calendario">Calendários Cadastrados</Link>
                </DropdownItem>
                {type == 'ADMIN' && 
                <DropdownItem>
                  <Link to="/calendario/novo">Cadastrar Calendário</Link>
                </DropdownItem>
                }
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>
          <NavbarText>
            {Nome}
            <Button color="link" className="btn-logout">
              <BsBoxArrowInRight size={20} color="#FFF" onClick={handleLogout}/>
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;