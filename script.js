// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('action-btn');
    const textElement = document.getElementById('dynamic-text');

    // Add click event listener to the button
    button.addEventListener('click', () => {
        textElement.textContent = '🎉 The JavaScript file is linked and working perfectly!';
        textElement.style.color = '#2ea44f';
        button.textContent = 'Success!';
        button.disabled = true;
        button.style.backgroundColor = '#6a737d';
    });
});
