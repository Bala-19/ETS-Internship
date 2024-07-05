document.getElementById('Forms').addEventListener('submit',function(event)
{
    event.preventDefault();
    const email=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    let isvalid=true;
    document.getElementById('make').textContent=' ';
    document.getElementById('pass').textContent=' ';
    document.getElementById('message').textContent=' ';
    if(!validateEmail(email)){
        document.getElementById('input').textContent='Invalid';
        isvalid=false;
    }
    if(!validatePassword(password)){
        document.getElementById('passw').textContent='Inavlid';
        isvalid=false;
    }
    if(isvalid){
        document.getElementById('message').textContent='Success';
    }
})
    function validateEmail(email){
        const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(null);
    }
    function validatePassword(password){
        return password.length>=8;
    }
document.getElementById('mail').addEventListener('click',function()
{
    const email=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    if(!validateEmail(email)&&!validatePassword(password)){
        const subject=encodeURIComponent('Login Attempt');
        const body=encodeURIComponent('Email:${email}\nPassword:${password}\n Thankyou');
        const mail='mail to:sec22cb039@sairamtap.edu.in? subject=${subject}&body=${body}';
        window.location.href=mail;
     }
     else{
        alert("Please send a valid mail");
     }
})