// window.addEventListener('DOMContentLoaded', (event) => {
//     const counter = document.getElementById('counter');
// const minus = document.getElementById('minus');
// const plus = document.getElementById('plus');
// const heart = document.getElementById('heart');
// const pause = document.getElementById('pause');
// const likes = document.getElementsByClassName('likes')[0];
// const commentForm = document.getElementById('comment-form');
// const comment = document.getElementById('comment-input');
// const submit = document.getElementById('submit');
// const commentList = document.getElementById('list');
// let counterRunning = true;

// const counterPlus = setInterval(()=>{
//     if (counterRunning === true){
//     counter.innerHTML ++
//     }
// }, 1000);

// //increase the counter
// plus.addEventListener('click', ()=>{
//     counter.innerHTML ++;
// });

// //reduce the counter
// minus.addEventListener('click', ()=>{
//     counter.innerHTML --;
// });

// //heart button click
// heart.addEventListener('click', ()=>{
//     let i = 0;
//     i++;
//     likeList = document.createElement('li');
//     likeList.innerHTML = ` ${counter.innerHTML} has been liked ${i} times`;
//     likes.appendChild(likeList);
// })

// //pause counting
// pause.addEventListener('click', ()=>{
//     if (counterRunning === true){
//         counterRunning = false;
//         pause.innerHTML = 'Resume'
//         heart.disabled = true;
//         plus.disabled = true;
//         minus.disabled = true;

//     } else if( counterRunning === false){
//         counterRunning = true;
//         pause.innerHTML = 'Pause';
//         heart.disabled = false;
//         plus.disabled = false;
//         minus.disabled = false;

//     }
// })

// // submit comment
// submit.addEventListener('click', (event)=>{
//     event.preventDefault()
//     const commentItem = document.createElement('p')
//     commentItem.innerHTML = comment.value;
//     commentList.appendChild(commentItem);
//     commentForm.reset();
// })
// })

let currentNumber = 0
let counterRunning = true;
let likedNumbers = {};
const timerH1 = document.querySelector('h1#counter');
const buttonCOntainer = document.querySelector('#button-container');

const pauseBtn = document.getElementById('pause')
const likesUl = document.querySelector('ul.likes')
const commentForm = document.querySelector('#comment-form')


setInterval(()=>{
    if(counterRunning)
    changeCounter(1);
}, 1000)

buttonCOntainer.addEventListener('click', event=>{

    if(event.target.id === 'plus'){
        changeCounter(1);

    } else if(event.target.id === 'minus'){
        changeCounter(-1);
    }else if(event.target.id === 'pause'){
        togglePaused();
    }else if(event.target.id === 'heart'){
        updateLikes();
    }
})

commentForm.addEventListener('submit',(event) => {
    event.preventDefault();
   let comment = document.getElementById('comment-input')
   const commentlist = document.getElementById('list')
   const newComment = document.createElement('p')
   newComment.textContent = comment.value;
   commentlist.append(newComment)
   commentForm.reset()
})

function updateLikes(){
    if(likedNumbers[currentNumber]){
        const li = document.querySelector(`[data-number = '${currentNumber}']`)
        likedNumbers[currentNumber] +=1
        li.textContent = `The number ${currentNumber} has been liked ${likedNumbers[currentNumber]} times`;


    }else{
        likedNumbers[currentNumber] = 1;
        const li = document.createElement('li')
        li.dataset.number = currentNumber;
        li.textContent = `The number ${currentNumber} has been liked 1 time`;
        likesUl.append(li);
    }
}

function changeCounter(amount){
    currentNumber = currentNumber + amount;
    timerH1.textContent = currentNumber;

}
function togglePaused(){
    if(counterRunning){
        counterRunning = false;
        pauseBtn.innerHTML = 'resume';
        document.querySelectorAll('button').forEach(button => {
            if(button.id !== 'pause'){
                button.disabled = true;
            }
        })
    } else if(!counterRunning){
            counterRunning = true;
        pauseBtn.innerHTML = 'pause';
        document.querySelectorAll('button').forEach(button =>{
            button.disabled = false;
        })

        }
}