import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Header from '../../../components/Header';
import api from '../../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import './style.css';

function Update() {
  const [vacinacao, setVacinacao] = useState();
  const [nomevacinacao, setNomevacinacao] = useState();
  const [totalDoses, setTotalDoses] = useState();
  const {id} = useParams();
  const history = useHistory();

  useEffect(() => {
      api.get('vacinacao/'.concat(id)).then(response => {
          setVacinacao(response.data);
      })
  }, [id]);

  async function handleCadastro(e){
    e.preventDefault();
    try {
      const response = await api.put('vacinacao'.concat(id), {nomevacinacao, totalDoses});
    } catch (error) {
      history.pushState('/vacinacaos')
    }
  }
  return (
    <>
      <Header/>
      <h1 className="text-center">Atualizar vacinacao</h1>
      <Container className="container-vacinacao">          
        <Form fluid className="w-50" onSubmit={handleCadastro}>
            <FormGroup row>
                <Label for="nomevacinacao" sm={2} value={nomevacinacao}> Nome</Label>
                <Input 
                  type="text" 
                  name="nomevacinacao" 
                  id="nomevacinacao" 
                  placeholder="Ex: Coronavac"
                  onChange={e => setNomevacinacao(e.target.value)}  
                />
            </FormGroup>
            <FormGroup row>
                <Label for="totalDoses" sm={6} value={nomevacinacao}>Total de Doses</Label>
                <Input 
                  type="number" 
                  name="totalDoses" 
                  id="totalDoses"
                  placeholder="Ex: 150"
                  onChange={e => setTotalDoses(e.target.value)}
                />
            </FormGroup>
            
            <Button type="submit" className="btn-vacinacao">Atualizar</Button>
        </Form>
    </Container>
    </>
  )
};

export default Update;