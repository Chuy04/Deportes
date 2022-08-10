const enviardatos = document.getElementById(botoncito);
enviardatos.addEventListener("click", datos);

function datos(){
    const Nombre = document.getElementById(Name);
    const divbienvenida = document.getElementById(divisi);

    divbienvenida.innerText= Nombre;
}
    
