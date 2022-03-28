const TEAMS = 'TEAMS';

export function getTeams() {
    return JSON.parse(localStorage.getItem(TEAMS) || '[]');
}

export function saveTeam(team) {
    const teams = getTeams();
    teams.push(team);
    localStorage.setItem(TEAMS, JSON.stringify(teams));
}

export function incrementScore(id) {
    console.log(id);
    const teams = getTeams();
    const team = teams.find((team) => team.id === id);
    console.log(team);
    team.score++;
    localStorage.setItem(TEAMS, JSON.stringify(teams));
}

export function decrementScore(id) {
    console.log(id);
    const teams = getTeams();
    const team = teams.find((team) => team.id === id);
    console.log(team);
    team.score--;
    localStorage.setItem(TEAMS, JSON.stringify(teams));
}
