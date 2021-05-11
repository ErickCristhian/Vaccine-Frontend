import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './pages/Vacina/Create';
import Vacinas from './pages/Vacina/List';
import VacinaEditar from './pages/Vacina/Update';
import Vacinacao from './pages/Vacinacao/List';
import VacinacaoEditar from './pages/Vacinacao/Update';
import Usuarios from './pages/Usuario/List';
import UsuarioNovo from './pages/Usuario/Create';
import UsuarioEditar from './pages/Usuario/Update';
import Home from './pages/Home';
import Login from './pages/Login';
import Calendario from './pages/Calendario/Create';
import RVacinados from './pages/Relatorios/vacinados';
import RVacinacao from './pages/Relatorios/vacinacao';
import Footer from './components/Footer';



export default function Routes(){
    return (
        <Router>
            <Switch>
                {/* rota home */}
                <Route path="/" exact component={Home}/>
                {/* rota home */}
                {/*Rota de Login */}
                <Route path="/login" exact component={Login}/>
                {/*Rota de Login */}
                {/*rotas de usuário */}
                <Route path="/usuarios" exact component={Usuarios}/>
                <Route path="/usuarios/novo" exact component={UsuarioNovo}/>
                <Route path="/usuarios/editar/:id" exact component={UsuarioEditar}/>
                {/*rotas de usuário */}

                {/*rotas de vacina */}
                <Route path="/vacinas" exact component={Vacinas}/>
                <Route path="/vacinas/novo" exact component={Create}/>
                <Route path="/vacinas/editar/:id" exact component={VacinaEditar}/>
                {/*rotas de vacina */}
                {/*rotas de vacinação*/}
                <Route path="/vacinacao" exact component={Vacinacao}/>
                <Route path="/vacinacao/editar/:id" exact component={VacinacaoEditar}/>
                {/*rotas de vacinação*/}
                {/*rotas de calendario */}
                <Route path="/calendario" exact component={Calendario}/>
                {/*rotas de calendario */}

                {/*rotas de relatórios */}
                <Route path="/relatorios/vacinados" exact component={RVacinados}/>
                <Route path="/relatorios/vacinacao" exact component={RVacinacao}/>
                {/*rotas de calendario */}
            </Switch>
        </Router>
    );
}