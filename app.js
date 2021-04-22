//? Random quotes script
// https://goquotes-api.herokuapp.com/api/v1/random?count=1
// config Accept application/json

const button = document.querySelector('#button')
const cardBody =document.querySelector('#card-container')


const nextRandQuote = async () => {
    const quotes = await getRandQuote();
    cardBody.innerHTML = '';
    quotes.map((el) => {
        const blockquote = document.createElement('blockquote');
        blockquote.setAttribute('class', "blockquote mb-0")
        const p = document.createElement('p');
        p.textContent = el.text;
        blockquote.appendChild(p);
        const footer = document.createElement('footer');
        footer.setAttribute('class', "blockquote-footer");
        const span = document.createElement('span');
        span.setAttribute('id', "author");
        span.textContent = `${el.author} #${el.tag}.`;
        footer.appendChild(span);
        blockquote.appendChild(footer)
        cardBody.appendChild(blockquote);
    })
}
const getRandQuote = async () => {
    const res = await axios.get('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
    return res.data.quotes;
}

button.addEventListener('click', () => {
    nextRandQuote();
})
window.onload = () => {
    nextRandQuote();
}
   