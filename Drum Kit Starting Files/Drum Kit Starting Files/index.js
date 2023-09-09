// document.querySelector("button").addEventListener("click",handelClick);

// function handelClick(){
// alert("aaji koi daba dala");
// }


let numberOfDrumsButton = document.querySelectorAll(".drum").length;

for(let i = 0 ; i < numberOfDrumsButton ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        alert("aaji koi daba dala");
        });

}

