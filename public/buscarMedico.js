

const filtrarBoton = document.getElementById("btn_FiltrarMedico");
const disponibleBoton = document.getElementById("btn_Disponibles");
const clonarBoton = document.getElementById("btn_Clonar");
const medicosLista = document.getElementById("idListaMedicos");
const medicosDisponiblesLista = document.getElementById("idListaMedicosDisponibles");

//console.log(filtrarBoton);

/*
const medicos = [
    {
      nombre: "Juan Guzman",
      especialidad: "Medicina Interna",
      antiguedad : 10,
    },
    {
        nombre: "Luis Perez",
        especialidad: "Ginecologia y Obstetricia",
        antiguedad : 20,
      },
      {
        nombre: "Josefina Maturana",
        especialidad: "Psicologia",
        antiguedad : 5,
      },      
      {
        nombre: "Marcela Muñoz",
        especialidad: "Anestesiologa",
        antiguedad : 2,
      },        
  ];
*/
/*
  fetch("doctores.json")
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      const clone = structuredClone(data);
      console.log(clone);      
  });
*/
let encontrado = [];

medicosDisponiblesLista.innerHTML = '';
fetch("doctores.json")
.then((response) => response.json())
.then((data) => {
  const medicosDisponibles = data.filter((medico) => medico.disponibilidad === "true");
  if (medicosDisponibles.length > 0){

      //convierte objeto en JSON
      let medicosDisponiblesJson = JSON.stringify(medicosDisponibles);
      console.log(medicosDisponiblesJson);

      //ordenar por experiencia . se utiliza metodo burbuja
      console.log('medicos ordenados por experiencia');
      let medicosOrdenados = medicosDisponibles.sort(((a, b) => a.experiencia - b.experiencia));
      console.table(medicosOrdenados);


      let nombreBuscar ="Juan Guzman";
      const medicoEncontrado = medicosDisponibles.filter((medico) => medico.nombre === nombreBuscar);
      if ( medicoEncontrado.length > 0) {
        const { nombre, especialidad } = medicoEncontrado[0];
        console.log(`Se encontró medico ${nombre}, especialidad : ${especialidad}`);
      }  

      //metodo de busqueda . se utiliza busqueda lineal
      medicosDisponibles.forEach((medico) => {
        if (medico.nombre === nombreBuscar){
            encontrado.push({nombre: medico.nombre, especialidad : medico.especialidad, experiencia : medico. experiencia});
        }
      });
      if ( encontrado.length > 0) {
        console.log("resultado de busqueda");
        console.log(encontrado);   
      }   


    medicosDisponibles.forEach(medico => {
      const li = document.createElement('li');
      let linea =  `nombre :  ${medico.nombre} especialidad : ${medico.especialidad}`; 
      li.textContent =linea; 
      medicosDisponiblesLista.appendChild(li);

    }); 
   
  }
});


  clonarBoton.addEventListener('click', async () => {
    fetch("doctores.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const clone = structuredClone(data);
        console.log(clone);
    });

  });


  disponibleBoton.addEventListener('click', async () => {
    medicosDisponiblesLista.innerHTML = '';
    fetch("doctores.json")
    .then((response) => response.json())
    .then((data) => {
      const medicosDisponibles = data.filter((medico) => medico.disponible === "true");
      if (medicosDisponibles.length > 0){
  
        medicosDisponibles.forEach(medico => {
          const li = document.createElement('li');
          let linea =  `nombre :  ${nombre} especialidad : ${especialidad}`; 
          li.textContent =linea; 
          medicosDisponiblesLista.appendChild(li);
        }); 
       
      }
    });

  });



  filtrarBoton.addEventListener('click', async () => {
    const idNombre = document.getElementById("buscNombre");
    medicosLista.innerHTML = '';
    let nombreBuscar = idNombre.value;
    let encontrado = [];
    debugger;
      fetch("doctores.json")
      .then((response) => response.json())
      .then((data) => {

      console.log('lista de medicos donde buscar');
      console.table(data);
        data.forEach((medico) => {
            if (medico.nombre === nombreBuscar){
                encontrado.push({nombre: medico.nombre, especialidad : medico.especialidad, experiencia : medico. experiencia});
            }
        });
    });

    if ( encontrado.length > 0 ){
      alert("se encontró medico");
    }else {
        alert("no se encontró medico");
    }

  });


