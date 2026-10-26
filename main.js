// let thumbUp = document.getElementsByClassName("fa-thumbs-up");
// let thumbDown = document.getElementsByClassName("fa-thumbs-down");
let deleted = document.querySelectorAll(".deleteBtn");
let update = document.querySelectorAll('.updateBtn')


document.querySelector('.infoBtn').addEventListener('click', getNinja)

function getNinja(){
    const ninjas = document.querySelector('input').value
    const url = `/api/${ninjas}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#name').innerText = data.name
        document.querySelector('#ninjaAbility').innerText = data.signatureAbility
        document.querySelector('#age').innerText = data.age
        document.querySelector('#village').innerText = data.village
        document.querySelector('#pic').src= data.image
    })
}


Array.from(update).forEach(function(element) {
      element.addEventListener('click', function(){
    const names = this.parentNode.children[1].innerText
    const url = prompt('Enter url '+ names)
    const image = url
        fetch('addImage', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': names,
            'image':image
            

          })
        })
        .then(response => {
          response.json()
        })
        .then(data => {
         const newPic = document.querySelector('#pic')
         newPic.src = image;
         newPic.style.display = 'block'
        })
      });
});

Array.from(deleted).forEach(function(element) {
      element.addEventListener('click', function(){
        const names = this.parentNode.children[1].innerText
        console.log(JSON.stringify(names))
        const signatureAbility = this.parentNode.childNodes[3].innerText
        const age = this.parentNode.childNodes[5].innerText
        const village = this.parentNode.childNodes[7].innerText

        console.log(names)

        fetch('/deleteCharacter', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: names, 
            // signatureAbility:signatureAbility,
            // age:age,
            // village:village,
          })
        }).then(function (response) {
            return response.json()
        }).then(function(data) {
            alert(data)
        window.location.reload()

        })
      });
});




