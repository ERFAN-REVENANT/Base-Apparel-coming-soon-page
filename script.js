document.getElementById('send').addEventListener('submit', function(event){
    event.preventDefault();

    const input = document.getElementById('input');
    const error = document.getElementById('error');
    const notValid = document.getElementById('not-valid');
    const email = input.value;
    const buttonerror = document.getElementById('button-error') 

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)){
        input.classList.add('error');
        notValid.style.display = 'block';
        error.style.display = 'inline';
        buttonerror.style.marginLeft = '330px';
    }
    else{
        input.classList.remove('error');
        notValid.style.display = 'none';
        error.style.display = 'none';
    }
});

document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('send').dispatchEvent(new Event('submit'));
});