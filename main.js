document.addEventListener("DOMContentLoaded", function(event) {
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
      fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(res => {
          for(let i = 0; i<3 ; i++){
    
              let newDiv = document.createElement("div")
              let newText = document.createElement("p")
              let newAvatar = document.createElement("img")
    
              let name = `${res.data[i].first_name} ${res.data[i].last_name}`
              let id = res.data[i].id
              let avatar = res.data[i].avatar
    
              newDiv.className = "col-12 col-md-3 jumbotron m-3"
              newAvatar.className = "newImg"
    
              let idNode = document.createTextNode(id)
              let nameNode = document.createTextNode(name)
              
              newAvatar.setAttribute('src', avatar )
    
              newText.appendChild(idNode)
              newDiv.appendChild(newText)
              newDiv.appendChild(nameNode)
              newDiv.appendChild(newAvatar)
              
    
              document.getElementById("secondaryNews").append(newDiv)
              console.log(avatar)
          }
      })
    
    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    
    if (dd < 10) {
      dd = '0' + dd;
    }
    
    if (mm < 10) {
      mm = '0' + mm;
    }
    
    today = mm + '/' + dd + '/' + yyyy;
    console.log(today);
    document.getElementById("todayDate").append(today)
    console.log(c)
    });