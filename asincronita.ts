/* console.log("buenos dias amigos de funval"); //juan
console.log("vamos a empezar la clase"); //maria
console.log("creamos un ejemplo"); //charlie vamos a consultar a bd 300ms
console.log("explicamos el ejemplo"); //pedro
console.log("hacemos ejercicios"); //judas
 */
/* -------------SET TIME OUT--------------- */
/* setTimeout(() => {
  console.log("kevin demora 2 segundos en llegar a la clase");
}, 3000); */

/* ------------------ASINCRONIA-------------------- */
/* setTimeout(() => {
  console.log("1.jose llego a la taqueria");
}, 5000);

setTimeout(() => {
  console.log("2.belen llego a la taqueria");
}, 20000);

setTimeout(() => {
  console.log("3.Jorge llego a la taqueria");
}, 2000);

setTimeout(() => {
  console.log("4.jeremy llego a la taqueria");
}, 10000); */
/* --------------PROBLEMA Q TRAE LA ASINCRONIA------------- */

interface Estudiante {
  id: number;
  nombre: string;
  pais: string;
  celular: number;
}

let listaEstudiantesFunvaleros: Estudiante[] = [
  { id: 1, nombre: "Kevin", pais: "Bolivia", celular: 71234567 },
  { id: 2, nombre: "María", pais: "Perú", celular: 987654321 },
  { id: 3, nombre: "Carlos", pais: "Colombia", celular: 301234567 },
  { id: 4, nombre: "Lucía", pais: "Argentina", celular: 1123456789 },
  { id: 5, nombre: "Andrés", pais: "Chile", celular: 912345678 },
  { id: 6, nombre: "Valentina", pais: "Ecuador", celular: 991234567 },
  { id: 7, nombre: "Diego", pais: "México", celular: 5512345678 },
  { id: 8, nombre: "Camila", pais: "Paraguay", celular: 981234567 },
  { id: 9, nombre: "Mateo", pais: "Uruguay", celular: 99123456 },
  { id: 10, nombre: "Sofía", pais: "Venezuela", celular: 4121234567 },
  { id: 11, nombre: "Gabriel", pais: "Brasil", celular: 11987654321 },
  { id: 12, nombre: "Isabella", pais: "Costa Rica", celular: 88881234 },
];

/* function traerData() {
  setTimeout(() => {
    return listaEstudiantesFunvaleros;
  }, 2000);
}
console.log(traerData()); */
/* ----------------PROMESAS-------------- */
function traerData(): Promise<Estudiante[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const conexionExitosa = true;
      if (conexionExitosa) {
        resolve(listaEstudiantesFunvaleros);
      } else {
        reject(new Error("Error 500:fallo la conexion a la base de datos"));
      }
    }, 2000);
  });
}

/* -----------------CONSUMIR PROMESA-------------- */
traerData()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
