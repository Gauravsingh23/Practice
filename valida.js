const form = document.getElementById('form');
const username=document.getElementById('username');
const pass=document.getElementById('pass');
const cpass=document.getElementById('cpass');

 form.addEventListener('submit',e=>{
    e.preventDefault();
    validation();
  
 });

function validation()
{
    const nam = username.value.trim();
    const password = pass.value.trim();
    const cpassword  = cpass.value.trim();

    if(nam ==='')
    {
      alert("name cant be blank");
      return false;
    }
  
    
    else if(password != cpassword)
    {
       alert("password didnt match");
       return false;
    }
}