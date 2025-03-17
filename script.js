const button = document.querySelector('button');
    button.addEventListener('click', () => {
    const isOn = button.textContent === 'On';
    button.textContent = isOn ? 'Off' : 'On';
    var element = document.body;
    element.classList.toggle("dark-mode");
});
