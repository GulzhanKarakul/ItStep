const log = console.log;
const getUrl  = 'https://reqres.in/api/users/';
const postUrl = 'https://reqres.in/api/users';
// fetch(url)
// .then( data => data.json() )
// .then( log )
// .catch( console.warn );

let user = null;

document.forms[0].onsubmit = async (ev) => {
    ev.preventDefault();

    let data = {
        first_name: ev.target[0].value,
        last_name: ev.target[1].value,
        email: ev.target[2].value,
        avatar: ev.target[3].value
    }
    
    let response = await fetch(postUrl, {
        method: 'post',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(data)
    })

    user = await response.json();
    log(user);
    let id = user.id;
}

function showUser(data){
    let baseDiv = document.createElement('div');
    baseDiv.className = 'flex';

    let avatar = document.createElement('img');
    avatar.src = data.avatar;

    let userName = document.createElement('h3');
    userName.textContent = data.first_name + ' ' + data.last_name;

    let userEmail = document.createElement('p');
    userEmail.textContent = data.email;

    baseDiv.append(avatar);
    baseDiv.append(userName);
    baseDiv.append(userEmail);

    document.body.append(baseDiv);
    document.querySelector('.form').style.display = 'none';
}

document.querySelector('#get').onclick = () => {
    showUser(user);




//     fetch(getUrl+id)
//       .then( response => response.json() )
//       .then( log )
//       .catch( log );
}
