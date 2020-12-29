import React from 'react'
import 'animate.css'
import '../headersty.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Typist from 'react-typist';
import {
    Jumbotron,
    Row,
    Card,
    CardText,
    CardBody
} from 'reactstrap';

function Sobre() {
    return (
        <div className="destaque">
            <div>
                <Typist className="digitacao">
                    Sobre
                </Typist>
            </div>
            <div className="sobre">
                <img className="sobre-menu" src="https://media-exp1.licdn.com/dms/image/C4D03AQHhcQs_Xhty6A/profile-displayphoto-shrink_100_100/0/1606271354952?e=1613606400&v=beta&t=ytLeE0QTRqdjA3zDQY9r9EeeY3DStykGZbQ7OQn-NyE" alt={'perfil-Edson'}  />
            </div>
<Jumbotron className="rest-ts">
<Row xs="1" sm="2" md="3">
    <div>

    </div>
            <Card className="animate__animated animate__backInLeft content-sobre">
        <CardBody>
            <CardText>Estou cursando o segundo ano de eletrônica, no CEFET.
                 Participo de diversas competições, sumô de robôs, Solmar, Capture the flag, e a Olimpiadas brasileira de Robótica que neste ano a minha equipe ficou em segundo lugar, do estado. nestes projetos conseguir aprimorar bastante os meus conhecimentos,
                 tanto de software e hardware, quanto trabalho em equipe. Sempre estou aprendendendo algo novo, e fazendo algum projeto.</CardText>
        </CardBody>
    </Card>
</Row>
    </Jumbotron>     
        </div>
    )
}

export default Sobre;
                    
