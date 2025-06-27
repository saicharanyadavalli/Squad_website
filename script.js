// Team India Players Data and Modal Logic
const players = [
    {
        id: 1,
        name: "Virat Kohli",
        role: "Right-Handed Batsman",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg",
        jersey: 18,
        matches: 262,
        runs: 12169,
        average: 59.07,
        strikeRate: 93.17,
        bestPerformance: "183 vs Pakistan (2012)",
        captain: true,
        position: "Top Order",
        hundreds: 46,
        fifties: 64,
        highestScore: 183
    },
    {
        id: 2,
        name: "Rohit Sharma",
        role: "Right-Handed Batsman",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg",
        jersey: 45,
        matches: 243,
        runs: 10109,
        average: 48.96,
        strikeRate: 89.97,
        bestPerformance: "264 vs Sri Lanka (2014)",
        captain: true,
        position: "Opener",
        hundreds: 30,
        fifties: 51,
        highestScore: 264
    },
    {
        id: 3,
        name: "Jasprit Bumrah",
        role: "Right-Arm Fast Bowler",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Jasprit_Bumrah_in_PMO_New_Delhi.jpg",
        jersey: 93,
        matches: 89,
        wickets: 149,
        average: 23.55,
        economy: 4.63,
        bestPerformance: "6/19 vs West Indies (2019)",
        captain: false,
        position: "Fast Bowler",
        fiveWickets: 2,
        fourWickets: 8,
        bestBowling: "6/19"
    },
    {
        id: 4,
        name: "KL Rahul",
        role: "Right-Handed Batsman",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5u5Ffp9DWUUJeOrLko0MNSilxgy1hm83tQ&s",
        jersey: 1,
        matches: 72,
        runs: 2646,
        average: 45.62,
        strikeRate: 87.76,
        bestPerformance: "112 vs Sri Lanka (2019)",
        captain: false,
        position: "Middle Order",
        hundreds: 6,
        fifties: 17,
        highestScore: 112
    },
    {
        id: 5,
        name: "MS Dhoni",
        role: "Right-Handed Batsman",
        image: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        jersey: 7,
        matches: 350,
        runs: 10773,
        average: 50.57,
        strikeRate: 87.56,
        bestPerformance: "183* vs Sri Lanka (2005)",
        captain: true,
        position: "Wicket-Keeper",
        hundreds: 10,
        fifties: 73,
        highestScore: 183
    },
    {
        id: 6,
        name: "Ravindra Jadeja",
        role: "Left-Arm Orthodox",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZ2bfQpQD_zHpzocuH-lboucPfBILhb3QMQ&s",
        jersey: 8,
        matches: 175,
        runs: 2467,
        wickets: 220,
        average: 32.58,
        strikeRate: 85.20,
        bestPerformance: "5/36 vs Australia (2013)",
        captain: false,
        position: "All-Rounder",
        hundreds: 0,
        fifties: 13,
        fiveWickets: 1,
        bestBowling: "5/36"
    },
    {
        id: 7,
        name: "Hardik Pandya",
        role: "Right-Arm Fast Medium",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Hardik_Pandya_in_PMO_New_Delhi.jpg",
        jersey: 33,
        matches: 74,
        runs: 1584,
        wickets: 69,
        average: 33.70,
        strikeRate: 113.92,
        bestPerformance: "76* vs Pakistan (2017)",
        captain: false,
        position: "All-Rounder",
        hundreds: 0,
        fifties: 9,
        fourWickets: 1,
        bestBowling: "3/8"
    },
    {
        id: 8,
        name: "Mohammed Shami",
        role: "Right-Arm Fast Bowler",
        image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/390300/390351.5.png",
        jersey: 11,
        matches: 90,
        wickets: 162,
        average: 25.98,
        economy: 5.60,
        bestPerformance: "5/69 vs England (2019)",
        captain: false,
        position: "Fast Bowler",
        fiveWickets: 1,
        fourWickets: 4,
        bestBowling: "5/69"
    },
    {
        id: 9,
        name: "Rishabh Pant",
        role: "Left-Handed Batsman",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdS7Kwqr-AlBU27_eyzI-dngcUsw1SjfaNA&s",
        jersey: 17,
        matches: 30,
        runs: 865,
        average: 34.60,
        strikeRate: 106.65,
        bestPerformance: "125* vs England (2021)",
        captain: false,
        position: "Wicket-Keeper",
        hundreds: 1,
        fifties: 5,
        highestScore: 125
    },
    {
        id: 10,
        name: "Kuldeep Yadav",
        role: "Left-Arm Chinaman",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Kuldeep_Yadav_in_PMO_New_Delhi.jpg",
        jersey: 23,
        matches: 75,
        wickets: 134,
        average: 27.61,
        economy: 5.13,
        bestPerformance: "6/25 vs England (2018)",
        captain: false,
        position: "Spinner",
        fiveWickets: 1,
        fourWickets: 2,
        bestBowling: "6/25"
    },
    {
        id: 11,
        name: "Suryakumar Yadav",
        role: "Right-Handed Batsman",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Suryakumar_Yadav_in_PMO_New_Delhi.jpg/250px-Suryakumar_Yadav_in_PMO_New_Delhi.jpg",
        jersey: 63,
        matches: 26,
        runs: 733,
        average: 46.06,
        strikeRate: 101.38,
        bestPerformance: "117 vs England (2022)",
        captain: false,
        position: "Middle Order",
        hundreds: 1,
        fifties: 4,
        highestScore: 117
    },
    {
        id: 12,
        name: "Mohammed Siraj",
        role: "Right-Arm Fast Bowler",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Mohammad_Siraj_%28cropped%29.jpg",
        jersey: 73,
        matches: 24,
        wickets: 43,
        average: 21.65,
        economy: 4.78,
        bestPerformance: "4/32 vs Sri Lanka (2023)",
        captain: false,
        position: "Fast Bowler",
        fiveWickets: 0,
        fourWickets: 1,
        bestBowling: "4/32"
    }
];

function populatePlayersGrid() {
    const playersGrid = document.getElementById('playersGrid');
    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'col-lg-4 col-md-6 col-12';
        playerCard.innerHTML = `
            <div class="player-card" onclick="openPlayerModal(${player.id})">
                <img src="${player.image}" alt="${player.name}" class="player-image">
                <div class="player-name">${player.name}</div>
                <div class="player-role">${player.role}</div>
                <div class="player-stats">
                    <div class="stat-item">
                        <div class="stat-value">${player.jersey}</div>
                        <div class="stat-name">Jersey</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${player.matches}</div>
                        <div class="stat-name">Matches</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${player.role.includes('Batsman') ? player.runs : player.wickets}</div>
                        <div class="stat-name">${player.role.includes('Batsman') ? 'Runs' : 'Wickets'}</div>
                    </div>
                </div>
            </div>
        `;
        playersGrid.appendChild(playerCard);
    });
}

function openPlayerModal(playerId) {
    const player = players.find(p => p.id === playerId);
    if (!player) return;
    const modalLabel = document.getElementById('playerModalLabel');
    const modalBody = document.getElementById('modalBody');
    modalLabel.textContent = player.name;
    modalBody.innerHTML = `
        <div class="text-center">
            <img src="${player.image}" alt="${player.name}" class="player-modal-image">
            <h3>${player.name}</h3>
            <p class="text-warning">${player.role} • Jersey #${player.jersey}</p>
            ${player.captain ? '<div class="captain-badge"><i class="fas fa-crown"></i> Captain</div>' : ''}
        </div>
        <div class="stats-grid">
            <div class="stat-box">
                <div class="stat-box-value">${player.matches}</div>
                <div class="stat-box-label">Matches Played</div>
            </div>
            <div class="stat-box">
                <div class="stat-box-value">${player.jersey}</div>
                <div class="stat-box-label">Jersey Number</div>
            </div>
            ${player.role.includes('Batsman') ? `
                <div class="stat-box">
                    <div class="stat-box-value">${player.runs}</div>
                    <div class="stat-box-label">Total Runs</div>
                </div>
                <div class="stat-box">
                    <div class="stat-box-value">${player.average}</div>
                    <div class="stat-box-label">Batting Average</div>
                </div>
                <div class="stat-box">
                    <div class="stat-box-value">${player.strikeRate}</div>
                    <div class="stat-box-label">Strike Rate</div>
                </div>
                <div class="stat-box">
                    <div class="stat-box-value">${player.hundreds || 0}</div>
                    <div class="stat-box-label">Hundreds</div>
                </div>
                <div class="stat-box">
                    <div class="stat-box-value">${player.fifties || 0}</div>
                    <div class="stat-box-label">Fifties</div>
                </div>
                <div class="stat-box">
                    <div class="stat-box-value">${player.highestScore || '-'}</div>
                    <div class="stat-box-label">Highest Score</div>
                </div>
            ` : `
                <div class="stat-box">
                    <div class="stat-box-value">${player.wickets || 0}</div>
                    <div class="stat-box-label">Total Wickets</div>
                </div>
                <div class="stat-box">
                    <div class="stat-box-value">${player.average || '-'}</div>
                    <div class="stat-box-label">Bowling Average</div>
                </div>
                <div class="stat-box">
                    <div class="stat-box-value">${player.economy || '-'}</div>
                    <div class="stat-box-label">Economy Rate</div>
                </div>
                <div class="stat-box">
                    <div class="stat-box-value">${player.fiveWickets || 0}</div>
                    <div class="stat-box-label">5-Wicket Hauls</div>
                </div>
                <div class="stat-box">
                    <div class="stat-box-value">${player.fourWickets || 0}</div>
                    <div class="stat-box-label">4-Wicket Hauls</div>
                </div>
                <div class="stat-box">
                    <div class="stat-box-value">${player.bestBowling || '-'}</div>
                    <div class="stat-box-label">Best Bowling</div>
                </div>
            `}
        </div>
        <div class="best-performance">
            <h5><i class="fas fa-trophy"></i> Best Performance</h5>
            <p class="mb-0">${player.bestPerformance}</p>
        </div>
    `;
    const modal = new bootstrap.Modal(document.getElementById('playerModal'));
    modal.show();
}

document.addEventListener('DOMContentLoaded', function() {
    populatePlayersGrid();
});