import '../assets/css/main.css';

var addTag = document.querySelector(".add-tag-btn");
var tagBox = document.querySelector(".add-tag-popup");

// addTag.onclick = function ()
// {
//     tagBox.style.display= "block";
// }

// window.onclick = function(event) 
// {
//     if(event.target == tagBox)
//     {
//         tagBox.style.display = "none";
//     }
// }


function popupBox()
{
    tagBox.style.display= "block";
}

// if(addTag){
//     addTag.addEventListener('click', popupBox, false);
//   }

addTag.addEventListener('click',popupBox);



