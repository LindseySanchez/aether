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
    story: "Gaia emerged from Chaos and gave birth to the sky (Uranus), the mountains, and the sea. She is the great mother who later conspired with her children against the tyrannical rule of Uranus and later Cronus, playing a foundational role in the succession myths that led to the current order of the gods. Her body is the earth itself, and her anger or favor could shake the foundations of the world. In Hesiod’s Theogony she is not merely a passive landscape but an active, intelligent, and sometimes terrifying force who gives birth to monsters, gods, and the very structures of the cosmos. She urges her son Cronus to castrate Uranus and later helps hide the infant Zeus from his father. Some later philosophical traditions (especially Stoic and Orphic) treat her more as a personified principle of nature or the great mother from whom all life flows, while cultic worship of Gaia as Ge or Demeter-Ge continued in various sanctuaries. Her anger at the mistreatment of her children repeatedly disrupts the divine order until Zeus establishes a more stable (though still violent) regime. In some accounts she also gives birth to the Giants and the Furies from the blood of Uranus, showing how violence and generation are intertwined from the very beginning of the cosmos. Her role as the ultimate source of both order and monstrous disruption makes her one of the most powerful and ambiguous figures in the entire mythic tradition.",
    sources: ["Hesiod, Theogony 116-153, 453-506, 617-735", "Homeric Hymn to Gaia", "Apollodorus, Library 1.1.1-3", "Orphic fragments (various)"],
    variants: "In some later philosophical traditions, Gaia is treated more as a personified principle of nature than a fully anthropomorphic deity. Orphic theogonies give her a more central cosmic role as the first being or as the mother of the first gods in a different succession. Local cults sometimes identified her with other earth goddesses such as Demeter or Rhea. In some versions she is the mother of the Furies and the Giants directly from Uranus’s blood, linking her to vengeance and rebellion.",
    symbols: ["Earth", "Mountains", "Serpents", "Fertility"],
    relations: [
      { id: "uranus", label: "Consort" },
      { id: "cronus", label: "Son" },
      { id: "zeus", label: "Grandson" },
      { id: "rhea", label: "Daughter" }
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
    story: "Uranus covered Gaia completely. Together they produced the Titans, Cyclopes, and other powerful beings. His fear of his children led him to imprison them within Gaia, provoking her to conspire with Cronus to castrate him and end his rule. His blood and severed genitals gave rise to further generations of gods and monsters (the Furies, the Giants, and Aphrodite in some accounts). In Hesiod he is the first king whose paranoid tyranny sets the pattern for the succession struggles that define the early cosmos. After his castration he plays almost no further active role, becoming a distant, almost abstract figure of the sky above. His name (Ouranos) simply means “sky,” and in some later traditions he is barely personified at all. The castration myth is one of the most violent and generative moments in Greek theogony — from violence comes new life, new gods, and new forms of disorder.",
    sources: ["Hesiod, Theogony 126-210"],
    symbols: ["Sky", "Stars"],
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
    story: "Cronus castrated Uranus at Gaia’s urging and took his place as ruler. During his reign the world experienced the Golden Age, a time of abundance and peace when humans lived without toil or aging (described most famously in Hesiod’s Works and Days). Fearing a prophecy that he would be overthrown by his children, he swallowed them at birth until Rhea tricked him into swallowing a stone instead of Zeus. His defeat by Zeus and the Olympians in the Titanomachy marked the end of Titan rule and the beginning of the current divine order. In some traditions he is portrayed as a just and benevolent ruler during the Golden Age; in others he is a paranoid tyrant. After his defeat he was imprisoned in Tartarus, though later myths sometimes send him to rule the Isles of the Blessed in the far west. Roman tradition identified him with Saturn and gave him a more positive agricultural character. The swallowing of his children is a direct inversion of the normal generational flow — the father trying to prevent the future by consuming it — and his eventual overthrow by the stone and by Zeus restores proper succession while also establishing the new order through violence.",
    sources: ["Hesiod, Theogony 453-506, 617-735", "Hesiod, Works and Days 109-126", "Apollodorus, Library 1.1.4-2.1.2"],
    variants: "Some traditions portray Cronus in a more positive light as a just ruler during the Golden Age, while others emphasize his tyranny and paranoia. Orphic traditions give him a different cosmic role, sometimes making him the father of Zeus in a more cyclical or philosophical sense. In Hellenistic and Roman periods he was often conflated with the Phoenician god El and with the Roman Saturn. In some versions he is eventually released or rules a blessed afterlife realm.",
    symbols: ["Sickle", "Time", "Harvest"],
    relations: [
      { id: "rhea", label: "Sister and Wife" },
      { id: "zeus", label: "Son" },
      { id: "gaia", label: "Mother" }
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
    story: "Sister and wife of Cronus. After watching him swallow their first five children, she hid the infant Zeus in Crete (or in some versions on Mount Ida or in a cave on Crete guarded by the Curetes who clashed their spears to drown his cries) and gave Cronus a stone wrapped in swaddling clothes to swallow instead. She played a crucial role in the succession that led to the Olympian order and is often associated with motherhood and the protection of the young. In cult she was closely linked with Cybele, the Phrygian mother goddess, and with Demeter. Her worship involved ecstatic elements and was sometimes connected with the mystery cults. She is one of the few Titans who is not portrayed as an enemy of the new order; instead she actively enables it. Her deception of Cronus is one of the pivotal acts that allows the new generation to emerge and establish a different kind of rule.",
    sources: ["Hesiod, Theogony 453-506", "Apollodorus, Library 1.1.5-7", "Homeric Hymn to Demeter (related traditions)"],
    symbols: ["Lion", "Cymbals", "Tambourine", "Motherhood"],
    relations: [
      { id: "cronus", label: "Brother and Husband" },
      { id: "zeus", label: "Son" },
      { id: "hera", label: "Daughter" }
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
    story: "Zeus led the Olympians in the war against the Titans (Titanomachy) and established a new order after their victory. He divided the cosmos with his brothers Poseidon and Hades and became the supreme ruler, associated with justice, hospitality, and the maintenance of cosmic order. His many affairs and resulting offspring are central to Greek genealogies, yet he is repeatedly shown as bound by larger forces of fate and the expectations of hospitality and oath-keeping. In the Iliad he is both the all-powerful cloud-gatherer and a god who must sometimes yield to the balance of fate and the will of other deities. The Titanomachy itself is described in detail by Hesiod: Zeus frees the Cyclopes, gains the thunderbolt, and hurls his father Cronus and the Titans into Tartarus after a ten-year war. Later myths show him as the upholder of xenia (guest-friendship) and the punisher of hubris, yet also as a serial lover whose unions produce heroes and new dangers. His worship spanned the Greek world, from the great oracle at Dodona (the oldest in Greece) to the games at Olympia. In philosophical traditions (especially Stoic) he is sometimes identified with the rational principle governing the universe. Even in the Iliad, where he appears most powerful, he must weigh the fates of men on his golden scales and can be temporarily bound by other gods when they act in concert. The tension between his supreme power and his subjection to larger forces of fate and justice is one of the most profound themes in Greek religious thought. He is both the guarantor of order and the source of much of the chaos that threatens it through his own appetites and decisions.",
    sources: ["Hesiod, Theogony 453-506, 617-735, 881-929", "Homer, Iliad 1.1-52, 8.1-40, 15.1-33, 24.1-76, 15.187-199 (division of the cosmos)", "Apollodorus, Library 1.1.2-2.1.2", "Pindar, Olympian 1 and 2 (for related themes of justice and fate)", "Aeschylus, Prometheus Bound (for the binding and prophecy of overthrow)"],
    variants: "The extent of Zeus's power and the degree to which he is subject to fate varies across authors. In some traditions he appears more limited; in others he is identified with cosmic order itself. The binding of Zeus by Hera, Poseidon, and Athena (Iliad 1.396-406 with the help of Thetis and Briareus) shows even the king of the gods can be temporarily constrained. Local traditions in Crete emphasized his birth and death more than his kingship. Orphic and philosophical traditions sometimes present a more abstract or pantheistic Zeus. In some Hellenistic syncretisms he was identified with Ammon, Serapis, and other supreme gods of the East. The prophecy that he would be overthrown by a son greater than himself (known to Prometheus) adds a layer of vulnerability even to the supreme god.",
    symbols: ["Thunderbolt", "Eagle", "Oak", "Aegis", "Scales of Justice", "Scepter"],
    relations: [
      { id: "hera", label: "Wife and Queen" },
      { id: "poseidon", label: "Brother" },
      { id: "hades", label: "Brother" },
      { id: "athena", label: "Daughter" },
      { id: "apollo", label: "Son" },
      { id: "artemis", label: "Daughter" },
      { id: "dionysus", label: "Son" },
      { id: "hermes", label: "Son" },
      { id: "persephone", label: "Daughter" },
      { id: "heracles", label: "Son" },
      { id: "thetis", label: "Ally (in binding episode)" }
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
    story: "As wife of Zeus and queen of the gods, Hera plays a central role in enforcing the social and cosmic order. She is the protector of marriage and women in childbirth, but her frequent conflicts with Zeus and persecution of his lovers and children reveal the tensions within the new divine hierarchy. She represents both the ideal of queenship and the destructive potential of divine jealousy when the order she protects is threatened. In the Iliad she is Zeus’s equal in will and nearly his match in power; she repeatedly schemes against Troy and against Heracles. One of the most striking variants tells how she, Poseidon, and Athena once bound Zeus in his sleep and were only thwarted by the intervention of Thetis and the hundred-handed Briareus. Her worship at Samos and Argos was especially magnificent, and she was honored as the divine patroness of legitimate marriage and civic stability. In the Homeric Hymn to Apollo she is shown as bitterly opposed to the birth of Athena and later of Apollo and Artemis. Her anger at Zeus’s infidelities is not merely personal; it is also a defense of the hierarchical order of the cosmos that she embodies as queen. Yet the very violence of her responses often threatens the stability she claims to defend. This paradox makes her one of the most complex and humanly compelling of the Olympians. In cult she was sometimes worshipped in ways that emphasized her role as a powerful independent goddess rather than simply as Zeus’s consort.",
    sources: ["Hesiod, Theogony", "Homer, Iliad 1.396-406, 14.153-353, 19.95-133", "Apollodorus, Library 1.3.1-2", "Homeric Hymn to Apollo", "Callimachus, Hymn to Delos"],
    variants: "Some traditions make Hera the eldest daughter of Cronus and Rhea and portray her as a more equal partner to Zeus before his rise. The story of her binding of Zeus appears only in the Iliad and is rarely emphasized in cult. In some local myths she is a more benevolent civic goddess. In Argive tradition she was sometimes said to renew her virginity annually by bathing in the spring of Kanathos. In some philosophical allegories she represents the lower air or the principle of marriage and civic harmony. In some versions she is the mother of Hephaestus without Zeus’s involvement, emphasizing her independent generative power.",
    symbols: ["Peacock", "Pomegranate", "Diadem", "Scepter", "Cow (in some cults)"],
    relations: [
      { id: "zeus", label: "Husband and King" },
      { id: "hephaestus", label: "Son (in some versions born without father)" },
      { id: "ares", label: "Son" },
      { id: "hebe", label: "Daughter" },
      { id: "heracles", label: "Persecuted Enemy (Zeus’s son)" }
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
    story: "Athena sprang fully grown and armored from Zeus’s forehead after he swallowed her mother Metis (Wisdom or Counsel). She is the goddess of strategic warfare, wisdom, crafts, and the protector of cities (especially Athens). She represents intelligence and civilization over brute force, and is one of the most consistently positive and powerful goddesses in Greek tradition. Her birth from Zeus’s head symbolizes the idea that wisdom and strategy belong to the highest authority. In the Iliad she repeatedly aids the Greeks and especially Odysseus and Diomedes; in the Odyssey she is the constant patron of the hero’s return. Her contest with Poseidon for Athens (the olive tree versus the salt spring) established her as the city’s divine protector. She was also the patron of weaving, metalwork, pottery, and the arts of peace. In tragedy she often appears as the voice of civic reason and reconciliation (most famously in Aeschylus’s Eumenides, where she founds the Areopagus court and persuades the Furies to become benevolent protectors of Athens). Her virginity is not a sign of weakness but of autonomy and power; she is never subject to the erotic forces that drive so many other gods and mortals. She is the divine embodiment of the Greek ideal of sophia (wisdom) combined with techne (craft) and andreia (courage) in the service of the polis. The story of her birth is also a story of containment — Zeus swallows Metis to prevent a son greater than himself, yet the daughter who emerges is in many ways his equal in power and superior in wisdom.",
    sources: ["Hesiod, Theogony 886-900", "Homer, Iliad and Odyssey", "Homeric Hymn to Athena", "Apollodorus, Library 1.3.6", "Aeschylus, Eumenides", "Pindar, Olympian 7 (for the birth of Rhodes and Athena’s role)"],
    variants: "Some local traditions (especially in Libya or with the story of Pallas) give her a different origin. The contest with Poseidon for Athens had multiple local versions, some more favorable to Poseidon than the one that became canonical in Athens. In some philosophical interpretations she is the personification of the rational soul or of wisdom itself. In Roman tradition she was identified with Minerva and took on a more domestic character as patron of crafts and guilds. In some versions she has a foster mother or is raised by the river god Triton.",
    symbols: ["Owl", "Aegis", "Olive Tree", "Spear", "Helmet", "Distaff", "Gorgoneion"],
    relations: [
      { id: "zeus", label: "Father" },
      { id: "poseidon", label: "Rival (for Athens)" },
      { id: "heracles", label: "Ally and Protector" },
      { id: "odysseus", label: "Favorite Mortal" },
      { id: "diomedes", label: "Favorite Mortal" }
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
    story: "After the Titanomachy, Poseidon drew the lot for the sea. He is volatile and powerful, associated with earthquakes, horses, and the unpredictable nature of the ocean. His frequent conflicts with other gods and mortals (notably Odysseus) highlight the dangerous side of divine power and the limits of human control over natural forces. He is also credited with creating the first horse and was worshipped as the father of many heroic lines (including the Athenian hero Theseus in some versions). In the Iliad he supports the Greeks while resenting Zeus’s authority; in the Odyssey his wrath keeps Odysseus from home for ten years after the hero blinds his son Polyphemus. His sanctuaries were often placed at dangerous capes and harbors. He was also deeply connected to the founding myths of many coastal and island communities. In the Homeric Hymn to Apollo he is shown as a powerful but ultimately subordinate god who yields to Apollo’s claim on Delphi. His character embodies the Greek awareness that the sea, while a source of wealth and connection, is also a realm of sudden catastrophe and the destruction of human plans. He is the god of both the life-giving and the life-destroying aspects of water and earth movement.",
    sources: ["Hesiod, Theogony", "Homer, Iliad and Odyssey", "Homeric Hymn to Apollo", "Apollodorus, Library 1.2.1"],
    symbols: ["Trident", "Horse", "Dolphin", "Bull", "Earthquake"],
    relations: [
      { id: "zeus", label: "Brother" },
      { id: "hades", label: "Brother" },
      { id: "odysseus", label: "Enemy (avenges Polyphemus)" },
      { id: "theseus", label: "Father (in some traditions)" }
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
    story: "After the Titanomachy, Hades drew the lot for the Underworld. He is stern and just rather than evil, guarding the realm of the dead and the riches beneath the earth. His abduction of Persephone became one of the central myths explaining the cycle of seasons and the relationship between life and death. Unlike his brothers, he rarely leaves his realm and is rarely depicted as actively malevolent. The Homeric Hymn to Demeter gives the fullest account of the abduction and the compromise that followed, showing Hades as a powerful but not cruel ruler who offers Persephone the pomegranate seeds that bind her to his kingdom for part of each year. He presided over the judgment of the dead (with Minos, Rhadamanthus, and Aeacus as judges in some traditions) and was the guardian of the great oaths sworn by the Styx. In later periods he was also known as Pluto (the Rich One), reflecting both the mineral wealth of the earth and the countless dead who belong to him. He is one of the most consistently portrayed gods across Greek literature: remote, impartial, and inexorable. The rarity of his appearances in myth and cult emphasizes his otherness — he is the god who rules the one realm from which no one returns unchanged.",
    sources: ["Hesiod, Theogony", "Homeric Hymn to Demeter", "Apollodorus, Library 1.2.1", "Pindar, Olympian 2 (for the judgment of the dead)"],
    symbols: ["Cerberus", "Helm of Invisibility", "Scepter", "Pomegranate"],
    relations: [
      { id: "zeus", label: "Brother" },
      { id: "poseidon", label: "Brother" },
      { id: "persephone", label: "Wife" },
      { id: "demeter", label: "Mother-in-law and Rival" }
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
    story: "Prometheus stole fire from the gods and gave it to humans, along with many other arts and skills (the full list in Hesiod and Aeschylus includes numbers, writing, medicine, navigation, mining, and the interpretation of omens). For this act of defiance against Zeus’s will, he was bound to a rock in the Caucasus where an eagle ate his liver daily. He became the archetypal figure of the rebel who suffers for bringing knowledge and progress to humanity, embodying the tension between divine authority and human advancement. His punishment was eventually ended by Heracles. Hesiod presents him as a trickster who also tries to cheat the gods over the division of sacrificial meat at Mekone. Aeschylus’s Prometheus Bound transforms him into a suffering culture hero who knows the future (including Zeus’s eventual overthrow by a son greater than himself) and withholds it. His release by Heracles (son of Zeus) beautifully closes the circle of rebellion and reconciliation. In later philosophical traditions (especially in Plato’s Protagoras) he becomes the bringer of the arts that allow humans to survive in a hostile world. The myth raises profound questions about the price of civilization and the limits of divine benevolence. Prometheus is the ultimate culture hero who pays the ultimate price, and his story has been read as everything from a warning against hubris to a celebration of human ingenuity and resistance to tyranny.",
    sources: ["Hesiod, Theogony 507-616 and Works and Days 42-105", "Aeschylus, Prometheus Bound", "Plato, Protagoras 320c-322d"],
    variants: "In some traditions, Prometheus is portrayed more as a culture hero and benefactor than a defiant rebel. His release by Heracles also varies in emphasis across sources. Later Roman authors sometimes conflated him with other trickster figures. In some Orphic and philosophical traditions his punishment is interpreted allegorically as the suffering of the rational soul bound to the body. In some versions he is the creator of humanity from clay.",
    symbols: ["Fire", "Chains", "Ring (in some versions the reminder of his bondage)"],
    relations: [
      { id: "zeus", label: "Punisher" },
      { id: "heracles", label: "Liberator" },
      { id: "pandora", label: "Indirect Cause of Her Creation" }
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
    story: "Created by Hephaestus on Zeus’s orders as revenge for Prometheus giving fire to humanity. Given a sealed jar (or box) containing all evils and told never to open it, Pandora’s curiosity led her to release suffering, disease, and discord into the world. Only Hope remained inside. Her story explores themes of curiosity, disobedience, and the irreversible nature of certain actions. She is sometimes portrayed as more victim than villain. Hesiod’s two versions (Theogony and Works and Days) differ slightly in emphasis; later authors developed her character in more sympathetic directions. The name “Pandora” means “all-gifted” or “all-giving,” referring to the gifts the gods bestowed on her as part of Zeus’s trap. In some later interpretations she becomes a figure of the dangers of female curiosity and the loss of a primordial paradise, while in others she is a tragic or even heroic character who cannot help but open the jar. The presence of Hope at the bottom of the jar has been interpreted in wildly different ways — as the last consolation or as the most cruel of all the evils, since it keeps humans from accepting their condition.",
    sources: ["Hesiod, Works and Days 60-105", "Hesiod, Theogony 570-612"],
    variants: "The nature of what was released from the jar (evils vs. blessings) and whether Pandora acted out of curiosity or divine compulsion varies across later interpretations. Some Christian authors later identified her with Eve. In some philosophical readings the jar contains not only evils but also the blessings that make human life bearable, with Hope as the most ambiguous gift of all. In some versions the jar contains only good things until Pandora opens it and they all fly away except Hope.",
    symbols: ["Jar", "Box"],
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
    story: "Born to Zeus and the mortal Alcmene, Heracles was hated by Hera from birth. After being driven mad and killing his family, he was assigned twelve labors by King Eurystheus as penance. Through superhuman strength, courage, and endurance, he completed tasks no mortal could achieve. His labors include slaying the Nemean Lion, cleaning the Augean stables, capturing the Cretan Bull, and bringing back Cerberus from the Underworld. Eventually he achieved apotheosis and joined the gods on Olympus. His story is the clearest example of the Greek hero who earns divinity through suffering and achievement. He also sailed with the Argonauts, sacked Troy in an earlier generation (killing Laomedon and taking Hesione), and freed Prometheus. The cycle of his labors and his final fiery death on Mount Oeta (followed by apotheosis) form one of the most complete heroic biographies in Greek myth. In cult he was worshipped both as a hero and as a god, with sanctuaries throughout the Greek world. His popularity in art and literature is unmatched; he embodies the Greek ideal of arete (excellence) achieved through ponos (toil) and the possibility that a mortal can, through extraordinary effort and suffering, cross the boundary between human and divine. The madness inflicted by Hera and the subsequent labors can be read as a purification or as a divine test that ultimately leads to godhood.",
    sources: ["Apollodorus, Library 2.4-2.7", "Euripides, Heracles", "Sophocles, Women of Trachis", "Hesiod, Theogony 950-955", "Pindar, Olympian 3 and Nemean 1", "Diodorus Siculus 4.8-39 (Hellenistic synthesis)"],
    variants: "The exact number and nature of the labors varies across sources, as does the emphasis on whether Heracles was more victim or agent of his fate. Some traditions place his sack of Troy before the famous labors; others emphasize his role as a civilizing hero who founded cities and ended local tyrannies. In some versions he marries Hebe after his apotheosis and lives happily among the gods. The story of his death and the poisoned robe of Nessus is one of the most tragic and human moments in his cycle. In some philosophical interpretations the labors represent the victory of the soul over the passions or the body.",
    symbols: ["Lion Skin", "Club", "Bow", "Apples of the Hesperides"],
    relations: [
      { id: "zeus", label: "Father" },
      { id: "hera", label: "Persecutor and Later Reconciler" },
      { id: "prometheus", label: "Liberator" },
      { id: "hebe", label: "Wife (after apotheosis)" }
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
    story: "King of Ithaca and one of the greatest Greek leaders at Troy. After the fall of the city, it took him ten years to return home due to Poseidon’s anger. His story explores cunning, endurance, identity, homecoming, and the human condition more deeply than almost any other Greek hero myth. He is both admired for his intelligence and criticized for his deceptions and moral compromises. The Odyssey gives us the fullest portrait of any Greek hero: his encounters with the Cyclops, Circe, the Sirens, Scylla and Charybdis, his descent to the Underworld, the slaughter of the suitors, and the final recognition scene with Penelope. Later tradition (the Teiresias prophecy in Odyssey 11) sends him on one last sea journey to a land where oars are unknown. In the Iliad he is already the master of words and stratagems, the man who can speak to any audience and achieve what brute force cannot. The tension between his heroic status and his willingness to lie, disguise himself, and use any means necessary makes him one of the most modern-feeling figures in ancient literature. His homecoming is not a simple triumph but a complex restoration of identity, marriage, and kingship that requires both violence and restraint. The many false tales he tells upon his return raise deep questions about truth, storytelling, and the construction of identity.",
    sources: ["Homer, Odyssey 1-24", "Apollodorus, Epitome 7.1-40", "Homer, Iliad (especially Books 2, 9, 10, 19)", "Sophocles, Ajax and Philoctetes (for his later reputation)"],
    variants: "Some post-Homeric epics (the Telegony) give him additional adventures and a different death at the hands of his son by Circe. The degree of his moral ambiguity varies sharply between the Odyssey itself and later philosophical and tragic treatments. In some traditions he is the inventor of the Trojan Horse; in others he is more of a supporting figure. Roman authors (especially Virgil) make him a more sinister and untrustworthy character. In some versions he is the son of Sisyphus rather than Laertes.",
    symbols: ["Bow", "Oar", "Olive", "Ram"],
    relations: [
      { id: "penelope", label: "Wife" },
      { id: "telemachus", label: "Son" },
      { id: "poseidon", label: "Divine Enemy" },
      { id: "athena", label: "Divine Patron" }
    ]
  },
  {
    id: "achilles",
    name: "Achilles",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "The Greatest Warrior of the Greeks",
    hook: "The near-invincible hero whose anger and withdrawal from battle shaped the outcome of the Trojan War.",
    image: "assets/images/heracles.jpg",
    story: "Son of the mortal Peleus and the goddess Thetis. The greatest warrior among the Greeks at Troy. After a quarrel with Agamemnon over the captive Briseis, he withdrew from battle, leading to devastating losses for the Greeks. His return and eventual death at the hands of Paris (guided by Apollo) mark one of the central tragedies of the war. His story explores the tension between individual honor and communal responsibility, as well as the cost of divine parentage. In the Iliad he chooses a short life of glory over a long obscure one (Iliad 9.410-416). When Patroclus is killed wearing his armor, Achilles’ grief and rage drive him to superhuman feats and the desecration of Hector’s body. His encounter with Priam in Book 24 is one of the most profound moments of shared humanity in all of literature. The later tradition of his vulnerable heel is post-Homeric; in the Iliad he is simply the greatest and most doomed of men. The education he received from Phoenix and Chiron, the prophecy that he would either live a long obscure life or a short glorious one, and his relationship with Patroclus (whether erotic or the deepest friendship) have been interpreted in every generation. He is the supreme example of the Greek hero who is both superhuman and tragically limited by his own nature and the will of the gods. The shield made for him by Hephaestus in Iliad 18 is one of the most famous ekphrases in literature, depicting the whole world of human life that he will leave behind.",
    sources: ["Homer, Iliad 1.1-611, 9.307-429, 16.1-100, 18.1-147, 19.1-424, 22.1-404, 24.1-804", "Apollodorus, Library 3.13.6-8", "Pindar, Olympian 8 and Nemean 3 and 4", "Aeschylus, Myrmidons (fragments)"],
    variants: "The story of his near-invulnerability except for the heel appears first in the Hellenistic period. The Iliad itself emphasizes his mortality and his fated early death. Some traditions make him the lover of Patroclus; others emphasize only their friendship. In some versions his mother Thetis tries to make him immortal by fire or by dipping him in the Styx. The embassy scene in Iliad 9 and the ransom scene in Iliad 24 are two of the most psychologically profound passages in ancient literature. In some later traditions he marries Polyxena after the fall of Troy.",
    symbols: ["Armor", "Spear", "Shield (made by Hephaestus)"],
    relations: [
      { id: "patroclus", label: "Closest Companion" },
      { id: "briseis", label: "Captive and Cause of Quarrel" },
      { id: "agamemnon", label: "Rival and Commander" },
      { id: "thetis", label: "Mother" },
      { id: "hector", label: "Greatest Enemy" },
      { id: "phoenix", label: "Tutor" }
    ]
  },
  {
    id: "agamemnon",
    name: "Agamemnon",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "King of Mycenae, Leader of the Greeks at Troy",
    hook: "The high king whose decisions shaped the fate of the Greek expedition against Troy.",
    image: "assets/images/heracles.jpg",
    story: "Brother of Menelaus and king of Mycenae. As leader of the Greek forces at Troy, his quarrel with Achilles over Briseis is the central conflict of the Iliad. His return home and murder by Clytemnestra and Aegisthus form the core of the Oresteia cycle. He embodies the tensions between personal desire, royal duty, and the destructive consequences of hubris and poor leadership. At Aulis the Greek fleet was becalmed; Agamemnon was forced (or chose) to sacrifice his daughter Iphigenia to Artemis so the fleet could sail (Aeschylus, Agamemnon 184-247 gives the most powerful version, in which the king’s decision is presented as both necessary and morally catastrophic). In the Iliad he is both a great king and a flawed man whose taking of Briseis nearly destroys the expedition. His murder in the bath upon his return is the primal crime that launches the cycle of vengeance dramatized in Aeschylus’s Oresteia. In Sophocles and Euripides the emphasis shifts, but he remains a figure of royal authority whose personal failings have public and familial consequences on a massive scale. The Oresteia as a whole can be read as a meditation on the evolution from personal vengeance to civic justice, with Agamemnon’s death as the central act that forces the next generation to confront the legacy of blood.",
    sources: ["Homer, Iliad 1.1-611, 2.1-454, 9.1-181, 19.1-153", "Aeschylus, Agamemnon 1-257, 783-974", "Euripides, Iphigenia in Aulis", "Sophocles, Electra"],
    variants: "The reasons for his quarrel with Achilles and the exact nature of his sacrifice of Iphigenia vary across sources. Some versions make the sacrifice demanded by Artemis as punishment for Agamemnon’s boast (killing a sacred deer or boasting that he was a better archer than the goddess). Others present it as a necessary but horrific price for the war. In some traditions he is more sympathetic; in others he is arrogant and hubristic from the beginning. The exact wording of the oracle at Aulis and the degree of his free choice are debated in the tragic versions.",
    symbols: ["Scepter", "Royal Robe"],
    relations: [
      { id: "menelaus", label: "Brother" },
      { id: "clytemnestra", label: "Wife" },
      { id: "iphigenia", label: "Daughter" },
      { id: "cassandra", label: "Concubine" },
      { id: "orestes", label: "Son" }
    ]
  },
  {
    id: "clytemnestra",
    name: "Clytemnestra",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "Queen of Mycenae, Avenger of Her Daughter",
    hook: "The wife who murdered her husband to avenge the sacrifice of their daughter.",
    image: "assets/images/athena.jpg",
    story: "Wife of Agamemnon and sister of Helen. While Agamemnon was at Troy, she took Aegisthus as a lover. Upon his return, she murdered him in revenge for the sacrifice of their daughter Iphigenia. Her story is central to the Oresteia and explores themes of justice, vengeance, gender, and the cycle of violence in the House of Atreus. In Aeschylus she is a formidable, articulate avenger who claims the justice of her act with terrifying clarity (“I stand where I struck, with the deed done”). In Sophocles and Euripides the emphasis shifts; some versions add jealousy over Cassandra as a motive. Her murder by her own son Orestes completes the cycle of blood that only Athena’s intervention can end. She is one of the most powerful female characters in Greek literature — not a passive victim but an active agent who seizes control of the narrative of her own suffering and turns it into a weapon. The question of whether her vengeance is justified remains one of the central moral problems of the Oresteia. Aeschylus gives her the most complex and intellectually powerful speeches of any female character in surviving Greek tragedy, making her both terrifying and strangely sympathetic.",
    sources: ["Aeschylus, Agamemnon and Libation Bearers", "Sophocles, Electra", "Euripides, Electra", "Homer, Odyssey 11.409-434 (Agamemnon’s shade describes the murder)"],
    variants: "Some sources emphasize her jealousy over Agamemnon’s concubine Cassandra; others focus more purely on the sacrifice of Iphigenia as her motivation. The degree of her complicity with Aegisthus also varies. In some versions she is the primary planner; in others Aegisthus is the driving force. Aeschylus gives her the most complex and intellectually powerful speeches of any female character in surviving Greek tragedy. In some versions she is given a more sympathetic portrayal as a mother defending her children.",
    symbols: ["Axe", "Net (in which she traps Agamemnon)"],
    relations: [
      { id: "agamemnon", label: "Husband" },
      { id: "aegisthus", label: "Lover and Accomplice" },
      { id: "iphigenia", label: "Daughter" },
      { id: "orestes", label: "Son" },
      { id: "electra", label: "Daughter" },
      { id: "helen", label: "Sister" }
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
    story: "Daughter of Zeus and Leda (or Nemesis). Married to Menelaus of Sparta, she was either abducted or eloped with Paris of Troy, becoming the casus belli of the Trojan War. Her role raises complex questions about agency, beauty, responsibility, and the causes of war. Ancient authors are divided on whether she was a willing participant or a victim of divine will. In the Iliad she is a figure of remorse and self-awareness, watching the war from the walls and speaking with bitter insight about her own role (“I wish that I had been the wife of a better man”). Euripides’ Helen and the historian Herodotus preserve a remarkable alternative tradition: that Helen never went to Troy at all, and that the Greeks fought for a phantom (eidolon) while the real Helen remained in Egypt under the protection of King Proteus. In Spartan cult she was worshipped as a goddess associated with fertility and young women. The tension between her divine beauty, her human suffering, and the catastrophic consequences of her choices makes her one of the most enduringly fascinating figures in Greek myth. In some traditions she is ultimately reconciled with Menelaus and returns to Sparta; in others she is carried off to the Isles of the Blessed with him after death. The question of her responsibility has been debated since antiquity and remains one of the great moral problems of the Trojan War cycle.",
    sources: ["Homer, Iliad 3.121-244, 6.343-368", "Euripides, Helen", "Herodotus, Histories 2.112-120", "Stesichorus, Palinode (fragments)", "Homer, Odyssey 4.120-146 (her meeting with Telemachus)"],
    variants: "Herodotus suggests she may never have gone to Troy at all, and that the war was fought over a phantom. The Stesichorus palinode blamed Helen and was punished with blindness until he recanted. Spartan tradition treated her as a local goddess. In some versions she is the daughter of Nemesis rather than Leda, born from an egg after Zeus pursued Nemesis in swan form. In some traditions she is ultimately deified or joins Menelaus in the Elysian Fields.",
    symbols: ["Beauty", "Egg (in some birth stories)"],
    relations: [
      { id: "menelaus", label: "Husband" },
      { id: "paris", label: "Abductor / Lover" },
      { id: "clytemnestra", label: "Sister" },
      { id: "castor-pollux", label: "Brothers (the Dioscuri)" }
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
    story: "Son of Laius and Jocasta, rulers of Thebes. After being exposed as an infant due to a prophecy, he was raised in Corinth. Returning to Thebes, he killed his father at a crossroads and solved the Sphinx’s riddle, becoming king and unknowingly marrying his mother. His eventual discovery of the truth led to catastrophe. His story explores fate, free will, knowledge, and the limits of human understanding more powerfully than almost any other Greek myth. Sophocles’ Oedipus Rex dramatizes the day of discovery with unmatched intensity; Oedipus at Colonus shows the blinded, exiled king finding a mysterious sacred death that blesses Athens. The Theban cycle as a whole (Laius, Oedipus, the Seven Against Thebes, Antigone) forms one of the two great epic-tragic complexes of Greek myth, rivaled only by the Trojan War. The central question — could Oedipus have avoided his fate? — has been debated since antiquity. Sophocles presents a man who acts with the best intentions and the greatest intelligence, yet whose every action fulfills the prophecy. The play is not merely about fate versus free will but about the terrifying power of truth and the limits of human self-knowledge. The moment when Oedipus realizes the truth is one of the most devastating recognition scenes in all of literature.",
    sources: ["Sophocles, Oedipus Rex, Oedipus at Colonus", "Apollodorus, Library 3.5.7-9", "Euripides, Phoenician Women", "Aeschylus, Seven Against Thebes (related)"],
    variants: "The details of how Oedipus discovered the truth and the extent of his self-punishment vary across sources. Some versions are more focused on his suffering, others on his guilt. The oracle’s wording and whether Oedipus could have avoided his fate are perennial questions. In some earlier traditions he continues to rule after the discovery; Sophocles makes his fall and exile central. In some versions he blinds himself; in others the blinding is done by others or is metaphorical.",
    symbols: ["Sphinx", "Staff", "Blindness"],
    relations: [
      { id: "jocasta", label: "Mother and Wife" },
      { id: "antigone", label: "Daughter" },
      { id: "creon", label: "Brother-in-law and Successor" },
      { id: "laius", label: "Father" }
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
    story: "Daughter of Oedipus and Jocasta. After the deaths of her brothers Eteocles and Polynices, she defied King Creon’s order and buried Polynices, leading to her own death. Her story explores the conflict between family duty, divine law, and state authority, and remains one of the most powerful examinations of individual conscience versus political power in Western literature. Sophocles’ Antigone has been read for centuries as a clash between two rights: the duty to the dead and the gods versus the necessity of civic order. Her death is both a victory of principle and a profound human tragedy. She is not merely a rebel; she is a young woman who takes upon herself the religious obligations that the city and its king have abandoned. The play raises questions about the limits of state power, the nature of justice, and the cost of moral integrity that have resonated in every political context since it was written. Her final speeches and the messenger’s description of her death in the cave are among the most moving passages in Greek tragedy. The conflict between Antigone and Creon has been interpreted in countless ways — as a clash between divine and human law, between family and state, between individual conscience and political necessity, and between the claims of the dead and the needs of the living.",
    sources: ["Sophocles, Antigone"],
    symbols: ["Burial", "Noose"],
    relations: [
      { id: "oedipus", label: "Father" },
      { id: "creon", label: "Uncle and Opponent" },
      { id: "ismene", label: "Sister" },
      { id: "haemon", label: "Betrothed (in some versions)" }
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
    story: "Son of Zeus and Semele, Dionysus represents the arrival of something wild and transformative. His worship involved altered states of consciousness, the blurring of social roles, and a direct encounter with the divine that could be both ecstatic and terrifying. He is also the god of theatre, linking ritual performance with religious experience. His arrival often disrupts established order but also brings renewal and the possibility of transcendence through ecstasy. Euripides’ Bacchae is the greatest exploration of his power: the god returns to Thebes to establish his rites, the king Pentheus resists, and the result is the tearing apart of the king by his own mother and the women of the city. Dionysus embodies the truth that civilization requires both order and the controlled release of what lies beneath it. In the Homeric Hymn to Dionysus he is shown as a god who can be gentle or terrifying depending on how he is received. His myths repeatedly show kings and cities who reject him suffering terrible punishments, while those who accept him receive blessings of wine, fertility, and joy. The tension between his civilizing gifts (wine, theatre, agriculture) and his destructive power (madness, violence, the dissolution of the self) is never fully resolved. He is the most foreign and the most Greek of the Olympians — a god who comes from outside but whose worship becomes central to Greek identity. In mystery cults he was worshipped alongside Demeter and Persephone as a god of the afterlife and rebirth, offering initiates the promise of a better fate after death.",
    sources: ["Euripides, Bacchae", "Homeric Hymn to Dionysus", "Apollodorus, Library 3.4.2-3", "Pindar, Olympian 2 and Dithyrambs"],
    variants: "The degree to which his cults involved actual violence or ritual madness remains debated. Some sources emphasize liberation and joy; others emphasize terror and destruction. The Orphic tradition gives him a very different cosmic role as a suffering and reborn god-child (Zagreus) whose heart is saved by Athena or Zeus after the Titans tear him apart. In some mystery cults he was worshipped alongside Demeter and Persephone as a god of the afterlife and rebirth. In some versions his worship is presented as a foreign import that must be integrated into Greek religious life.",
    symbols: ["Thyrsus", "Grapevine", "Leopard", "Mask", "Ivy"],
    relations: [
      { id: "zeus", label: "Father" },
      { id: "semele", label: "Mother" },
      { id: "ariadne", label: "Wife" },
      { id: "pentheus", label: "Victim (in the Bacchae)" }
    ]
  },
  {
    id: "medea",
    name: "Medea",
    type: "Hero",
    cycle: "The Theban Cycle",
    epithet: "The Sorceress of Colchis",
    hook: "The powerful witch who helped Jason win the Golden Fleece and whose revenge became legendary.",
    image: "assets/images/athena.jpg",
    story: "Daughter of King Aeëtes of Colchis and granddaughter of the sun god Helios. She fell in love with Jason and used her magic to help him complete the impossible tasks set by her father to win the Golden Fleece. After Jason later betrayed her for another woman, she murdered their children and his new bride in one of the most horrifying acts of vengeance in Greek myth. Her story explores the destructive power of passion, the limits of loyalty, and the terrifying capabilities of a woman scorned and armed with magic. Euripides’ Medea is one of the greatest and most disturbing tragedies ever written; Apollonius of Rhodes shows a younger, more vulnerable Medea before the catastrophe. In the play she is both victim and monster — a foreigner in a Greek city who has given up everything for a man who now discards her. Her final speech to the chorus, in which she debates whether to kill her children, is one of the most psychologically harrowing passages in ancient literature. After the murders she escapes to Athens in a chariot drawn by dragons, a gift from her grandfather Helios. Later traditions give her various further adventures, including an attempt to poison Theseus and a return to Colchis. She remains one of the most complex and morally ambiguous figures in Greek myth — neither simply heroine nor simply villain. The question of whether her revenge is justified or monstrous has been debated since the play was first performed.",
    sources: ["Euripides, Medea", "Apollonius of Rhodes, Argonautica", "Apollodorus, Library 1.9.23-28"],
    variants: "Some versions emphasize her divine heritage and magical power more than others; the motivation for killing her children (jealousy vs. mercy, to spare them a worse fate) is debated in later interpretations. Some traditions send her to Athens or back to Colchis after the events in Corinth. In some versions she does not kill the children herself but they are killed by the Corinthians in revenge for her actions. In some philosophical readings she represents the destructive power of irrational passion or the dangers of foreign influence.",
    symbols: ["Cauldron", "Poison", "Dragons", "Knife"],
    relations: [
      { id: "jason", label: "Husband (later betrayed)" },
      { id: "aeetes", label: "Father" },
      { id: "creon", label: "King of Corinth (whom she poisons)" }
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