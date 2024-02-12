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

//Filter select Carousel//

// document.getElementById("filterSelect").addEventListener("change", function() {
//     var filterValue = this.value;
//     var cards = document.querySelectorAll(".cardContainer");

//     cards.forEach(function(card) {
//         var categories = card.className.split(" ");
//         if (filterValue === "all" || categories.includes(filterValue)) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }
//     });
// });

function filterCards() {
    var themeFilterValue = document.getElementById("themeSelect").value;
    var locationFilterValue = document.getElementById("locationSelect").value;
    var cards = document.querySelectorAll(".carouselOurRooms .cardContainer");

    cards.forEach(function(card) {
        var themeCategories = card.className.split(" ");
        var locationCategories = card.className.split(" ");

        if ((themeFilterValue === "all" || themeCategories.includes(themeFilterValue)) && 
            (locationFilterValue === "all" || locationCategories.includes(locationFilterValue))) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

document.getElementById("themeSelect").addEventListener("change", filterCards);
document.getElementById("locationSelect").addEventListener("change", filterCards);

// Initial call to filter cards when the page loads
filterCards();