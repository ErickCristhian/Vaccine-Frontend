import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Header from '../../../components/Header';
import './style.css';

function Create() {
  return (
    <>
        <Header/>
        <h1 className="text-center">Cadastrar Usuário</h1>
        <Container fluid className="container-user">
            <Form className="w-50">
                <FormGroup>
                    <Label for="nome">Nome</Label>
                    <Input type="text" name="nome" id="nome" placeholder="Ex: João da Silva"/>
                </FormGroup>
                <FormGroup>
                    <Label for="idade">Idade</Label>
                    <Input type="number" name="idade" id="idade" placeholder="50"/>
                </FormGroup>
                <FormGroup>
                    <Label for="dataNasc">Data de Nascimento</Label>
                    <Input type="date" name="dataNasc" id="dataNasc"/>
                </FormGroup>
                <FormGroup>
                    <Label for="cidade">Cidade</Label>
                    <Input type="text" name="cidade" id="cidade" placeholder="São Paulo"/>
                </FormGroup>
                <FormGroup>
                    <Label for="estado">Estado</Label>
                    <Input type="text" name="estado" id="estado" placeholder="São Paulo"/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="joao@example.com"/>
                </FormGroup>
                <Button type="submit" className="btn-user">Cadastrar</Button>
            </Form>
        </Container>
    </>
  )
};

export default Create;