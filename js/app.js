var inputs = document.querySelectorAll('input'),
    btn = document.querySelector('.btn');

var addError = function(field){
    
    var err = field.parentNode.querySelector('.error'),
    hasError = err.classList.contains('error-active'),

    exclam = field.parentNode.querySelector('.exclam');

    if (hasError == false ) {
            
        if(field.value.length === 0){
            err.innerHTML = `${field.placeholder} can't be empty`;
        }else{
            err.innerHTML = `look like this is not an email`;
        }
        err.classList.add('error-active');

        exclam.innerHTML = '!';
        exclam.classList.add('exclam-active');

        field.style.borderColor = 'hsl(0, 100%, 74%)';

    }
}

var removeError = function(field){
    var err = field.parentNode.querySelector('.error'),
    hasError = err.classList.contains('error-active'),

    exclam = field.parentNode.querySelector('.exclam');

   
            if(hasError == true){
                err.classList.remove('error-active');
                exclam.classList.remove('exclam-active');
                field.style.borderColor = '';
                field.value = '';    
            }
}

var emailVerify = function(field){
    if(field.type === 'email' && field.value.length !== 0){
        var reg = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
        if(!reg.test(field.value)){
            addError(field);
            field.value = 'email@example/com'
            field.style.color='hsl(0, 100%, 74%)';
        }
    }
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    inputs.forEach(function(field){
        if(field.value.length === 0){
            addError(field);
        }
        emailVerify(field);
    });
});

inputs.forEach(function(field){
    field.addEventListener('focus', function(e){
        removeError(this);
        this.style.color = '';
    })
});


