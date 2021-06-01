import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Header from '../../../components/Header';
import api from '../../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import './style.css';

function Update() {
  const [nomeVacina, setNomeVacina] = useState();
  const [totalDoses, setTotalDoses] = useState();
  const [intervalo, setIntervalo] = useState();

  const {id} = useParams();
  const history = useHistory();

  useEffect(() => {
      api.get('vacinas/'.concat(id)).then(response => {
          setNomeVacina(response.data.nomeVacina)
          setTotalDoses(response.data.totalDoses)
          setIntervalo(response.data.intervalo)
      })
  }, [id]);

  async function handleCadastro(e){
    e.preventDefault();
    try {
      await api.post('vacinas/editar/'.concat(id), {nomeVacina, totalDoses, intervalo});
      history.push('/vacinas')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Header/>
      <h1 className="text-center">Atualizar Vacina</h1>
      <Container className="container-vacina">          
        <Form fluid className="w-50" onSubmit={handleCadastro}>
            <FormGroup row>
                <Label for="nomeVacina" sm={2}> Nome</Label>
                <Input 
                  type="text" 
                  name="nomeVacina" 
                  id="nomeVacina" 
                  defaultValue={nomeVacina || ''}
                  required
                  onChange={e => setNomeVacina(e.target.value)}  
                />
            </FormGroup>
            <FormGroup row>
                <Label for="totalDoses" sm={6}>Total de Doses</Label>
                <Input 
                  type="number" 
                  name="totalDoses" 
                  id="totalDoses"
                  defaultValue={totalDoses}
                  required
                  onChange={e => setTotalDoses(e.target.value)}
                />
            </FormGroup>
            <FormGroup row>
                <Label for="intervalo" sm={6}>Intervalo</Label>
                <Input 
                  type="number" 
                  name="intervalo" 
                  id="intervalo"
                  defaultValue={intervalo}
                  required
                  onChange={e => setIntervalo(e.target.value)}
                />
            </FormGroup>
            
            <Button type="submit" className="btn-vacina">Atualizar</Button>
        </Form>
    </Container>
    </>
  )
};

export default Update;