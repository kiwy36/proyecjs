let titulo = document.getElementById("titulo")
titulo.innerHTML = "<h1>Juego de cartas generico de aplicacion web</h1><h2>diversion con limites visibles</h2>";//cambiar/poner titulo
titulo.innerHTML +="<h3>estas listo?</h3>";//el "+" sirve para ir sumando cosas sin perder la anterior
titulo.style.font="bold 50px monospace";//aqui cambiar tipografia
let redesSociales = document.getElementById("redesSociales")//tomar control de un id
redesSociales.style.background="yellow";
// Inputs id="name" id="email"
let camponame =document.getElementById("name");
let campoemail =document.getElementById("email");
let campotext =document.getElementById("message");
let error = document.getElementById("error");
error.style.color="red"
let formulario =document.getElementById("formulario");
camponame.onkeydown=()=>{
    console.log("se tocaron teclas");
}//metodo de tocar tecla
campoemail.onchange =()=>{
    console.log("confirmamos que su email es: "+campoemail.value);
    if(campoemail.value == " "){
        console.log("no ingreso su email");
    }
}
formulario.addEventListener("submit",//validacion de que no se quede ningun elemento/campo vacio
function validar(ev){
    ev.preventDefault();//evitar que se mande el formulario a ningun lugar
    let mensajesError =[];
    if((camponame.value=="")||(campoemail.value=="")||(campotext.value=="")){
        mensajesError.push("falta ingresar algun campo")
    }error.innerHTML = mensajesError.join("");
});
//modos oscuro/normal
let principal =document.getElementById("principal");
let boton = document.getElementById("mode");
let modo = localStorage.getItem("modo");
//render
if(modo !=null){
    if(modo=="dark"){
        document.body.className = modo;
        principal.className="position-relative overflow-hidden p-1 p-md-1 m-md-3 text-center"+modo;
        boton.innerText = "ligth mode";
    }
}else{
    modo="light";
}
boton.onclick=()=>{
    if(modo == "light"){
        document.body.className="dark";
        principal.classList.remove("light");
        principal.classList.add("dark");
        boton.innerText="light mode";
        modo = "dark";
    }else{
        document.body.className="light";
        principal.classList.remove("dark");
        principal.classList.add("light");
        boton.innerText="dark mode";
        modo = "light";
    }
    localStorage.setItem("modo",modo)
}