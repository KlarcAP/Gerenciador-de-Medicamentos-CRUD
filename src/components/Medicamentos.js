import React from "react"
import {Table, Button} from "react-bootstrap"

class Medicamentos extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            medicamentos : [
                {"id":1, "nome": "Omeprazol", "data":"14/26", "quantidade": "11", "lote": "Omeprazol-LT07X",},
                {"id":2, "nome": "Dipirona Monohidratada", "data":"14/25", "quantidade": "28", "lote": "Dipirona-D13X",},
                {"id":3, "nome": "Cimegripe", "data":"08/26", "quantidade": "13", "lote": "Cimegripe-D34"},
                {"id":4, "nome": "Benegripe", "data":"02/26", "quantidade": "40", "lote": "Benegripe-D23X",},
                {"id":5, "nome": "Clonazepan", "data":"10/26", "quantidade": "15", "lote": "Clonazepan-D06X",},
                {"id":6, "nome": "Cafeína", "data":"20/27", "quantidade": "62", "lote": "Caf-Y82",},
            ]
        }
    }

    componentDidMount(){
        this.buscarMecicamento();
    }

    componentWillUnmount(){
        alert("o componente medicamento foi desmontado!")
    }


    buscarMecicamento(){
        fetch("")
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({ medicamento : dados})
        })
    }

    deletarMedicamento() {
        // Implementar a chamada para deletar medicamento
        alert("Deseja deletar esse medicamento?");
        fetch(""+"id", {method: "DELETE"})
        .then(resposta => {
            if(resposta.ok) {
                this.buscarMecicamento();
            }
        })
    }

    render(){
        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Validade</th>
                        <th>Quantidade</th>
                        <th>Lote</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        this.state.medicamentos.map((medicamento) => //"medicamento" é variavel e "medicamentos" é o nome do state com os objetos json
                            // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                            <tr>
                                <td>{medicamento.id}</td>
                                <td>{medicamento.nome}</td>
                                <td>{medicamento.data}</td>
                                <td>{medicamento.quantidade}</td>
                                <td>{medicamento.lote}</td>
                                <td><Button variant="primary">Atualizar</Button>{' '} <Button variant="danger" onClick={() => this.deletarMedicamento(medicamento.id)}>Excluir</Button>{' '} </td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </Table>
        )
    }    
}

export default Medicamentos;