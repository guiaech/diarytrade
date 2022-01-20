import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './styles.css';
import axios from 'axios';
import Api from '../../../../services/api'




var idone = Math.floor(Date.now() * Math.random()).toString(36)
var userone = "teste"; // variável para capturar e-mail usuário
class Dash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            capital: '', data: '', delta: '', meta: '', metaloss: '', pobservacao: '',
             poperacao: '', resultado: ''
         };
 
         this.handleChangeCapital      =    this.handleChangeCapital.bind(this);
         this.handleChangeData         =    this.handleChangeData.bind(this);
         this.handleChangeDelta        =    this.handleChangeDelta.bind(this);
         this.handleChangeMeta         =    this.handleChangeMeta.bind(this);
         this.handleChangeMetaLoss     =    this.handleChangeMetaLoss.bind(this);
         this.handleChangePObervacao   =    this.handleChangePObservacao.bind(this);
         this.handleChangePOperacao    =    this.handleChangePOperacao.bind(this);
         this.handleChangeResultado    =    this.handleChangeResultado.bind(this);
         this.handleSubmit             =    this.handleSubmit.bind(this);
    }



    handleChangeCapital(event) {
        this.setState({ capital      :   event.target.value });
    }
    handleChangeData(event) {
        this.setState({ data         :   event.target.value });
    }
    handleChangeDelta(event) {
        this.setState({ delta        :   event.target.value });
    }
    handleChangeMeta(event) {
        this.setState({ meta         :   event.target.value });
    }
    handleChangeMetaLoss(event) {
        this.setState({ metaloss     :   event.target.value });
    }
    handleChangePObservacao(event) {
        this.setState({ pobservacao  :   event.target.value });
    }
    handleChangePOperacao(event) {
        this.setState({ poperacao    :   event.target.value });
    }
    handleChangeResultado(event) {
        this.setState({ resultado    :   event.target.value });
    }



    handleSubmit(event) {
        event.preventDefault();
        const id           =    idone;
        const capital      =    this.state.capital;
        const data         =    this.state.data;
        const delta        =    this.state.delta;
        const user         =    userone;
        const meta         =    this.state.meta;
        const metaloss     =    this.state.metaloss;
        const pobservacao  =    this.state.pobservacao;
        const poperacao    =    this.state.poperacao;
        const resultado    =    this.state.resultado;

        axios({
            method: 'put',
            url: Api,
            data: {
                id          :   id,
                capital     :   capital,
                data        :   data,
                delta       :   delta,
                user        :   user,
                meta        :   meta,
                metaloss    :   metaloss,
                pobservacao :   pobservacao,
                poperacao   :   poperacao,
                resultado   :   resultado,

            }
        });
        let content = document.getElementById('area')

        let carregando = `<p>sending...</p>`

        let pronto = `<p class="cadastrado">DIARY SENT SUCCESSFULLY!</p>`

        content.innerHTML = carregando


        setTimeout(() => {
            content.innerHTML = pronto
        }, 1000)
    }

    render() {
        const {capital , data , delta , meta , metaloss , pobservacao , poperacao , resultado   } = this.state
        return (

            <div className='area' id="area">
                 <form onSubmit={this.handleSubmit} id="formulario">
                    <CardGroup>
                        <Card>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">Data</InputGroup.Text>
                                <FormControl
                                    id='data'
                                    name='data'
                                    type='date'
                                    value={data} onChange={this.handleChangeData}
                                    aria-label="Data"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <br />
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">Meta</InputGroup.Text>
                                <FormControl
                                    id='meta'
                                    name='meta'
                                    value={meta} onChange={this.handleChangeMeta}
                                    aria-label="Meta"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <br />
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">Meta Loss</InputGroup.Text>
                                <FormControl
                                    id='metaloss'
                                    name='metaloss'
                                    value={metaloss} onChange={this.handleChangeMetaLoss}
                                    aria-label="Meta-loss"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <br />
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">Capital</InputGroup.Text>
                                <FormControl
                                    id='capital'
                                    name='capital'
                                    value={capital} onChange={this.handleChangeCapital}
                                    aria-label="Capital"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <br />
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default"> Delta </InputGroup.Text>
                                <FormControl
                                    id='delta'
                                    name='delta'
                                    value={delta} onChange={this.handleChangeDelta}
                                    aria-label="Delta"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <br />
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">Resultado</InputGroup.Text>
                                <FormControl
                                    id='resultado'
                                    name='resultado'
                                    value={resultado} onChange={this.handleChangeResultado}
                                    aria-label="Resultado"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <br />
                        </Card>
                        <Card>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default" className='areatextpos'>Pontos de Observação</InputGroup.Text>
                                <textarea id='pobservacao' name='pobservacao' value={pobservacao} onChange={this.handleChangePObervacao} label="Pontos negativos"></textarea>
                            </InputGroup>
                            <br />

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default" className='areatextneg'>Pontos de Operação</InputGroup.Text>
                                <textarea id='poperacao' name='poperacao' value={poperacao} onChange={this.handleChangePOperacao} label="Pontos negativos"></textarea>
                            </InputGroup>
                        </Card>
                    </CardGroup>
                    <div className="divSubmit">
                        <button type="submit" value="enviar" className="buttonForm">
                            SEND
                        </button>
                    </div>
                </form>
            </div>


        );

    }
}

export default Dash;