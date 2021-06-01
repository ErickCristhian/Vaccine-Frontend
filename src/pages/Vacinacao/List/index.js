import React, { useEffect, useState } from 'react';
import { Table, Container } from 'reactstrap';
import {Link} from 'react-router-dom';
import api from '../../../services/api';
import Header from '../../../components/Header';
import {MdEdit} from 'react-icons/md';
import {IoMdTrash} from 'react-icons/io';
import './style.css';

function List() {

  const [vacinacao, setVacinacao] = useState([]);

  useEffect(() => {
    api.get('/vacinacao').then(response => {
      setVacinacao(response.data);
    })


  }, []);
    return (
      <>
        <Header/>
        <h1 className="text-center">vacinações Cadastradas</h1>
        <Container fluid className="container-vacina">
          {console.log(vacinacao)}
          <Table striped responsive hover size="xs">
            <thead class="lista-vacinacao">
              <tr>
                <th></th>
                <th>Senha</th>
                <th>Primeira Dose</th>
                <th>Segunda Dose</th>
                <th>Vacinado 1°</th>
                <th>Vacinado 2°</th>
                <th>Local</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {vacinacao?.map(vacinacao => (
                <tr key={vacinacao.idVacinacao}>
                  <th scope="row">{vacinacao.idVacinacao}</th>
                  <td>{vacinacao.senhaVacina}</td>
                  <td>{vacinacao.primeiraDose}</td>
                  <td>{vacinacao.segundaDose}</td>
                  <td>{vacinacao.vacinadoPrimeiraDose ? 'Sim' : 'Não'}</td>
                  <td>{vacinacao.vacinadoSegundaDose ? 'Sim' : 'Não'}</td>
                  <td>{vacinacao.localVacinacao || 'Não definido'}</td>
                  <td><Link to={`/vacinacao/editar/${vacinacao.idVacinacao}`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
    </>
    );
}

export default List;