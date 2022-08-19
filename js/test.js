// 02.
// document.getElementsByTagName('h3')[0].style.color='lightblue';
// document.getElementsByTagName('h3')[1].style.color='lightblue';
// document.getElementsByTagName('h3')[2].style.color='lightblue';
//                 or
// const tagColor = document.getElementsByTagName('h3');
// for(let i= 0; i<tagColor.length; i++){
//     tagColor[i].style.color = 'lightblue';
// }

// 04.
// const cardRadius = document.getElementsByClassName('card');
// console.log(cardRadius)
// cardRadius.style.borderRadius = '30px';
//                 or
// document.getElementsByClassName('card')[0].style.borderRadius='30px';
// document.getElementsByClassName('card')[1].style.borderRadius='30px';
// document.getElementsByClassName('card')[2].style.borderRadius='30px';
// document.getElementsByClassName('card')[3].style.borderRadius='30px';
// document.getElementsByClassName('card')[4].style.borderRadius='30px';
// document.getElementsByClassName('card')[5].style.borderRadius='30px';
//                 or
// const cardRadius = document.getElementsByClassName('card');
// for(let i = 0; i < cardRadius.length; i++){
//     cardRadius[i].style.borderRadius = '30px'
// }

// 05.
// // <button class="buy-now-button">SUBMIT</button>   //index.html
// function bgColorChanged() {
//     console.log('The console is logged inside the function & Background Color Green')
//     document.body.style.backgroundColor = 'green';
// }

// 06.
//   const buttons = document.getElementsByClassName('buy-now-button');
//     for(const button of buttons){
//         button.addEventListener('click', function(event){
//             event.target.parentNode.removeChild(event.target);
//         })
//     }

// 07.
// document.getElementById('email-confirm').addEventListener('keyup', function (event) {
//     const text = event.target.value;
//     // console.log(text)
//     const emailButton = document.getElementById('submit-button');
//     if(text === 'email'){
//         emailButton.removeAttribute('disabled');
//     }
//     else{
//         emailButton.setAttribute('disabled', true)
//     }
// })

// 08.
// // <img id="last-bag" onmouseenter="setNewImage()" src="images/bags/bag-3.png" class="card-img-top" alt="..."> //index.html
// function setNewImage() {
//     document.getElementById('last-bag').src = "images/bags/bag-1.png";
// }

// 09. 
function bgColorChangedDbl() {
    document.getElementById('subscribe').style.backgroundColor = 'red';
}