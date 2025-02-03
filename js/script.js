const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  setTimeout(function () {
    location.reload();
  }, 500);
});

/**funcion que oculta o muestra el menu */
const resp = document.querySelector(".nav-responsive");
const nav = document.getElementById("nav");

let est = true;
resp.addEventListener("click", () => {
  if (est) {
    nav.classList.add("responsive");
    est = false;
  } else {
    nav.classList.remove("responsive");
    est = true;
  }
});

/**ocultar el menu al dar click en un enlace */
const seleccionar = () => {
  nav.classList = "";
  est = false;
};

//Funcion que aplica animaciones de las habilidades
const efectoHabilidades = () => {
  let skills = document.getElementById("skills");
  let distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("php");
    habilidades[3].classList.add("bd");
    habilidades[4].classList.add("veracrypt");
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("trabajo-equipo");
    habilidades[7].classList.add("creatividad");
    habilidades[8].classList.add("dedicacion");
    habilidades[9].classList.add("proyect");
  }
};

//detecto el scrolling
window.onscroll = function () {
  efectoHabilidades();
};
