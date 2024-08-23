import React from "react"
import {Table} from "react-bootstrap"

class Medicamentos extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            medicamentos : [
                /** {"id":1, "nome": "Omeprazol", "data":"14/26"},
                {"id":2, "nome": "Dipirona Monohidrata", "data":"14/25"},
                {"id":3, "nome": "Cimegripe", "data":"08/26"},
                {"id":4, "nome": "Benegripe", "data":"02/26"},
                {"id":5, "nome": "Clonazepan", "data":"10/26"},
                {"id":6, "nome": "Cafeína", "data":"20/27"}, */
            ]
        }
    }

    componentDidMount(){
        fetch("https://localhost:3000/api/medicamentos")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ medicamento : dados})
            })
    }

    componentWillUnmount(){
        alert("o componente medicamento foi desmontado!")
    }

    render(){
        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Validade</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        this.state.medicamentos.map((medicamento) => //"medicamento" é variavel e "medicamentos" é o nome do state com os objetos json
                            <tr>
                                <td>{medicamento.id}</td>
                                <td>{medicamento.nome}</td>
                                <td>{medicamento.data}</td>
                                <td>Atualizar Excluir</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </Table>
        )
    }    
}

export default Medicamentos;