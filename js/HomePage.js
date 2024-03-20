const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pictureContainer = document.querySelector('.pictures-list');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentIndex < pictureContainer.children.length - 2) {
        currentIndex += 1;
        pictureContainer.style.transform = `translateX(-${currentIndex * 53}%)`;
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        pictureContainer.style.transform = `translateX(-${currentIndex * 53}%)`;
    }
});
