let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

// const para = document.createElement('p'); creates new paragraph

// para.textContent = ; makes the text inside the paragraph equal to whatever
// you put on the right-hand side, after the equals sign.

// output.appendChild(para); appends the paragraph to the output <div>.

while (i >= 0){
    const para = document.createElement('p');
    output.appendChild(para);
    if (i === 10){
        para.textContent = 'Countdown 10';
    } else if (i === 0){
        para.textContent = 'Blast Off!';
    } else {
        para.textContent = i;
    }
    i--;
}
