        var mes = document.getElementById('messageinput'),
        submitbut = document.getElementById('submitbutton')
    	submitbut.addEventListener('click', function(e) {
            if (mes.value.length<2) {
             alert('Количество символов не может быть меньше 2!'),
             e.preventDefault();
             mes.focus();
            }
            });