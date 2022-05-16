const section = document.querySelector('section');

const getData = () => [
    {imgSrc:"../assets/images/Beryllium.jpg", name:"beryllium"},
    {imgSrc:"../assets/images/Boron.jpg", name:"boron"},
    {imgSrc:"../assets/images/Carbon.jpg", name:"carbon"},
    {imgSrc:"../assets/images/Fluorine.jpg", name:"fluorine"},
    {imgSrc:"../assets/images/helium.jpg", name:"helium"},
    {imgSrc:"../assets/images/hydrogen.jpg", name:"hydrogen"},
    {imgSrc:"../assets/images/Lithium.jpg", name:"lithium"},
    {imgSrc:"../assets/images/Neon.jpg", name:"neon"},
    {imgSrc:"../assets/images/Nitrogen.jpg", name:"nitrogen"},
    {imgSrc:"../assets/images/Oxygen.jpg", name:"oxygen"},
    {imgSrc:"../assets/images/Beryllium.jpg", name:"beryllium"},
    {imgSrc:"../assets/images/Boron.jpg", name:"boron"},
    {imgSrc:"../assets/images/Carbon.jpg", name:"carbon"},
    {imgSrc:"../assets/images/Fluorine.jpg", name:"fluorine"},
    {imgSrc:"../assets/images/helium.jpg", name:"helium"},
    {imgSrc:"../assets/images/hydrogen.jpg", name:"hydrogen"},
    {imgSrc:"../assets/images/Lithium.jpg", name:"lithium"},
    {imgSrc:"../assets/images/Neon.jpg", name:"neon"},
    {imgSrc:"../assets/images/Nitrogen.jpg", name:"nitrogen"},
    {imgSrc:"../assets/images/Oxygen.jpg", name:"oxygen"},
    {imgSrc:"../assets/images/Beryllium.jpg", name:"beryllium"},
    {imgSrc:"../assets/images/Boron.jpg", name:"boron"},
    {imgSrc:"../assets/images/Carbon.jpg", name:"carbon"},
    {imgSrc:"../assets/images/Fluorine.jpg", name:"fluorine"},
    {imgSrc:"../assets/images/helium.jpg", name:"helium"},
    {imgSrc:"../assets/images/hydrogen.jpg", name:"hydrogen"},
    {imgSrc:"../assets/images/Lithium.jpg", name:"lithium"},
    {imgSrc:"../assets/images/Neon.jpg", name:"neon"},
    {imgSrc:"../assets/images/Nitrogen.jpg", name:"nitrogen"},
    {imgSrc:"../assets/images/Oxygen.jpg", name:"oxygen"},
]

//randomize cards 

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() -0.5);
    return(cardData);
} 

randomize();

//create the cards

const cardCreator = () => {
    const cardData = randomize();

// create the HTML

cardData.forEach((item) => {
        card.classList = 'card';
        front.classList = 'front';
        back.classList = 'back';
//attach the images to the cards

card.setAttribute('name', item.name);

//put cards in section

section.appendChild(card);
card.appendChild(front);
card.appendChild(back);

card.addEventListener('click', (e) => {
    card.classList.toggle('toggleCard');
    checkCards(e);
});
});
};
