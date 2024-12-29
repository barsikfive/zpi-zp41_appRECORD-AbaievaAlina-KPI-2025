// Застосувати напівжирний стиль
function applyBold() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.fontWeight = 'bold';
    range.surroundContents(span);
    updateFormattedText();
}

// Застосувати курсив
function applyItalic() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.fontStyle = 'italic';
    range.surroundContents(span);
    updateFormattedText();
}

// Застосувати підкреслення
function applyUnderline() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.textDecoration = 'underline';
    range.surroundContents(span);
    updateFormattedText();
}

// Змінити колір тексту
function changeColor() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const color = prompt("Введіть назву кольору англійською або hex-код (наприклад, 'red' or '#ff5733'):");
    if (color) {
        const span = document.createElement('span');
        span.style.color = color;
        range.surroundContents(span);
    }
    updateFormattedText();
}

// Змінити регістр тексту (великий/малий)
function toggleCase() {
    const selection = window.getSelection();
    const selectedText = selection.toString();

    if (selectedText) {
        const upperCaseText = selectedText.toUpperCase();
        const lowerCaseText = selectedText.toLowerCase();

        const span = document.createElement('span');
        span.textContent = (selectedText === upperCaseText) ? lowerCaseText : upperCaseText;
        selection.deleteFromDocument();
        selection.getRangeAt(0).insertNode(span);
    } else {
        alert("Текст не виділено");
    }
    updateFormattedText();
}

// Оновлюємо форматований текст
function updateFormattedText() {
    const editor = document.getElementById('editor');
    const formattedText = document.getElementById('formattedText');
    formattedText.innerHTML = editor.innerHTML;
}
