import React,{useState} from "react";
import {Modal,ModalHeader,ModalBody,ModalFooter,Label,Input,FormGroup,Button} from "reactstrap";


function AgregarAnimal(props) {
    const [modalAgregar,setModalAgregar]=useState(false);
    const [modalMensage,setModalMensage]=useState(false);
    const [formulario,setFormulario]=useState(
        {id:"",nombre:"",edad:""}
    );

    const abrirCerrarModalAgregar=()=>{
        setModalAgregar(!modalAgregar);
    }
    const guardarDatos=(e)=>{
        setFormulario({...formulario,[e.target.name]:e.target.value});
    }
    const validarCampos=()=>{
        const id=document.getElementById("id").value;
        const nombre=document.getElementById("nombre").value;
        const edad=document.getElementById("edad").value;
        if(id==="" || nombre==="" || edad===""){
            return true;
        }else{
            return false;
        }
    }
    const guardarAnimal=()=>{
        if(validarCampos()===true){
            setModalMensage(true);
            setTimeout(()=>{
                setModalMensage(false);
            },2000);
        }else{
            props.fnSetAnimales([...props.listaAnimales,formulario]);
            setModalAgregar(!modalAgregar);
        }
    }
    return(
        <div>
            <Button color="success" className="boton__agregar" onClick={()=>abrirCerrarModalAgregar()}>Agregar</Button>
            <Modal isOpen={modalAgregar}>
                <ModalHeader><h3>Agregar Nuevo Registro</h3></ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label>Id</Label>
                        <Input onChange={guardarDatos} type="number" placeholder="Ingrese el id del animal" id="id" name="id"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input onChange={guardarDatos} type="text" placeholder="Ingrese el nombre del animal" id="nombre" name="nombre"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Edad</Label>
                        <Input onChange={guardarDatos} type="number" placeholder="Ingrese la edad del animal" id="edad" name="edad"/>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={()=>guardarAnimal()}>Guardar</Button>
                    <Button color="primary" onClick={()=>abrirCerrarModalAgregar()}>Salir</Button>
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
export default AgregarAnimal;