// =====================================================
// AETHER
// Greek Mythology — Explorative & Historically Grounded
// Session: "Outside the Box"
// =====================================================

const entries = [
  {
    id: "zeus",
    name: "Zeus",
    type: "Olympian",
    cycle: "Cosmic Order",
    epithet: "King of the Gods, Lord of Sky and Thunder",
    hook: "The thunderer who established the current order of the cosmos.",
    image: "assets/images/zeus.jpg",
    story: "Zeus led the rebellion against the Titans and divided the world with his brothers. He became the supreme ruler, associated with justice, hospitality, and the maintenance of cosmic order, though often through complex and sometimes ruthless means.",
    sources: ["Hesiod, Theogony", "Homer, Iliad"],
    symbols: ["Thunderbolt", "Eagle", "Oak"],
    relations: [
      { id: "hera", label: "Wife and Queen" },
      { id: "poseidon", label: "Brother" },
      { id: "hades", label: "Brother" }
    ]
  },
  {
    id: "hera",
    name: "Hera",
    type: "Olympian",
    cycle: "Cosmic Order",
    epithet: "Queen of the Gods, Guardian of Marriage",
    hook: "The powerful and often wrathful protector of marital bonds and the established order.",
    image: "assets/images/hera.jpg",
    story: "As wife of Zeus and queen of the gods, Hera plays a central role in enforcing the social and cosmic order. Her frequent conflicts with Zeus and persecution of his offspring reveal deep tensions within the divine hierarchy.",
    sources: ["Hesiod, Theogony", "Homer, Iliad"],
    symbols: ["Peacock", "Pomegranate"],
    relations: [
      { id: "zeus", label: "Husband and King" }
    ]
  },
  {
    id: "prometheus",
    name: "Prometheus",
    type: "Titan",
    cycle: "Transgression",
    epithet: "The Fire-Bringer, Champion of Humanity",
    hook: "The Titan who defied the gods to give humanity the gift of civilization.",
    image: "assets/images/prometheus.jpg",
    story: "Prometheus stole fire from the gods and gave it to humans, along with many other arts and skills. For this act he was brutally punished by Zeus, bound to a rock where an eagle ate his liver daily. He represents the archetype of the rebel who suffers for bringing knowledge to humanity.",
    sources: ["Hesiod, Theogony and Works and Days", "Aeschylus, Prometheus Bound"],
    symbols: ["Fire", "Chains"],
    relations: [
      { id: "zeus", label: "Punisher" }
    ]
  },
  {
    id: "dionysus",
    name: "Dionysus",
    type: "Olympian",
    cycle: "Ecstatic Traditions",
    epithet: "God of Wine, Ecstasy, and Theatre",
    hook: "The god who brings both liberation and destruction through ecstasy and the breakdown of boundaries.",
    image: "assets/images/dionysus.jpg",
    story: "Son of Zeus and Semele, Dionysus represents the arrival of something wild and transformative. His worship involved altered states of consciousness, the blurring of social roles, and a direct encounter with the divine that could be both ecstatic and terrifying.",
    sources: ["Euripides, Bacchae", "Homeric Hymn to Dionysus"],
    symbols: ["Thyrsus", "Grapevine", "Leopard"],
    relations: [
      { id: "zeus", label: "Father" }
    ]
  },
  {
    id: "heracles",
    name: "Heracles",
    type: "Hero",
    cycle: "The Heroic Age",
    epithet: "The Greatest of Heroes",
    hook: "The son of Zeus who achieved immortality through immense suffering and impossible labors.",
    image: "assets/images/heracles.jpg",
    story: "Born to Zeus and the mortal Alcmene, Heracles was forced to perform twelve labors as penance. Through superhuman strength and endurance, he completed tasks that no ordinary mortal could achieve, eventually ascending to Olympus.",
    sources: ["Apollodorus, Library", "Euripides, Heracles"],
    symbols: ["Lion Skin", "Club"],
    relations: [
      { id: "zeus", label: "Father" }
    ]
  },
  {
    id: "medusa",
    name: "Medusa",
    type: "Monster",
    cycle: "The Heroic Age",
    epithet: "The Gorgon",
    hook: "A woman transformed into a monster, whose head became one of the most powerful weapons in the Greek world.",
    image: "assets/images/medusa.jpg",
    story: "Originally a beautiful woman, Medusa was transformed into a Gorgon. Her gaze turned men to stone. After being slain by Perseus, her head was given to Athena and retained its petrifying power.",
    sources: ["Hesiod, Theogony", "Ovid, Metamorphoses"],
    symbols: ["Serpents", "Gaze"],
    relations: [
      { id: "perseus", label: "Slayer" }
    ]
  },
  {
    id: "odysseus",
    name: "Odysseus",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "The Man of Many Turns",
    hook: "The cleverest of the Greek heroes, whose long journey home became one of the defining stories of Western literature.",
    image: "assets/images/heracles.jpg",
    story: "King of Ithaca and hero of the Trojan War. After the fall of Troy, it took him ten years to return home due to the anger of Poseidon. His story explores cunning, endurance, identity, and the longing for home.",
    sources: ["Homer, Odyssey"],
    symbols: ["Bow", "Oar"],
    relations: []
  }
];

// Mythic Cycles for exploration
const cycles = [
  "Cosmic Order",
  "The Heroic Age",
  "The Trojan War",
  "Transgression",
  "Ecstatic Traditions"
];

// State
let currentCycle = 'all';
let viewedEntries = new Set(JSON.parse(localStorage.getItem('aether_viewed') || '[]'));

// Render entries with cycle filtering
function renderEntries(cycle = 'all', searchTerm = '') {
  const grid = document.getElementById('entries-grid');
  grid.innerHTML = '';

  let filtered = entries;

  if (cycle !== 'all') {
    filtered = filtered.filter(e => e.cycle === cycle);
  }

  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(e =>
      e.name.toLowerCase().includes(term) ||
      e.hook.toLowerCase().includes(term)
    );
  }

  filtered.forEach(entry => {
    const card = document.createElement('div');
    card.className = `myth-card group bg-[#0A0F1E] rounded-2xl overflow-hidden cursor-pointer border border-white/10 flex flex-col`;
    
    card.innerHTML = `
      <div class="relative overflow-hidden aspect-[4/3] bg-black">
        <img src="${entry.image}" class="entry-card-image w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700" onerror="this.src='assets/images/zeus.jpg'">
      </div>
      <div class="p-5 flex-1 flex flex-col">
        <div class="flex items-center gap-x-2 mb-1.5">
          <span class="text-xs px-2.5 py-px rounded bg-white/5 text-[#C5A46E]/80 tracking-wider">${entry.cycle}</span>
        </div>
        <h3 class="heading-serif text-3xl leading-none tracking-[-1.2px]">${entry.name}</h3>
        <p class="text-xs text-[#E8D9B5]/90 mt-1 line-clamp-1">${entry.epithet}</p>
        <p class="mt-4 text-sm text-[#F5F0E6]/70 flex-1 line-clamp-3">${entry.hook}</p>
        <div class="mt-5 pt-4 border-t border-white/10 text-xs text-[#C5A46E] group-hover:text-[#E8D9B5] transition">
          EXPLORE THIS FIGURE →
        </div>
      </div>
    `;
    card.onclick = () => openEntry(entry.id);
    grid.appendChild(card);
  });
}

// Update cycle filters
function setupCycleFilters() {
  const container = document.getElementById('cycle-filters');
  if (!container) return;

  container.innerHTML = '';

  // All button
  const allBtn = document.createElement('button');
  allBtn.textContent = 'All Cycles';
  allBtn.className = 'active-filter px-5 py-1.5 rounded-full text-sm border border-[#C5A46E] bg-[#C5A46E] text-[#05080F] font-medium';
  allBtn.onclick = () => {
    currentCycle = 'all';
    updateActiveFilter(allBtn);
    renderEntries('all', document.getElementById('global-search')?.value || '');
  };
  container.appendChild(allBtn);

  cycles.forEach(cycle => {
    const btn = document.createElement('button');
    btn.textContent = cycle;
    btn.className = 'px-5 py-1.5 rounded-full text-sm border border-white/10 hover:border-white/30 transition-colors';
    btn.onclick = () => {
      currentCycle = cycle;
      updateActiveFilter(btn);
      renderEntries(cycle, document.getElementById('global-search')?.value || '');
    };
    container.appendChild(btn);
  });
}

function updateActiveFilter(activeBtn) {
  document.querySelectorAll('#cycle-filters button').forEach(btn => {
    btn.classList.remove('active-filter', 'border-[#C5A46E]', 'bg-[#C5A46E]', 'text-[#05080F]');
    btn.classList.add('border-white/10');
  });
  activeBtn.classList.add('active-filter', 'border-[#C5A46E]', 'bg-[#C5A46E]', 'text-[#05080F]');
  activeBtn.classList.remove('border-white/10');
}

// Open entry modal (simplified for now)
function openEntry(id) {
  const entry = entries.find(e => e.id === id);
  if (!entry) return;

  viewedEntries.add(id);
  localStorage.setItem('aether_viewed', JSON.stringify([...viewedEntries]));

  alert(`Opening detailed view for ${entry.name}. Full modal coming in next update.`);
}

// Search
function initSearch() {
  const search = document.getElementById('global-search');
  if (!search) return;

  search.addEventListener('input', () => {
    renderEntries(currentCycle, search.value);
  });
}

// Boot
window.onload = function() {
  renderEntries('all');
  setupCycleFilters();
  initSearch();
  console.log('%c[AETHER] Explorative mode: Mythic Cycles', 'color:#C5A46E30');
};

window.AETHER = { renderEntries };