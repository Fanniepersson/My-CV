
const hamburger = document.querySelector(".hamb-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

   window.addEventListener('keydown', function(event) {
       if (event.ctrlKey && event.key ==='2' ){
           alert('you pressed the secret buttons....');
       }
   })

   function changeBackgroundColor(color){
       document.getElementById('home').style.background = 'rosyBrown';
       document.getElementById('about').style.background = 'rosyBrown';
       document.getElementById('contact').style.background = 'rosyBrown';
   }

 
   window.addEventListener('click', function (e) {
       console.log(`x: ${e.x} | y: ${e.y}`);

       if (e.x <= 50 && e.y <= 900){
        changeBackgroundColor();

       }
   });

 fetch("./education.json")
.then(response => {
    return response.json();
})
.then(jsondata => console.log(jsondata));

fetch("./career.json")
.then(response => {
    return response.json();
})
.then(jsondata2 => console.log(jsondata2));



