/* -----------------CONDICIONALES------------------- */

/* 
                IF
    if(condicion){
        condigo q se ejecutara
        si la condicion 
        es verdadera
    }
*/
/* let age = 10;
if (age >= 18) {
  console.log("esta persona es mayor de edad");
} */

/* 
                IF-ELSE
    if(condicion){
        condigo q se ejecutara
        si la condicion 
        es verdadera
    }else{
        condigo q se ejecutara
        si la condicion 
        es falsa
    }
*/
let dinero = 4000;

if (dinero >= 1000) {
  console.log("puedes comprar tu ps5");
} else {
  console.log("no puedes comprar este lujito mi rey");
}

/* 
        IF-ELSE-IF
if(condicion1){
        codigo q se ejecutara
        si la condicion1 
        es verdadera
    }else if(condicion2){
        codigo q se ejecutara
        si la condicion2 
        es verdadera y ademas 
        la condicion 1 es falsa
    }else{
        codigo q se ejecutara
        si la condicion 2 es falsa    
    }

*/
let mmr = 8200;

if (mmr <= 1000) {
  console.log("heraldo");
} else if (mmr <= 2000) {
  console.log("guardian");
} else if (mmr <= 3000) {
  console.log("cruzado");
} else if (mmr <= 4000) {
  console.log("arconte");
} else if (mmr <= 5000) {
  console.log("leyenda");
}

let sacerdocio = "si";
let barrio = "armonia";

if (sacerdocio == "si") {
  if (barrio == "armonia") {
    console.log("si me puede dar una bendicion de salud");
  }
}

/* 
        SWICH-CASE
switch (llave o variable) {
    case 1:
        codigo q se ejecutara si la lave toma el valor de 1
        break;
    case 2:
        codigo q se ejecutara si la lave toma el valor de 2
        break;
    case 3:
        codigo q se ejecutara si la lave toma el valor de 3
        break;

    default:
        codigo q se ejecutara si la llave no toma ningun valor anterior
        break;
}
*/

let opcion = 2;

switch (opcion) {
  case 1:
    console.log("vas a retirar dinero :D");
    break;
  case 2:
    console.log("vas a agregar dinero :D");
    break;
  case 3:
    console.log("vas a consultar tu saldo :D");
    break;
  default:
    console.log("x favor elige una opcion valida entre 1 y 3");
    break;
}

// ==========================================
// NIVEL FÁCIL: if, if-else básicos
// ==========================================

/**
 * EJERCICIO 1: Pago de pasaje en transporte público (if - else)
 *
 * Contexto: El pasaje cuesta 2.50.
 * Variables iniciales:
 *   const saldoActual: number = 3.00;
 *   const costoPasaje: number = 2.50;
 *
 * Enunciado:
 * Si el saldo es suficiente para pagar el pasaje:
 *   - Resta el costo del pasaje al saldo y muestra:
 *     "Pasaje cobrado. Saldo restante: [nuevo saldo]"
 * De lo contrario:
 *   - Muestra: "Saldo insuficiente para viajar."
 */

// Tu código aquí:

/**
 * EJERCICIO 2: Verificación para compra de entradas a una película para mayores (if - else con boolean)
 *
 * Contexto: En el cine, la película exige ser mayor de 18 años y presentar documento físico.
 * Variables iniciales:
 *   const edadCliente: number = 17;
 *   const tieneDocumento: boolean = true;
 *
 * Enunciado:
 * Evalúa si el cliente tiene 18 años o más Y además tiene su documento en mano.
 * - Si cumple ambas condiciones: imprimir "Venta de boleto autorizada."
 * - Si falla alguna: imprimir "Acceso denegado. Debe ser mayor de edad y portar documento."
 */

// Tu código aquí:

const edadCliente: number = 17;
const tieneDocumento: boolean = true;

if (edadCliente >= 18 && tieneDocumento) {
  console.log("Venta de boleto autorizada");
} else {
  console.log("Acceso denegado. Debe ser mayor de edad y portar documento.");
}

/**
 * EJERCICIO 3: Puerta automática de una tienda según horario (if - else)
 *
 * Contexto: Una tienda abre sus puertas entre las 9:00 y las 20:00 (formato 24h).
 * Variable inicial:
 *   const horaActual: number = 14; // Valores posibles de 0 a 23
 *
 * Enunciado:
 * - Si la hora está entre 9 y 20 inclusive, muestra: "Puerta abierta: Bienvenido a la tienda."
 * - En cualquier otra hora, muestra: "Puerta cerrada: Atención finalizada por hoy."
 */

// Tu código aquí:

// ==========================================
// NIVEL INTERMEDIO BAJO: if - else if - else
// ==========================================

/**
 * EJERCICIO 4: Luces del semáforo vehicular (switch - case)
 *
 * Contexto: Control del flujo vehicular mediante un semáforo.
 * Variable inicial:
 *   const luzSemaforo: string = "amarillo"; // Puede ser "verde", "amarillo", "rojo" u otro texto
 *
 * Enunciado:
 * Usando switch-case, muestra el mensaje según el color:
 * - "verde": "Avance: Vía libre."
 * - "amarillo": "Precaución: Reduzca la velocidad."
 * - "rojo": "Deténgase: Paso bloqueado."
 * - default: "Luz no reconocida o semáforo en mantenimiento."
 */

// Tu código aquí:
const luzSemaforo: string = "verde";

switch (luzSemaforo) {
  case "verde":
    console.log("Avance: Vía libre.");
    break;
  case "amarillo":
    console.log("Precaución: Reduzca la velocidad.");
    break;
  case "rojo":
    console.log("Deténgase: Paso bloqueado.");
    break;
  default:
    console.log("Luz no reconocida o semáforo en mantenimiento.");
    break;
}

/**
 * EJERCICIO 5: Descuento en la caja de una farmacia (if - else if - else)
 *
 * Contexto: Una farmacia premia el total gastado con descuentos:
 * - Menos de 50: 0% de descuento.
 * - De 50 a 99: 5% de descuento.
 * - De 100 a 199: 10% de descuento.
 * - 200 o más: 15% de descuento.
 *
 * Variables iniciales:
 *   const subtotalCompra: number = 120;
 *   let descuento: number = 0;
 *   let totalFinal: number = 0;
 *
 * Enunciado:
 * Determina el descuento según el monto, calcula el total final y muestra:
 * "Subtotal: [subtotal] | Descuento aplicado: [descuento]% | Total a pagar: [totalFinal]"
 */

// Tu código aquí:

/**
 * EJERCICIO 6: Asignación de canal de TV por categoría (switch - case)
 *
 * Contexto: En un decodificador, según el tipo de contenido se sugiere un canal de inicio:
 * Variable inicial:
 *   const categoriaElegida: string = "deportes";
 *   // Opciones: "noticias", "deportes", "infantil", "peliculas"
 *
 * Enunciado:
 * Usa switch-case para imprimir el número de canal sugerido:
 * - "noticias": "Sintonizando canal 10: Noticias 24/7"
 * - "deportes": "Sintonizando canal 25: Deportes en vivo"
 * - "infantil": "Sintonizando canal 40: Dibujos animados"
 * - "peliculas": "Sintonizando canal 55: Cine premium"
 * - default: "Categoría no encontrada en la guía."
 */

// Tu código aquí:

const categoriaElegida: string = "deportes";

switch (categoriaElegida) {
  case "noticias":
    console.log("Sintonizando canal 10: Noticias 24/7");
    break;
  case "deportes":
    console.log("Sintonizando canal 25: Deportes en vivo");
    break;
  case "infantil":
    console.log("Sintonizando canal 40: Dibujos animados");
    break;
  case "peliculas":
    console.log("Sintonizando canal 55: Cine premium");
    break;
  default:
    console.log("Categoría no encontrada en la guía.");
    break;
}

// ==========================================
// NIVEL INTERMEDIO: Condiciones anidadas y lógica combinada
// ==========================================

/**
 * EJERCICIO 7: Alerta de medidor de batería de celular (if - else if - else)
 *
 * Contexto: Un sistema operativo móvil monitorea el porcentaje de batería y si está conectado al cargador.
 * Variables iniciales:
 *   const porcentajeBateria: number = 15;
 *   const estaConectado: boolean = false;
 *
 * Enunciado:
 * - Si porcentajeBateria es mayor a 100 o menor a 0: mostrar "Lectura de batería errónea."
 * - Si está conectado:
 *     - Si la batería llega a 100: "Batería completa. Desconecte el cargador."
 *     - Si no: "Cargando dispositivo..."
 * - Si NO está conectado:
 *     - Menor o igual a 15: "Batería crítica: Activa el modo ahorro de energía."
 *     - Entre 16 y 50: "Nivel de batería moderado."
 *     - Más de 50: "Batería en buen nivel."
 */

// Tu código aquí:

/**
 * EJERCICIO 8: Tarifa de estacionamiento por tipo de vehículo (switch - case + if)
 *
 * Contexto: Un garaje cobra por hora según el tipo de transporte:
 * - "moto": 5 por hora
 * - "auto": 10 por hora
 * - "camioneta": 15 por hora
 *
 * Variables iniciales:
 *   const tipoVehiculo: string = "auto";
 *   const horasEstacionado: number = 3;
 *   const esClienteFrecuente: boolean = true;
 *   let tarifaPorHora: number = 0;
 *
 * Enunciado:
 * 1. Usa switch-case para asignar la tarifa por hora según el tipo de vehículo. Si el tipo no existe, tarifa = 0.
 * 2. Si la tarifa es válida (mayor a 0):
 *    - Calcula el costo total (horasEstacionado * tarifaPorHora).
 *    - Si esClienteFrecuente es true, resta un descuento fijo de 5 al costo final.
 *    - Imprime el costo final a cobrar.
 * 3. Si el tipo no es válido, imprime "Tipo de vehículo no admitido."
 */

// Tu código aquí:

const tipoVehiculo: string = "camioneta";
const horasEstacionado: number = 2;
const esClienteFrecuente: boolean = false;
let tarifaPorHora: number = 0;

switch (tipoVehiculo) {
  case "moto":
    tarifaPorHora = 5;
    break;
  case "auto":
    tarifaPorHora = 10;
    break;
  case "camioneta":
    tarifaPorHora = 15;
    break;
  default:
    console.log("el tipo de vehiculo no esta registrado en el sistema");
    break;
}
let costoTotal = tarifaPorHora * horasEstacionado;
if (esClienteFrecuente) {
  costoTotal -= 5; // costoTotal = costoTotal - 5
}
console.log("el costo final a cobrar es de: " + costoTotal);
/**
 * EJERCICIO 9: Control de equipaje de mano en mostrador de aeropuerto (if anidado / operadores lógicos)
 *
 * Contexto: La aerolínea impone dos límites estrictos:
 * - Peso máximo: 10 kg.
 * - Longitud total máxima (suma de alto + ancho + profundidad): 115 cm.
 *
 * Variables iniciales:
 *   const pesoMaletaKg: number = 11.5;
 *   const sumaDimensionesCm: number = 110;
 *
 * Enunciado:
 * Evalúa las variables y muestra exactamente una de las 4 opciones:
 * 1. Si cumple ambas reglas: "Equipaje aprobado para llevar en cabina."
 * 2. Si falla en peso pero pasa en dimensiones: "Rechazado: Excede el peso máximo permitido."
 * 3. Si pasa en peso pero falla en dimensiones: "Rechazado: Excede las dimensiones máximas permitidas."
 * 4. Si falla en ambas: "Rechazado: Excede tanto el peso como las dimensiones."
 */

// Tu código aquí:

/**
 * EJERCICIO 10: Facturación del menú del día con propina y delivery (switch-case + if-else)
 *
 * Contexto: Un restaurante cobra según el combo elegido:
 * - "ejecutivo": 25
 * - "vegetariano": 30
 * - "familiar": 55
 *
 * Variables iniciales:
 *   const comboElegido: string = "vegetariano";
 *   const pedirDelivery: boolean = true;
 *   const dejarPropina: boolean = true;
 *   let totalPagar: number = 0;
 *
 * Enunciado:
 * 1. Usa switch-case para guardar el precio base según el combo. Si el combo no existe, totalPagar = 0.
 * 2. Si el combo es válido:
 *    - Si pedirDelivery es true, suma 5 por costo de envío.
 *    - Si dejarPropina es true, suma un 10% del precio base del combo como propina.
 *    - Imprime: "Pedido confirmado. Total final a pagar: [totalPagar]"
 * 3. Si el combo no existe:
 *    - Imprime: "El combo solicitado no está disponible en la carta."
 */

// Tu código aquí:
const comboElegido: string = "vegetariano";
const pedirDelivery: boolean = true;
const dejarPropina: boolean = true;
let totalPagar: number = 0;

switch (comboElegido) {
  case "ejecutivo":
    totalPagar = 25;
    if (dejarPropina) {
      totalPagar = totalPagar * 1.1;
    }
    if (pedirDelivery) {
      totalPagar += 5;
    }

    console.log("Pedido confirmado. Total final a pagar: " + totalPagar);
    break;
  case "vegetariano":
    totalPagar = 30;
    if (dejarPropina) {
      totalPagar = totalPagar * 1.1;
    }
    if (pedirDelivery) {
      totalPagar += 5;
    }
    console.log("Pedido confirmado. Total final a pagar: " + totalPagar);
    break;
  case "familiar":
    totalPagar = 55;
    if (dejarPropina) {
      totalPagar = totalPagar * 1.1;
    }
    if (pedirDelivery) {
      totalPagar += 5;
    }

    console.log("Pedido confirmado. Total final a pagar: " + totalPagar);
    break;
  default:
    console.log("combo no disponible en la carta");
    break;
}

/* --------------BUCLES---------------------------------- */

/* 
    while (condicion){
    codigo q se repetira n cantidad
    de veces
    }
*/

let nombreEstudiante = "Kevin Rodriguez";
let contador = 0;
while (contador <= 3) {
  console.log("hola buenos dias " + nombreEstudiante);
  contador++;
}

/* 
    do{
        codigo q se ejecutara n cantidad de veces
        pero si o si almenos 1
    }while (condicion)

*/
let superContador = 0;

do {
  console.log("funval somos los mejores");
  superContador++; // superContador = superContador +1
} while (superContador <= 2);

/* 
    for(condiciones){
    codigo q se ejecutara n cantida
    de veces
    }
*/

for (let inicio = 0; inicio < 10; inicio++) {
  console.log("hoy vamos a ver bucles");
}

/* 
    ejercicion 1
    
    quiero q puedan realizar una calculadora de multiplicacion
    pero sin  el simbolo *
    4*5 = 5+5+5+5 o 4+4+4+4+4
*/

/* 
    ejercio 2
    sacar el factorial de un numero
    !5 = 1*2*3*4*5
*/

/* ------------------ESTRUCTURAS DE DATOS-------------------------- */
/*  ARRAYS */

let estudiantesFunval: string[] = [
  "Gustavo",
  "Roberto",
  "Sara",
  "Jesus",
  "Esdras",
  "Oscar",
  "Enrique",
];

console.log(estudiantesFunval[3]);

/* --------METODOS DE ARRAYS------ */
let cantEstudiantes = estudiantesFunval.length; //contar la cantidad de elementos q tiene la lista

estudiantesFunval.push("kevin", "jeremy"); // agrega uno o varios elementos al final de la lista
estudiantesFunval.unshift("Mike"); // agrega uno o varios elementos al inicio de la lista
let estudianteEliminado = estudiantesFunval.pop(); //elimina el ultimo elemento de la lista y lo retorna
let estudianteDelete = estudiantesFunval.shift(); //eliminar el primer elemento de la lista y lo retorna

/* ------------REGLA DE ORO---------------------------- */
/* 
  ARRAY QUE VEO ARRAY Q ITERO
*/

let frutas: string[] = [
  "manzana",
  "pera",
  "papaya",
  "chirimoya",
  "frutilla",
  "banana",
];
let encendido = false;
for (let inicio = 0; inicio < frutas.length; inicio++) {
  if (frutas[inicio] === "manzana") {
    encendido = true;
  }
}
if (encendido) {
  console.log("si tenemos una o mas manzana en la lista");
} else {
  console.log("no tenemos ni una sola uva en la lista de frutas");
}
/* 
    los estudiantes de funval estan trayendote sus listas de notas
    algunos dieron 2 examenes algunos 4 algunos 6 etc
    deberas devolver el promedio de notas del estudiante
*/

let notas: number[] = [90, 98];

/* ---------------------OBJETOS------------------------ */
interface estudiante {
  nombre: string;
  apPaterno: string;
  edad: number;
  pais: string;
  celular: number;
  notas: number[];
}

let estudianteFunvalero: estudiante = {
  nombre: "Roberto",
  apPaterno: "Trinidad",
  edad: 20,
  pais: "Paraguay",
  celular: 987123213,
  notas: [95, 35, 55, 75, 0],
};

let notaFinal: number = 0;
for (let i = 0; i < estudianteFunvalero.notas.length; i++) {
  notaFinal += estudianteFunvalero.notas[i];
}
notaFinal /= estudianteFunvalero.notas.length;

console.log(
  "el promedio del estudiante " +
    estudianteFunvalero.nombre +
    " es: " +
    notaFinal,
);
/* -----------------ejercicio---------------------- */
const estudiantes: estudiante[] = [
  {
    nombre: "Mateo",
    apPaterno: "González",
    edad: 19,
    pais: "Bolivia",
    celular: 71234567,
    notas: [85, 90, 78],
  },
  {
    nombre: "Valentina",
    apPaterno: "Rodríguez",
    edad: 21,
    pais: "Argentina",
    celular: 1123456789,
    notas: [92, 88],
  },
  {
    nombre: "Santiago",
    apPaterno: "Martínez",
    edad: 18,
    pais: "Colombia",
    celular: 3101234567,
    notas: [75, 80, 95, 89, 91],
  },
  {
    nombre: "Camila",
    apPaterno: "Fernández",
    edad: 22,
    pais: "Perú",
    celular: 987654321,
    notas: [100],
  },
  {
    nombre: "Diego",
    apPaterno: "Silva",
    edad: 20,
    pais: "Chile",
    celular: 912345678,
    notas: [65, 72, 80, 85],
  },
  {
    nombre: "Isabella",
    apPaterno: "Santos",
    edad: 19,
    pais: "Brasil",
    celular: 11987654321,
    notas: [95, 93, 87],
  },
  {
    nombre: "Sebastián",
    apPaterno: "Hernández",
    edad: 23,
    pais: "México",
    celular: 5512345678,
    notas: [70, 68],
  },
  {
    nombre: "Luciana",
    apPaterno: "Pérez",
    edad: 18,
    pais: "Uruguay",
    celular: 99123456,
    notas: [88, 91, 84, 96, 79, 90],
  },
  {
    nombre: "Gabriel",
    apPaterno: "Castro",
    edad: 24,
    pais: "Ecuador",
    celular: 991234567,
    notas: [55, 70, 65],
  },
  {
    nombre: "Mariana",
    apPaterno: "López",
    edad: 20,
    pais: "Paraguay",
    celular: 981234567,
    notas: [98, 94, 89, 92],
  },
];

/* 
  quiero saber el promedio de todos los estudiantes y ver a los estudiantes q esten aprobados
  un estudiante esta aprobado cuando su promedio es mayor a 60


  mateo promedio 65  aprobado
  mariana promedio 35  reprobado
*/
