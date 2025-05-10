let disp=document.getElementById("disp").innerHTML
console.log(disp)
function display(a){
    let data=document.getElementById("disp")
    data.innerHTML=a
}

function u_clear(){
    let data=document.getElementById("disp")
    data.innerHTML=0
}




function caclulate(){
    let data=document.getElementById("disp")
    let expression=data.innerHTML
    let res=eval(expression)
    console.log(res)
    data.innerHTML=res
}