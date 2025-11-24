// Menu Filter
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        if(category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Cat Lightbox
function openLightbox(img) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.background = 'rgba(0,0,0,0.8)';
    lightbox.style.display = 'flex';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.cursor = 'pointer';
    const imgCopy = document.createElement('img');
    imgCopy.src = img.src;
    imgCopy.style.maxWidth = '80%';
    imgCopy.style.maxHeight = '80%';
    lightbox.appendChild(imgCopy);
    document.body.appendChild(lightbox);
    lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
}

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name || !email || !message){
        alert('Please fill out all fields!');
    } else {
        alert('Thanks for contacting us, ' + name + '!');
        this.reset();
    }
});

