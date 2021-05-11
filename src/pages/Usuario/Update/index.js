import React from 'react';
import {Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Header from '../../../components/Header';

function Update() {
  return (
      <>
        <Header/>
        <h1 className="text-center">Atualizar Usuário</h1>
        <Container className="container-user">
            <Form fluid className="w-50">
                <FormGroup>
                    <Label for="nome"></Label>
                    <Input type="text" name="nome" id="nome"/>
                </FormGroup>
                <FormGroup>
                    <Label for="idade"></Label>
                    <Input type="number" name="idade" id="idade"/>
                </FormGroup>
                <FormGroup>
                    <Label for="dataNasc"></Label>
                    <Input type="date" name="dataNasc" id="dataNasc"/>
                </FormGroup>
                <FormGroup>
                    <Label for="cidade"></Label>
                    <Input type="text" name="cidade" id="cidade"/>
                </FormGroup>
                <FormGroup>
                    <Label for="estado"></Label>
                    <Input type="text" name="estado" id="estado"/>
                </FormGroup>
                <FormGroup>
                    <Label for="email"></Label>
                    <Input type="email" name="email" id="email"/>
                </FormGroup>
                <Button type="submit" className="btn-user">Salvar</Button>
            </Form>
        </Container>
      </>
  )
};

export default Update;