// Основные функции справочной системы
document.addEventListener('DOMContentLoaded', function() {
    // Добавление функциональности поиска
    initializeSearch();
    
    // Инициализация навигации
    initializeNavigation();
    
    // Добавление подсветки кода
    initializeCodeHighlight();
});

function initializeSearch() {
    // Функция для реализации поиска по справке
    console.log('Поиск инициализирован');
}

function initializeNavigation() {
    // Управление навигацией между страницами
    const currentPage = window.location.pathname.split('/').pop();
    console.log('Текущая страница:', currentPage);
}

function initializeCodeHighlight() {
    // Подсветка синтаксиса для примеров кода
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        block.classList.add('language-python');
    });
}

// Функция для отображения/скрытия содержимого
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
}