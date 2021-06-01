import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {useHistory} from 'react-router-dom';
import Header from '../../../components/Header';
import api from '../../../services/api';
import Cryptojs from 'crypto-js';
import './style.css';
import moment from 'moment';

function Create() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [dataNascimento, setDataNasc] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [email, setEmail] = useState('');
    let data;
    const [password, setPassword] = useState('');
    const history = useHistory();


    async function handleCadastro(e){
        e.preventDefault();
        try {
            let hash = Cryptojs.SHA256(password)
            const senha = hash.toString(Cryptojs.enc.Base64);
            const response = await api.post('usuarios', {
                nome,
                idade,
                dataNascimento,
                cidade,
                estado,
                email,
                senha
            });
          history.push('/dashboard')
        } catch (error) {
          console.log(error)
        }
      }
  return (
    <>
        <Header/>
        <h1 className="text-center">Cadastrar Usuário</h1>
        <Container fluid className="container-user">
            <Form className="w-50" onSubmit={handleCadastro}>
                <FormGroup>
                    <Label for="nome">Nome</Label>
                    <Input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        placeholder="Ex: João da Silva"
                        onChange={e => setNome(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="idade">Idade</Label>
                    <Input 
                        type="number" 
                        name="idade" 
                        id="idade" 
                        placeholder="50"
                        onChange={e => setIdade(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="dataNasc">Data de Nascimento</Label>
                    <Input 
                        type="date" 
                        name="dataNasc" 
                        id="dataNasc"
                        onChange={e => setDataNasc(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="cidade">Cidade</Label>
                    <Input 
                        type="text" 
                        name="cidade" 
                        id="cidade" 
                        placeholder="São Paulo"
                        onChange={e => setCidade(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="estado">Estado</Label>
                    <Input 
                        type="text" 
                        name="estado" 
                        id="estado" 
                        placeholder="São Paulo"
                        onChange={e => setEstado(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="joao@example.com"
                        onChange={e => setEmail(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="senha">Senha:</Label>
                    <Input 
                        type="password" 
                        name="senha" 
                        id="senha" 
                        onChange={e => setPassword(e.target.value)}
                        required/>
                </FormGroup>
                <Button type="submit" className="btn-user">Cadastrar</Button>
            </Form>
        </Container>
    </>
  )
};

export default Create;