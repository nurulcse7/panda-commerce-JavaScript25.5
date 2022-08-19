// ১. নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে index.html এর সাথে কানেক্ট করতে পারো কিনা?
// Ans.  
<script src="js/dom-integration.js"></script>
// paste in the body tag at last line

// ২. যতগুলা ইলিমেন্টে h3 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
const tagColor = document.getElementsByTagName('h3');
console.log(tagColor)
tagColor.style.color = 'lightblue';
//                  or 
document.getElementsByTagName('h3')[0].style.color = 'lightblue';
document.getElementsByTagName('h3')[1].style.color = 'lightblue';
document.getElementsByTagName('h3')[2].style.color = 'lightblue';
//                  or 
const tagColor = document.getElementsByTagName('h3');
for (let i = 0; i < tagColor.length; i++) {
    tagColor[i].style.color = 'lightblue';
}

// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 

const bgColor = document.getElementById('backpack');
console.log(bgColor)
bgColor.style.backgroundColor = 'tomato';

// ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
const cardRadius = document.getElementsByClassName('card');
console.log(cardRadius)
cardRadius.style.borderRadius = '30px';
//                  or 
document.getElementsByClassName('card')[0].style.borderRadius = '30px';
document.getElementsByClassName('card')[1].style.borderRadius = '30px';
document.getElementsByClassName('card')[2].style.borderRadius = '30px';
document.getElementsByClassName('card')[3].style.borderRadius = '30px';
document.getElementsByClassName('card')[4].style.borderRadius = '30px';
document.getElementsByClassName('card')[5].style.borderRadius = '30px';
//                  or 
const cardRadius = document.getElementsByClassName('card');
for (let i = 0; i < cardRadius.length; i++) {
    cardRadius[i].style.borderRadius = '30px'
}

// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 
// <button class="buy-now-button">SUBMIT</button>   //index.html 
function bgColorChanged() {
    console.log('The console is logged inside the function & Background Color Green')
    document.body.style.backgroundColor = 'green';
}


// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 
const buttons = document.getElementsByClassName('buy-now-button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।
document.getElementById('email-confirm').addEventListener('keyup', function (event) {
    const text = event.target.value;
    // console.log(text)
    const emailButton = document.getElementById('submit-button');
    if (text === 'email') {
        emailButton.removeAttribute('disabled');
    }
    else {
        emailButton.setAttribute('disabled', true)
    }
})


// ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে।
// <img id="last-bag" onmouseenter="setNewImage()" src="images/bags/bag-3.png" class="card-img-top" alt="..."> //index.html
function setNewImage() {
    document.getElementById('last-bag').src = "images/bags/bag-1.png";
}


// ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
// <div ondblclick="bgColorChangedDbl()" id="subscribe">
function bgColorChangedDbl() {
    document.getElementById('subscribe').style.backgroundColor = 'red';
}

