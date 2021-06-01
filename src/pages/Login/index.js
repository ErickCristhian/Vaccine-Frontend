import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import CryptoJS from 'crypto-js';
import {
    Navbar, 
    NavbarBrand, 
    Form, 
    FormGroup,  
    Input, 
    Button,
    Col,
    Container} from 'reactstrap';
import api from '../../services/api';
import './style.css';

function Login() {
    const [email, setLogin] = useState('');
    const [Password, setPassword] = useState('');
    const history = useHistory();
    
    async function handleSubmit(e){
        e.preventDefault();
        try {
            let hash = CryptoJS.SHA256(Password)
            const senha = hash.toString(CryptoJS.enc.Base64);
            
            const response = await api.post('/login', {email, senha})
            
            if(response.data){
                localStorage.setItem('nome', response.data.nome)
                localStorage.setItem('id', response.data.idUsuario)
                localStorage.setItem('type', response.data.tipo)
                
                history.push('/dashboard');
            }
        } catch (error) {
            alert('Falha no Login, tente Novamente.')
        }
    }
  return (
      <>
        <Navbar dark expand="md" fluid={true}>
            <NavbarBrand fluid={true}><h1 class="home">Vaccine</h1></NavbarBrand>
        </Navbar>

        <Container fluid className="container-login">
            <Form fluid className="form-login" onSubmit={handleSubmit}>
            <h1 className="text-sm-center text-white login">Acessar</h1>
                <FormGroup row>
                    <Col>
                        <Input type="text" 
                        name="nome" 
                        id="nome" 
                        placeholder="E-mail"
                        className="input-login"
                        required
                        onChange={e => setLogin(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="12" sm="12">
                        <Input type="password" 
                        name="senha" 
                        id="senha" 
                        placeholder="Senha"
                        className="input-login"
                        required
                        onChange={e => setPassword(e.target.value)}/>
                    </Col>
                </FormGroup>
                <Button type="submit" className="btn-login">
                    Login
                </Button>
                <div class="link-cadastro">
                    <p>Ainda não realizou seu cadastro? <Link to="/usuarios/novo" className="text-white">-----LINK----</Link></p>
                </div>
            </Form>
        </Container>
      </>
  );
}

export default Login;