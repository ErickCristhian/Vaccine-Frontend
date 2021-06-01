import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Label, Button,CustomInput} from 'reactstrap';
import Header from '../../../components/Header';
import api from '../../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import './style.css';

function Update() {
  const [vacinacao, setVacinacao] = useState();
  const [vacinadoPrimeiraDose, setPrimeiraDose] = useState(false);
  const [vacinadoSegundaDose, setSegundaDose] = useState(false);
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
      const response = await api.post('vacinacao/editar/'.concat(id), {vacinadoPrimeiraDose, vacinadoSegundaDose});
      history.push('/vacinacao')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Header/>
      <h1 className="text-center">Atualizar vacinacao</h1>
      <Container className="container-vacina atualizar-vacinacao">    

        <Form fluid className="w-50" onSubmit={handleCadastro}>
            <FormGroup row>
                <Label sm={6}>Senha: {vacinacao?.senhaVacina}</Label>
            </FormGroup>
            <FormGroup row>
                <Label sm={6}>Primeira Dose: {vacinacao?.primeiraDose}</Label>
            </FormGroup>
            <FormGroup row>
                <Label sm={6}>Segunda Dose: {vacinacao?.segundaDose}</Label>
            </FormGroup>
            <FormGroup row>
                <Label for="primeiraDose" sm={6}>Tomou a Primeira Dose</Label>
                <div>
                <CustomInput 
                    type="switch" 
                    id="primeiraDose" 
                    name="primeiraDose"
                    onChange={e => setPrimeiraDose(!vacinadoPrimeiraDose)}/>
                </div>
            </FormGroup>
            <FormGroup row>
                <Label for="segundaDose" sm={6}>Tomou a Segunda Dose</Label>
                <div>
                  <CustomInput 
                      type="switch" 
                      id="segundaDose" 
                      name="segundaDose"
                      onChange={e => setSegundaDose(!vacinadoSegundaDose)}/>
                </div>
            </FormGroup>
            
            <Button type="submit" className="btn-vacina">Atualizar</Button>
        </Form>
    </Container>
    </>
  )
};

export default Update;