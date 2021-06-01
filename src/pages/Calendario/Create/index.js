import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Header from '../../../components/Header';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';
import './style.css';

function Create() {
  const [dataInicio, setDataInicio] = useState();
  const [dataFinal, setDataFinal] = useState();
  const [faixaEtariaInicial, setfaixaEtariaInicial] = useState();
  const [faixaEtariaFinal, setfaixaEtariaFinal] = useState();
  const history = useHistory();
  
  async function handleCadastro(e){
    e.preventDefault();
    try {
      const response = await api.post('calendario-vacinacao',
      {
        dataInicio,
        dataFinal,
        faixaEtariaInicial,
        faixaEtariaFinal
      })
      history.push('/calendario')
  
    } catch (error) {
      
    }
  }
  return (
    <>
      <Header/>
      <h1 className="text-center"> Cadastrar Novo Calendário</h1>
      <Container fluid className="container-vacina">
        <Form fluid onSubmit={handleCadastro} className="w-50">
              <FormGroup row>
                  <Label for="data1" sm={2}>Data Inicial:</Label>
                  <Input 
                    type="date" 
                    name="data1" 
                    id="data1"
                    onChange={e=>setDataInicio(e.target.value)}
                    required
                  />
              </FormGroup>            
              <FormGroup row>
                  <Label for="data2" sm={2}>Data Final:</Label>
                  <Input 
                    type="date" 
                    name="data2" 
                    id="data2"
                    onChange={e=>setDataFinal(e.target.value)}
                    required 
                  />
              </FormGroup>            
              <FormGroup row>
                  <Label for="idade" sm={3}>Idade Inicial:</Label>
                  <Input 
                    type="number" 
                    name="idade" 
                    id="idade" 
                    placeholder="90"
                    onChange={e=>setfaixaEtariaInicial(e.target.value)}
                    required 
                  />
              </FormGroup>
              <FormGroup row>
                  <Label for="idade" sm={2}>Idade Final:</Label>
                  <Input 
                    type="number" 
                    name="idade" 
                    id="idade" 
                    placeholder="50"
                    onChange={e=>setfaixaEtariaFinal(e.target.value)}
                    required 
                  />
              </FormGroup>              
            <Button type="submit" className="btn-vacina">Cadastrar</Button>
        </Form>
      </Container>
    </>
  )
};

export default Create;