import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Header from '../../../components/Header';
import api from '../../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import './style.css';

function Update() {
  const [nomeVacina, setNomeVacina] = useState();
  const [totalDoses, setTotalDoses] = useState();
  const {id} = useParams();
  const history = useHistory();

  useEffect(() => {
      api.get('vacinas/'.concat(id)).then(response => {
          setTotalDoses(response.totalDoses);
          setNomeVacina(response.nomeVacina);
      })
  }, [id]);

  async function handleCadastro(e){
    e.preventDefault();
    try {
      const response = await api.put('vacinas'.concat(id), {nomeVacina, totalDoses});
    } catch (error) {
      history.pushState('/vacinas')
    }
  }
  return (
    <>
      <Header/>
      <h1 className="text-center">Atualizar Vacina</h1>
      <Container className="container-vacina">          
        <Form fluid className="w-50" onSubmit={handleCadastro}>
            <FormGroup row>
                <Label for="nomeVacina" sm={2} value={nomeVacina}> Nome</Label>
                <Input 
                  type="text" 
                  name="nomeVacina" 
                  id="nomeVacina" 
                  placeholder="Ex: Coronavac"
                  onChange={e => setNomeVacina(e.target.value)}  
                />
            </FormGroup>
            <FormGroup row>
                <Label for="totalDoses" sm={6} value={nomeVacina}>Total de Doses</Label>
                <Input 
                  type="number" 
                  name="totalDoses" 
                  id="totalDoses"
                  placeholder="Ex: 150"
                  onChange={e => setTotalDoses(e.target.value)}
                />
            </FormGroup>
            
            <Button type="submit" className="btn-vacina">Atualizar</Button>
        </Form>
    </Container>
    </>
  )
};

export default Update;