let titulo = document.getElementById("titulo");
let btnfin = document.getElementById("finalizar");
titulo.innerHTML = "<h1>Juego de cartas generico de aplicacion web</h1><h2>diversion con limites visibles</h2>";//cambiar/poner titulo
titulo.innerHTML +="<h3>estas listo?</h3>";//el "+" sirve para ir sumando cosas sin perder la anterior
titulo.style.font="bold 50px monospace";//aqui cambiar tipografia
let redesSociales = document.getElementById("redesSociales")//tomar control de un id
redesSociales.style.background="yellow";
//A través de la propiedad className de algún nodo seleccionado podemos acceder al atributo class del mismo y definir cuáles van a ser sus clases:
//document.createElement() generar cosas y el append para hechufarle hijos a padres a gusto
//array de objetos literales
let carrito =[];
const productos = [ { id: 1, nombre: "dragon", Imagen:"../img/dragon.jpg", precio: 225 },
                    { id: 2, nombre: "perrito", Imagen:"../img/perrito.jpg", precio: 70 },
                    { id: 3, nombre: "gatito", Imagen:"../img/gatito.jpg", precio: 50},
                    { id: 4, nombre: "cocodrilo", Imagen:"../img/cocodrilo.jpg", precio: 170},
                    { id: 5, nombre: "buho", Imagen:"../img/buho.jpg", precio: 130 },
                    { id: 6, nombre: "mapache", Imagen:"../img/mapache.jpg", precio: 90},
                    { id: 7, nombre: "kiwi", Imagen:"../img/kiwi.jpg", precio: 200},
                    { id: 8, nombre: "pez", Imagen:"../img/pez.jfif", precio: 70},
                    { id: 8, nombre: "alpaca", Imagen:"../img/alpaca.jpg", precio: 110},
                    { id: 10, nombre: "insecto", Imagen:"../img/insecto.jpg", precio: 100}];
//cartas
let articuloCartas = document.getElementById("cartas");
let totalCarrito =document.getElementById("total")
function rendirizarCartas(){
    for(const producto of productos){
    //let cartas = document.createElement("div"); style="width: 18 rem;"
        articuloCartas.innerHTML +=`
        <div class="card col-sm-2">
            <img src="${producto.Imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: ${producto.precio} $ argentinos</p>
                <button id="btn${producto.id}" class="btn btn-primary">Comprar</button>
            </div>
        </div>
        `;
    }
    //eventos
    productos.forEach((producto)=>{
        //evento para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlCarro(producto);
            })
        })
}
rendirizarCartas()
function agregarAlCarro(ProductosAComprar){
    carrito.push(ProductosAComprar);
    //alert("adquirio la carta solicitada");
    //SWEETALERT
    Swal.fire({
        title: ProductosAComprar.nombre,
        text: 'se agrego al carrito',
        imageUrl: ProductosAComprar.Imagen,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'ProductosAComprar.nombre',
    });
    document.getElementById("tablabody").innerHTML +=`
    <tr>
        <td>${ProductosAComprar.id}</td>
        <td>${ProductosAComprar.nombre}</td>
        <td>${ProductosAComprar.precio}</td>
    </tr>
    `;
    let totalCarrito = carrito.reduce((acumulador,productos)=>acumulador+productos.precio,0);
    document.getElementById("total").innerText="Total a pagar $:"+totalCarrito;
    console.log("el boton de compra funciona");
}
btnfin.onclick= ()=>{
    carrito=[];
    document.getElementById("tablabody").innerHTML="";
    document.getElementById("total").innerText="Total a pagar $:";
    Toastify({
        text: "orden de compra en proceso",
        duration: 3000
        }).showToast();
}
function enviarDatos(){
    const URLPOST="https://jsonplaceholder.typicode.com/posts";
    const nuevoPost={
        userId:4,
        id:390,
        title:"info asincronia",
        body:"info"
    }
    fetch(URLPOST,{
        method:"POST",
        body:JSON.stringify(nuevoPost),
        headers:{'Content-type': 'application/json; charset=UTF-8'}
    })
        .then(respuesta => respuesta.json())
        .then(datosRetorno =>{
            console.log("lo que retorna json placeholder al post");
            console.log(datosRetorno);
        })
}
enviarDatos();
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