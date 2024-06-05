let chat = document.getElementById("chat")
let nome = localStorage.getItem("nome")
let quantidade = localStorage.getItem("quantidade") || 0
let TodasMsg = document.getElementById("Todas")

if (!nome) {
   
nome = prompt("Use um nome:")
      localStorage.setItem("nome",nome)
      
      
}

setInterval(()=> {
   
   fetch('https://testando-77ab6-default-rtdb.firebaseio.com/.json')

.then(response => response.json())
.then(mensagens => {
   
   if (mensagens) {
   
   let ms = Object.entries(mensagens).map(([key,value]) => `${key}:${value}` ).join('<br><br>')
   if (ms != localStorage.getItem("Todas")) {
      
      TodasMsg = ms
      localStorage.setItem("Todas", TodasMsg)
      
      //tocar som:
      
      let toque = document.getElementById("toque").play()
   }
   chat.innerHTML = ms
   
   
   if (ms.length > 200) {
      
      
      fetch("https://testando-77ab6-default-rtdb.firebaseio.com/.json", {
         
         method: "DELETE"
         
      })
      .then(response => {
         
         alert("O chat foi esvaziado por excesso de Mensagens!")
         
      } )
   }

   }

   
   
   
})
   
},1000)



import { getDatabase , ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"





const btEnviar = document.getElementById("Enviar")


  btEnviar.addEventListener("click", function() {
     
     
const Ref = ref(getDatabase(),localStorage.getItem("nome") + quantidade)

quantidade++
localStorage.setItem("quantidade",quantidade)

//pegar a mensagem
let msg = document.getElementById("msg").value

set (Ref, msg)
.then(() => {
   
   console.log("Enviado")
})
     
  })



   
   
   
   