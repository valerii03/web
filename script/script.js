document.addEventListener("DOMContentLoaded", () => {
      // Обробка натискань на "лайк"
      document.querySelectorAll('.like').forEach(likeBtn => {
        likeBtn.addEventListener('click', () => {
          const heartIcon = likeBtn.querySelector('i');
          if (heartIcon.classList.contains('fa-regular')) {
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
          } else {
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
          }
        });
      });   

})


