var noorul = document.getElementById("noorul");

function five(callback){
    noorul.innerText="5"
    setTimeout( callback, 1000)
}
function four(callback){
    noorul.innerText="4"
    setTimeout( callback, 1000)
}
function three(callback){
    noorul.innerText="3"
    setTimeout( callback,1000)
   
}
function two(callback){
    noorul.innerText="2"
    setTimeout( callback, 1000)
}
function one(callback){
    noorul.innerText="1"
   setTimeout( callback, 1000)
}
function hp(callback){
    noorul.innerText="Happy Pongal"
   setTimeout( callback, 1000)
}



  five(()=>{
    four(()=>{
        three(()=>{
            two(()=>{
                one(()=>{
                    hp()
                })
            })
        })
    })
  })
