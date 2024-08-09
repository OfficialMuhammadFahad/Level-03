var arr = [
    {name: "The vintage car", image: "https://images.unsplash.com/photo-1722806592334-a1e3ed674888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"},
    {name: "The kitchen", image: "https://images.unsplash.com/photo-1722888879060-ed9d1e88c2c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"},
    {name: "A women walking on the beach", image: "https://images.unsplash.com/photo-1722925541442-dc863f63a66c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"},
    {name: "A book shelf", image: "https://images.unsplash.com/photo-1722958968265-8c7c741d02d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "The city view", image: "https://plus.unsplash.com/premium_photo-1722872930882-9cc2e518dce8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Headphones on laptop screen", image: "https://plus.unsplash.com/premium_photo-1664699099304-bb9dca94b7c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTJ8fHxlbnwwfHx8fHw%3D"},
    {name: "Yellow flowers", image: "https://images.unsplash.com/photo-1722917123868-f6e4a2d29652?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D"},
    {name: "Palm tree on a beach", image: "https://images.unsplash.com/photo-1721908919503-a8a1106bec3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"},
    {name: "Black car in dark tunnel", image: "https://images.unsplash.com/photo-1721340143289-94be4f77cda4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"},
    {name: "Black Pepper in bowl", image: "https://images.unsplash.com/photo-1649952052743-5e8f37c348c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dlF0VVVQSXpwNmN8fGVufDB8fHx8fA%3D%3D"},
    {name: "A boy standing in front of the book stall", image: "https://images.unsplash.com/photo-1723008981975-4c759bed3109?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"}
]


function cardsShow(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem Ipsum</div>
        </div>`;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
}


// Two ways of writing this
// First way
// function searchbarfunctionality(){
//     document.querySelector("#searchinput").addEventListener("focus", function(){
//         document.querySelector(".overlay").style.display = "block";
//     })

//     document.querySelector("#searchinput").addEventListener("blur", function(){
//         document.querySelector(".overlay").style.display = "none";
//     })
// }


// Second way
function searchbarfunctionality(){
    var input = document.querySelector("#searchinput");

    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input
    .addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
            </div>`
        })

        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}

searchbarfunctionality();
cardsShow();