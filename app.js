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
    story: "Gaia emerged from Chaos and gave birth to the sky (Uranus), the mountains, and the sea. She is the great mother who later conspired with her children against the tyrannical rule of Uranus and later Cronus, playing a foundational role in the succession myths that led to the current order of the gods. Her body is the earth itself, and her anger or favor could shake the foundations of the world.",
    sources: ["Hesiod, Theogony"],
    variants: "In some later philosophical traditions, Gaia is treated more as a personified principle of nature than a fully anthropomorphic deity.",
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
    story: "Uranus covered Gaia completely. Together they produced the Titans, Cyclopes, and other powerful beings. His fear of his children led him to imprison them within Gaia, provoking her to conspire with Cronus to castrate him and end his rule. His blood and severed genitals gave rise to further generations of gods and monsters.",
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
    story: "Cronus castrated Uranus at Gaia’s urging and took his place as ruler. During his reign the world experienced the Golden Age, a time of abundance and peace. Fearing a prophecy that he would be overthrown by his children, he swallowed them at birth until Rhea tricked him into swallowing a stone instead of Zeus. His defeat marked the end of Titan rule.",
    sources: ["Hesiod, Theogony", "Apollodorus"],
    variants: "Some traditions portray Cronus in a more positive light as a just ruler during the Golden Age, while others emphasize his tyranny and paranoia.",
    symbols: ["Sickle"],
    relations: [
      { id: "rhea", label: "Sister and Wife" },
      { id: "zeus", label: "Son" }
    ]
  },
  {
    id: "rhea",
    name: "Rhea",
    type: "Titan",
    cycle: "Cosmic Order",
    epithet: "Mother of the Olympians",
    hook: "The Titaness who saved Zeus and enabled the overthrow of Cronus.",
    image: "assets/images/hera.jpg",
    story: "Sister and wife of Cronus. After watching him swallow their first five children, she hid the infant Zeus in Crete and gave Cronus a stone wrapped in swaddling clothes to swallow instead. She played a crucial role in the succession that led to the Olympian order and is often associated with motherhood and the protection of the young.",
    sources: ["Hesiod, Theogony", "Apollodorus"],
    symbols: ["Lion", "Cymbals"],
    relations: [
      { id: "cronus", label: "Brother and Husband" },
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
    story: "Zeus led the Olympians in the war against the Titans (Titanomachy) and established a new order after their victory. He divided the cosmos with his brothers Poseidon and Hades and became the supreme ruler, associated with justice, hospitality, and the maintenance of cosmic order. His many affairs and resulting offspring are central to Greek genealogies, yet he is repeatedly shown as bound by larger forces of fate and the expectations of hospitality and oath-keeping.",
    sources: ["Hesiod, Theogony", "Homer, Iliad"],
    variants: "The extent of Zeus's power and the degree to which he is subject to fate varies across authors. In some traditions he appears more limited; in others he is identified with cosmic order itself.",
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
    story: "As wife of Zeus and queen of the gods, Hera plays a central role in enforcing the social and cosmic order. She is the protector of marriage and women in childbirth, but her frequent conflicts with Zeus and persecution of his lovers and children reveal the tensions within the new divine hierarchy. She represents both the ideal of queenship and the destructive potential of divine jealousy when the order she protects is threatened.",
    sources: ["Hesiod, Theogony", "Homer, Iliad"],
    symbols: ["Peacock", "Pomegranate"],
    relations: [
      { id: "zeus", label: "Husband and King" }
    ]
  },
  {
    id: "athena",
    name: "Athena",
    type: "Olympian",
    cycle: "Cosmic Order",
    epithet: "Goddess of Wisdom, Strategy, and Crafts",
    hook: "The virgin goddess born fully armed from Zeus’s head.",
    image: "assets/images/athena.jpg",
    story: "Athena sprang fully grown and armored from Zeus’s forehead after he swallowed her mother Metis. She is the goddess of strategic warfare, wisdom, crafts, and the protector of cities (especially Athens). She represents intelligence and civilization over brute force, and is one of the most consistently positive and powerful goddesses in Greek tradition. Her birth from Zeus’s head symbolizes the idea that wisdom and strategy belong to the highest authority.",
    sources: ["Hesiod, Theogony", "Homer, Iliad and Odyssey"],
    symbols: ["Owl", "Aegis", "Olive Tree", "Spear"],
    relations: [
      { id: "zeus", label: "Father" }
    ]
  },
  {
    id: "poseidon",
    name: "Poseidon",
    type: "Olympian",
    cycle: "Cosmic Order",
    epithet: "Lord of the Sea, Earth-Shaker",
    hook: "The moody god who received the sea in the division of the cosmos.",
    image: "assets/images/poseidon.jpg",
    story: "After the Titanomachy, Poseidon drew the lot for the sea. He is volatile and powerful, associated with earthquakes, horses, and the unpredictable nature of the ocean. His frequent conflicts with other gods and mortals (notably Odysseus) highlight the dangerous side of divine power and the limits of human control over natural forces. He is also credited with creating the first horse.",
    sources: ["Hesiod, Theogony", "Homer, Iliad and Odyssey"],
    symbols: ["Trident", "Horse", "Dolphin"],
    relations: [
      { id: "zeus", label: "Brother" },
      { id: "hades", label: "Brother" }
    ]
  },
  {
    id: "hades",
    name: "Hades",
    type: "Olympian",
    cycle: "Cosmic Order",
    epithet: "Lord of the Dead, The Unseen One",
    hook: "The ruler of the Underworld who received the realm of the dead in the division of the cosmos.",
    image: "assets/images/poseidon.jpg",
    story: "After the Titanomachy, Hades drew the lot for the Underworld. He is stern and just rather than evil, guarding the realm of the dead and the riches beneath the earth. His abduction of Persephone became one of the central myths explaining the cycle of seasons and the relationship between life and death. Unlike his brothers, he rarely leaves his realm and is rarely depicted as actively malevolent.",
    sources: ["Hesiod, Theogony", "Homeric Hymn to Demeter"],
    symbols: ["Cerberus", "Helm of Invisibility"],
    relations: [
      { id: "zeus", label: "Brother" },
      { id: "poseidon", label: "Brother" },
      { id: "persephone", label: "Wife" }
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
    story: "Prometheus stole fire from the gods and gave it to humans, along with many other arts and skills. For this act of defiance against Zeus’s will, he was bound to a rock in the Caucasus where an eagle ate his liver daily. He became the archetypal figure of the rebel who suffers for bringing knowledge and progress to humanity, embodying the tension between divine authority and human advancement. His punishment was eventually ended by Heracles.",
    sources: ["Hesiod, Theogony and Works and Days", "Aeschylus, Prometheus Bound"],
    variants: "In some traditions, Prometheus is portrayed more as a culture hero and benefactor than a defiant rebel. His release by Heracles also varies in emphasis across sources.",
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
    hook: "The woman created as punishment whose curiosity released all evils into the world.",
    image: "assets/images/pandora.jpg",
    story: "Created by Hephaestus on Zeus’s orders as revenge for Prometheus giving fire to humanity. Given a sealed jar (or box) containing all evils and told never to open it, Pandora’s curiosity led her to release suffering, disease, and discord into the world. Only Hope remained inside. Her story explores themes of curiosity, disobedience, and the irreversible nature of certain actions. She is sometimes portrayed as more victim than villain.",
    sources: ["Hesiod, Works and Days"],
    variants: "The nature of what was released from the jar (evils vs. blessings) and whether Pandora acted out of curiosity or divine compulsion varies across later interpretations.",
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
    hook: "The son of Zeus who achieved immortality through immense suffering and impossible labors.",
    image: "assets/images/heracles.jpg",
    story: "Born to Zeus and the mortal Alcmene, Heracles was hated by Hera from birth. After being driven mad and killing his family, he was assigned twelve labors by King Eurystheus as penance. Through superhuman strength, courage, and endurance, he completed tasks no mortal could achieve. His labors include slaying the Nemean Lion, cleaning the Augean stables, capturing the Cretan Bull, and bringing back Cerberus from the Underworld. Eventually he achieved apotheosis and joined the gods on Olympus. His story is the clearest example of the Greek hero who earns divinity through suffering and achievement.",
    sources: ["Apollodorus, Library", "Euripides, Heracles", "Sophocles, Women of Trachis"],
    variants: "The exact number and nature of the labors varies across sources, as does the emphasis on whether Heracles was more victim or agent of his fate.",
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
    hook: "The hero who beheaded the Gorgon and rescued Andromeda from a sea monster.",
    image: "assets/images/medusa.jpg",
    story: "Son of Zeus and Danaë. Tasked with bringing back the head of Medusa, he succeeded with the help of Athena and Hermes. Later he rescued Andromeda from a sea monster sent by Poseidon and founded the city of Mycenae. His story is one of the earliest and most complete hero myths and involves many of the classic elements of the heroic journey: divine parentage, impossible quest, monster-slaying, and marriage to a rescued princess.",
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
    story: "Son of Aegeus (or Poseidon). He volunteered to enter the Labyrinth and slay the Minotaur with the help of Ariadne’s thread. Later he became king of Athens and is credited with synoecism — uniting the villages of Attica into one city-state. His story bridges the worlds of heroic adventure and political founding, though it also includes darker episodes such as the abandonment of Ariadne and the death of his father.",
    sources: ["Plutarch, Life of Theseus", "Apollodorus"],
    variants: "The parentage of Theseus (Aegeus vs. Poseidon) and the extent of his role in unifying Attica are subjects of variation across sources.",
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
    hook: "A woman transformed into a monster whose head became one of the most powerful weapons in the Greek world.",
    image: "assets/images/medusa.jpg",
    story: "Originally a beautiful woman, Medusa was transformed into a Gorgon. Her gaze turned men to stone. After being slain by Perseus, her head was given to Athena and retained its petrifying power. The story explores themes of victimization, monstrosity, and the transformation of the victim into a weapon. Even in death she continued to generate powerful new beings (Pegasus and Chrysaor).",
    sources: ["Hesiod, Theogony", "Ovid, Metamorphoses"],
    variants: "The rape narrative is absent from our earliest sources. Hesiod presents Medusa as a monster from the beginning. The version that emphasizes her victimization becomes dominant only in later Roman poetry.",
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
    story: "King of Ithaca and one of the greatest Greek leaders at Troy. After the fall of the city, it took him ten years to return home due to Poseidon’s anger. His story explores cunning, endurance, identity, homecoming, and the human condition more deeply than almost any other Greek hero myth. He is both admired for his intelligence and criticized for his deceptions and moral compromises.",
    sources: ["Homer, Odyssey"],
    symbols: ["Bow", "Oar"],
    relations: []
  },
  {
    id: "achilles",
    name: "Achilles",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "The Greatest Warrior of the Greeks",
    hook: "The near-invincible hero whose anger and withdrawal from battle shaped the outcome of the Trojan War.",
    image: "assets/images/heracles.jpg",
    story: "Son of the mortal Peleus and the goddess Thetis. The greatest warrior among the Greeks at Troy. After a quarrel with Agamemnon, he withdrew from battle, leading to devastating losses for the Greeks. His return and eventual death at the hands of Paris (guided by Apollo) mark one of the central tragedies of the war. His story explores the tension between individual honor and communal responsibility, as well as the cost of divine parentage.",
    sources: ["Homer, Iliad"],
    symbols: ["Armor", "Spear"],
    relations: [
      { id: "patroclus", label: "Closest Companion" }
    ]
  },
  {
    id: "hector",
    name: "Hector",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "Greatest Defender of Troy",
    hook: "The noble Trojan prince and greatest defender of his city.",
    image: "assets/images/heracles.jpg",
    story: "Son of Priam and Hecuba, husband of Andromache, and father of Astyanax. As the greatest warrior of Troy, he leads the defense against the Greeks. Unlike many heroes, he fights not primarily for personal glory but for the survival of his city and family. His death at the hands of Achilles is one of the most tragic and human moments in the Iliad.",
    sources: ["Homer, Iliad"],
    symbols: ["Armor"],
    relations: [
      { id: "andromache", label: "Wife" }
    ]
  },
  {
    id: "helen",
    name: "Helen",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "The Face That Launched a Thousand Ships",
    hook: "The most beautiful woman in the world, whose abduction sparked the Trojan War.",
    image: "assets/images/athena.jpg",
    story: "Daughter of Zeus and Leda (or Nemesis). Married to Menelaus of Sparta, she was either abducted or eloped with Paris of Troy, becoming the casus belli of the Trojan War. Her role raises complex questions about agency, beauty, responsibility, and the causes of war. Ancient authors are divided on whether she was a willing participant or a victim of divine will.",
    sources: ["Homer, Iliad", "Euripides, Helen", "Herodotus"],
    variants: "Herodotus suggests she may never have gone to Troy at all, and that the war was fought over a phantom.",
    symbols: ["Beauty"],
    relations: [
      { id: "menelaus", label: "Husband" },
      { id: "paris", label: "Abductor / Lover" }
    ]
  },

  // === ECSTATIC TRADITIONS ===
  {
    id: "dionysus",
    name: "Dionysus",
    type: "Olympian",
    cycle: "Ecstatic Traditions",
    epithet: "God of Wine, Ecstasy, and Theatre",
    hook: "The god who brings both liberation and destruction through ecstasy and the breakdown of boundaries.",
    image: "assets/images/dionysus.jpg",
    story: "Son of Zeus and Semele, Dionysus represents the arrival of something wild and transformative. His worship involved altered states of consciousness, the blurring of social roles, and a direct encounter with the divine that could be both ecstatic and terrifying. He is also the god of theatre, linking ritual performance with religious experience. His arrival often disrupts established order but also brings renewal and the possibility of transcendence through ecstasy.",
    sources: ["Euripides, Bacchae", "Homeric Hymn to Dionysus"],
    variants: "The degree to which his cults involved actual violence or ritual madness remains debated. Some sources emphasize liberation and joy; others emphasize terror and destruction.",
    symbols: ["Thyrsus", "Grapevine", "Leopard"],
    relations: [
      { id: "zeus", label: "Father" }
    ]
  },

  // === ADDITIONAL IMPORTANT FIGURES ===
  {
    id: "apollo",
    name: "Apollo",
    type: "Olympian",
    cycle: "Cosmic Order",
    epithet: "God of Light, Music, Prophecy, and Healing",
    hook: "The most widely worshipped of the gods — beautiful, distant, and terrifyingly clear-sighted.",
    image: "assets/images/apollo.jpg",
    story: "Son of Zeus and Leto, twin brother of Artemis. Apollo is associated with the sun, music, poetry, prophecy (especially at Delphi), healing, and sudden, pitiless punishment. He represents order, clarity, and the dangerous power of divine knowledge. His oracles were among the most important religious institutions in the Greek world, and his myths often explore the tension between divine certainty and human limitation.",
    sources: ["Hesiod, Theogony", "Homeric Hymn to Apollo", "Euripides, Ion"],
    symbols: ["Lyre", "Laurel", "Bow", "Python"],
    relations: [
      { id: "artemis", label: "Twin Sister" },
      { id: "zeus", label: "Father" }
    ]
  },
  {
    id: "artemis",
    name: "Artemis",
    type: "Olympian",
    cycle: "Cosmic Order",
    epithet: "Goddess of the Hunt, Moon, and Wilderness",
    hook: "The virgin huntress who protects the young and punishes those who violate her sacred spaces.",
    image: "assets/images/artemis.jpg",
    story: "Twin sister of Apollo and daughter of Zeus and Leto. Artemis roams the wild with her nymphs. She is fiercely protective of young animals and girls, but merciless to those who offend her chastity or sacred groves (most famously Actaeon). She represents the untamed aspects of nature and female independence in a world dominated by male gods and heroes.",
    sources: ["Homeric Hymn to Artemis", "Callimachus, Hymn to Artemis"],
    symbols: ["Bow", "Deer", "Crescent Moon"],
    relations: [
      { id: "apollo", label: "Twin Brother" }
    ]
  },
  {
    id: "demeter",
    name: "Demeter",
    type: "Olympian",
    cycle: "Cosmic Order",
    epithet: "Goddess of Grain and the Seasons",
    hook: "The mother whose grief brought winter to the world.",
    image: "assets/images/hera.jpg",
    story: "Sister of Zeus and mother of Persephone. When Hades abducted her daughter, Demeter’s grief caused the earth to stop producing food. The resulting famine forced Zeus to negotiate Persephone’s partial return, establishing the cycle of the seasons. Her worship was central to the Eleusinian Mysteries, one of the most important religious cults in ancient Greece, which promised initiates a better fate after death.",
    sources: ["Homeric Hymn to Demeter"],
    symbols: ["Wheat", "Torch", "Poppy"],
    relations: [
      { id: "persephone", label: "Daughter" },
      { id: "zeus", label: "Brother" }
    ]
  },
  {
    id: "persephone",
    name: "Persephone",
    type: "Olympian",
    cycle: "Cosmic Order",
    epithet: "Queen of the Underworld, Goddess of Spring",
    hook: "The maiden who became queen of the dead and brings life back to the earth each year.",
    image: "assets/images/athena.jpg",
    story: "Daughter of Demeter and Zeus. Abducted by Hades while picking flowers, she became queen of the Underworld. Her annual return to the surface world brings spring and growth; her descent brings winter. She embodies the tension between life and death, and was worshipped alongside her mother in the Eleusinian Mysteries.",
    sources: ["Homeric Hymn to Demeter"],
    symbols: ["Pomegranate", "Torch"],
    relations: [
      { id: "demeter", label: "Mother" },
      { id: "hades", label: "Husband" }
    ]
  },
  {
    id: "oedipus",
    name: "Oedipus",
    type: "Hero",
    cycle: "The Theban Cycle",
    epithet: "The King Who Solved the Sphinx’s Riddle",
    hook: "The man who unknowingly killed his father and married his mother, becoming a central figure in Greek tragedy.",
    image: "assets/images/heracles.jpg",
    story: "Son of Laius and Jocasta, rulers of Thebes. After being exposed as an infant due to a prophecy, he was raised in Corinth. Returning to Thebes, he killed his father at a crossroads and solved the Sphinx’s riddle, becoming king and unknowingly marrying his mother. His eventual discovery of the truth led to catastrophe. His story explores fate, free will, knowledge, and the limits of human understanding more powerfully than almost any other Greek myth.",
    sources: ["Sophocles, Oedipus Rex", "Apollodorus"],
    variants: "The details of how Oedipus discovered the truth and the extent of his self-punishment vary across sources. Some versions are more focused on his suffering, others on his guilt.",
    symbols: ["Sphinx", "Staff"],
    relations: [
      { id: "jocasta", label: "Mother and Wife" },
      { id: "antigone", label: "Daughter" }
    ]
  },
  {
    id: "antigone",
    name: "Antigone",
    type: "Hero",
    cycle: "The Theban Cycle",
    epithet: "The Woman Who Defied the King for the Sake of Family and the Gods",
    hook: "The daughter of Oedipus who chose divine law over human law.",
    image: "assets/images/athena.jpg",
    story: "Daughter of Oedipus and Jocasta. After the deaths of her brothers Eteocles and Polynices, she defied King Creon’s order and buried Polynices, leading to her own death. Her story explores the conflict between family duty, divine law, and state authority, and remains one of the most powerful examinations of individual conscience versus political power in Western literature.",
    sources: ["Sophocles, Antigone"],
    symbols: ["Burial"],
    relations: [
      { id: "oedipus", label: "Father" },
      { id: "creon", label: "Uncle and Opponent" }
    ]
  },
  {
    id: "aphrodite",
    name: "Aphrodite",
    type: "Olympian",
    cycle: "Cosmic Order",
    epithet: "Goddess of Love and Beauty",
    hook: "The goddess whose power over desire shapes both gods and mortals.",
    image: "assets/images/athena.jpg",
    story: "Born from the sea foam near Cyprus (or as daughter of Zeus and Dione). She represents the overwhelming force of erotic desire and beauty. Her affairs (notably with Ares and Anchises) and her role in sparking the Trojan War through the Judgment of Paris demonstrate the disruptive and creative power of love and beauty in Greek myth. She is both irresistible and dangerous.",
    sources: ["Hesiod, Theogony", "Homeric Hymn to Aphrodite"],
    symbols: ["Dove", "Myrtle", "Mirror"],
    relations: [
      { id: "ares", label: "Lover" },
      { id: "hephaestus", label: "Husband" }
    ]
  },
  {
    id: "hermes",
    name: "Hermes",
    type: "Olympian",
    cycle: "Cosmic Order",
    epithet: "Messenger of the Gods, Guide of Souls, Trickster",
    hook: "The swift-footed god of boundaries, commerce, and cunning.",
    image: "assets/images/apollo.jpg",
    story: "Son of Zeus and Maia. Hermes is the messenger of the gods, guide of the dead to the Underworld, patron of travelers, merchants, and thieves. From his earliest myths he displays remarkable cunning (stealing Apollo’s cattle as an infant). He represents movement across boundaries — between gods and mortals, life and death, truth and deception. He is also the god of communication and interpretation.",
    sources: ["Homeric Hymn to Hermes", "Homer, Iliad and Odyssey"],
    symbols: ["Caduceus", "Winged Sandals", "Tortoise"],
    relations: [
      { id: "zeus", label: "Father" },
      { id: "apollo", label: "Rival / Associate" }
    ]
  },
  {
    id: "hephaestus",
    name: "Hephaestus",
    type: "Olympian",
    cycle: "Cosmic Order",
    epithet: "God of Fire and Craftsmanship",
    hook: "The lame smith god who creates the most wondrous objects in the cosmos.",
    image: "assets/images/zeus.jpg",
    story: "Son of Zeus and Hera (or, in some versions, of Hera alone). Thrown from Olympus because of his lameness, he became the master craftsman of the gods. He forged Zeus’s thunderbolts, Achilles’ armor, and many other divine artifacts. His marriage to Aphrodite and his revenge on her lovers (trapping them in a net) are among his most famous myths. He represents both the creative power of craft and the marginalization of the physically imperfect in a world that values beauty and strength.",
    sources: ["Homer, Iliad", "Hesiod, Theogony"],
    symbols: ["Hammer", "Anvil", "Tongs"],
    relations: [
      { id: "aphrodite", label: "Wife" },
      { id: "zeus", label: "Father" }
    ]
  },
  {
    id: "ares",
    name: "Ares",
    type: "Olympian",
    cycle: "Cosmic Order",
    epithet: "God of War and Violence",
    hook: "The most unpopular of the major gods — the embodiment of war’s brutality.",
    image: "assets/images/heracles.jpg",
    story: "Son of Zeus and Hera. Ares represents the violent, chaotic, and bloodthirsty aspects of war, in contrast to Athena’s strategic warfare. He is frequently humiliated in myth (most famously caught in bed with Aphrodite by Hephaestus) and is generally portrayed negatively by Greek authors, reflecting Greek ambivalence toward mindless violence and the glorification of war for its own sake.",
    sources: ["Homer, Iliad", "Hesiod, Theogony"],
    symbols: ["Spear", "Shield", "Helmet"],
    relations: [
      { id: "aphrodite", label: "Lover" },
      { id: "zeus", label: "Father" }
    ]
  },
  {
    id: "jason",
    name: "Jason",
    type: "Hero",
    cycle: "The Heroic Age",
    epithet: "Leader of the Argonauts",
    hook: "The hero who led the quest for the Golden Fleece and whose story explores the cost of heroism and broken oaths.",
    image: "assets/images/heracles.jpg",
    story: "Son of Aeson, rightful king of Iolcus. Sent on an impossible quest by his uncle Pelias to retrieve the Golden Fleece, he assembled the greatest heroes of his age (the Argonauts) and succeeded with the help of Medea. His later betrayal of Medea and the destruction of his family make his story one of the most morally complex of the heroic age.",
    sources: ["Apollonius of Rhodes, Argonautica", "Apollodorus"],
    symbols: ["Golden Fleece", "Argo"],
    relations: [
      { id: "medea", label: "Wife and Helper" }
    ]
  }
];

// Mythic Cycles
const cycles = [
  "Cosmic Order",
  "The Heroic Age",
  "The Trojan War",
  "Transgression",
  "Ecstatic Traditions",
  "The Theban Cycle"
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

// Open detailed rich modal
function openEntry(id) {
  const entry = entries.find(e => e.id === id);
  if (!entry) return;

  viewedEntries.add(id);
  localStorage.setItem('aether_viewed', JSON.stringify([...viewedEntries]));

  document.getElementById('modal-hero').innerHTML = `
    <img src="${entry.image}" class="absolute inset-0 w-full h-full object-cover opacity-95" onerror="this.src='assets/images/zeus.jpg'">
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-[#05080F]"></div>
    <button onclick="closeModal()" class="absolute top-5 right-5 bg-black/60 hover:bg-black/80 transition text-xs px-4 py-1.5 rounded-full border border-white/20">Close</button>
    <div class="absolute bottom-0 left-0 p-8">
      <div class="text-xs tracking-[2px] text-[#C5A46E] mb-1">${entry.cycle}</div>
      <h2 class="heading-serif text-5xl md:text-6xl tracking-[-2px] text-white">${entry.name}</h2>
      <p class="text-[#E8D9B5] text-lg mt-1">${entry.epithet}</p>
    </div>
  `;

  document.getElementById('modal-story').innerHTML = `<p>${entry.story}</p>`;

  const sourcesEl = document.getElementById('modal-sources');
  sourcesEl.innerHTML = entry.sources 
    ? entry.sources.map(s => `<div class="mb-1">• ${s}</div>`).join('')
    : '<div class="text-[#F5F0E6]/60 italic">Sources not yet detailed for this figure.</div>';

  const symbolsEl = document.getElementById('modal-symbols');
  symbolsEl.innerHTML = entry.symbols.map(s => 
    `<span class="px-4 py-1 text-sm bg-[#0A0F1E] border border-[#C5A46E]/20 rounded-full">${s}</span>`
  ).join('');

  const relContainer = document.getElementById('modal-relations');
  relContainer.innerHTML = '';
  if (entry.relations && entry.relations.length > 0) {
    entry.relations.forEach(rel => {
      const related = entries.find(e => e.id === rel.id);
      const btn = document.createElement('button');
      btn.className = 'thread-link px-4 py-1.5 text-sm rounded-full bg-[#0A0F1E] border border-[#C5A46E]/30 hover:border-[#C5A46E]';
      btn.innerHTML = `${rel.label}: <span class="font-medium text-[#E8D9B5]">${related ? related.name : rel.id}</span>`;
      btn.onclick = () => {
        closeModal();
        setTimeout(() => openEntry(rel.id), 250);
      };
      relContainer.appendChild(btn);
    });
  } else {
    relContainer.innerHTML = '<span class="text-[#F5F0E6]/60 text-sm italic">Few direct relations recorded yet.</span>';
  }

  document.getElementById('entry-modal').classList.remove('hidden');
  document.getElementById('entry-modal').classList.add('flex');
}

function closeModal() {
  const modal = document.getElementById('entry-modal');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
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