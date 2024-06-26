window.onload = function() {
    const suitCard = ['♥', '♠', '♣', '♦'];
    const numCard = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const randIndex = (array) => Math.floor(Math.random() * array.length);

    const generateSuit = (suits) => suits[randIndex(suits)];
    const generateNum = (nums) => nums[randIndex(nums)];
    
    let suit = generateSuit(suitCard);
    let num = generateNum(numCard);

    document.querySelector(".suit-top").innerHTML = suit;
    document.querySelector(".num").innerHTML = num;
    document.querySelector(".suit-bottom").innerHTML = suit;

    if (suit === '♥' || suit === '♦') {
        document.querySelector(".suit-top").classList.add("red");
        document.querySelector(".suit-bottom").classList.add("red");


    }
    
}