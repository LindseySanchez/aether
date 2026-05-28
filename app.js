// =====================================================
// AETHER — Interactive Greek Mythology Encyclopedia
// "Outside the Box" Session • Fostering wonder & curiosity
// =====================================================

const entries = [
  {
    id: "zeus",
    name: "Zeus",
    type: "Olympian",
    epithet: "King of the Gods, Lord of Sky and Thunder",
    hook: "The thunderer whose will shapes the fate of gods and mortals alike.",
    image: "assets/images/zeus.jpg",
    shortDesc: "Ruler of Olympus and the heavens.",
    story: "Zeus overthrew his father Cronus and divided the cosmos with his brothers. He rules from the summit of Olympus, wielding the thunderbolt as both weapon and symbol of justice. Though often portrayed as all-powerful, Zeus is bound by fate and the ancient laws of hospitality and oath-keeping. His many loves and children fill the myths with both glory and tragedy.",
    symbols: ["Thunderbolt", "Eagle", "Oak Tree", "Scepter", "Bull"],
    relations: [
      { id: "hera", label: "Wife & Queen" },
      { id: "poseidon", label: "Brother" },
      { id: "hades", label: "Brother" },
      { id: "athena", label: "Daughter" }
    ],
    modernEcho: "Zeus represents the double-edged nature of supreme power — capable of both protection and terrifying caprice. Leaders, fathers, and institutions still wrestle with his legacy of authority tempered (or not) by wisdom.",
    themes: ["Power", "Fate", "Justice", "Hubris"]
  },
  {
    id: "hera",
    name: "Hera",
    type: "Olympian",
    epithet: "Queen of the Gods, Guardian of Marriage",
    hook: "The fierce protector of sacred bonds whose wrath could shake the foundations of Olympus.",
    image: "assets/images/hera.jpg",
    shortDesc: "Wife of Zeus and sovereign of the heavens.",
    story: "Hera, daughter of Cronus and Rhea, is both the devoted wife of Zeus and his most formidable adversary. She embodies the sanctity of marriage and the fury that follows its betrayal. Her jealousy toward Zeus's lovers and children is legendary, yet she is also a powerful protector of women in childbirth and the home.",
    symbols: ["Peacock", "Pomegranate", "Diadem", "Cuckoo"],
    relations: [
      { id: "zeus", label: "Husband & King" },
      { id: "athena", label: "Stepdaughter" }
    ],
    modernEcho: "Hera remains one of the most psychologically complex figures in myth — a woman of immense dignity forced to navigate a world where her husband's power constantly undermines the very institution she protects.",
    themes: ["Marriage", "Revenge", "Dignity", "Protection"]
  },
  {
    id: "athena",
    name: "Athena",
    type: "Olympian",
    epithet: "Goddess of Wisdom, Strategy & Crafts",
    hook: "Born fully armored from the head of Zeus — wisdom before emotion.",
    image: "assets/images/athena.jpg",
    shortDesc: "Virgin goddess of wisdom and just war.",
    story: "Athena sprang fully grown and armored from Zeus's forehead after he swallowed her mother Metis. She represents strategic intelligence over brute force. Patron of heroes like Odysseus and Perseus, she is the divine embodiment of civilization, democracy, and the arts of peace and war conducted with purpose.",
    symbols: ["Owl", "Aegis", "Spear", "Olive Tree", "Helmet"],
    relations: [
      { id: "zeus", label: "Father" },
      { id: "prometheus", label: "Ally in wisdom" }
    ],
    modernEcho: "Athena is the original model of the wise strategist — revered by philosophers, generals, and anyone who believes intellect and discipline can triumph over chaos.",
    themes: ["Wisdom", "Strategy", "Craft", "Justice"]
  },
  {
    id: "apollo",
    name: "Apollo",
    type: "Olympian",
    epithet: "God of Light, Music, Prophecy & Healing",
    hook: "The most Greek of the gods — beautiful, terrifying, and impossibly distant.",
    image: "assets/images/apollo.jpg",
    shortDesc: "Archer god of the sun and the arts.",
    story: "Son of Zeus and Leto, twin brother of Artemis. Apollo governs music, poetry, oracles (especially Delphi), healing, and the sun itself. He is the god of sudden insight and equally sudden, pitiless punishment (as the slayer of the Python and the one who brought plague upon the Greeks at Troy).",
    symbols: ["Lyre", "Laurel Wreath", "Bow & Arrow", "Sun Chariot", "Python"],
    relations: [
      { id: "artemis", label: "Twin Sister" },
      { id: "zeus", label: "Father" }
    ],
    modernEcho: "Apollo is the patron of artists, doctors, and prophets. His light both illuminates truth and burns those who cannot bear it.",
    themes: ["Art", "Prophecy", "Order", "Punishment"]
  },
  {
    id: "artemis",
    name: "Artemis",
    type: "Olympian",
    epithet: "Goddess of the Hunt, Moon & Wilderness",
    hook: "Untamed protector of girls and wild things who answers to no man.",
    image: "assets/images/artemis.jpg",
    shortDesc: "Virgin huntress and guardian of the young.",
    story: "Twin sister of Apollo, daughter of Zeus and Leto. Artemis roams the forests with her band of nymphs, fiercely independent. She protects young women and animals, yet her arrows are merciless to those who violate her sacred spaces or the chastity of her followers (Actaeon learned this the hard way).",
    symbols: ["Silver Bow", "Deer", "Crescent Moon", "Cypress Tree"],
    relations: [
      { id: "apollo", label: "Twin Brother" },
      { id: "zeus", label: "Father" }
    ],
    modernEcho: "Artemis is the divine embodiment of autonomy and the sacred feminine in its wild, unbound form — a powerful symbol for anyone who refuses to be tamed.",
    themes: ["Independence", "Nature", "Protection", "Chastity"]
  },
  {
    id: "poseidon",
    name: "Poseidon",
    type: "Olympian",
    epithet: "Lord of the Sea, Earth-Shaker",
    hook: "The moody, violent god whose temper moves oceans and continents.",
    image: "assets/images/poseidon.jpg",
    shortDesc: "God of the sea, earthquakes, and horses.",
    story: "Brother of Zeus and Hades. When the three brothers drew lots for the cosmos, Poseidon received the sea. He is volatile, proud, and quick to take offense — especially when mortals fail to honor him properly. His grudge against Odysseus is one of the longest-running feuds in literature.",
    symbols: ["Trident", "Horse", "Dolphin", "Bull"],
    relations: [
      { id: "zeus", label: "Brother" },
      { id: "hades", label: "Brother" }
    ],
    modernEcho: "Poseidon reminds us that nature is not our friend — it is powerful, ancient, and indifferent to human plans.",
    themes: ["Nature", "Wrath", "The Unknown"]
  },
  {
    id: "prometheus",
    name: "Prometheus",
    type: "Titan",
    epithet: "The Fire-Bringer, Friend of Humanity",
    hook: "The Titan who loved mortals enough to steal the gods' most sacred gift.",
    image: "assets/images/prometheus.jpg",
    shortDesc: "Champion of humanity against divine tyranny.",
    story: "Prometheus stole fire from Olympus and gave it to humankind, along with the arts of civilization. For this act of defiance he was chained to a mountain where an eagle ate his regenerating liver each day. He is the original rebel with a cause — the prototype for every revolutionary who believes knowledge belongs to the people.",
    symbols: ["Fire", "Chains", "Eagle", "Foresight"],
    relations: [
      { id: "zeus", label: "Enemy & Punisher" },
      { id: "athena", label: "Kindred spirit" }
    ],
    modernEcho: "Prometheus is the patron saint of scientists, hackers, whistleblowers, and anyone who believes some knowledge is worth suffering for.",
    themes: ["Rebellion", "Knowledge", "Sacrifice", "Progress"]
  },
  {
    id: "heracles",
    name: "Heracles",
    type: "Hero",
    epithet: "The Greatest of Heroes, Son of Zeus",
    hook: "The man who became a god through suffering, strength, and relentless labor.",
    image: "assets/images/heracles.jpg",
    shortDesc: "Demigod hero famous for his twelve labors.",
    story: "Born to Zeus and the mortal Alcmene, Heracles was hated by Hera from birth. Driven mad by the queen of gods, he murdered his own family and was sentenced to perform twelve impossible labors for King Eurystheus. Through superhuman courage and endurance, he completed them and eventually achieved immortality — proof that even the blood of gods must earn their place among the stars.",
    symbols: ["Nemean Lion Skin", "Wooden Club", "Bow"],
    relations: [
      { id: "zeus", label: "Father" },
      { id: "hera", label: "Persecutor" }
    ],
    modernEcho: "Heracles is the ultimate underdog who becomes legend through sheer will. His story is the original hero's journey — suffering, transformation, and eventual apotheosis.",
    themes: ["Strength", "Redemption", "Endurance", "Heroism"]
  },
  {
    id: "medusa",
    name: "Medusa",
    type: "Monster",
    epithet: "The Gorgon, Once a Beautiful Maiden",
    hook: "A victim turned monster whose gaze turns men to stone — and whose death birthed wonders.",
    image: "assets/images/medusa.jpg",
    shortDesc: "The tragic gorgon with serpents for hair.",
    story: "Once a beautiful priestess of Athena, Medusa was violated by Poseidon in Athena's temple. The goddess, enraged, transformed her into a monster whose gaze petrifies. Perseus later beheaded her. From her neck sprang the winged horse Pegasus and the giant Chrysaor. Even in death, Medusa continued to create beauty and power.",
    symbols: ["Serpents", "Gaze of Stone", "Wings (in some versions)"],
    relations: [
      { id: "athena", label: "Curse-giver" },
      { id: "theseus", label: "Echoes of other monster-slayers" }
    ],
    modernEcho: "Medusa has become a powerful feminist symbol — a woman punished for the crime of another, then feared and weaponized. Her story asks: who is the real monster?",
    themes: ["Victimhood", "Transformation", "Female Rage", "Justice"]
  },
  {
    id: "pandora",
    name: "Pandora",
    type: "Myth",
    epithet: "The First Woman, Bringer of All Evils",
    hook: "Curiosity opened the jar. Hope remained inside.",
    image: "assets/images/pandora.jpg",
    shortDesc: "The woman who released all the world's sorrows.",
    story: "Created by Hephaestus on Zeus's orders as punishment for Prometheus's theft of fire. Given a sealed jar (or box) and told never to open it, Pandora's curiosity proved stronger than her obedience. She released every evil into the world — disease, war, famine, strife. Only Hope remained trapped inside. Some say this was Zeus's final cruelty; others say it was the one gift that made life bearable.",
    symbols: ["The Jar", "Curiosity", "Hope"],
    relations: [
      { id: "prometheus", label: "Indirect cause of her creation" },
      { id: "zeus", label: "Creator & Punisher" }
    ],
    modernEcho: "Pandora is every human who has ever asked 'what if?' — sometimes with catastrophic consequences, but always driven by the same hunger that also produces art, science, and love.",
    themes: ["Curiosity", "Consequence", "Hope", "Fate"]
  },
  {
    id: "minotaur",
    name: "The Minotaur",
    type: "Monster",
    epithet: "The Bull of Minos, Prisoner of the Labyrinth",
    hook: "Half-man, half-bull. Born of a queen's unnatural desire and a king's shame.",
    image: "assets/images/minotaur.jpg",
    shortDesc: "The tragic monster confined in Daedalus's maze.",
    story: "The offspring of Pasiphaë (wife of King Minos) and a magnificent bull sent by Poseidon. Minos, ashamed, ordered Daedalus to build the Labyrinth to hide the creature. Every nine years, Athens sent seven young men and seven maidens as tribute to be devoured. Theseus eventually entered the maze with the help of Ariadne's thread and slew the Minotaur — but the monster was as much victim as villain.",
    symbols: ["Bull's Head", "Double Axe (Labrys)", "The Labyrinth"],
    relations: [
      { id: "theseus", label: "Slayer" },
      { id: "daedalus", label: "Jailer's architect" }
    ],
    modernEcho: "The Minotaur represents the monstrous parts of ourselves we try to imprison rather than understand. The Labyrinth is the human psyche.",
    themes: ["Shame", "Imprisonment", "Otherness", "Sacrifice"]
  },
  {
    id: "odysseus",
    name: "Odysseus",
    type: "Hero",
    epithet: "The Man of Many Turns, King of Ithaca",
    hook: "The most human hero — clever, flawed, and desperately homesick.",
    image: "assets/images/heracles.jpg",
    shortDesc: "Wily hero of the Trojan War and the Odyssey.",
    story: "King of Ithaca, husband of Penelope, father of Telemachus. After ten years at Troy, it took him another ten to return home. He outwitted the Cyclops, resisted (and yielded to) Circe, sailed between Scylla and Charybdis, and descended to the underworld. His greatest weapon was never his sword, but his mind.",
    symbols: ["Bow of Eurytus", "The Oar", "His Scar"],
    relations: [
      { id: "penelope", label: "Wife (legendary fidelity)" },
      { id: "athena", label: "Divine patron" }
    ],
    modernEcho: "Odysseus is us — the wandering soul who just wants to go home, who lies when necessary, loves imperfectly, and keeps going anyway.",
    themes: ["Homecoming", "Cunning", "Endurance", "Identity"]
  },
  {
    id: "dionysus",
    name: "Dionysus",
    type: "Olympian",
    epithet: "God of Wine, Ecstasy & Theatre",
    hook: "The god who dissolves boundaries — between man and god, sanity and madness, life and death.",
    image: "assets/images/dionysus.jpg",
    shortDesc: "Liberator and bringer of divine madness.",
    story: "Son of Zeus and the mortal Semele. Twice-born. Dionysus represents everything that cannot be contained by civilization: wine, fertility, ritual madness, and the transformative power of theatre. He is both the most terrifying and the most joyful of the Olympians. His followers, the Maenads, tore apart animals — and sometimes men — in ecstatic frenzy.",
    symbols: ["Thyrsus", "Grapevine", "Leopard", "Theatre Mask"],
    relations: [
      { id: "zeus", label: "Father" },
      { id: "hera", label: "Persecutor" }
    ],
    modernEcho: "Dionysus is the god of altered states, of losing yourself to find something larger. He is in every rave, every great performance, every moment we surrender control to something bigger.",
    themes: ["Ecstasy", "Madness", "Liberation", "Theatre"]
  },
  {
    id: "hades",
    name: "Hades",
    type: "Olympian",
    epithet: "Lord of the Dead, The Unseen One",
    hook: "The most just of the gods — and the loneliest.",
    image: "assets/images/poseidon.jpg",
    shortDesc: "Ruler of the Underworld and all riches beneath the earth.",
    story: "When the brothers drew lots, Hades received the realm of the dead. He is not evil — he is simply the necessary end. Stern, wealthy (as god of precious metals), and deeply lonely. His abduction of Persephone is one of the most emotionally complex stories in all of myth: a god who finally found someone who made the darkness bearable.",
    symbols: ["Cerberus", "Helmet of Invisibility", "Cypress", "Pomegranate"],
    relations: [
      { id: "zeus", label: "Brother" },
      { id: "poseidon", label: "Brother" }
    ],
    modernEcho: "Hades teaches us that death is not punishment. It is simply the other side of the contract of being alive. His realm is rich because everything returns to it.",
    themes: ["Death", "Wealth", "Justice", "Loneliness"]
  },
  {
    id: "theseus",
    name: "Theseus",
    type: "Hero",
    epithet: "Slayer of the Minotaur, King of Athens",
    hook: "The hero who chose the labyrinth over the easy path — and paid for it in the end.",
    image: "assets/images/heracles.jpg",
    shortDesc: "Founder-hero of Athens and uniter of Attica.",
    story: "Son of Aegeus (or Poseidon). Theseus volunteered to enter the Labyrinth and slay the Minotaur with the help of Ariadne's thread. He later became the great unifier of Athens. But like many heroes, his story ends in tragedy — he abandoned Ariadne, caused his father's death through forgetfulness, and died in exile. Even the greatest civilizers carry shadow.",
    symbols: ["The Thread", "Double Axe", "Sandals & Sword"],
    relations: [
      { id: "minotaur", label: "Slayer of" },
      { id: "dionysus", label: "Indirect connection via Ariadne" }
    ],
    modernEcho: "Theseus is the politician-hero. The one who builds nations but often fails at the personal. He reminds us that great deeds do not guarantee a good life.",
    themes: ["Civilization", "Choice", "Consequence", "Hubris"]
  }
];

// Oracle pronouncements (beautiful and varied)
const oracles = [
  {
    text: "The gods do not punish hubris because they are cruel. They punish it because it is the one sin that makes mortals forget they are not gods.",
    suggestion: "zeus"
  },
  {
    text: "Wisdom is not the absence of passion. It is passion guided by the long view. Athena does not extinguish the fire — she teaches you how to wield it.",
    suggestion: "athena"
  },
  {
    text: "Every monster was once someone's child. Medusa was a priestess before she became a warning. Look twice before you raise your sword.",
    suggestion: "medusa"
  },
  {
    text: "Prometheus did not give you fire so you could be comfortable. He gave it so you would never again be at the mercy of those who hoard light.",
    suggestion: "prometheus"
  },
  {
    text: "The Labyrinth does not exist to trap the Minotaur. It exists because Minos could not bear to look at what his own pride had created.",
    suggestion: "minotaur"
  },
  {
    text: "Hope is the cruelest and kindest of the evils. It keeps us alive when we should surrender — and keeps us fighting when we should rest.",
    suggestion: "pandora"
  },
  {
    text: "The sea does not hate you, Odysseus. It simply does not care. This is both its terror and its freedom.",
    suggestion: "odysseus"
  },
  {
    text: "Artemis does not ask you to be pure. She asks you to be true to the wild thing inside you that refuses to be owned.",
    suggestion: "artemis"
  }
];

// Timeline data
const timeline = [
  { era: "The Primordial Age", year: "Before Time", event: "From Chaos emerges Gaia, Tartarus, Eros, and Erebus. The universe is born in darkness and desire." },
  { era: "The Age of Titans", year: "Mythic Past", event: "Gaia and Uranus birth the Titans. Cronus castrates his father and rules. The Golden Age of humanity begins." },
  { era: "The Titanomachy", year: "Mythic Past", event: "Zeus leads the Olympians in a ten-year war against the Titans. Cronus is overthrown. The new order begins." },
  { era: "The Heroic Age", year: "~1300–1100 BCE", event: "Perseus slays Medusa. Heracles completes his labors. Theseus defeats the Minotaur. Jason claims the Golden Fleece." },
  { era: "The Trojan War", year: "~1200 BCE", event: "The greatest war of the mythic age. Achilles, Odysseus, Hector, and the gods themselves clash over the fate of Troy." },
  { era: "The Age of Nostos", year: "After Troy", event: "Odysseus wanders for ten years. Aeneas founds the Roman line. The old heroes fade. The age of mortals truly begins." }
];

// Quiz questions
const quizQuestions = [
  {
    q: "Which Titan defied Zeus by giving fire and civilization to humanity?",
    options: ["Atlas", "Prometheus", "Cronus", "Oceanus"],
    answer: 1,
    explanation: "Prometheus's gift of fire made humans more than animals — and earned him eternal torment."
  },
  {
    q: "Athena was born from which part of Zeus's body?",
    options: ["His heart", "His thigh", "His forehead", "His right hand"],
    answer: 2,
    explanation: "After swallowing her mother Metis, Zeus suffered a splitting headache. Athena emerged fully grown and armed."
  },
  {
    q: "What remained inside Pandora's jar after all the evils escaped?",
    options: ["Nothing", "Love", "Hope", "Justice"],
    answer: 2,
    explanation: "Hope stayed behind — the one force that makes suffering bearable."
  },
  {
    q: "The Minotaur was the offspring of a Cretan queen and what creature?",
    options: ["A sacred bull", "A river god", "Zeus in disguise", "A dragon"],
    answer: 0,
    explanation: "Poseidon sent a perfect white bull that Pasiphaë fell in love with, with tragic results."
  },
  {
    q: "Which hero used a ball of thread given by Ariadne to navigate the Labyrinth?",
    options: ["Heracles", "Perseus", "Theseus", "Odysseus"],
    answer: 2,
    explanation: "Theseus entered the maze, slew the Minotaur, and followed the thread back to freedom."
  },
  {
    q: "Why was Medusa transformed into a gorgon?",
    options: ["She boasted she was more beautiful than Athena", "She was punished for Poseidon's crime in Athena's temple", "She refused to marry Zeus", "She stole fire from Olympus"],
    answer: 1,
    explanation: "A tragic victim turned into a weapon. The injustice of her fate still resonates."
  }
];

// State
let currentFilter = 'all';
let viewedEntries = new Set(JSON.parse(localStorage.getItem('aether_viewed') || '[]'));
let journeyEntries = JSON.parse(localStorage.getItem('aether_journey') || '[]');

// Tailwind script run
function initTailwind() {
  document.documentElement.style.setProperty('--accent', '#C5A46E');
}

// Render all entry cards
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
      e.epithet.toLowerCase().includes(term) ||
      e.hook.toLowerCase().includes(term) ||
      (e.story && e.story.toLowerCase().includes(term))
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center py-12 text-[#C5A46E]/60">No threads found matching your search.</div>`;
    return;
  }

  filtered.forEach(entry => {
    const card = document.createElement('div');
    card.className = `myth-card group bg-[#0A0F1E] rounded-2xl overflow-hidden cursor-pointer border border-white/10 flex flex-col`;
    
    const isViewed = viewedEntries.has(entry.id);
    
    card.innerHTML = `
      <div class="relative overflow-hidden aspect-[4/3] bg-black">
        <img src="${entry.image}" alt="${entry.name}" 
             class="entry-card-image w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
             onerror="this.src='assets/images/zeus.jpg'">
        ${isViewed ? `<div class="absolute top-3 right-3 px-2.5 py-0.5 bg-black/70 text-[10px] tracking-widest rounded">VIEWED</div>` : ''}
        <div class="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent"></div>
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
            FOLLOW THE THREAD <span class="text-base leading-none">→</span>
          </span>
          ${isViewed ? '<span class="text-emerald-400/70 text-[10px]">IN YOUR TAPESTRY</span>' : ''}
        </div>
      </div>
    `;
    
    card.onclick = () => openEntry(entry.id);
    grid.appendChild(card);
  });
}

// Filter entries
function filterEntries(type) {
  currentFilter = type;
  
  // Update active button styles
  document.querySelectorAll('#filters button').forEach(btn => {
    btn.classList.remove('active-filter', 'border-[#C5A46E]', 'bg-[#C5A46E]', 'text-[#05080F]');
    btn.classList.add('border/white/10');
    
    if ((type === 'all' && btn.dataset.filter === 'all') || btn.dataset.filter === type) {
      btn.classList.add('active-filter', 'border-[#C5A46E]', 'bg-[#C5A46E]', 'text-[#05080F]');
      btn.classList.remove('border/white/10');
    }
  });
  
  const searchVal = document.getElementById('global-search')?.value || '';
  renderEntries(type, searchVal);
}

// Open detailed entry modal
function openEntry(id) {
  const entry = entries.find(e => e.id === id);
  if (!entry) return;

  // Track view
  viewedEntries.add(id);
  localStorage.setItem('aether_viewed', JSON.stringify([...viewedEntries]));
  
  // Add to journey if not already
  if (!journeyEntries.some(e => e.id === id)) {
    journeyEntries.unshift({ id: entry.id, name: entry.name, type: entry.type, ts: Date.now() });
    if (journeyEntries.length > 12) journeyEntries.pop();
    localStorage.setItem('aether_journey', JSON.stringify(journeyEntries));
  }

  // Populate modal
  const modal = document.getElementById('entry-modal');
  
  // Hero image area - clean structure so the image stays strictly inside the fixed-height box
  const hero = document.getElementById('modal-hero');
  hero.innerHTML = `
    <img src="${entry.image}" alt="${entry.name}" 
         class="w-full h-full object-cover opacity-95"
         onerror="this.src='assets/images/zeus.jpg'">
    
    <!-- Gradient overlay for text readability -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-[#05080F]"></div>
    
    <!-- Close button -->
    <button onclick="closeModal()" class="absolute top-6 right-6 bg-black/60 hover:bg/black/80 transition text-sm px-5 py-2 rounded-full border border/white/20 flex items-center gap-x-1.5 z-10">
      <span>ESC</span>
    </button>
    
    <!-- Type badge at bottom of image -->
    <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
      <div class="max-w-3xl">
        <span class="text-xs tracking-[3px] px-4 py-1 rounded-full bg-black/60 border border/white/20">${entry.type}</span>
      </div>
    </div>
  `;

  document.getElementById('modal-name').textContent = entry.name;
  document.getElementById('modal-epithet').textContent = entry.epithet;
  document.getElementById('modal-story').innerHTML = `<p>${entry.story}</p>`;
  document.getElementById('modal-modern').textContent = entry.modernEcho;

  // Symbols
  const symContainer = document.getElementById('modal-symbols');
  symContainer.innerHTML = entry.symbols.map(s => 
    `<span class="px-4 py-1 text-sm bg-[#0A0F1E] border border-[#C5A46E]/20 rounded-full">${s}</span>`
  ).join('');

  // Relations (clickable threads)
  const relContainer = document.getElementById('modal-relations');
  relContainer.innerHTML = '';
  
  if (entry.relations && entry.relations.length > 0) {
    entry.relations.forEach(rel => {
      const btn = document.createElement('button');
      btn.className = 'thread-link px-4 py-1.5 text-sm rounded-full bg-[#0A0F1E] border border-[#C5A46E]/30 hover:border-[#C5A46E] flex items-center gap-x-2';
      btn.innerHTML = `
        <span>${rel.label}</span> 
        <span class="font-medium text-[#E8D9B5]">${entries.find(e => e.id === rel.id)?.name || rel.id}</span>
      `;
      btn.onclick = () => {
        closeModal();
        setTimeout(() => openEntry(rel.id), 320);
      };
      relContainer.appendChild(btn);
    });
  } else {
    relContainer.innerHTML = `<span class="text-xs text-[#C5A46E]/50">No direct relations recorded in this codex entry.</span>`;
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  // Re-render grid to show viewed state
  setTimeout(() => {
    const search = document.getElementById('global-search')?.value || '';
    renderEntries(currentFilter, search);
  }, 600);
}

function closeModal() {
  const modal = document.getElementById('entry-modal');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

// Oracle
let currentOracleIndex = 0;

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
  
  // Pick random
  let idx = Math.floor(Math.random() * oracles.length);
  if (initial && currentOracleIndex) idx = currentOracleIndex;
  currentOracleIndex = idx;
  
  const oracle = oracles[idx];
  textEl.textContent = `"${oracle.text}"`;
  
  const suggested = entries.find(e => e.id === oracle.suggestion);
  if (suggested) {
    suggEl.innerHTML = `
      <div class="text-xs text-[#C5A46E]/60 mb-1.5">A THREAD TO FOLLOW</div>
      <button onclick="followOracleSuggestion('${oracle.suggestion}')" 
              class="inline-flex items-center gap-x-2 text-[#E8D9B5] hover:text/white border-b border-[#C5A46E]/40 pb-px transition">
        ${suggested.name} <span class="text-xs">→</span>
      </button>
    `;
  } else {
    suggEl.innerHTML = '';
  }
}

function followOracleSuggestion(id) {
  closeOracle();
  setTimeout(() => {
    openEntry(id);
  }, 380);
}

// Family Tree (SVG)
function renderFamilyTree() {
  const svg = document.getElementById('family-tree');
  if (!svg) return;
  
  svg.innerHTML = '';
  
  // Simple but elegant tree layout
  const nodes = [
    { id: 'chaos', name: 'Chaos', x: 410, y: 38, type: 'primordial' },
    { id: 'gaia', name: 'Gaia', x: 410, y: 110, type: 'primordial' },
    { id: 'uranus', name: 'Uranus', x: 560, y: 110, type: 'primordial' },
    { id: 'cronus', name: 'Cronus', x: 280, y: 195, type: 'titan' },
    { id: 'rhea', name: 'Rhea', x: 540, y: 195, type: 'titan' },
    { id: 'zeus', name: 'Zeus', x: 190, y: 285, type: 'olympian' },
    { id: 'poseidon', name: 'Poseidon', x: 295, y: 285, type: 'olympian' },
    { id: 'hades', name: 'Hades', x: 400, y: 285, type: 'olympian' },
    { id: 'hera', name: 'Hera', x: 505, y: 285, type: 'olympian' },
    { id: 'dionysus', name: 'Dionysus', x: 610, y: 285, type: 'olympian' },
    { id: 'athena', name: 'Athena', x: 140, y: 365, type: 'olympian' },
    { id: 'apollo', name: 'Apollo', x: 255, y: 365, type: 'olympian' },
    { id: 'artemis', name: 'Artemis', x: 370, y: 365, type: 'olympian' },
  ];

  // Lines (parent-child relationships)
  const lines = [
    [410, 52, 410, 95],   // Chaos → Gaia
    [410, 125, 280, 180], // Gaia → Cronus
    [410, 125, 540, 180], // Gaia/Uranus → Rhea area
    [280, 210, 190, 270], // Cronus → Zeus
    [280, 210, 295, 270], // Cronus → Poseidon
    [540, 210, 400, 270], // Rhea → Hades
    [540, 210, 505, 270], // Rhea → Hera
    [505, 270, 610, 270], // Hera area → Dionysus
    [190, 300, 140, 350], // Zeus → Athena
    [190, 300, 255, 350], // Zeus → Apollo
    [190, 300, 370, 350], // Zeus area → Artemis
  ];

  // Draw lines first (behind)
  lines.forEach(([x1,y1,x2,y2]) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "#C5A46E");
    line.setAttribute("stroke-width", "1.25");
    line.setAttribute("stroke-opacity", "0.35");
    svg.appendChild(line);
  });

  // Draw nodes
  nodes.forEach(node => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.classList.add('family-node');
    g.setAttribute('data-id', node.id);

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", node.x);
    circle.setAttribute("cy", node.y);
    circle.setAttribute("r", node.type === 'primordial' ? "17" : "15");
    circle.setAttribute("fill", node.type === 'primordial' ? "#1F2937" : "#0A0F1E");
    circle.setAttribute("stroke", "#C5A46E");
    circle.setAttribute("stroke-width", node.id === 'zeus' ? "3" : "2");
    circle.setAttribute("stroke-opacity", "0.9");

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", node.x);
    text.setAttribute("y", node.y + 4);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", "#E8D9B5");
    text.setAttribute("font-size", node.type === 'primordial' ? "10" : "9.5");
    text.setAttribute("font-family", "Instrument Sans, system-ui, sans-serif");
    text.setAttribute("font-weight", "500");
    text.textContent = node.name;

    g.appendChild(circle);
    g.appendChild(text);

    // Click handler
    g.onclick = () => {
      const realEntry = entries.find(e => e.id === node.id);
      if (realEntry) {
        openEntry(realEntry.id);
      } else {
        // Show simple toast for primordial
        showToast(`The ${node.name} are older than story. Their myths are the foundation.`);
      }
    };

    svg.appendChild(g);
  });
}

function resetFamilyTree() {
  renderFamilyTree();
}

function highlightLineage(rootId) {
  // Simple visual emphasis — re-render and emphasize children of Zeus for demo
  const svg = document.getElementById('family-tree');
  svg.innerHTML = '';
  renderFamilyTree();
  
  // Bonus: open Zeus if exists
  setTimeout(() => {
    const zeusEntry = entries.find(e => e.id === rootId);
    if (zeusEntry) openEntry(zeusEntry.id);
  }, 900);
}

// Timeline
function renderTimeline() {
  const container = document.querySelector('#ages .flex');
  if (!container) return;
  container.innerHTML = '';

  timeline.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = `timeline-item min-w/[280px] md:min-w/[310px] snap-start bg-[#0A0F1E] border border/white/10 rounded-2xl p-6`;
    el.innerHTML = `
      <div class="text-xs text-[#C5A46E] tracking-widest mb-1">${item.era}</div>
      <div class="text-sm font-medium text-[#C5A46E]/60 mb-4">${item.year}</div>
      <div class="text/[15px] leading-snug">${item.event}</div>
    `;
    container.appendChild(el);
  });
}

// Quiz
let currentQuiz = 0;
let quizScore = 0;

function startQuiz() {
  currentQuiz = 0;
  quizScore = 0;
  
  const container = document.getElementById('trials');
  container.innerHTML = `
    <div class="max-w-xl mx-auto">
      <div class="text-center mb-8">
        <div class="text-[#C5A46E] text-xs tracking/[3px]">THE TRIALS OF THE GODS</div>
        <div class="text-4xl heading-serif tracking-tight mt-2">Question <span id="q-num">1</span> of 6</div>
      </div>
      
      <div class="bg-[#05080F] border border-[#C5A46E]/20 rounded-3xl p-9">
        <div id="quiz-question" class="text-2xl leading-tight mb-8"></div>
        
        <div id="quiz-options" class="space-y-3"></div>
        
        <div id="quiz-feedback" class="hidden mt-6 p-5 bg-[#0A0F1E] border-l-2 border-[#C5A46E] text-sm"></div>
      </div>
      
      <div class="text-center mt-4 text-xs text-[#C5A46E]/50">Choose with intention. There is wisdom in every path.</div>
    </div>
  `;
  
  showQuizQuestion();
}

function showQuizQuestion() {
  const q = quizQuestions[currentQuiz];
  document.getElementById('q-num').textContent = currentQuiz + 1;
  document.getElementById('quiz-question').textContent = q.q;
  
  const optsContainer = document.getElementById('quiz-options');
  optsContainer.innerHTML = '';
  
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'w/full text-left px-6 py-4 rounded-2xl border border/white/10 hover:border-[#C5A46E]/70 hover:bg-[#0A0F1E] transition flex justify-between items-center group';
    btn.innerHTML = `
      <span>${opt}</span>
      <span class="text-[#C5A46E]/40 group-hover:text-[#C5A46E] text-xl leading-none transition">→</span>
    `;
    btn.onclick = () => selectQuizAnswer(i, q.answer, q.explanation, btn);
    optsContainer.appendChild(btn);
  });
  
  document.getElementById('quiz-feedback').classList.add('hidden');
}

function selectQuizAnswer(selected, correct, explanation, btnElement) {
  const allBtns = document.querySelectorAll('#quiz-options button');
  allBtns.forEach(b => b.disabled = true);
  
  const feedback = document.getElementById('quiz-feedback');
  feedback.classList.remove('hidden');
  
  if (selected === correct) {
    quizScore++;
    btnElement.classList.add('!border-emerald-500/70', 'bg-emerald-950/30');
    feedback.innerHTML = `<span class="text-emerald-400 font-medium">Beautifully chosen.</span> ${explanation}`;
  } else {
    btnElement.classList.add('!border-[#8B4D3F]/70');
    feedback.innerHTML = `<span class="text-[#C5A46E]">The gods are patient.</span> ${explanation}`;
  }
  
  setTimeout(() => {
    currentQuiz++;
    if (currentQuiz < quizQuestions.length) {
      showQuizQuestion();
    } else {
      showQuizResults();
    }
  }, 2600);
}

function showQuizResults() {
  const container = document.getElementById('trials');
  const percentage = Math.round((quizScore / quizQuestions.length) * 100);
  
  let title = "You carry the curiosity of Pandora.";
  if (percentage >= 83) title = "The wisdom of Athena walks with you.";
  else if (percentage >= 66) title = "You have the strategic mind of Odysseus.";
  else if (percentage >= 50) title = "Heracles would respect your endurance.";
  
  container.innerHTML = `
    <div class="max-w-md mx-auto text-center py-8">
      <div class="text-[#C5A46E] text-sm tracking-widest">THE TRIALS ARE COMPLETE</div>
      <div class="heading-serif text-7xl mt-3 tracking-tighter">${quizScore}<span class="text-4xl text-[#C5A46E]/50">/${quizQuestions.length}</span></div>
      <div class="my-8">
        <div class="text-2xl leading-tight">${title}</div>
        <p class="mt-4 text-[#F5F0E6]/70">The real test is not what you remember, but what you now wonder.</p>
      </div>
      
      <div class="flex flex-col gap-3">
        <button onclick="location.reload()" class="w/full py-4 bg-[#C5A46E] text-[#05080F] font-semibold rounded-2xl">RETURN TO THE TAPESTRY</button>
        <button onclick="startQuiz()" class="w/full py-4 border border/white/20 rounded-2xl hover:bg/white/5">Walk the Trials Again</button>
      </div>
    </div>
  `;
}

// Journey panel
function showJourneyPanel() {
  const panel = document.getElementById('journey-panel');
  const content = document.getElementById('journey-content');
  
  panel.classList.remove('hidden');
  panel.classList.add('flex');
  
  if (journeyEntries.length === 0) {
    content.innerHTML = `<div class="text-[#C5A46E]/70 text-sm">Your journey is empty. Explore the Tapestry and your path will begin to form.</div>`;
    return;
  }
  
  content.innerHTML = journeyEntries.map(item => {
    const entry = entries.find(e => e.id === item.id);
    if (!entry) return '';
    return `
      <div onclick="hideJourneyPanel(); setTimeout(() => openEntry('${item.id}'), 200)" 
           class="flex gap-4 items-center p-4 bg-[#0A0F1E] hover:bg-[#111827] border border/white/10 rounded-2xl cursor-pointer transition">
        <div class="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border/white/10">
          <img src="${entry.image}" class="w/full h/full object-cover" onerror="this.src='assets/images/zeus.jpg'">
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-medium">${entry.name}</div>
          <div class="text-xs text-[#C5A46E]/70 line-clamp-1">${entry.epithet}</div>
        </div>
      </div>
    `;
  }).join('');
}

function hideJourneyPanel() {
  const panel = document.getElementById('journey-panel');
  panel.classList.remove('flex');
  panel.classList.add('hidden');
}

function addToJourneyFromModal() {
  // Already added on openEntry. Just give feedback.
  const btns = document.querySelectorAll('#entry-modal button');
  btns.forEach(b => {
    if (b.textContent.includes('Journey')) {
      const orig = b.textContent;
      b.textContent = 'ADDED TO YOUR PATH';
      b.disabled = true;
      setTimeout(() => {
        closeModal();
        setTimeout(() => showJourneyPanel(), 420);
      }, 650);
    }
  });
}

// Global search
function initSearch() {
  const search = document.getElementById('global-search');
  if (!search) return;
  
  search.addEventListener('input', (e) => {
    const term = e.target.value.trim();
    renderEntries(currentFilter, term);
  });
  
  // Keyboard hint
  search.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      search.value = '';
      renderEntries(currentFilter, '');
    }
  });
}

// Toast helper
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-6 left-1/2 -translate-x/1/2 bg-[#0A0F1E] border border-[#C5A46E]/30 text-sm px-6 py-3 rounded-2xl shadow-2xl z/[200]';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transition = 'all 0.3s';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2400);
}

// Reset everything
function resetAllProgress() {
  if (!confirm('Clear your entire journey and viewed threads?')) return;
  localStorage.removeItem('aether_viewed');
  localStorage.removeItem('aether_journey');
  viewedEntries.clear();
  journeyEntries = [];
  location.reload();
}

// =====================================================
// KEY VISIONS — Immersive Videos (Fall Back in Time)
// =====================================================

const keyVisions = [
  {
    title: "Gaia & the Birth of the World",
    cycle: "Cosmic Order",
    description: "From Chaos emerged Gaia, the great mother. Watch the primordial dawn when the earth and sky first embraced, and the first gods were born from mist and stone. Let the ancient stillness wash over you.",
    video: "assets/videos/vision-cosmic.mp4"
  },
  {
    title: "Persephone's Descent",
    cycle: "The Underworld",
    description: "The maiden who became queen of the dead. A slow journey through torchlit stone into the realm where seasons are decided and the boundary between life and death is thin. A vision of eternal return.",
    video: "assets/videos/vision-underworld.mp4"
  },
  {
    title: "Achilles' Rage",
    cycle: "The Heroic Age",
    description: "The greatest warrior of the Greeks stands alone on the Trojan plain. Grief, glory, and the terrible beauty of a short, brilliant life. Feel the weight of the choice between long obscurity and immortal fame.",
    video: "assets/videos/vision-achilles.mp4"
  },
  {
    title: "Dionysian Mystery",
    cycle: "Ecstatic Traditions",
    description: "In the sacred night, the god of wine and madness arrives. Maenads move between terror and ecstasy. This is the ancient truth: civilization needs both order and the controlled release of what lies beneath.",
    video: "assets/videos/vision-dionysus.mp4"
  },
  {
    title: "Odysseus's Nostos",
    cycle: "The Long Return",
    description: "Ten years of war. Ten more years at sea. One man trying to remember who he is and return home. The waves, the cliffs, the longing. The most human of all epic journeys.",
    video: "assets/videos/vision-nostos.mp4"
  }
];

function playVision(index) {
  const vision = keyVisions[index];
  if (!vision) return;

  const modal = document.getElementById('vision-modal');
  const player = document.getElementById('vision-player');
  const meta = document.getElementById('vision-meta');
  const desc = document.getElementById('vision-description');

  player.src = vision.video;
  player.load();

  meta.innerHTML = `
    <span class="text-xs px-3 py-1 rounded bg-[#C5A46E]/10 text-[#C5A46E] tracking-wider">${vision.cycle}</span>
    <span class="text-2xl heading-serif tracking-tighter text/white">${vision.title}</span>
  `;
  
  desc.textContent = vision.description;

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  // Auto-play when ready
  player.oncanplay = () => {
    player.play().catch(() => {});
  };
}

function closeVisionModal() {
  const modal = document.getElementById('vision-modal');
  const player = document.getElementById('vision-player');
  
  player.pause();
  player.src = '';
  
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

// Make vision cards have subtle autoplay on hover (nice touch)
function initVisionCards() {
  const cards = document.querySelectorAll('.vision-card');
  cards.forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;

    card.addEventListener('mouseenter', () => {
      video.play().catch(() => {});
    });
    
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });
}

// Call this on load (we'll hook it into the existing boot)
window.addEventListener('load', () => {
  // existing init code runs from app.js
  // add our vision card hover behavior
  setTimeout(initVisionCards, 800);
});

// Keyboard shortcuts
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modals = document.querySelectorAll('#entry-modal, #oracle-modal, #journey-panel');
      let closed = false;
      modals.forEach(m => {
        if (!m.classList.contains('hidden') && m.classList.contains('flex')) {
          m.classList.remove('flex');
          m.classList.add('hidden');
          closed = true;
        }
      });
      if (!closed) {
        // Close any open things or focus search
        document.getElementById('global-search')?.focus();
      }
    }
    
    if (e.key.toLowerCase() === '?' && document.activeElement.tagName === 'BODY') {
      e.preventDefault();
      openOracle();
    }
  });
  
  // Easter egg: press "o" for oracle when nothing focused
  document.addEventListener('keypress', (e) => {
    if (e.key.toLowerCase() === 'o' && document.activeElement.tagName === 'BODY') {
      openOracle();
    }
  });
}

// Main initialization
function initAether() {
  initTailwind();
  
  // Initial render of tapestry
  renderEntries('all');
  
  // Timeline
  renderTimeline();
  
  // Interactive family tree
  renderFamilyTree();
  
  // Search
  initSearch();
  
  // Keyboard
  initKeyboard();
  
  // Random subtle encouragement
  console.log('%c[AETHER] The myths are awake. Session: Outside the Box', 'color:#C5A46E30');
  
  // Bonus: pre-load a couple viewed states for demo feel (remove in real use if wanted)
  // viewedEntries already loaded from storage
}

// Boot
window.onload = initAether;

// Expose a couple helpers for console tinkering / future expansion
window.AETHER = { openEntry, openOracle, renderEntries, resetAllProgress };