document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const modal = document.getElementById("thankYouModal");
    const closeModalBtn = document.getElementById("closeModal");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Зупинити стандартну відправку форми
        modal.classList.add("visible"); // Відкрити модальне вікно
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("visible"); // Закрити модальне вікно
        form.reset()
        location.reload()
    });

    // Закрити модальне вікно при кліку за межами вмісту
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("visible");
            form.reset()
            location.reload()
        }
    });
});