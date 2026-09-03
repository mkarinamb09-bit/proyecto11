// ========================================
// MENSAJE EN CONSOLA
// ========================================

console.log("La página se cargó correctamente");


// ========================================
// EVENTO EN TITULO
// ========================================

const titulo = document.querySelector("h1");

if (titulo) {

    titulo.addEventListener("click", function () {

        alert("Bienvenido a mi página web");

    });

}



// ========================================
// REGISTRO DE USUARIO
// ========================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let user = document.getElementById("regUser").value;
        let email = document.getElementById("regEmail").value;
        let pass = document.getElementById("regPass").value;

        let usuario = {

            username: user,
            email: email,
            password: pass

        };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Usuario registrado correctamente");

        window.location.href = "login.html";

    });

}



// ========================================
// LOGIN
// ========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let user = document.getElementById("loginUser").value;
        let pass = document.getElementById("loginPass").value;


        // ====================================
        // LOGIN ADMIN
        // ====================================

        if (user === "admin" && pass === "admin") {

            alert("Bienvenido Administrador");

            localStorage.setItem("sesion", "admin");

            window.location.href = "dashboard_admin.html";

            return;
        }


        // ====================================
        // LOGIN CLIENTE
        // ====================================

        let storedUser = JSON.parse(localStorage.getItem("usuario")) || null;

        if (storedUser && user === storedUser.username && pass === storedUser.password) {

            alert("Bienvenido Cliente");

            localStorage.setItem("sesion", "cliente");

            window.location.href = "dashboard_cliente.html";

        } else {

            alert("Usuario o contraseña incorrectos");

        }

    });

}



// ========================================
// LOGOUT
// ========================================

function logout() {

    localStorage.removeItem("sesion");

    alert("Sesión cerrada");

    window.location.href = "login.html";

}



// ========================================
// MOSTRAR MODULOS DEL DASHBOARD ADMIN
// ========================================

function mostrar(seccion) {

    let cajas = document.querySelectorAll(".caja");

    cajas.forEach(function (caja) {

        caja.classList.add("oculto");

    });

    let elemento = document.getElementById(seccion);

    if (elemento) {

        elemento.classList.remove("oculto");

    }

}



// ========================================
// PERFIL CLIENTE
// ========================================

function cargarPerfil() {

    let usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario) {

        let campoUser = document.getElementById("clienteUser");
        let campoEmail = document.getElementById("clienteEmail");

        if (campoUser) campoUser.value = usuario.username;
        if (campoEmail) campoEmail.value = usuario.email;

    }

}



function guardarPerfil() {

    let user = document.getElementById("clienteUser").value;
    let email = document.getElementById("clienteEmail").value;

    let usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario) {

        usuario.username = user;
        usuario.email = email;

        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Datos actualizados correctamente");

    } else {

        alert("No hay usuario registrado");

    }

}



// ========================================
// CARRUSEL AUTOMÁTICO
// ========================================

let indice = 0;

function carruselAutomatico(){

    let slides = document.querySelectorAll(".slide");

    if(slides.length === 0) return;

    slides.forEach(function(slide){
        slide.classList.remove("activo");
    });

    indice++;

    if(indice >= slides.length){
        indice = 0;
    }

    slides[indice].classList.add("activo");

}

// Cambia imagen cada 3 segundos
setInterval(carruselAutomatico,3000);