
//arreglo de doctores.
class ArregloDoctores{
    constructor() {
        this.doctores = [];
    }
    agregarDoctor(doctor){
        this.doctores.push(doctor)
    }
    buscarDoctor(nombreDoctor){
       const encontrado =  this.doctores.find((doctor) => doctor.nombre === nombreDoctor);
       return encontrado ? encontrado : [];
    }

    borrarDoctor(nombreDoctor){
        this.doctores = this.doctores.filter((doctor) => doctor.nombre != nombreDoctor);
    }
}

/*
---Pruebas en Quokka
let aDoc = new ArregloDoctores();
aDoc.agregarDoctor({nombre:"Luis", especialidad:"general"});
console.log(aDoc);
aDoc.agregarDoctor({nombre:"Pedro", especialidad:"Anestesiologo"});
console.log(aDoc);
console.log(aDoc.buscarDoctor(""))
aDoc.borrarDoctor("Luis");
console.log(aDoc);
*/



class PilaCitas {
    constructor() {
        this.citas = [];
    }
    agendarCita(cita){
        this.citas.push(cita);
        return this.citas;
    }
    atenderCita(){
        return this.citas.pop();
    }
    determinaSiguienteCita(){
        return this.citas[this.citas.length -1];
    }

    largoCitas() {
        return this.citas.length;
    }
}


/*
---Pruebas en Quokka
const citas = new PilaCitas();
console.log(citas.agendarCita({nombre:"Gonzalo"}));
console.log(citas.agendarCita({nombre:"Pedro"}));
console.log(citas.agendarCita({nombre:"Luis"}));
console.log(citas.determinaSiguienteCita());
console.log(citas.atenderCita());
console.log(citas)
*/

class ColaLlegadaPacientes {
    constructor() {
        this.colaPacientes = [];
    }   
    agregarPaciente(paciente){
        this.colaPacientes.push(paciente);
        return this.colaPacientes;
    }
    atenderPaciente(){
        //se simula un timeout y se atiende paciente y se saca de la cola
        return this.colaPacientes.shift();
    }

    determinaSiguientePaciente(){
        return this.colaPacientes[0];
    }

    largoCola() {
        return this.colaPacientes.length;
    }

    estaVaciaColaPaciente(){
        return this.colaPacientes.length === 0;
    }

}

/*
---Pruebas en Quokka
const cola = new ColaLlegadaPacientes();
cola.agregarPaciente({nombre:'Gonzalo'});
cola.agregarPaciente({nombre:'Pedro'});
console.log(cola.atenderPaciente());
console.log(cola);
console.log(cola.determinaSiguientePaciente());
console.log(cola.estaVaciaColaPaciente());
console.log(cola.largoCola());
*/