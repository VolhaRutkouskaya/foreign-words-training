//готовим карточку со словами
function prepareCard(content) {
    currentWord.textContent = currentIndex + 1;
    frontTitle.textContent = content.title;
    backTitle.textContent = content.translation;
    example.textContent = content.example;
    wordsProgress.value = (currentIndex + 1) / arr.length * 100;
}
