import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import Cryptojs from 'crypto-js';
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
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const history = useHistory();
    
    async function handleSubmit(e){
        e.preventDefault();
        try {
            var hash = Cryptojs.SHA256(Password);
            const senha = hash.toString(Cryptojs.enc.Base64);

            const response = await api.post('/login', {email, senha})

            localStorage.setItem('user_id', response.data.idUsuario)
            localStorage.setItem('nome', response.data.nome)
            localStorage.setItem('type', response.data.tipo)
            history.push('/dashboard');
            
        } catch (error) {
            console.log(error)
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
                        <Input type="email" 
                        name="nome" 
                        id="nome" 
                        placeholder="E-mail"
                        className="input-login"
                        required
                        onChange={e => setEmail(e.target.value)}/>
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
                    <p>Ainda não realizou seu cadastro? -----LINK----</p>
                </div>
            </Form>
        </Container>
      </>
  );
}

export default Login;