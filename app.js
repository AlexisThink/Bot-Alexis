var nombre = "";

setTimeout(function(){
    var text = document.createElement('p');
    text.className = 'message__text'
    document.querySelector('#conversation').appendChild(text);

    text.textContent ='Hola! Mi nombre es Alexis';
}, 2000)

setTimeout(function(){
    var text = document.createElement('p');
    text.className = 'message__text'
    document.querySelector('#conversation').appendChild(text);

    text.textContent ='Soy Mercadologo, pero justo ahora estoy estudiando Desarrollo Web';
}, 4000)

setTimeout(function(){
    var text = document.createElement('p');
    text.className = 'message__text'
    document.querySelector('#conversation').appendChild(text);

    text.textContent ='Me gusta leer, programar y disfrutar con la gente que amo' 
}, 6000)

setTimeout(function(){
    var text = document.createElement('p');
    text.className = 'message__bot'
    document.querySelector('#conversation').appendChild(text);

    text.textContent ='¡Grandioso! Dime, ¿Como te gustaria que te llame de ahora en adelante?' 
}, 7000)

setTimeout(function(){
    var inUser = document.createElement('input');
    inUser.type = 'text';
    inUser.className = 'input__text';
    document.querySelector('#conversation').appendChild(inUser);
    
    var buttonUser = document.createElement('button');
    buttonUser.className = 'button__get';
    buttonUser.textContent = "Enviar";
    document.querySelector('#conversation').appendChild(buttonUser);

    buttonUser.addEventListener('click',function(){
        nombre = inUser.value;

        if(nombre === ""){
            var text = document.createElement('p');
            text.className = 'message__bot'
            document.querySelector('#conversation').appendChild(text); 
            text.textContent ='Asegurate de decirme como me debo de dirigir hacia ti'; 

            var inUser2 = document.createElement('input');
            inUser2.type = 'text';
            inUser2.className = 'input__text';
            document.querySelector('#conversation').appendChild(inUser2);
            
            var buttonUser2 = document.createElement('button');
            buttonUser2.className = 'button__get';
            buttonUser2.textContent = "Enviar";
            document.querySelector('#conversation').appendChild(buttonUser2);

            buttonUser2.addEventListener('click', function(){
                nombre = inUser2.value;

                if(nombre.length >= 6){
                    var text = document.createElement('p');
                    text.className = 'message__bot'
                    document.querySelector('#conversation').appendChild(text);
                
                    text.textContent ='Wow, tienes un nombre largo, bien, mucho gusto ' + nombre;  
                } else if (nombre.length < 6 && nombre !== ""){
                    var text = document.createElement('p');
                    text.className = 'message__bot'
                    document.querySelector('#conversation').appendChild(text);
                
                    text.textContent ='Bien, mucho gusto ' + nombre;};
            })
        } else if(nombre.length >= 6){
            var text = document.createElement('p');
            text.className = 'message__bot'
            document.querySelector('#conversation').appendChild(text);
        
            text.textContent ='Wow, tienes un nombre largo, bien, mucho gusto ' + nombre;  
        } else if (nombre.length < 6 && nombre !== ""){
            var text = document.createElement('p');
            text.className = 'message__bot'
            document.querySelector('#conversation').appendChild(text);
        
            text.textContent ='Bien, mucho gusto ' + nombre;};
    })
},8000)





