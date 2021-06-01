import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Header from '../../../components/Header';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';
import Relatorio from '../../../components/Relatorios'
import './style.css';
import moment from 'moment';

function Vacinados() {
  const [Vacinados, setVacinados] = useState();
  const [data, setData] = useState();
  let dataVacinados;
  const history = useHistory();

  
  async function handleVacinacoes(e){
    e.preventDefault();
    try {

      //const response = await api.get('/vacinacao/vacinados', {dataVacinados});
      //setVacinados(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Header/>
      <h1 className="text-center">Consultar Vacinados</h1>
      <Container fluid className="container-vacina">
        <Form fluid onSubmit={handleVacinacoes} className="w-50">
            <FormGroup row>
                <Label for="data" sm={4}>Data a pesquisar...</Label>
                <Input 
                  type="date" 
                  name="data" 
                  id="data" 
                  required
                  onChange={e => setData(e.target.value)}  
                />
            </FormGroup>
            <Button type="submit" className="btn-vacina">Pesquisar</Button>
        </Form>
      </Container>
      
    </>
  )
};

export default Vacinados;