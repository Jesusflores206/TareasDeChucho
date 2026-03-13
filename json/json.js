// busacar la respuesta

fetch('json.json')
.then(Response=> Response.json())
.then(json =>{
    document.getElementById('ed').innerHTML=json.pregunta1;
    document.getElementById('adn').innerHTML=json.frase1;
    document.getElementById('id').innerHTML=json.frase2;
    document.getElementById('op').innerHTML=json.frase3;
    document.getElementById('on').innerHTML=json.pregunta2;
    document.getElementById('numero').innerHTML=json.cantidad1;
    console.log(json)



    console.log(json)
})