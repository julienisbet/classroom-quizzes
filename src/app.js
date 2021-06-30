const questions = [
    `true && false`,
    `true && true`,
    `true || false`,
    `!true`,
    `!false`,
    `!(true || false)`,
    `1==="1"`,
    `let a = 5;
let b = 10;
a >= 5 && b < 20;`,
    `let a = 5;
let b = 10;
a === 5 || b === 20
`,
    `let a = 5;
let b = 10;
a > 10 || b > 10
`,
    `let a = 5;
let b = 10;
!(a > 10 || b > 10)`,
    `!0`,
    `!""`,
    `!!{}`,
    `!{}`,
    `![]`,
    `!![]`,
    `!!42`,
];
const table = document.querySelector('table');
questions.forEach(jsCode =>{
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td2.classList.add('answer');
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.textContent = jsCode;
    tr.appendChild(td1);
    tr.appendChild(td2);
    td1.appendChild(pre);
    pre.appendChild(code);
    table.appendChild(tr);
});

const answers = document.querySelectorAll('.answer');
const getAnswer = function(e){
    
    if (this.classList.contains('revealed')){
        this.innerText = '';
        this.classList.remove('revealed');
    } else {
        this.classList.add('revealed');
        const val = this.parentElement.querySelector('code').innerText;
        const answer = eval(val);
        e.target.innerHTML = `<pre><code class="language-javascript">${answer}</code></pre>`;
    }
};
answers.forEach(e =>{
    e.addEventListener('click', getAnswer);
});

const reset = document.getElementById('reset');
reset.addEventListener('click', ()=>{
    answers.forEach(elem=>{
        elem.classList.remove('revealed');
        elem.innerText = '';
    });
});