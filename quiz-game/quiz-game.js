import { getTeams, saveTeam } from './client.js';
import { renderTeams } from './render-utils.js';

import { questions } from './questions.js';

const questionDiv = document.getElementById('questions');

const teamInput = document.getElementById('team-input');
const teamButton = document.getElementById('team-button');

teamButton.addEventListener('click', () => {
    const team = { name: teamInput.value, id: getTeams().length + 1, score: 0 };
    saveTeam(team);
    renderTeams();
});

renderTeams();

for (let topic of questions) {
    const topicDiv = document.createElement('div');
    topicDiv.classList.add('topic');
    const topicHeader = document.createElement('h1');
    topicHeader.textContent = topic.topic;
    topicDiv.append(topicHeader);
    const topicQs = topic.questions;
    for (let q of topicQs) {
        const container = document.createElement('div');
        container.classList.add('question-container');
        container.addEventListener('click', () => {
            container.classList.toggle('reveal');
        });
        const div = document.createElement('div');
        div.classList.add('question');
        const p = document.createElement('p');
        p.textContent = q.question;
        div.append(p);
        if (q.code) {
            const pre = document.createElement('pre');
            const code = document.createElement('code');
            code.classList.add('language-javascript');
            code.textContent = q.code;
            pre.append(code);
            div.append(pre);
        }
        const front = document.createElement('div');
        front.classList.add('front');
        front.textContent = `Question ${q.id}`;
        container.append(front, div);
        topicDiv.append(container);
    }
    questionDiv.append(topicDiv);
}
