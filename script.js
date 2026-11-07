const posterEl = document.getElementById("poster");
const paraEl = document.getElementById("para");

const imageEl = [
    { src: './images/404 Error-bro.png' },
    { src: './images/404 error lost in space-bro.png' },
    { src: './images/404 error lost in space-cuate.png' },
    { src: './images/404 error lost in space-pana.png' },
    { src: './images/404 Error Page not Found with people connecting a plug-bro.png'}
];

let randomIndex = Math.floor(Math.random() * imageEl.length);
const currentImg = imageEl[randomIndex];

posterEl.src = currentImg.src;

if (randomIndex === 2 || randomIndex === 3) {
    paraEl.textContent = "Houston, we have a problem. This page got lost in space. Let's navigate you back to base."
} else if (randomIndex === 4) {
    paraEl.textContent = "Looks like we couldn't make the connection. The page you're looking for is unplugged."
} else if (randomIndex === 1) {
    paraEl.textContent = "Looks like this page drifted into deep space. Time to return to Earth."
}
