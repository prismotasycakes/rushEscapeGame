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