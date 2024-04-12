document.getElementById("currentYear").textContent = new Date().getFullYear();

function check(){
    var today = new Date();
    var currentYear = today.getFullYear();
    var yearBirth = window.document.getElementById('txtyear');
    var res = window.document.querySelector('div#res');

    if(yearBirth.value.length == 0 || yearBirth.value > currentYear){
        window.alert('[ERRO] INSIRA UM ANO VÁLIDO!');
    }else{
        var sex = window.document.getElementsByName('radsex');
        var age = currentYear - Number(yearBirth.value);
        var gender = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'photo');

        if(sex[0].checked){
            gender = 'Homem';
            if(age >= 0 && age < 3){
                img.setAttribute('src', 'foto_bebe.png');
            }else if( age < 10){
                img.setAttribute('src', 'foto_crianca_m.png');
            }else if(age < 30){
                img.setAttribute('src', 'foto_jovem_m.png');
            }else if (age < 50){
                img.setAttribute('src', 'foto_jovem_m.png');
            }else{
                img.setAttribute('src', 'foto_idoso_m.png');
            }
        }else if (sex[1].checked){
            gender = 'Mulher';
            if(age >= 0 && age < 3){
                img.setAttribute('src', 'foto_bebe.png');
            }else if( age < 10){
                img.setAttribute('src', 'foto_crianca_f.png');
            }else if(age < 30){
                img.setAttribute('src', 'foto_jovem_f.png');
            }else if (age < 50){
                img.setAttribute('src', 'foto_jovem_f.png');
            }else{
                img.setAttribute('src', 'foto_idoso_f.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `<strong> Detectamos ${gender} com ${age} anos!</strong> <br>`;
        res.appendChild(img);
        }
    }
