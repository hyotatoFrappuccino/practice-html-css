const lectures = ['회계 기초', '세무 실무', '급여 관리', 'ERP 활용', '재무제표 분석', '원가 회계'];

let keyword = '';
let viewMode = 'card';

function Card(text) {
    return `<div class="card">${text}</div>`;
}

function ListItem(text) {
    return `<div class="list-item">${text}</div>`;
}

function render() {
    const filtered = lectures.filter(l => l.toLowerCase().includes(keyword));
    const component = viewMode === 'card' ? Card : ListItem;

    const grid = document.querySelector('.grid');
    grid.innerHTML = filtered.map(component).join('');
    grid.className = viewMode === 'card' ? 'grid' : 'list';

    // 버튼 활성화 표시
    document.getElementById('btn-card').classList.toggle('active', viewMode === 'card');
    document.getElementById('btn-list').classList.toggle('active', viewMode === 'list');
}

function filterCards() {
    keyword = document.getElementById('search').value.trim().toLowerCase();
    render();
}

function setView(mode) {
    viewMode = mode;
    render();
}

render(); // 최초 실행