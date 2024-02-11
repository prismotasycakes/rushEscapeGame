const carouselOurRooms = [...document.querySelectorAll('.carouselOurRooms')];
const rightButton = [...document.querySelectorAll('.rightButton')];
const leftButton = [...document.querySelectorAll('.leftButton')];

carouselOurRooms.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    rightButton[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    leftButton[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})




//nav bar dropdown
    // const room = document.querySelector('.rooms');
    // const menuArea = document.querySelector('.menuArea');
    // const closeButton = document.querySelector('.closeButton');

    // room.addEventListener('click', () => {
    //     menuArea.style.display = 'block';        
    //     }); 

        
    // closeButton.addEventListener('click', () => {
    //     console.log('help, display none not working?');
    //     menuArea.style.display = 'none';
    // });

 //scroll to rooms
    
const heroButton = document.querySelector('.hero-button');
const ourRooms = document.querySelector('.ourRooms');

heroButton.addEventListener('click', () => {
    ourRooms.scrollIntoView({ behavior: 'smooth' });
});
