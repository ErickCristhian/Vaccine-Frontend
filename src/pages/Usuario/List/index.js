import React from 'react';
import {Link} from 'react-router-dom';
import { Table, Container } from 'reactstrap';
import Header from '../../../components/Header';
import {MdEdit} from 'react-icons/md';
import {IoMdTrash} from 'react-icons/io';

function List() {
    return (
      <>
      <Header/>
      <h1 className="text-center">Usuários Cadastrados</h1>
      <Container fluid>
        <Table striped>
          <thead class="lista-vacina">
            <tr>
              <th>#</th>
              <th>Nome da Vacina</th>
              <th>Total de Doses</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td><Link to={`/usuarios/editar/1`}><MdEdit size={30} color="#2BA8EA"/></Link></td>
              <td><IoMdTrash size={30} color="#EE0000"/></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
    );
}

export default List;