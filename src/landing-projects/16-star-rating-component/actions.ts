
const stars = document.getElementsByClassName('star');
const totalStars = stars.length;

const toggleStarsActive = (starIndex: number) => {
    for (let i = 0; i < totalStars; i++) {
        if (i <= starIndex) {
            stars[i].classList.add('star-active');
        } else {
            stars[i].classList.remove('star-active');
        }
    }
}

for (let x = 0; x < totalStars; x++) {
    stars[x].addEventListener('click', () => {
        toggleStarsActive(x);
    });
    
}