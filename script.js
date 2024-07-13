const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;
        
        switch (value) {
            case 'AC':
                display.value = '';
                break;
            case '=':
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
                break;
            case 'M+':
                localStorage.setItem('memory', display.value);
                break;
            case 'M-':
                display.value = localStorage.getItem('memory') || '';
                break;
            default:
                display.value += value;
        }
    });
});
