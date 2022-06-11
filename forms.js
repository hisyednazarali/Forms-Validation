const getId = ()=>{
    let id = Math.floor(Math.random()*1000);
    document.getElementById('eid').value = id
}

function validateFname(){
    let name = document.getElementById("fname").value = id;
    let fdiv = document.getElementsByClassName("fdiv")[0];

    if(name.trim().length==0){
        document.getElementById('fout').innerText = `please Enter Name`;

        fdiv.classList.remove('has-success')
        fdiv.classList.add('has-error')
       }else{
        document.getElementById('fout').innerText = '';
        fdiv.classList.remove('has-success')
        fdiv.classList.add('has--error')
       }

}

function validateEmail(){
    let email = document.getElementById("mail").value = id;

    if(email.trim().length ==0){
        document.getElementById("eout").innerText=`Please Enter Email`;

    }else{
        if(email.match("^([a-zA-z0-9]+)@[a-zA-Z0-9]+)\.([a-zA-Z]{2-5})$")==null){
            document.getElementById("eout").innerText= `Please Enter Valid Email`;
        }else{
            document.getElementById("eout").innerText = '';
        }
    }

}

function validatePassword(){
    let password = document.getElementById("pwd").value = id;
    if(password.trim().length<15){
        if(password.trim().length<8){
            document.getElementById("pout").innerText = `please enter password`;
            document.getElementById('ppot').style.display = "block";
            document.getElementById('ppot').style.backgroundColor = "red";

        }else if(password.trim().length>8 && password.trim().length<11){
            document.getElementById("pout").innerText = "";

            document.getElementById("pout").style.backgroundColor = "orange";

        }else{
                 document.getElementById("ppot").style.backgroundColor="green";
        }
            
        }
    }
const showPassword = () =>{
    let password = document.getElementById("pwd");
    if(password.type = 'password'){
        password.type = 'text'
    } else{
        password.type = 'password'
    }
}

function validatePassword(){
    let password = document.getElementById("pwd").value;
    let cPassword = document.getElementById("cpwd").value;

    if(password !== cPassword ){
        document.getElementById(`cpout`).innerText = `Password not matched`;
    }else{
        document.getElementById("cpout").innerText = '';

    }
}

const getCity = () =>{
    
    let city = document.getElementById('city').value;
    document.getElementById("cout").innerText = `you have selected ${city}`;

}
