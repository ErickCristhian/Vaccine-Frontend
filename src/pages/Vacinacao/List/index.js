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
  }, [vacinacao]);
    return (
      <>
        <Header/>
        <h1 className="text-center">vacinações Cadastradas</h1>
        <Container fluid>
          <Table striped responsive hover size="xs">
            <thead class="lista-vacinacao">
              <tr>
                <th></th>
                <th>Nome do Usuário</th>
                <th>Nome da vacinacao</th>
                <th>Senha</th>
                <th>Primeira Dose</th>
                <th>Segunda Dose</th>
                <th>Local</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {vacinacao?.map(vacinacao => (
                <tr key={vacinacao.idVacinacao}>
                  <th scope="row">{vacinacao.idVacinacao}</th>
                  <td>{vacinacao.nomeUsuario}</td>
                  <td>{vacinacao.nomeVacina}</td>
                  <td>{vacinacao.senha}</td>
                  <td>{vacinacao.primeiraDose}</td>
                  <td>{vacinacao.segundaDose}</td>
                  <td>{vacinacao.localVacinacao}</td>
                  <td><Link to={`/vacinacao/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
              ))}
                <tr>
                  <th scope="row">1</th>
                  <td>João</td>
                  <td>Astrazeneca</td>
                  <td>1254668ABC</td>
                  <td>Não</td>
                  <td>Não</td>
                  <td>Ponto 400</td>
                  <td><Link to={`/vacinacao/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
                <tr>
                <th scope="row">2</th>
                  <td>Maria</td>
                  <td>Astrazeneca</td>
                  <td>216515KJDJK</td>
                  <td>Sim</td>
                  <td>Sim</td>
                  <td>Ponto 220</td>
                  <td><Link to={`/vacinacao/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
                  <td><IoMdTrash size={30} color="#EE0000"/></td>
                </tr>
            </tbody>
          </Table>
        </Container>
    </>
    );
}

export default List;