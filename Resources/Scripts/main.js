function sideOpen() {
  document.getElementById("sideBar").style.display = "block";
}

function sideClose() {
  document.getElementById("sideBar").style.display = "none";
}

let actualProjects = 1;

const html1 =
  "<img id='terminal' src='./Resources/Images/Terminal.png' alt='' /> <div id='projectsInfoContainer'> <h1 class='text' id='projectsTitle'> Sistema de almacenamiento de evidencia </h1> <div> <p class='text' id='projectDescription'> Frameworks: React native,Electron, FastAPI. </p> <p class='text' id='projectDescription'> Lenguajes: Python, Javascript, Typescript. </p> <p class='text' id='projectDescription'>Respositorios:</p> <a href='https://gitfront.io/r/Garcia/i6xjJ7oG9nqB/proyecto-embarques/' class='text' id='repButton' target='_blank' >Mobil app</a > <a href='https://github.com/Garcia-17/Receptor-PC.git' class='text' id='repButton' target='_blank' >Desktop app</a > <p class='text' id='projectDescription'> Descripcion: Se desarollo una aplicacion para el registro de immagenes dentro de una terminal tc26 para posteriorente registrarlkas den tro de un servidor local, en el cual mediante una interfaz grafica que tammbien fue deesarrollado para este proposito se observa la recepcion de los archivos, se tuvo que adaptar el servidor a un equipo loical devbidop a las limitaciones dentro de el area de trabajo y los recursos disponibles. </p> </div>";

const html2 =
  "<img id='terminal' src='./Resources/Images/appEtiquetas.png' alt='' /> <div id='projectsInfoContainer'> <h1 class='text' id='projectsTitle'> Aplicación para impresión de etiquetas personalizadas </h1> <div> <p class='text' id='projectDescription'> Frameworks: Tkinter. </p> <p class='text' id='projectDescription'> Lenguajes: Python. </p> <p class='text' id='projectDescription'>Respositorios:</p> <a href='https://github.com/Garcia-17/AplicacionEtiquetas.git' class='text' id='repButton' target='_blank' >Desktop app</a > <p class='text' id='projectDescription'> Descripción: Aplicación de escritorio desarrollada con la finalidad de generar etiquetas para la identificación de los materiales dentro de un almacén con la finalidad de evitar la transcripción de esta información de forma manual. </p> </div> </div>";

function changeProjectVisualizerLeft() {
  if (actualProjects == 1) {
    actualProjects = 2;
    document.getElementById("projectsContainer").innerHTML = html2;
    console.log(actualProjects);
  } else {
    actualProjects--;
  }

  if (actualProjects == 1) {
    document.getElementById("projectsTitle").innerText =
      document.getElementById("projectsContainer").innerHTML = html1;
    console.log(actualProjects);
  }
}

function changeProjectVisualizerRight() {
  if (actualProjects == 2) {
    actualProjects = 1;
    document.getElementById("projectsContainer").innerHTML = html1;
  } else {
    actualProjects++;
  }
  if (actualProjects == 2) {
    document.getElementById("projectsContainer").innerHTML = html2;
  }
}
