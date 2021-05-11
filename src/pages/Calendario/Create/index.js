import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Header from '../../../components/Header';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';
import './style.css';

function Create() {
  const [calendar, setCalendar] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [idade, setIdade] = useState([]);
  async function handleCadastro(e){
    e.preventDefault();
    try {
  
    } catch (error) {
      
    }
  }
  return (
    <>
      <Header/>
      <h1 className="text-center"> Cadastrar Novo Calendário</h1>
      <Container fluid className="container-vacina">
        <Form fluid onSubmit={handleCadastro} className="w-50">
            {calendar?.map(calendario => ( 
              <>
                <FormGroup row>
                    <Label for={calendario} sm={2}>Data Inicial:</Label>
                    <Input 
                      type="datetime" 
                      name="data1" 
                      id="data1" 
                    />
                </FormGroup>            
                <FormGroup row>
                    <Label for="data2" sm={2}>Final Inicial:</Label>
                    <Input 
                      type="datetime" 
                      name="data2" 
                      id="data2" 
                    />
                </FormGroup>            
                <FormGroup row>
                    <Label for="idade" sm={2}>Idade:</Label>
                    <Input 
                      type="text" 
                      name="idade" 
                      id="idade" 
                      placeholder="50-90" 
                    />
                </FormGroup>            
              </>
            ))}
            <Button type="submit" className="btn-vacina">Cadastrar</Button>
        </Form>
      </Container>
    </>
  )
};

export default Create;