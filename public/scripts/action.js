function Color(){//Función cambiar de color

    let cambioColor=document.getElementById("Contenedor");
    let colores=new Array('#ABEBC6','#A2D9CF','#DC7633', '#D7BDE2', '#F5F5DC','#99A3A4' ,'green', 'pink', 'white', 'yellow');
    aletorio=Math.round(Math.random()*colores.length);
    cambioColor.style.backgroundColor=colores[aletorio];
    alert("\nGracias por cambiarme" + "\n\nSi no te gusta este color puedes cambiarlo dandole click en el botón cambiar de color otra vez");
}

function Fondo(){//Función cambiar de fondo

    let borde=document.getElementById("Contenedor")    
    borde.style.border='2px solid #982424';
    let cambioFondo=document.getElementById("Fondo");    
    cambioFondo.style.backgroundImage="url('assets/img/librolectura.jpg')";
    alert("\nFelicidades haz cambiado de fondo");
}