import React,{useState,useEffect} from "react";
import {Button,Table} from "reactstrap"; 

import AgregarAnimal from "./AgregarAnimal";
import EditarAnimal from "./EditarAnimal";
import EliminarAnimal from "./EliminarAnimal";
import EliminarTodo from "./EliminarTodo";

function App() {
  const [ventana,setVentana]=useState(false);
  const [animales,setAnimales]=useState([]);

  useEffect(()=>{
    let lista=localStorage.getItem("animales");
    if(lista===null){
      alert("No hay registros En la base de datos");
    }else{
      lista=JSON.parse(lista);
      setAnimales(lista);
    }
    console.log(lista)
  },[ ]);

  useEffect(()=>{
    localStorage.setItem("animales",JSON.stringify(animales));
  },[animales]);


  const cambiarVentana=()=>{
    setVentana(!ventana);
  }

  if(ventana===false){
    return (
      <div className="app">
        <h1 className="app__titulo">
          Crud De Animales
        </h1>
        <Button className="app__boton_entrar" color="primary" onClick={()=>cambiarVentana()}>Entrar</Button>
      </div>
    );
  }else{
    return(
      <div>
        <h1 className="crud">Registros</h1>
        <div className="tabla">
          <div className="botones">
          <h4 className="cantidad">Total: {animales.length}</h4>
            <AgregarAnimal
              listaAnimales={animales}
              fnSetAnimales={setAnimales}
            />
            <EliminarTodo
              listaAnimales={animales}
              fnSetAnimales={setAnimales}
            />
            <Button color="primary" onClick={()=>cambiarVentana()}>Ir a inicio</Button>
          </div>
          <Table className="tabla__container">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Edad</th>
              </tr>
            </thead>
            <tbody>
              {
                animales.map(
                  (animal)=>(
                    <tr key={animal.id}>
                      <td>{animal.nombre}</td>
                      <td>{animal.edad}</td>

                      <td><EditarAnimal
                        listaAnimales={animales}
                        animal={animal}
                        fnSetAnimales={setAnimales}
                      /></td>

                      <td>
                        <EliminarAnimal
                          animal={animal}
                          fnSetAnimales={setAnimales}
                          listaAnimales={animales}
                        />
                      </td>
                    </tr>
                  )
                )
              }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
