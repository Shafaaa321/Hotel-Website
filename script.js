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
    {image: 'items/img.svg', title: "Payment method", description: "We have a lot of them, from <br> cryptocurrencies to barter for potatoes"},
    {},
    {}
]

const renderChooseUs = () => {
    const chooseUsTag = document.getElementById('')
    
    chooseUsArray.forEach((element) => {
        chooseUsTag.innerHTML += `
            <div class="choose-us-element">
                <img src=${element.image} class="pic6">
                <h3>${element.title}</h3>
                <p class="para">${element.description}</p>
            </div> 
        `
    })
}


renderChooseUs()

