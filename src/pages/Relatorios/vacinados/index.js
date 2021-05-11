import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Header from '../../../components/Header';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';
import Relatorio from '../../../components/Relatorios'
import './style.css';

function Vacinados() {
  const [Vacinados, setVacinados] = useState();
  const [Data, setData] = useState();
  const history = useHistory();

  
  async function handleCadastro(e){
    e.preventDefault();
    try {
      const response = await api.post('vacinas');
      history.push('/vacinas')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Header/>
      <h1 className="text-center">Consultar Vacinados</h1>
      <Container fluid className="container-vacina">
        <Form fluid onSubmit={handleCadastro} className="w-50">
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
      {Vacinados ? <Relatorio vac={Vacinados}/> : 'Sem Filtro'}
    </>
  )
};

export default Vacinados;