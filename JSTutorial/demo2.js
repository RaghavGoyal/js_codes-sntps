//DOM manipulations:
document.getElementById("b1").addEventListener("click",changeText);

function changeText(){
    let x=document.getElementById("test");
    //get the exixting html:
    let html=x.innerHTML;
    console.log(html);

    //get only text
    let text=x.innerText;
    console.log(text);    
    x.innerHTML="<h1>New text here:<h1>"
}

document.getElementById("b2").addEventListener("click", displayInputData);
function displayInputData(){
    let value=document.getElementById("input1").value;
    if(value!="")
        alert(`entered data is: ${value}`);
}

document.getElementById("match").addEventListener("click", match);
function match(){
    let text1=document.getElementById("match1").value;
    let text2=document.getElementById("match2").value;

    if(text1===text2)
        alert("input fields are same");      

}

document.getElementById("show").addEventListener("click",show);
function show(){
    let values=document.getElementsByName("group1");
    for(let i=0;i<values.length;i++){
        if(values[i].checked)
        {
            alert(`Selected value is: ${values[i].value}`);
        }
    }
    
}

document.getElementById("btn4").addEventListener("click", showSelection);
function showSelection(){
    var select=document.getElementById("selectBox");
    alert(select.options[select.selectedIndex].value);
}


document.getElementById("btn5").addEventListener("click",changeColor);
function changeColor(){
    let x=document.getElementsByTagName("p");
    for(let i=0;i<x.length;i++){
        if(i%2==0 && x[i].style.color != "red")
            x[i].style.color="red";
        else
            x[i].style.color="black";
    }
}

var x=document.getElementsByTagName("img")[0];
x.addEventListener("mouseover",highlight);
x.addEventListener("mouseout",normal);
function highlight(){
    x.style.width="400px";
}
function normal(){
    x.style.width="300px";
}

// document.getElementById("btn6").addEventListener("click",validate1);
//not required because the method will be called automatically when the form is submitted.
function validate1(){
    let uname=document.getElementById("user_name").value;
    let pwd=document.getElementById("password").value;  //gives the value of password.
    if(uname==""||pwd==""){
        alert("please fill the details.");
        return false;
    }
    //Fix to check if blanks are entered:
    //use trim()method on values.

    else if(pwd.trim().length<5){
        alert("Password too small.");
        return false;
    }
    return true;  
}

document.getElementById("btn6").addEventListener("click", addition);
function addition(){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);

    let result= num1+num2;
    document.getElementsByTagName("span")[0].innerText=document.getElementsByTagName("span")[0].innerText+" "+result;

}

var id=0; //to store the setTimeout id
var intervalId=0;  //to store id of set interval
document.getElementById("start").addEventListener("click", call1);
function start(){
    document.getElementsByTagName("h3")[0].innerText="5 seconds passed";
}
function call1(){
    id=setTimeout(start, 5000);
    console.log(id);
}

document.getElementById("stop").addEventListener("click",call2);
function call2(){
    clearTimeout(id);
}

document.getElementById("btn7").addEventListener("click", delay);
function delay(){
   intervalId= setInterval(() => {
        let x=document.getElementById("setInterval");
        if(x.style.color!="red"){
            x.style.color="red";
        }
        else
            x.style.color="green";
    }, 1000);
}

document.getElementById("btn8").addEventListener("click",clear);
function clear(){
    clearInterval(intervalId);
}

document.getElementById("btn9").addEventListener("click",fade);
function fade(){

   let img = document.getElementById("animate");
   let opacity=Number(window.getComputedStyle(img).getPropertyValue("opacity"));
   setInterval(() => {
    if(opacity>0){
        opacity=opacity-0.1;
        img.style.opacity=opacity;
    }   
   }, 100);
   
}

document.getElementById("btn10").addEventListener("click",dark);
function dark(){
    let img = document.getElementById("animate");
    let opacity=Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    setInterval(() => {
        if(opacity<1){
            opacity=opacity+0.1;
            img.style.opacity=opacity;
        }   
       }, 100);
}



