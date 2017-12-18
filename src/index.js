
document.getElementById('btn').addEventListener("click", function(){
  fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(json => something())
})


function something() {
  document.getElementById('fullname').innerText = json.name.first
}
