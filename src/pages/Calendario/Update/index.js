import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Header from '../../../components/Header';
import api from '../../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import './style.css';

function Update() {
  const [calendario, setCalendario] = useState();
  const {id} = useParams();
  const history = useHistory();

  useEffect(() => {
      api.get('calendario/'.concat(id)).then(response => {
          setCalendario(response.data);
      })
  }, [id]);

  async function handleCadastro(e){
    e.preventDefault();
    try {
      const response = await api.put('calendario'.concat(id), {calendario});
    } catch (error) {
      history.pushState('/calendario')
    }
  }
  return (
    <>
      <Header/>
      <h1 className="text-center">Atualizar Calendário</h1>
      <Container className="container-vacina">          
        <Form fluid className="w-50" onSubmit={handleCadastro}>
            <FormGroup row>
                <Label for="dataInicial" sm={3} value={calendario?.dataInicial}> Data Inicial:</Label>
                <Input 
                  type="date" 
                  name="dataInicial" 
                  id="dataInicial" 
                  required
                  onChange={e => setCalendario(...calendario, e.target.value)}  
                />
            </FormGroup>
            <FormGroup row>
                <Label for="dataFinal" sm={3} value={calendario?.dataFinal}> Data Final:</Label>
                <Input 
                  type="date" 
                  name="dataFinal" 
                  id="dataFinal"
                  required 
                  onChange={e => setCalendario(...calendario, e.target.value)}  
                />
            </FormGroup>
            <FormGroup row>
                <Label for="faixaInicial" sm={3} value={calendario?.faixaInicial}> Faixa Inicial:</Label>
                <Input 
                  type="text" 
                  name="faixaInicial" 
                  id="faixaInicial"
                  required 
                  onChange={e => setCalendario(...calendario, e.target.value)}  
                />
            </FormGroup>
            <FormGroup row>
                <Label for="faixaFinal" sm={3} value={calendario?.faixaFinal}> Faixa Final:</Label>
                <Input 
                  type="text" 
                  name="faixaFinal" 
                  id="faixaFinal"
                  required 
                  onChange={e => setCalendario(...calendario, e.target.value)}  
                />
            </FormGroup>
            <Button type="submit" className="btn-vacina">Atualizar</Button>
        </Form>
    </Container>
    </>
  )
};

export default Update;