// Write your code here!
document.getElementById('main').remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('ID', 'victory');

newHeader.textContent = 'Tyler is the champion';

document.body.appendChild(newHeader);