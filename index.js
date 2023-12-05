document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    const seeMoreButton = document.getElementById('seeMoreBtn');
    const hiddenContent = document.querySelectorAll('.hide');
    console.log("connected")
seeMoreButton.addEventListener('click', function() {
    hiddenContent.forEach(content => {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });

    if (seeMoreButton.textContent === 'See more..') {
        seeMoreButton.textContent = 'See less..';
    } else {
        seeMoreButton.textContent = 'See more..';
    }
});

       
  
});










      
          