let bowl = document.getElementById("bowl")
let bowlimage = document.getElementById("bowlimage")

bowlimage.addEventListener("click", function(){
    bowlimage.style.display = "none"
}

)


bowl.addEventListener("click", function(){
    
    console.log("yes");
    if (bowlimage.style.display === "none")
    {
        bowlimage.style.display = "block";
    }
    else
    {
        bowlimage.style.display = "none";
    }


    
})

var fish = document.getElementById('fish');

if (localStorage.fisk2 !== undefined){
    fisk2.style.display = localStorage.fisk2;
    fish.style.display = localStorage.fish;
}

fish.addEventListener("click", function(){
    fish.style.display = "none"
    fisk2.style.display = "block"
    localStorage.fish = "none"
    localStorage.fisk2 = "block"
})

var mat = document.getElementById('mat');

mat.addEventListener("click", function(){
    mat.style.display = "none"
    matett.style.display = "block"
})

var löken = document.getElementById('löken');

if (localStorage.lök !== undefined){
    lök.style.display = localStorage.lök;
    löken.style.display = localStorage.löken;
}

löken.addEventListener("click", function(){
    löken.style.display = "none"
    lök.style.display = "block"
    localStorage.löken = "none"
    localStorage.lök = "block"
})

var matett = document.getElementById('matett')

matett.addEventListener("click", function(){
    matett.style.display = "none"
    plutt.style.display = "block"
})
