let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let result = document.getElementById('result');

let generate = ()=>{
    var random = Math.random();
    return (random <= 0.334)?0:((random<=0.667)?1:2);
};

rock.addEventListener('click',()=>{
    let gen = generate();
    if(gen == 0)
        result.innerHTML = "TIE! You and Computer chose <em>Rock</em>";
    else if(gen == 1)
        result.innerHTML = "You Lose! Computer chose <em>Paper</em>";
    else if(gen == 2)
        result.innerHTML = "You Win! Computer chose <em>Scissors</em>";
});
paper.addEventListener('click',()=>{
    let gen = generate();
    if(gen == 1)
        result.innerHTML = "TIE! You and Computer chose <em>Paper</em>";
    else if(gen == 2)
        result.innerHTML = "You Lose! Computer chose <em>Scissors</em>";
    else if(gen == 0)
        result.innerHTML = "You Win! Computer chose <em>Rock</em>";
});
scissors.addEventListener('click',()=>{
    let gen = generate();
    if(gen == 2)
        result.innerHTML = "TIE! You and Computer chose <em>Scissors</em>";
    else if(gen == 0)
        result.innerHTML = "You Lose! Computer chose <em>Rock</em>";
    else if(gen == 1)
        result.innerHTML = "You Win! Computer chose <em>Paper</em>";
});