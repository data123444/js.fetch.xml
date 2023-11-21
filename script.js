let request = new XMLHttpRequest();
request.addEventListener("load", function() {
    let saveInfoText = this.responseText;
    let saveInfoJs = JSON.parse(saveInfoText);
    console.log(saveInfoJs);

    let ulElement = document.createElement('ul');
    saveInfoJs.data.forEach(item => {
        let liElement = document.createElement('li');
        liElement.textContent = `${item.email} ${item.first_name} ${item.last_name}`
        ulElement.appendChild(liElement)
        document.getElementById("info").appendChild(ulElement)
    });
    request.addEventListener("error", function(){
     let p = document.createElement("p")
     p.textContent = "Server Error"
     document.getElementById("info").appendChild(p)
    })
})
request.open ("GET", "https://reqres.in/api/users?page=2");
request.send ();
//fetch
fetch('https://reqres.in/api/unknown', {
    method: 'GET'
})
.then(function(resp) {console.log(resp)
    if (resp.status !== 200); {
        throw "error";
    }
    return resp.json();
})
.then(function(data) {
    let ulElement = document.createElement('ul');
    data.data.forEach(item => {
        let liElement = document.createElement('li');
        liElement.textContent = `${item.name} ${item.color}`;
        ulElement.appendChild(liElement);
    });
    document.getElementById("info").appendChild(ulElement);
})
.catch(function(error) {
    console.log(error);
});