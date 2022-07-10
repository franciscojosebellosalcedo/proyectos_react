import React,{useState} from "react";
import {Modal,ModalHeader,ModalBody,ModalFooter,Button} from "reactstrap";

function EliminarTodo(props) {
    const [modalConfirmar,setModalConfirmar]=useState(false);

    const abrirCerrarConfirmar=()=>{
        if(props.listaAnimales.length===0){
            alert("Ya está vacia");
        }else{
            setModalConfirmar(!modalConfirmar);
        }
    }
    const eliminarTodo=()=>{
        let lista=props.listaAnimales;
        let indice=0;
        lista.map(()=>{
            lista.splice(indice);
            indice++;
        }
        );
        props.fnSetAnimales([...lista]);
        setModalConfirmar(false);
    }
    return(
        <div>
            <Button onClick={()=>abrirCerrarConfirmar()} color="danger">Eliminar Todo</Button>

            <Modal isOpen={modalConfirmar}>
                <ModalHeader><h4>Eliminar Registro</h4></ModalHeader>
                <ModalBody>
                    <h4>¿ Desea eliminar a todos los animales ?</h4>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={()=>eliminarTodo()} color="success">Si</Button>
                    <Button onClick={()=>abrirCerrarConfirmar()} color="primary">No</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default EliminarTodo;