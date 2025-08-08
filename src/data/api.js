const teams = [
  { id: 1, name: '3º Ano A', logo: 'https://api.dicebear.com/7.x/initials/svg?seed=3A' },
  { id: 2, name: '3º Ano B', logo: 'https://api.dicebear.com/7.x/initials/svg?seed=3B' },
  { id: 3, name: '2º Ano', logo: 'https://api.dicebear.com/7.x/initials/svg?seed=2A' },
  { id: 4, name: '1º Ano', logo: 'https://api.dicebear.com/7.x/initials/svg?seed=1A' },
];

const players = [
  { id: 1, name: 'João', teamId: 1, position: 'Atacante', photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Joao', stats: { goals: 5, assists: 2, gamesPlayed: 3 } },
  { id: 2, name: 'Pedro', teamId: 2, position: 'Meio-campo', photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro', stats: { goals: 2, assists: 4, gamesPlayed: 3 } },
  { id: 3, name: 'Lucas', teamId: 3, position: 'Zagueiro', photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas', stats: { goals: 1, assists: 1, gamesPlayed: 2 } },
  { id: 4, name: 'Ana', teamId: 4, position: 'Goleira', photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana', stats: { goals: 0, assists: 0, gamesPlayed: 2 } },
];

const matches = [
  { id: 1, homeTeamId: 1, awayTeamId: 2, score: '2 - 1', status: 'LIVE', time: 67, events: [
    { time: 12, type: 'goal', player: 'João', detail: 'Finalização' },
    { time: 45, type: 'yellow', player: 'Pedro', detail: 'Falta' },
    { time: 66, type: 'goal', player: 'Pedro', detail: 'Cabeceio' },
  ] },
  { id: 2, homeTeamId: 3, awayTeamId: 4, score: '0 - 0', status: 'SCHEDULED', time: '15:00', events: [] },
  { id: 3, homeTeamId: 1, awayTeamId: 3, score: '3 - 0', status: 'FINISHED', time: 'Final', events: [
    { time: 10, type: 'goal', player: 'João', detail: 'Finalização' },
    { time: 30, type: 'goal', player: 'João', detail: 'Finalização' },
    { time: 60, type: 'goal', player: 'Lucas', detail: 'Cabeceio' },
  ] },
];

const news = [
  { id: 1, title: 'Interclasse começa com grandes jogos!', content: 'A primeira rodada foi marcada por muita emoção e gols.' },
  { id: 2, title: 'Destaques da rodada', content: 'João foi o artilheiro com 2 gols.' },
];

const standingsData = [
  { teamId: 1, points: 6, played: 2, wins: 2, draws: 0, losses: 0, goalDifference: 4 },
  { teamId: 2, points: 3, played: 2, wins: 1, draws: 0, losses: 1, goalDifference: 0 },
  { teamId: 3, points: 0, played: 2, wins: 0, draws: 0, losses: 2, goalDifference: -4 },
  { teamId: 4, points: 1, played: 2, wins: 0, draws: 1, losses: 1, goalDifference: 0 },
];

const user = {
  name: 'Alex',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  favoriteTeam: '3º Ano A',
  level: 5,
  xp: 450,
  nextLevelXp: 1000,
  badges: [
    { name: 'Artilheiro', icon: '⚽' },
    { name: 'Craque', icon: '🏅' },
  ],
};

const stories = [
  { id: 1, user: { name: 'Organização', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=O' } },
  { id: 2, user: { name: 'Ana', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana' } },
  { id: 3, user: { name: 'Lucas', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas' } },
];

const ugcPosts = [
  { id: 1, user: { name: 'Maria', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria' }, content: 'Que jogo incrível hoje!' },
  { id: 2, user: { name: 'Carlos', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos' }, content: 'Parabéns ao time vencedor!' },
];

// Funções da API Simulada
export function getMatches() {
  return matches.map(m => ({
    ...m,
    homeTeam: teams.find(t => t.id === m.homeTeamId),
    awayTeam: teams.find(t => t.id === m.awayTeamId),
  }));
}

export function getMatchById(id) {
  const match = matches.find(m => m.id === id);
  if (!match) return null;

  const homeTeam = teams.find(t => t.id === match.homeTeamId);
  const awayTeam = teams.find(t => t.id === match.awayTeamId);

  homeTeam.lineup = players.filter(p => p.teamId === homeTeam.id);
  awayTeam.lineup = players.filter(p => p.teamId === awayTeam.id);

  return { ...match, homeTeam, awayTeam };
}

export function getStandings() {
  return standingsData.map(s => ({
    ...s,
    ...teams.find(t => t.id === s.teamId)
  })).sort((a, b) =>
    b.points - a.points ||
    b.goalDifference - a.goalDifference
  );
}

export function getNews() { return news; }
export function getUser() { return user; }
export function getStories() { return stories; }
export function getUgcPosts() { return ugcPosts; }

export function getCollectedPlayerCards() {
  return [
    { id: 1, player: { ...players[0], team: teams.find(t => t.id === players[0].teamId) } },
    { id: 2, player: { ...players[1], team: teams.find(t => t.id === players[1].teamId) } },
  ];
}
