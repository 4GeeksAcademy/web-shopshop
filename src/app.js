/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#excusa").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronombre = ["uno", "el"];
  let sujeto = ["corredor", "mapache", "perro", "conductor", "comico", "piña"];
  let accion = ["tomó mi", "tiro mi", "le grito a mi", "robó mi", "mordió mi"];
  let posesion = ["trabajo", "dedo del pie", "coche", "zapato"];
  let donde = ["en la calle", "en mi casa", "de camino a la entrada"];

  let proIndex = Math.floor(Math.random() * pronombre.length);
  let sujIndex = Math.floor(Math.random() * sujeto.length);
  let accIndex = Math.floor(Math.random() * accion.length);
  let posIndex = Math.floor(Math.random() * posesion.length);
  let donIndex = Math.floor(Math.random() * donde.length);

  return (
    pronombre[proIndex] +
    " " +
    sujeto[sujIndex] +
    " " +
    accion[accIndex] +
    " " +
    posesion[posIndex] +
    " " +
    donde[donIndex]
  );
};
