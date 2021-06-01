import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Header from '../../../components/Header';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';
import Relatorio from '../../../components/Relatorios'
import './style.css';
import moment from 'moment';

function Vacinacao() {
  const [Vacinacao, setVacinacao] = useState();
  const [dataVacinar, setData] = useState();
  const history = useHistory();

  
  async function handleVacinacao(e){
    e.preventDefault();
    try {
      const response = await api.get('vacinacao/relatorioParaVacinar',  {dataVacinar});
      setVacinacao(response.data)
      //history.push('/vacinas')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Header/>
      <h1 className="text-center">Consultar Vacinações</h1>
      <Container fluid className="container-vacina">
        <Form fluid onSubmit={handleVacinacao} className="w-50">
            <FormGroup row>
                <Label for="data" sm={4}>Data a pesquisar...</Label>
                <Input 
                  type="date" 
                  name="data" 
                  id="data" 
                  onChange={e => setData(e.target.value)}  
                />
            </FormGroup>
            <Button type="submit" className="btn-vacina">Pesquisar</Button>
        </Form>
      </Container>
      {Vacinacao ? <Relatorio vac={Vacinacao}/> : 'Sem Filtro'}
    </>
  )
};

export default Vacinacao;