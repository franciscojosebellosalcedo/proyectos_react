import React,{useState} from "react";
import {Modal,ModalHeader,ModalBody,ModalFooter,Label,Input,FormGroup,Button} from "reactstrap";

function EditarAnimal(props) {
    const [modalEditar,setModalEditar]=useState(false)
    const [datosNuevos,setDatosNuevos]=useState(
        {nombre:"",edad:""}
    );
    const [modalMensage,setModalMensage]=useState(false);

    const guardarDatos=(e)=>{
        setDatosNuevos({...datosNuevos,[e.target.name]:e.target.value});
    }
    const abrirCerrarModalEditar=()=>{
        setModalEditar(!modalEditar);
    }


    const editarAnimal=()=>{
        let lista=props.listaAnimales;
        let indice=0;
        lista.map((a)=>{
            if(datosNuevos.nombre==="" || datosNuevos.edad===""){
                setModalMensage(true);
                setTimeout(() => {
                    setModalMensage(false);
                }, 2000);
            }else{
                if(props.animal.id===a.id){
                    lista[indice].nombre=datosNuevos.nombre
                    lista[indice].edad=datosNuevos.edad
                    props.fnSetAnimales(
                        [...lista]
                    );
                    setModalEditar(false);
                    console.log(props.animal)
                }
                indice=indice+1;
            }
        })
    }

    
    return(
        <div>
            <Button color="primary" onClick={()=>abrirCerrarModalEditar()}>Editar</Button>

            <Modal isOpen={modalEditar}>
                <ModalHeader><h3>Editar Registro</h3></ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="nombre">Nombre</Label>
                        <Input placeholder={props.animal.nombre} onChange={guardarDatos} type="text"  id="nombre" name="nombre" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="edad">Edad</Label>
                        <Input placeholder={props.animal.edad} onChange={guardarDatos}  type="number"  id="edad" name="edad" />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={()=>editarAnimal()} >Editar</Button>
                    <Button color="primary" onClick={()=>abrirCerrarModalEditar()}>Salir</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalMensage}>
                <ModalHeader><h3>Datos</h3></ModalHeader>
                <ModalBody>
                    <h2>Llene los datos por favor.</h2>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default EditarAnimal;