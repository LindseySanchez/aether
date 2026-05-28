// =====================================================
// AETHER — Greek Mythology
// Focused on historical depth and interpretive clarity
// Session: "Outside the Box"
// =====================================================

const entries = [
  {
    id: "zeus",
    name: "Zeus",
    type: "Olympian",
    epithet: "King of the Gods, Lord of Sky and Thunder",
    hook: "The thunderer whose will shapes the fate of gods and mortals alike.",
    image: "assets/images/zeus.jpg",
    story: "Zeus overthrew his father Cronus and divided the cosmos with his brothers Poseidon and Hades. In Hesiod's Theogony and the Homeric poems he appears as the supreme ruler who maintains order through a combination of force, cunning, and the threat of the thunderbolt. His many affairs and resulting children are central to the mythic genealogies, yet he is also repeatedly shown as bound by larger forces of fate and the expectations of hospitality and oath-keeping.",
    sources: [
      "Hesiod, Theogony (esp. 453–506, 617–735)",
      "Homer, Iliad (esp. Book 1, 8, 15)",
      "Homer, Odyssey (esp. Book 1)"
    ],
    variants: "The extent of Zeus's power and the degree to which he is subject to fate varies across authors. In some traditions he appears more limited; in others (particularly later philosophical receptions) he is identified with cosmic order itself.",
    symbols: ["Thunderbolt", "Eagle", "Oak Tree", "Scepter", "Bull"],
    relations: [
      { id: "hera", label: "Wife and Queen" },
      { id: "poseidon", label: "Brother" },
      { id: "hades", label: "Brother" },
      { id: "athena", label: "Daughter" }
    ],
    interpretiveHorizons: "Zeus has long served as a figure through which later cultures have thought about sovereignty, patriarchy, and the relationship between power and justice. In the 20th century he was frequently read as an archetype of the 'sky father' in psychological and comparative religious studies. Such readings can be suggestive but often flatten the significant differences between how Zeus functions in Archaic Greek poetry versus later philosophical or psychoanalytic frameworks."
  },

  {
    id: "dionysus",
    name: "Dionysus",
    type: "Olympian",
    epithet: "God of Wine, Ecstasy, and Theatre",
    hook: "The god who dissolves boundaries — between man and god, sanity and madness, civilization and wildness.",
    image: "assets/images/dionysus.jpg",
    story: "Son of Zeus and the mortal Semele, Dionysus is repeatedly associated with the arrival of something foreign and disruptive. In Euripides' Bacchae (one of the richest surviving sources) he returns to Thebes, his mother's city, and brings about the destruction of the royal house through ritual ecstasy and the collapse of social order. His cults involved wine, music, dance, and states of altered consciousness that were simultaneously celebrated and feared.",
    sources: [
      "Euripides, Bacchae",
      "Homer, Iliad (Book 6, the Lycurgus episode)",
      "Hesiod, Theogony (940–942)",
      "Homeric Hymn to Dionysus"
    ],
    variants: "Dionysus appears in widely varying forms across time and place. In some Archaic contexts he is a relatively marginal figure; in others (especially in Macedonia and Asia Minor) his worship was central to royal ideology. The degree to which his cults involved actual violence or 'madness' remains debated among historians of religion.",
    symbols: ["Thyrsus", "Grapevine", "Leopard", "Theatre Mask", "Bull"],
    relations: [
      { id: "zeus", label: "Father" },
      { id: "hera", label: "Persecutor" }
    ],
    interpretiveHorizons: "Dionysus has been one of the most productive figures for later philosophical and psychological thought. Friedrich Nietzsche's opposition between the Apollonian and Dionysian in The Birth of Tragedy remains enormously influential, though it is a distinctly modern construction rather than a direct reflection of ancient categories. In psychology, Dionysiac themes have been used to explore ego dissolution, the return of the repressed, and the psychological function of ritual. These interpretations can be powerful, but they frequently project 19th- and 20th-century concerns onto ancient religious experience. Readers should distinguish between what the ancient evidence actually supports and the creative uses later thinkers have made of the god."
  },

  {
    id: "medusa",
    name: "Medusa",
    type: "Monster",
    epithet: "The Gorgon",
    hook: "A figure who is simultaneously victim, monster, and weapon.",
    image: "assets/images/medusa.jpg",
    story: "In Hesiod she appears as one of the Gorgons, monstrous daughters of sea deities. Later traditions, most famously in Ovid, present her as a beautiful woman raped by Poseidon in Athena's temple; Athena then transforms her into a monster whose gaze turns men to stone. Perseus eventually beheads her, and her head is used by Athena as a weapon on the aegis. Even after death, Medusa continues to generate powerful new beings (Pegasus and Chrysaor).",
    sources: [
      "Hesiod, Theogony (270–283)",
      "Homer, Iliad (Book 5, reference to the Gorgon on Athena's aegis)",
      "Ovid, Metamorphoses (Book 4)"
    ],
    variants: "The rape narrative is absent from our earliest sources. Hesiod presents Medusa as a monster from the beginning. The version that emphasizes her victimization and transformation becomes dominant only in later Roman poetry. This shift in emphasis has significant implications for how the story is read.",
    symbols: ["Serpents", "Gaze", "Decapitation"],
    relations: [
      { id: "athena", label: "Curse-giver / User of her head" },
      { id: "perseus", label: "Slayer" }
    ],
    interpretiveHorizons: "Medusa has been heavily used in modern psychological and feminist thought. Sigmund Freud's 1922 reading of the decapitated Gorgon as a symbol of castration anxiety is one of the most famous — and also one of the most clearly anachronistic — interpretations. More recent feminist work has productively explored the story in terms of the male gaze, the transformation of victims into monsters, and the weaponization of female rage. These readings have real interpretive power, yet they also risk retrofitting ancient narratives with contemporary political and psychological categories. The ancient sources themselves are inconsistent about whether Medusa is primarily a monster or a victim, and this inconsistency is worth preserving rather than smoothing over in the service of any single modern theory."
  }
];

// Random Ancient Testimony (formerly "The Oracle")
const oracles = [
  {
    text: "Euripides, Bacchae 860–861: 'The god is a prophet, and the madness he brings is the most terrible and the most wise.'",
    suggestion: "dionysus"
  },
  {
    text: "Hesiod, Theogony 270–283: Description of the Gorgons and Medusa's offspring.",
    suggestion: "medusa"
  }
];

// Timeline remains similar but can be expanded later
const timeline = [
  { era: "Archaic Period", year: "c. 750–480 BCE", event: "Major poetic treatments: Hesiod's Theogony and Homer's epics establish core genealogies and narratives." },
  { era: "Classical Period", year: "c. 480–323 BCE", event: "Tragedy (especially Euripides) explores psychological and political dimensions of myth with great intensity." },
  { era: "Hellenistic & Roman", year: "c. 323 BCE – 400 CE", event: "Myth becomes increasingly systematized (Apollodorus) and allegorized; Roman poets (Ovid) reshape Greek stories for new audiences." }
];

// State
let currentFilter = 'all';
let viewedEntries = new Set(JSON.parse(localStorage.getItem('aether_viewed') || '[]'));
let journeyEntries = JSON.parse(localStorage.getItem('aether_journey') || '[]');

// Render entries (updated to show sources & variants when available)
function renderEntries(filter = 'all', searchTerm = '') {
  const grid = document.getElementById('entries-grid');
  grid.innerHTML = '';

  let filtered = entries;

  if (filter !== 'all') {
    filtered = filtered.filter(e => e.type === filter);
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
    
    const isViewed = viewedEntries.has(entry.id);
    
    card.innerHTML = `
      <div class="relative overflow-hidden aspect-[4/3] bg-black">
        <img src="${entry.image}" class="entry-card-image w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700" onerror="this.src='assets/images/zeus.jpg'">
        ${isViewed ? `<div class="absolute top-3 right-3 px-2.5 py-0.5 bg-black/70 text-[10px] tracking-widest rounded">VIEWED</div>` : ''}
      </div>
      <div class="p-5 flex-1 flex flex-col">
        <div class="flex items-center gap-x-2 mb-1.5">
          <span class="text-xs px-2.5 py-px rounded bg-white/5 text-[#C5A46E]/80 tracking-wider">${entry.type.toUpperCase()}</span>
        </div>
        <h3 class="heading-serif text-3xl leading-none tracking-[-1.2px]">${entry.name}</h3>
        <p class="text-xs text-[#E8D9B5]/90 mt-1 line-clamp-1">${entry.epithet}</p>
        <p class="mt-4 text-sm text-[#F5F0E6]/70 flex-1 line-clamp-3">${entry.hook}</p>
        <div class="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
          <span class="text-[#C5A46E] group-hover:text-[#E8D9B5] transition flex items-center gap-x-1">
            ENTER <span class="text-base leading-none">→</span>
          </span>
        </div>
      </div>
    `;
    card.onclick = () => openEntry(entry.id);
    grid.appendChild(card);
  });
}

// Open detailed entry modal (updated for new fields)
function openEntry(id) {
  const entry = entries.find(e => e.id === id);
  if (!entry) return;

  viewedEntries.add(id);
  localStorage.setItem('aether_viewed', JSON.stringify([...viewedEntries]));

  if (!journeyEntries.some(e => e.id === id)) {
    journeyEntries.unshift({ id: entry.id, name: entry.name, type: entry.type, ts: Date.now() });
    if (journeyEntries.length > 12) journeyEntries.pop();
    localStorage.setItem('aether_journey', JSON.stringify(journeyEntries));
  }

  const modal = document.getElementById('entry-modal');
  const hero = document.getElementById('modal-hero');
  hero.innerHTML = `
    <img src="${entry.image}" class="absolute inset-0 w-full h-full object-cover opacity-95" onerror="this.src='assets/images/zeus.jpg'">
    <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#05080F]"></div>
    <button onclick="closeModal()" class="absolute top-6 right-6 bg-black/60 hover:bg-black/80 transition text-sm px-5 py-2 rounded-full border border-white/20">Close</button>
  `;

  document.getElementById('modal-name').textContent = entry.name;
  document.getElementById('modal-epithet').textContent = entry.epithet;
  
  let storyHTML = `<p>${entry.story}</p>`;
  if (entry.sources) {
    storyHTML += `<div class="mt-6 text-sm"><span class="uppercase text-xs tracking-wider text-[#C5A46E]/70">Primary Sources</span><ul class="mt-1 list-disc pl-5 text-[#F5F0E6]/85">${entry.sources.map(s => `<li>${s}</li>`).join('')}</ul></div>`;
  }
  if (entry.variants) {
    storyHTML += `<div class="mt-4 text-sm"><span class="uppercase text-xs tracking-wider text-[#C5A46E]/70">Variant Traditions</span><p class="mt-1 text-[#F5F0E6]/85">${entry.variants}</p></div>`;
  }
  document.getElementById('modal-story').innerHTML = storyHTML;

  // Interpretive Horizons
  const modernDiv = document.getElementById('modal-modern');
  modernDiv.innerHTML = entry.interpretiveHorizons 
    ? `<p>${entry.interpretiveHorizons}</p>` 
    : `<p class="italic text-[#F5F0E6]/60">No extended interpretive discussion has been added for this figure yet.</p>`;

  // Symbols
  document.getElementById('modal-symbols').innerHTML = entry.symbols.map(s => 
    `<span class="px-4 py-1 text-sm bg-[#0A0F1E] border border-[#C5A46E]/20 rounded-full">${s}</span>`
  ).join('');

  // Relations
  const relContainer = document.getElementById('modal-relations');
  relContainer.innerHTML = '';
  if (entry.relations && entry.relations.length > 0) {
    entry.relations.forEach(rel => {
      const btn = document.createElement('button');
      btn.className = 'thread-link px-4 py-1.5 text-sm rounded-full bg-[#0A0F1E] border border-[#C5A46E]/30 hover:border-[#C5A46E]';
      btn.innerHTML = `${rel.label}: <span class="font-medium text-[#E8D9B5]">${entries.find(e => e.id === rel.id)?.name || rel.id}</span>`;
      btn.onclick = () => { closeModal(); setTimeout(() => openEntry(rel.id), 320); };
      relContainer.appendChild(btn);
    });
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeModal() {
  const modal = document.getElementById('entry-modal');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

// Random Ancient Testimony
function openOracle() {
  const modal = document.getElementById('oracle-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  getNewOracle(true);
}

function closeOracle() {
  const modal = document.getElementById('oracle-modal');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

function getNewOracle(initial = false) {
  const textEl = document.getElementById('oracle-text');
  const suggEl = document.getElementById('oracle-suggestion');
  
  let idx = Math.floor(Math.random() * oracles.length);
  const oracle = oracles[idx];
  textEl.textContent = oracle.text;
  
  const suggested = entries.find(e => e.id === oracle.suggestion);
  if (suggested) {
    suggEl.innerHTML = `
      <div class="text-xs text-[#C5A46E]/60 mb-1.5">RELATED FIGURE</div>
      <button onclick="followOracleSuggestion('${oracle.suggestion}')" 
              class="inline-flex items-center gap-x-2 text-[#E8D9B5] hover:text-white border-b border-[#C5A46E]/40 pb-px transition">
        ${suggested.name} <span class="text-xs">→</span>
      </button>
    `;
  } else {
    suggEl.innerHTML = '';
  }
}

function followOracleSuggestion(id) {
  closeOracle();
  setTimeout(() => openEntry(id), 380);
}

// Other functions (family tree, timeline, quiz, journey, etc.) remain from previous version
// For brevity in this commit, the supporting functions (renderFamilyTree, startQuiz, etc.) are assumed to still exist from the reverted original.

// Boot
window.onload = function() {
  renderEntries('all');
  // renderTimeline and renderFamilyTree would be called here in full version
  console.log('%c[AETHER] Focused on historical depth. Session: Outside the Box', 'color:#C5A46E30');
};

window.AETHER = { openEntry, openOracle, renderEntries };