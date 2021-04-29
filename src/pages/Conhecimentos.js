import React from 'react'
import 'animate.css'
import '../headersty.css'
import {
    Row
} from 'reactstrap';

function Conhecimentos() {
    return (
        <div>
        <div className="destaque body">
            <div className="animate__animated animate__backInLeft containers">
                <Row xs="1" sm="2" md="3">
                <div className="cardf">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                    <h2>80<span>%</span></h2>
                                </div>
                                <h2 className="text">Javascript</h2>
                            
                        </div>
                    </div>
                </div>
                <div className="cardf">
                    <div className="boxd">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                    <h2>70<span>%</span></h2>
                                </div>
                                <h2 className="text">ReactJS</h2>
                        </div>
                    </div>
                </div>
                <div className="cardf">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                                <div className="number">
                                    <h2>70<span>%</span></h2>
                                </div>
                                <h2 className="text">Vulnerabilidades Web</h2>
                        </div>
                    </div>
                </div>
                <div className="cardf">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                    <h2>60<span>%</span></h2>
                                </div>
                                <h2 className="text">Bash</h2>
                        </div>
                    </div>
                </div>
                <div className="cardf">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                                <div className="number">
                                    <h2>50<span>%</span></h2>
                                </div>
                                <h2 className="text">Arduino</h2>
                        </div>
                    </div>
                </div>
                <div className="cardf">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                               <div className="number">
                                    <h2>40<span>%</span></h2>
                                </div>
                                <h2 className="text">Python</h2>
                        </div>
                    </div>
                </div>
                </Row>
            </div>
        </div>
            <footer>
                <div>
                    *O nível de habilidade foi calculado com base na quantidade de experiência, costume, resolução de problemas, e projetos relizados com alguma linguagem, plataforama, ou técnicas .
                </div>
            </footer>
        </div>
    )
}

export default Conhecimentos;