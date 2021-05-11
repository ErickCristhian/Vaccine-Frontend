import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Container, 
    Navbar, 
    NavbarBrand, 
    Row, 
    Col, 
    Button } from 'reactstrap';
import home from '../../assets/images/home.png';
import './style.css';

function Home() {
  return (
      <>
        <Navbar dark expand="md" fluid={true}>
            <NavbarBrand fluid={true}><h1 class="home">Vaccine</h1></NavbarBrand>
        </Navbar>
        <Container fluid={true} className="home-container">
            
            <div>
                    <Button className="cadastro" size="lg">
                        <Link to=""> Cadastre-se </Link>
                    </Button>
                    <Button size="lg" className="login">
                        <Link to="" className="text-white"> Entrar </Link>
                    </Button>
            </div> 
            <div>
                <img src={home}/>
            </div>
        </Container>
      </>
  );
}

export default Home;