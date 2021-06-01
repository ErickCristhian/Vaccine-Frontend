import React, {useEffect, useState} from 'react';
import {Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import moment from 'moment';

import api from '../../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../../components/Header';

function Update() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [dataNascimento, setDataNasc] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState();
    let data;
    const [dataFormatada, setData] = useState();
    const {id} = useParams();
    const history = useHistory();

    useEffect(()=>{
        api.get('usuarios/'.concat(id))
        .then(response => {
            setNome(response.data.nome)
            setIdade(response.data.idade)
            setCidade(response.data.cidade)
            setEstado(response.data.estado)
            setEmail(response.data.email)

            data = moment(response.data.dataNascimento).toISOString().substr(0,10)
            setDataNasc(data.toString())
        });
    }, [id]);


    async function handleCadastro(e){
        e.preventDefault();
        try {
          const response = await api.post('usuarios/editar/'.concat(id), {
              nome,
              idade,
              dataNascimento,
              cidade,
              estado,
              email
          });
          history.push('/usuarios')
        } catch (error) {
          console.log(error)
        }
      }
  return (
      <>
        <Header/>
        <h1 className="text-center">Atualizar Usuário</h1>
        <Container className="container-user">
            <Form fluid className="w-50" onSubmit={handleCadastro}>
                <FormGroup>
                    <Label for="nome"></Label>
                    <Input 
                        type="text" 
                        name="nome" 
                        id="nome"
                        defaultValue={nome}
                        onChange={e => setNome(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="idade"></Label>
                    <Input 
                        type="number" 
                        name="idade" 
                        id="idade"
                        defaultValue={idade}
                        onChange={e => setIdade(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="dataNasc"></Label>
                    <Input 
                        type="date" 
                        name="dataNasc" 
                        id="dataNasc"
                        defaultValue={dataNascimento}
                        onChange={e => setDataNasc(e.target.value)}
                        required
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="cidade"></Label>
                    <Input 
                        type="text" 
                        name="cidade" 
                        id="cidade"
                        defaultValue={cidade}
                        onChange={e => setCidade(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="estado"></Label>
                    <Input 
                        type="text" 
                        name="estado" 
                        id="estado"
                        defaultValue={estado}
                        onChange={e => setEstado(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="email"></Label>
                    <Input 
                        type="email" 
                        name="email" 
                        id="email"
                        defaultValue={email}
                        onChange={e => setEmail(e.target.value)}
                        required/>
                </FormGroup>
                <Button type="submit" className="btn-user">Salvar</Button>
            </Form>
        </Container>
      </>
  )
};

export default Update;