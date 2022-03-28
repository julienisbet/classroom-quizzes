import { getTeams, saveTeam } from './client.js';
import { renderTeamDiv, renderTeams } from './render-utils.js';

const questions = document.getElementById('questions');

const teamInput = document.getElementById('team-input');
const teamButton = document.getElementById('team-button');

teamButton.addEventListener('click', () => {
    const team = { name: teamInput.value, id: getTeams().length + 1, score: 0 };
    saveTeam(team);
    renderTeams();
});

renderTeams();
