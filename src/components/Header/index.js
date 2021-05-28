import React, { useState } from 'react';
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
  const history = useHistory();
  const toggle = () => setIsOpen(!isOpen);
  const username = localStorage.getItem('nome');
  function handleLogout(e) {
    localStorage.clear();
    history.push('/login')
  }
  return (
    <div>
      <Navbar dark expand="md">
        <NavbarBrand><h1>Vaccine</h1></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Agendamento</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Relatórios
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Usuários Vacinados
                </DropdownItem>
                <DropdownItem>
                  Usuários p/ Vacinar
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Calendários
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/calendario">Calendários Cadastrados</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/calendario/novo">Cadastrar Calendário</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>
          <NavbarText>
            {username}
            <Button color="link" className="btn-logout" onClick={handleLogout}>
              <BsBoxArrowInRight size={20} color="#FFF"/>
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;