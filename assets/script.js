var character = document.getElementById('character');
var block = document.getElementById('block');
var counter = 0;

function start(){
        block.style.animation = "block 1s infinite linear";
        var checkdead = setInterval(function(){
    let charactertop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockleft<70 && blockleft>-20 && charactertop>=130 ) {
            block.style.animation = "none";
            if(!alert("You Lose, Game Score:"+Math.floor(counter/100))){window.location.reload();}
            counter=0;
        }
    else {
            counter++;
            document.getElementById("score").innerHTML = Math.floor(counter/100);
    }
},10)

    }
function jump(){
    if (character.classList == 'animate') {return}
        character.classList.add('animate');
    setTimeout(function(){
        character.classList.remove('animate');
    },500)
}




