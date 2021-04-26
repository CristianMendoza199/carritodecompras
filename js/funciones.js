

    var contador;
    function calificar(item){
        console.log(item);
        contador=item.id[0];
        let nombre = item.id.substring(1);
        for(let i=0;i<5;i++){
            if(i<contador){
                document.getElementById((i+1)+nombre).style.color="orange";
            }else{
                document.getElementById((i+1)+nombre).style.color="black"; 
            }
        }
    }
    document.body.onload = addElement;

    for(i of document.getElementsByClassName('link')){ 
        i.onclick = function(){ 
         window.location = "enlace"; 
        } 
       } 

    
(function(){
"use strict";
    document.addEventListener('DOMContentLoaded',function(){

        var agregar=document.getElementById('agregar');

        agregar.addEventListener('click', agregacarrito);
        function agregacarrito(event){
            event.preventDefault();
            console.log("has hecho click en agregar")
        }

    }

})();