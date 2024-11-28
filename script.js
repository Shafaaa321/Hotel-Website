document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }
});

const chooseUsArray = [
    {
        image: "items/img.svg", 
        title: "Payment method",
        description: "We have a lot of them, from <br> cryptocurrencies to barter for potatoes"
    },
    {
        image: "items/img (4).svg",
        title: "Simple search process",
        description: "We checked it out, even the kid did it, <br> but it was my mom's friend's son"
    },
    {
        image: "items/img (3).svg",
        title: "24/7 Support",
        description: "Is there something you don't understand? Feel free to call us. Phone number in the footer"
    },
    {
        image: "items/img (1).png",
        title: "We are nice",
        description: "Fantacy is over, there will be something <br> really convincing here"
    }
];

const renderChooseus = chooseUsArray => {
    const container = document.getElementById('chooseUsContainer');
    chooseUsArray.forEach(element => {
        container.innerHTML += `
        <div class="choose-us-element">
                <img src="${element.image}" class="payment-img">
                <h3>${element.title}</h3>
                <p class="paragraphs">${element.description}</p>
            </div>  
        `;
    });
}

renderChooseus(chooseUsArray);

const specialOffers = [
    {
        image1: "items/HotelRoom1.svg",
        image2: "items/rating.svg",
        image3: "items/favorite.svg", 
        title: "Wilderness Club at Big <br> Ceddar", 
        date: "28 October--1 November",
        image4: "items/price.svg"
    },
    {
        image1: "items/HotelRoom2.png",
        image2: "items/rating.svg",
        image3: "items/favorite.svg", 
        title: "Wilderness Club at Big <br> Ceddar", 
        date: "28 October--1 November",
        image4: "items/price.svg" 
    },
    {
        image1: "items/HotelRoom3.svg",
        image2: "items/rating.svg",
        image3: "items/favorite.svg", 
        title: "Wilderness Club at Big <br> Ceddar", 
        date: "28 October--1 November",
        image4: "items/price.svg"
    }
];

const renderSpecial = specialOffers => {
    const special = document.getElementById('SpecialOffersContainer');
    specialOffers.forEach(Special => {
        special.innerHTML += `
        <div class="cards">
        <div class="image-wrapper">
                <img src=${Special.image1} class="room-img">
                <img src=${Special.image2} class="rating-img">
                <img src=${Special.image3} class="heart-img">
                </div>
                <h3 class="header4">${Special.title}</h3>
                <p class="availability">${Special.date}</p>
                <img src=${Special.image4} class="price-img">
            </div>
        `;
    });
}

renderSpecial(specialOffers);

const ReviewArray = [
    {
        line: "br",
        image0: "items/reviewpic1.svg",
        paragraph1: "I quickly found the right tour for me, but i had a few questions about the hotel, i wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. <br> I will come back again and again.",
        paragraph2: 'Jannike Borg, <span class="span2">Publisher</span>'
    },
    {
        line: "br",
        image0: "items/reviewpic2.svg",
        paragraph1: "I quickly found the right tour for me, but i had a few questions about the hotel, i wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. <br> I will come back again and again.",
        paragraph2: 'LeBron Durant, <span class="span2">Flight attendant</span>'
    },
    {
        line: "br",
        image0: "items/reviewpic3.svg",
        paragraph1: "I quickly found the right tour for me, but i had a few questions about the hotel, i wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. <br> I will come back again and again.",
        paragraph2: 'Kaarel Piho, <span class="span2">Chiropodist</span>'
    }
];

const renderReview = ReviewArray => {
    const review = document.getElementById('ReviewContainer');
    ReviewArray.forEach(Review => {
        review.innerHTML += `
        <div class="review-card">
        <br ${Review.line}>
        <img src=${Review.image0} class="customers">
        <p class="review1">${Review.paragraph1}</p>
        <p class="review2">${Review.paragraph2}</p>
        </div>
        `;
    });
}

renderReview(ReviewArray);

const RecentPosts = [
    {
        image11: "items/post1.svg",
        paragraph11: "May 23, 2022",
        image12: "items/posttime1.svg",
        header: "My trip to Athens",
        paragraph12: "It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already..."
    },
    {
        image11: "items/post2.png",
        paragraph11: "May 23, 2022",
        image12: "items/posttime2.svg",
        header: "Vilnius resorts",
        paragraph12: "I haven't seen any resorts in Vilnius, but there are wonderful people and pubs"
    },
    {
        image11: "items/post3.svg",
        paragraph11: "May 23, 2022",
        image12: "items/posttime3.svg",
        header: "Tips for flying on a plane",
        paragraph12: "If you have a fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you"
    }
]; 

const renderPosts = RecentPosts => {
    const Posts = document.getElementById('PostContainer');
    RecentPosts.forEach(post => {
        Posts.innerHTML += `
            <div class="Post"> 
            <div class="post-pic">
                <img src=${post.image11} class="places">
                </div>
                <p class="date">${post.paragraph11}</p>
                <img src=${post.image12} class="time">
                <h4>${post.header}</h4>
                <p class="post">${post.paragraph12}</p>
            </div>
        `;
    }); 
}

renderPosts(RecentPosts);

