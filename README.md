#### Preparacion previa
Se necesita instalar bootstrap utilizando : npm install bootstrap desde la raiz del proyecto.
Se necesita instalar express : npm install express

### Visualizar el proyecto.
Se necesita ejecutar node server.js y seguir las indicaciones sobre que puerto ejecutar.


### Explicación objetos Json
Se utilizo un archivo llamado doctores.json
El recorrido de los medicos se realizo mediante foreach (buscarMedico.js  Linea 82)
La clonacion se realizó mediante la function structuredClone (buscarMedico.js  Linea 100)

### Explicación de destructuring.
En este caso se utilizo cuando se quizo buscar el primer medico que coincide con un nombre.
(buscarMedico.js  Linea 66)

### Explicación de estructuras.
La implementación esta indicada en archivo estructuras.js.
Se utilizo arrego de medicos, para el caso de cola y pila igual se modelo mediante arreglos.
Estas estructuras se adaptan de forma natural a los datos que se manejan en un hospital, como por ejempo una lista de doctores, pacientes
Los cuales en su dinámica necesitan ser atendidos en función de orden de llegada.

### Algoritmos implementados.
Para el caso de la busqueda se utliza una busqueda lineal (buscarMedico.js  Linea 71).
La eficiencia en O(n)
Para el caso de ordenacion se utiliza un metodo burbuja (buscarMedico.js  Linea 59)
La eficiencia es O(n2)