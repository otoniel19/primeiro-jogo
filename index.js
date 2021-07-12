//posiçao x
var px = 0
//posição y
var py = 0

//objeto a ser movido
var obj = document.getElementsByClassName('box')[0]

//mexe pra direita
var direita = document.getElementById('direita').addEventListener('click', function() {
  px += 10
  obj.style.left = px+"px"
 
//serve pra não deixar sair pra fora da div
  if (px > 337) {
     obj.style.left = "338px"
     px = 0
  }
  
})
//mexe pra esquerda
var esquerda = document.getElementById('esquerda').addEventListener('click', function() {
  px -= 10
  obj.style.left = px+"px"
  
  //serve pra não deixar sair da div também
  if(px <= 0 || px <= -0) {
    document.location.reload(1)
  }
  
})
//mexe pra cima
var cima = document.getElementById('cima').addEventListener('click', function() {
  py -= 10
  obj.style.top = py+"px"
  
 //serve pra não deixar sair da div também
  if(py <= 0) {
     document.location.reload(1)
  }
})
//mexe pra baixo
var baixo = document.getElementById('baixo').addEventListener('click', function() {
  py += 10
  obj.style.top = py+"px"
  
 //serve pra não deixar sair da div também
   if(py > 445) {
     document.location.reload(1)
   }
})

    