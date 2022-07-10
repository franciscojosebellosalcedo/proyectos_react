import React,{useState} from "react";
import {Modal,ModalHeader,ModalBody,ModalFooter,Button} from "reactstrap";


function EliminarAnimal(props) {
    const[modalConfirmar,setModalConfirmar]=useState(false);

    const abrirCerrarConfirmar=()=>{
        setModalConfirmar(!modalConfirmar);
    }
    const eliminarAnimal=()=>{
        let lista=props.listaAnimales;
        let indice=0;
        lista.map((a)=>{
            if(props.animal.id===a.id){
                lista.splice(indice,1);
                setModalConfirmar(false);
                props.fnSetAnimales([...lista]);
                console.log([...lista]);
            }
            indice=indice+1;
        });
    }

    return(
        <div>
            <Button onClick={()=>abrirCerrarConfirmar()} color="danger" >Eliminar</Button>
            <Modal isOpen={modalConfirmar}>
                <ModalHeader><h4>Eliminar Registro</h4></ModalHeader>
                <ModalBody>
                    <h4>¿ Desea eliminar a {props.animal.nombre} ?</h4>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={()=>eliminarAnimal()} color="success">Si</Button>
                    <Button onClick={()=>abrirCerrarConfirmar()} color="primary">No</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default EliminarAnimal;