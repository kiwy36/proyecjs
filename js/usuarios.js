//aqui use una API para fingir que tengo usuarios, mas alla de eso no hay mucho mas en esta seccion
const ul = document.getElementById("runners"),
      url = 'https://randomuser.me/api/?gender=male&results=40';

const createNode = (element) => { return document.createElement(element); }
const append = (parent, el) => { return parent.appendChild(el); }

fetch(url)
  .then((response) => { return response.json(); })
  .then( data => {
    let runners = data.results;
    return runners.map( runner => {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = runner.picture.medium;
      span.innerHTML = `${runner.name.first} ${runner.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    });
  })
  .catch( error => { console.log(error); })

//
let titulo = document.getElementById("titulo")
let redesSociales = document.getElementById("redesSociales")//tomar control de un id
redesSociales.style.background="yellow";


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