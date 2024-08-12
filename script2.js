// Here I'm selecting elements from HTML

let prompt = document.querySelector("#prompts")

let blank = document.querySelector("#blanktext2")

let audio1 = document.querySelector("#voice")

let by = document.querySelector(".fromwho")

let picture = document.querySelector(".picture")

let bodytext = document.querySelector(".bodytext")

let blanktext = document.querySelector(".blanktext")

let button = document.querySelectorAll(".btn")

let alltext = document.querySelectorAll(".alltext")

let body = document.querySelector("body")

let paralaxx = document.querySelector("#parallax-world-of-ugg")

//This outputs correct when you correctly guess my gutair brand

prompt.addEventListener("keypress", function(event){
  if(prompt.value === "Gretsch"){
    blank.textContent = "Correct"
  }

  else {
    blank.textContent = "Incorrect"
  }
}) 

// I made a list and use a function to randomly pick a item so when you click on the funfact button it gives out a new fact each time you press it

let facts = ["I have 3 siblings", "I grew up in the Bronx", "I have a apprenticeship at JPMC Careerwise", "I play the Guitar", "I have every Playstation Console", "My Favorite Game is Xenoblade 2", "I like Philosophy", "I have Hazel eyes", "I had a 4.31 GPA last trimester", "My Favorite Movie is Whiplash"]


function randomitem(){

  let random = Math.floor(Math.random() * facts.length)

  return facts[random]
}

console.log(blanktext)

picture.addEventListener("mouseover", function(event){
  picture.src = "https://tiermaker.com/images/chart/chart/disco-elysium-skills-1320147/endurancejpeg.png"
  bodytext.textContent = "You're tired, afraid, sad, hungry and in pain. But most of all: confused. Yet *still*, like a tiny icebreaker -- the tiniest boat in the fleet -- you plough ever forward.."
  bodytext.style.color = "#732934"
  by.textContent = "Endurance"
  by.style.color = "#732934"
  
})

picture.addEventListener("mouseout", function(event){
  picture.src = "https://static.displate.com/857x1200/displate/2020-12-18/64fb5dd23738d0089102be2db8cbd409_a1583add5a092eb707bf2d4f34256d5c.jpg"
  bodytext.textContent = "Subdue the regret. Dust yourself off, proceed. You'll get it in the next life, where you don't make mistakes. Do what you can with this one, while you're alive."
  bodytext.style.color = "#7256b3"
  by.textContent = "Volition"
  by.style.color = "#7256b3"

})

// I used a eventlistener inside the forloop because it's multiple events happeneing when one input. It changes from light mode to dark mode and vice versa

for(let i = 0; i < alltext.length; i++){

button[1].addEventListener("click", function(event){
  body.style.backgroundColor = "black"
  alltext[i].style.color = "white"

})

}

for(let i = 0; i < alltext.length; i++){

button[2].addEventListener("click", function(event){
  body.style.backgroundColor = "white"
  alltext[i].style.color = "black"

})

}


button[0].addEventListener("click", function(event){

  blanktext.textContent = randomitem()

})

by.addEventListener("click", function(event){
  audio1.play()
})