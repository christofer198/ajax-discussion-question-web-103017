console.log('hi')
document.getElementById('btn').addEventListener("click", function(){
  fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(json => function(){
    document.getElementById('fullname').innerText = 'hi'
  })
})
