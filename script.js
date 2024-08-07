//Criei uma função e a coloquei no body onde ao carregar o site ela é chamada. 
function load(){
    let msg = document.getElementById('msg') //pega a div msg, para que possa muda-la dps
    let img = document.getElementById('image') //pega a imagem para que eu possa muda-la dps 
    let data=new Date() //função ja pronta do js que me da a data atual do sistema que o programa está oprando
    let hour= data.getHours()//pega o newdate para que eu possa usar as horas atuais
    let minutes= data.getMinutes()
    msg.innerHTML= `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}` //muda a mensagem de acordo com as horas do sistema com a varaivel hour q tem as horas atuais e variavel muinutes que tem os minutos atuais 

    //se a hora do sistema for entre 5 ao meio dia. dará bom dia e mudará a foto e isso segue nesses blocos de condição
    if(hour >=5 && hour<12){
        img.src= './img/solmanhã.png'
        document.body.style.backgroundImage = 'url(./img/manhã.jpg)';
        document.body.style.backgroundSize = 'cover';
        
    } else if(hour >=12 && hour <18 ){
        img.src= './img/sol.tarde.png'
        document.body.style.backgroundImage = 'url(./img/tarde.jpg)';
          document.body.style.backgroundSize = 'cover'; 
    }
    else{
        img.src= './img/lua.png'
          document.body.style.backgroundImage = 'url(./img/4289694.jpg)';
          document.body.style.backgroundSize = 'cover'; 
        }
}
