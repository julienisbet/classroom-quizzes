import { decrementScore, getTeams, incrementScore } from './client.js';

export function renderTeamDiv(team) {
    const div = document.createElement('div');
    div.classList.add('team');
    const h3 = document.createElement('h2');
    h3.textContent = team.name;
    const score = document.createElement('p');
    score.textContent = team.score;
    score.classList.add('score');
    const controls = document.createElement('div');
    controls.classList.add('controls');
    const button = document.createElement('button');
    button.textContent = '➕';
    button.addEventListener('click', () => {
        incrementScore(team.id);
        renderTeams();
    });

    const removePoint = document.createElement('button');
    removePoint.textContent = '➖';
    removePoint.addEventListener('click', () => {
        decrementScore(team.id);
        renderTeams();
    });
    controls.append(removePoint, button);

    div.append(h3, score, controls);
    return div;
}

export function renderTeams() {
    const teams = getTeams();
    const scoring = document.getElementById('teams');
    scoring.textContent = '';
    for (let team of teams) {
        const teamDiv = renderTeamDiv(team);
        scoring.append(teamDiv);
    }
}
