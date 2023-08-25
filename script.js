const sidebar = document.querySelector(".sidebar");
const menuBtn = document.querySelector("#btn");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtn.classList.toggle("bx-menu");
    menuBtn.classList.toggle("bx-menu-alt-right");
});

const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const articleTitles = document.querySelectorAll(".article-list h2");

    articleTitles.forEach(title => {
        const titleText = title.textContent.toLowerCase();
        if (titleText.includes(searchTerm)) {
            title.parentElement.style.display = "block";
        } else {
            title.parentElement.style.display = "none";
        }
    });
});

const dynamicText = document.querySelector(".kyubi-text span");
const words = ["Twixtor", "a Legend", "the Best"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();
