// =====================================================
// AETHER
// Greek Mythology — Explorative & Historically Grounded
// Session: "Outside the Box"
// =====================================================

const entries = [
  // === COSMIC ORDER ===
  {
    id: "gaia",
    name: "Gaia",
    type: "Primordial",
    cycle: "Cosmic Order",
    epithet: "The Earth, Mother of All",
    hook: "The primordial goddess from whom the entire cosmos emerged.",
    image: "assets/images/zeus.jpg",
    story: "Gaia emerged from Chaos and gave birth to the sky (Uranus), the mountains, and the sea. She is the great mother who later conspired with her children against the tyrannical rule of Uranus and later Cronus, playing a foundational role in the succession myths that led to the current order of the gods.",
    sources: ["Hesiod, Theogony"],
    symbols: ["Earth", "Mountains"],
    relations: [
      { id: "uranus", label: "Consort" },
      { id: "cronus", label: "Son" },
      { id: "zeus", label: "Grandson" }
    ]
  },
  {
    id: "uranus",
    name: "Uranus",
    type: "Primordial",
    cycle: "Cosmic Order",
    epithet: "The Sky",
    hook: "The first ruler of the cosmos, father of the Titans.",
    image: "assets/images/zeus.jpg",
    story: "Uranus covered Gaia completely. Together they produced the Titans, Cyclopes, and other powerful beings. His fear of his children led him to imprison them within Gaia, provoking her to conspire with Cronus to castrate him.",
    sources: ["Hesiod, Theogony"],
    symbols: ["Sky"],
    relations: [
      { id: "gaia", label: "Consort" },
      { id: "cronus", label: "Son" }
    ]
  },
  {
    id: "cronus",
    name: "Cronus",
    type: "Titan",
    cycle: "Cosmic Order",
    epithet: "Lord of the Golden Age",
    hook: "The Titan who overthrew his father only to be overthrown by his own son.",
    image: "assets/images/zeus.jpg",
    story: "Cronus castrated Uranus at Gaia’s urging and took his place as ruler. During his reign, the world experienced the Golden Age. Fearing a prophecy that he would be overthrown by his children, he swallowed them at birth until Rhea tricked him into swallowing a stone instead of Zeus.",
    sources: ["Hesiod, Theogony", "Apollodorus"],
    symbols: ["Sickle"],
    relations: [
      { id: "rhea", label: "Sister and Wife" },
      { id: "zeus", label: "Son" }
    ]
  },
  {
    id: "zeus",
    name: "Zeus",
    type: "Olympian",
    cycle: "Cosmic Order",
    epithet: "King of the Gods, Lord of Sky and Thunder",
    hook: "The thunderer who established the current order of the cosmos.",
    image: "assets/images/zeus.jpg",
    story: "Zeus led the Olympians in the war against the Titans (Titanomachy) and established a new order after their victory. He divided the cosmos with his brothers Poseidon and Hades and became the supreme ruler, associated with justice, hospitality, and the maintenance of cosmic order.",
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
    hook: "The powerful protector of the established divine and social order.",
    image: "assets/images/hera.jpg",
    story: "As wife and sister of Zeus, Hera holds a central position in the Olympian hierarchy. She is the protector of marriage and women in childbirth, but her frequent conflicts with Zeus and persecution of his lovers and children reveal the tensions within the new cosmic order.",
    sources: ["Hesiod, Theogony", "Homer, Iliad"],
    symbols: ["Peacock", "Pomegranate"],
    relations: [
      { id: "zeus", label: "Husband and King" }
    ]
  },

  // === TRANSGRESSION ===
  {
    id: "prometheus",
    name: "Prometheus",
    type: "Titan",
    cycle: "Transgression",
    epithet: "The Fire-Bringer, Champion of Humanity",
    hook: "The Titan who defied the gods to give humanity the tools of civilization.",
    image: "assets/images/prometheus.jpg",
    story: "Prometheus stole fire from Olympus and gave it to humans, along with many arts and skills. For this act of defiance against Zeus’s will, he was bound to a rock in the Caucasus where an eagle ate his regenerating liver every day. He became the archetypal figure of the rebel who suffers for bringing knowledge and progress to humanity.",
    sources: ["Hesiod, Theogony and Works and Days", "Aeschylus, Prometheus Bound"],
    symbols: ["Fire", "Chains"],
    relations: [
      { id: "zeus", label: "Punisher" }
    ]
  },
  {
    id: "pandora",
    name: "Pandora",
    type: "Myth",
    cycle: "Transgression",
    epithet: "The First Woman",
    hook: "The woman created as punishment and whose curiosity released all evils into the world.",
    image: "assets/images/pandora.jpg",
    story: "Created by Hephaestus on Zeus’s orders as revenge for Prometheus giving fire to humanity. Given a sealed jar (or box) containing all evils and told never to open it, Pandora’s curiosity led her to release suffering, disease, and discord into the world. Only Hope remained inside.",
    sources: ["Hesiod, Works and Days"],
    symbols: ["Jar"],
    relations: []
  },

  // === THE HEROIC AGE ===
  {
    id: "heracles",
    name: "Heracles",
    type: "Hero",
    cycle: "The Heroic Age",
    epithet: "The Greatest of Heroes",
    hook: "The son of Zeus who achieved immortality through suffering and impossible labors.",
    image: "assets/images/heracles.jpg",
    story: "Born to Zeus and the mortal Alcmene, Heracles was hated by Hera from birth. After being driven mad and killing his family, he was assigned twelve labors by King Eurystheus as penance. Through superhuman strength, courage, and endurance, he completed tasks no mortal could achieve.",
    sources: ["Apollodorus, Library", "Euripides, Heracles"],
    symbols: ["Lion Skin", "Club"],
    relations: [
      { id: "zeus", label: "Father" }
    ]
  },
  {
    id: "perseus",
    name: "Perseus",
    type: "Hero",
    cycle: "The Heroic Age",
    epithet: "Slayer of Medusa",
    hook: "The hero who beheaded the Gorgon and rescued Andromeda.",
    image: "assets/images/medusa.jpg",
    story: "Son of Zeus and Danaë. Tasked with bringing back the head of Medusa, he succeeded with the help of Athena and Hermes. Later, he rescued Andromeda from a sea monster and founded the city of Mycenae.",
    sources: ["Apollodorus", "Ovid"],
    symbols: ["Medusa’s Head"],
    relations: [
      { id: "medusa", label: "Slayer of" }
    ]
  },
  {
    id: "theseus",
    name: "Theseus",
    type: "Hero",
    cycle: "The Heroic Age",
    epithet: "Slayer of the Minotaur, King of Athens",
    hook: "The hero who ended the tribute of youths to Crete and unified Attica.",
    image: "assets/images/heracles.jpg",
    story: "Son of Aegeus (or Poseidon). He volunteered to enter the Labyrinth and slay the Minotaur with the help of Ariadne’s thread. Later he became king of Athens and is credited with synoecism — uniting the villages of Attica into one city-state.",
    sources: ["Plutarch, Life of Theseus", "Apollodorus"],
    symbols: ["Double Axe", "Thread"],
    relations: [
      { id: "minotaur", label: "Slayer of" }
    ]
  },
  {
    id: "medusa",
    name: "Medusa",
    type: "Monster",
    cycle: "The Heroic Age",
    epithet: "The Gorgon",
    hook: "A woman transformed into a monster whose head became a powerful weapon.",
    image: "assets/images/medusa.jpg",
    story: "One of the three Gorgons. In later traditions, she was a beautiful woman transformed into a monster after being violated in Athena’s temple. Her gaze turned men to stone until she was beheaded by Perseus.",
    sources: ["Hesiod, Theogony", "Ovid, Metamorphoses"],
    symbols: ["Serpents", "Gaze"],
    relations: [
      { id: "perseus", label: "Slayer of" }
    ]
  },

  // === THE TROJAN WAR ===
  {
    id: "odysseus",
    name: "Odysseus",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "The Man of Many Turns, King of Ithaca",
    hook: "The cleverest of the Greek heroes whose long journey home became legendary.",
    image: "assets/images/heracles.jpg",
    story: "King of Ithaca and one of the greatest Greek leaders at Troy. After the fall of the city, it took him ten years to return home due to Poseidon’s anger. His story explores cunning, endurance, identity, homecoming, and the human condition.",
    sources: ["Homer, Odyssey"],
    symbols: ["Bow of Eurytus", "The Oar"],
    relations: []
  },

  // === ECSTATIC TRADITIONS ===
  {
    id: "dionysus",
    name: "Dionysus",
    type: "Olympian",
    cycle: "Ecstatic Traditions",
    epithet: "God of Wine, Ecstasy, and Theatre",
    hook: "The god who brings both liberation and destruction through ecstasy.",
    image: "assets/images/dionysus.jpg",
    story: "Son of Zeus and Semele. Dionysus represents the arrival of something wild, transformative, and often terrifying. His worship involved altered states, the blurring of social boundaries, and direct encounter with the divine through ritual madness.",
    sources: ["Euripides, Bacchae", "Homeric Hymn to Dionysus"],
    symbols: ["Thyrsus", "Grapevine", "Leopard"],
    relations: [
      { id: "zeus", label: "Father" }
    ]
  }
];

// Mythic Cycles
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
let journeyEntries = JSON.parse(localStorage.getItem('aether_journey') || '[]');

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

// Setup cycle filters
function setupCycleFilters() {
  const container = document.getElementById('cycle-filters');
  if (!container) return;

  container.innerHTML = '';

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

// Open detailed entry (basic version for now)
function openEntry(id) {
  const entry = entries.find(e => e.id === id);
  if (!entry) return;

  viewedEntries.add(id);
  localStorage.setItem('aether_viewed', JSON.stringify([...viewedEntries]));

  const details = `
${entry.name}
${entry.epithet}

Cycle: ${entry.cycle}

Story: ${entry.story}

Sources: ${entry.sources ? entry.sources.join(', ') : 'Not yet added'}
  `.trim();

  alert(details);
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

window.AETHER = { renderEntries, openEntry };