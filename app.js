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
    story: "Zeus led the Olympians in the war against the Titans (Titanomachy) and established a new order after their victory. He divided the cosmos with his brothers Poseidon and Hades and became the supreme ruler, associated with justice, hospitality, and the maintenance of cosmic order. His many affairs and resulting offspring are central to Greek genealogies, yet he is repeatedly shown as bound by larger forces of fate and the expectations of hospitality and oath-keeping. In the Iliad he is both the all-powerful cloud-gatherer and a god who must sometimes yield to the balance of fate and the will of other deities. The Titanomachy itself is described in detail by Hesiod: Zeus frees the Cyclopes, gains the thunderbolt, and hurls his father Cronus and the Titans into Tartarus. Later myths show him as the upholder of xenia (guest-friendship) and the punisher of hubris, yet also as a serial lover whose unions produce heroes and new dangers. His worship spanned the Greek world, from the great oracle at Dodona to the games at Olympia.",
    sources: ["Hesiod, Theogony 453-506, 617-735", "Homer, Iliad 1.1-52, 8.1-40, 15.1-33, 24.1-76", "Apollodorus, Library 1.1-2"],
    variants: "The extent of Zeus's power and the degree to which he is subject to fate varies across authors. In some traditions he appears more limited; in others he is identified with cosmic order itself. The binding of Zeus by Hera, Poseidon, and Athena (Iliad 1.396-406 with the help of Thetis and Briareus) shows even the king of the gods can be temporarily constrained. Local traditions in Crete emphasized his birth and death more than his kingship.",
    symbols: ["Thunderbolt", "Eagle", "Oak"],
    relations: [
      { id: "hera", label: "Wife and Queen" },
      { id: "poseidon", label: "Brother" },
      { id: "hades", label: "Brother" },
      { id: "athena", label: "Daughter" },
      { id: "apollo", label: "Son" },
      { id: "artemis", label: "Daughter" },
      { id: "dionysus", label: "Son" },
      { id: "hermes", label: "Son" },
      { id: "persephone", label: "Daughter" }
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
    story: "As wife of Zeus and queen of the gods, Hera plays a central role in enforcing the social and cosmic order. She is the protector of marriage and women in childbirth, but her frequent conflicts with Zeus and persecution of his lovers and children reveal the tensions within the new divine hierarchy. She represents both the ideal of queenship and the destructive potential of divine jealousy when the order she protects is threatened. In the Iliad she is Zeus’s equal in will and nearly his match in power; she repeatedly schemes against Troy and against Heracles. One of the most striking variants tells how she, Poseidon, and Athena once bound Zeus in his sleep and were only thwarted by the intervention of Thetis and the hundred-handed Briareus. Her worship at Samos and Argos was especially magnificent, and she was honored as the divine patroness of legitimate marriage and civic stability.",
    sources: ["Hesiod, Theogony", "Homer, Iliad 1.396-406, 14.153-353, 19.95-133", "Apollodorus, Library 1.3.1-2"],
    variants: "Some traditions make Hera the eldest daughter of Cronus and Rhea and portray her as a more equal partner to Zeus before his rise. The story of her binding of Zeus appears only in the Iliad and is rarely emphasized in cult. In some local myths she is a more benevolent civic goddess.",
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
    story: "Athena sprang fully grown and armored from Zeus’s forehead after he swallowed her mother Metis. She is the goddess of strategic warfare, wisdom, crafts, and the protector of cities (especially Athens). She represents intelligence and civilization over brute force, and is one of the most consistently positive and powerful goddesses in Greek tradition. Her birth from Zeus’s head symbolizes the idea that wisdom and strategy belong to the highest authority. In the Iliad she repeatedly aids the Greeks and especially Odysseus and Diomedes; in the Odyssey she is the constant patron of the hero’s return. Her contest with Poseidon for Athens (the olive tree versus the salt spring) established her as the city’s divine protector. She was also the patron of weaving, metalwork, and the arts of peace. Her wisdom is not merely intellectual but deeply tied to craft, city-building, and the defense of civilization against chaos.",
    sources: ["Hesiod, Theogony 886-900", "Homer, Iliad and Odyssey", "Homeric Hymn to Athena", "Apollodorus, Library 1.3.6"],
    variants: "Some local traditions (especially in Libya or with the story of Pallas) give her a different origin. The contest with Poseidon for Athens had multiple local versions, some more favorable to Poseidon than the one that became canonical in Athens.",
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
    story: "After the Titanomachy, Poseidon drew the lot for the sea. He is volatile and powerful, associated with earthquakes, horses, and the unpredictable nature of the ocean. His frequent conflicts with other gods and mortals (notably Odysseus) highlight the dangerous side of divine power and the limits of human control over natural forces. He is also credited with creating the first horse. In the Iliad he supports the Greeks while resenting Zeus’s authority; in the Odyssey his wrath keeps Odysseus from home for ten years after the hero blinds his son Polyphemus. His sanctuaries were often placed at dangerous capes and harbors. He was also deeply connected to the founding myths of many coastal and island communities.",
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
    story: "After the Titanomachy, Hades drew the lot for the Underworld. He is stern and just rather than evil, guarding the realm of the dead and the riches beneath the earth. His abduction of Persephone became one of the central myths explaining the cycle of seasons and the relationship between life and death. Unlike his brothers, he rarely leaves his realm and is rarely depicted as actively malevolent. The Homeric Hymn to Demeter gives the fullest account of the abduction and the compromise that followed. Hades was also known as Pluto (the Rich One) in later periods, reflecting the wealth that lies under the earth. He presided over the judgment of the dead and the great oaths sworn by the Styx.",
    sources: ["Hesiod, Theogony", "Homeric Hymn to Demeter", "Apollodorus, Library 1.2.1"],
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
    story: "Prometheus stole fire from the gods and gave it to humans, along with many other arts and skills. For this act of defiance against Zeus’s will, he was bound to a rock in the Caucasus where an eagle ate his liver daily. He became the archetypal figure of the rebel who suffers for bringing knowledge and progress to humanity, embodying the tension between divine authority and human advancement. His punishment was eventually ended by Heracles. Hesiod presents him as a trickster who also tries to cheat the gods over the division of sacrificial meat. Aeschylus’s Prometheus Bound transforms him into a suffering culture hero who knows the future and withholds it from Zeus. His release by Heracles (son of Zeus) beautifully closes the circle of rebellion and reconciliation.",
    sources: ["Hesiod, Theogony and Works and Days", "Aeschylus, Prometheus Bound"],
    variants: "In some traditions, Prometheus is portrayed more as a culture hero and benefactor than a defiant rebel. His release by Heracles also varies in emphasis across sources. Later Roman authors sometimes conflated him with other trickster figures.",
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
    story: "Created by Hephaestus on Zeus’s orders as revenge for Prometheus giving fire to humanity. Given a sealed jar (or box) containing all evils and told never to open it, Pandora’s curiosity led her to release suffering, disease, and discord into the world. Only Hope remained inside. Her story explores themes of curiosity, disobedience, and the irreversible nature of certain actions. She is sometimes portrayed as more victim than villain. Hesiod’s two versions (Theogony and Works and Days) differ slightly in emphasis; later authors developed her character in more sympathetic directions.",
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
    story: "Born to Zeus and the mortal Alcmene, Heracles was hated by Hera from birth. After being driven mad and killing his family, he was assigned twelve labors by King Eurystheus as penance. Through superhuman strength, courage, and endurance, he completed tasks no mortal could achieve. His labors include slaying the Nemean Lion, cleaning the Augean stables, capturing the Cretan Bull, and bringing back Cerberus from the Underworld. Eventually he achieved apotheosis and joined the gods on Olympus. His story is the clearest example of the Greek hero who earns divinity through suffering and achievement. He also sailed with the Argonauts, sacked Troy in an earlier generation, and freed Prometheus. The cycle of his labors and his final fiery death on Mount Oeta (followed by apotheosis) form one of the most complete heroic biographies in Greek myth.",
    sources: ["Apollodorus, Library 2.4-2.7", "Euripides, Heracles", "Sophocles, Women of Trachis", "Hesiod, Theogony 950-955"],
    variants: "The exact number and nature of the labors varies across sources, as does the emphasis on whether Heracles was more victim or agent of his fate. Some traditions place his sack of Troy before the famous labors; others emphasize his role as a civilizing hero who founded cities and ended local tyrannies.",
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
    story: "Son of Zeus and Danaë. Tasked with bringing back the head of Medusa, he succeeded with the help of Athena and Hermes. Later he rescued Andromeda from a sea monster sent by Poseidon and founded the city of Mycenae. His story is one of the earliest and most complete hero myths and involves many of the classic elements of the heroic journey. The Perseus cycle links the world of the Olympians directly to the great Mycenaean centers of the heroic age. His later adventures include the accidental killing of his grandfather Acrisius, fulfilling the prophecy that had caused his exposure as an infant.",
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
    story: "Son of Aegeus (or Poseidon). He volunteered to enter the Labyrinth and slay the Minotaur with the help of Ariadne’s thread. Later he became king of Athens and is credited with synoecism — uniting the villages of Attica into one city-state. His story bridges the worlds of heroic adventure and political founding, though it also includes darker episodes such as the abandonment of Ariadne and the death of his father. Plutarch’s Life of Theseus collects many variants and attempts to give him a coherent biography. He participated in the Calydonian boar hunt and the expedition of the Lapiths against the centaurs, and his abduction of the young Helen was one of the causes of later conflict.",
    sources: ["Plutarch, Life of Theseus", "Apollodorus"],
    variants: "The parentage of Theseus (Aegeus vs. Poseidon) and the extent of his role in unifying Attica are subjects of variation across sources. Some traditions make him more of a pan-Hellenic hero who participated in many of the great adventures of his generation.",
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
    story: "Originally a beautiful woman, Medusa was transformed into a Gorgon. Her gaze turned men to stone. After being slain by Perseus, her head was given to Athena and retained its petrifying power. The story explores themes of victimization, monstrosity, and the transformation of the victim into a weapon. Even in death she continued to generate powerful new beings (Pegasus and Chrysaor). Hesiod presents her as monstrous from the beginning; the famous rape by Poseidon and subsequent transformation appear only in later sources, especially Ovid. The ambiguity of her nature—monster or wronged woman—has made her one of the most reinterpreted figures in the entire corpus.",
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
    story: "King of Ithaca and one of the greatest Greek leaders at Troy. After the fall of the city, it took him ten years to return home due to Poseidon’s anger. His story explores cunning, endurance, identity, homecoming, and the human condition more deeply than almost any other Greek hero myth. He is both admired for his intelligence and criticized for his deceptions and moral compromises. The Odyssey gives us the fullest portrait of any Greek hero: his encounters with the Cyclops, Circe, the Sirens, Scylla and Charybdis, his descent to the Underworld, the slaughter of the suitors, and the final recognition scene with Penelope. Later tradition (the Teiresias prophecy in Odyssey 11) sends him on one last sea journey to a land where oars are unknown.",
    sources: ["Homer, Odyssey 1-24", "Apollodorus, Epitome 7.1-40"],
    variants: "Some post-Homeric epics (the Telegony) give him additional adventures and a different death at the hands of his son by Circe. The degree of his moral ambiguity varies sharply between the Odyssey itself and later philosophical and tragic treatments.",
    symbols: ["Bow", "Oar"],
    relations: [
      { id: "penelope", label: "Wife" },
      { id: "telemachus", label: "Son" }
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
    story: "Son of the mortal Peleus and the goddess Thetis. The greatest warrior among the Greeks at Troy. After a quarrel with Agamemnon over the captive Briseis, he withdrew from battle, leading to devastating losses for the Greeks. His return and eventual death at the hands of Paris (guided by Apollo) mark one of the central tragedies of the war. His story explores the tension between individual honor and communal responsibility, as well as the cost of divine parentage. In the Iliad he chooses a short life of glory over a long obscure one (Iliad 9.410-416). When Patroclus is killed wearing his armor, Achilles’ grief and rage drive him to superhuman feats and the desecration of Hector’s body. His encounter with Priam in Book 24 is one of the most profound moments of shared humanity in all of literature. The later tradition of his vulnerable heel is post-Homeric; in the Iliad he is simply the greatest and most doomed of men.",
    sources: ["Homer, Iliad 1.1-611, 9.307-429, 16.1-100, 18.1-147, 19.1-424, 22.1-404, 24.1-804", "Apollodorus, Library 3.13.6-8"],
    variants: "The story of his near-invulnerability except for the heel appears first in the Hellenistic period. The Iliad itself emphasizes his mortality and his fated early death. Some traditions make him the lover of Patroclus; others emphasize only their friendship.",
    symbols: ["Armor", "Spear"],
    relations: [
      { id: "patroclus", label: "Closest Companion" },
      { id: "briseis", label: "Captive and Cause of Quarrel" },
      { id: "agamemnon", label: "Rival and Commander" },
      { id: "thetis", label: "Mother" }
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
    story: "Son of Priam and Hecuba, husband of Andromache, and father of Astyanax. As the greatest warrior of Troy, he leads the defense against the Greeks. Unlike many heroes, he fights not primarily for personal glory but for the survival of his city and family. His death at the hands of Achilles is one of the most tragic and human moments in the Iliad. His farewell to Andromache and Astyanax on the walls of Troy (Iliad 6) is the most moving domestic scene in the epic. After his death his body is ransomed by his father in one of the greatest scenes of reconciliation between enemies in world literature.",
    sources: ["Homer, Iliad 6.1-529, 22.1-404, 24.1-804"],
    symbols: ["Armor"],
    relations: [
      { id: "andromache", label: "Wife" },
      { id: "priam", label: "Father" },
      { id: "hecuba", label: "Mother" }
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
    story: "Daughter of Zeus and Leda (or Nemesis). Married to Menelaus of Sparta, she was either abducted or eloped with Paris of Troy, becoming the casus belli of the Trojan War. Her role raises complex questions about agency, beauty, responsibility, and the causes of war. Ancient authors are divided on whether she was a willing participant or a victim of divine will. In the Iliad she is a figure of remorse and self-awareness, watching the war from the walls and speaking with bitter insight. Euripides’ Helen and the historian Herodotus preserve a remarkable alternative tradition: that Helen never went to Troy at all, and that the Greeks fought for a phantom (eidolon) while the real Helen remained in Egypt. In Spartan cult she was worshipped as a goddess associated with fertility and young women.",
    sources: ["Homer, Iliad 3.121-244, 6.343-368", "Euripides, Helen", "Herodotus, Histories 2.112-120", "Stesichorus, Palinode (fragments)"],
    variants: "Herodotus suggests she may never have gone to Troy at all, and that the war was fought over a phantom. The Stesichorus palinode blamed Helen and was punished with blindness until he recanted. Spartan tradition treated her as a local goddess.",
    symbols: ["Beauty"],
    relations: [
      { id: "menelaus", label: "Husband" },
      { id: "paris", label: "Abductor / Lover" },
      { id: "clytemnestra", label: "Sister" }
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
    story: "Brother of Menelaus and king of Mycenae. As leader of the Greek forces at Troy, his quarrel with Achilles over Briseis is the central conflict of the Iliad. His return home and murder by Clytemnestra and Aegisthus form the core of the Oresteia cycle. He embodies the tensions between personal desire, royal duty, and the destructive consequences of hubris and poor leadership. At Aulis the Greek fleet was becalmed; Agamemnon was forced (or chose) to sacrifice his daughter Iphigenia to Artemis so the fleet could sail (Aeschylus, Agamemnon 184-247 gives the most powerful version). In the Iliad he is both a great king and a flawed man whose taking of Briseis nearly destroys the expedition. His murder in the bath upon his return is the primal crime that launches the cycle of vengeance dramatized in Aeschylus’s Oresteia.",
    sources: ["Homer, Iliad 1.1-611, 2.1-454, 9.1-181, 19.1-153", "Aeschylus, Agamemnon 1-257, 783-974", "Euripides, Iphigenia in Aulis"],
    variants: "The reasons for his quarrel with Achilles and the exact nature of his sacrifice of Iphigenia vary across sources. Some versions make the sacrifice demanded by Artemis as punishment for Agamemnon’s boast; others present it as a necessary but horrific price for the war.",
    symbols: ["Scepter"],
    relations: [
      { id: "menelaus", label: "Brother" },
      { id: "clytemnestra", label: "Wife" },
      { id: "iphigenia", label: "Daughter" },
      { id: "cassandra", label: "Concubine" }
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
    story: "Wife of Agamemnon and sister of Helen. While Agamemnon was at Troy, she took Aegisthus as a lover. Upon his return, she murdered him in revenge for the sacrifice of their daughter Iphigenia. Her story is central to the Oresteia and explores themes of justice, vengeance, gender, and the cycle of violence in the House of Atreus. In Aeschylus she is a formidable, articulate avenger who claims the justice of her act. In Sophocles and Euripides the emphasis shifts; some versions add jealousy over Cassandra as a motive. Her murder by her own son Orestes completes the cycle of blood that only Athena’s intervention can end.",
    sources: ["Aeschylus, Agamemnon and Libation Bearers", "Sophocles, Electra", "Euripides, Electra"],
    variants: "Some sources emphasize her jealousy over Agamemnon’s concubine Cassandra; others focus more purely on the sacrifice of Iphigenia as her motivation. The degree of her complicity with Aegisthus also varies.",
    symbols: ["Axe"],
    relations: [
      { id: "agamemnon", label: "Husband" },
      { id: "aegisthus", label: "Lover and Accomplice" },
      { id: "iphigenia", label: "Daughter" },
      { id: "orestes", label: "Son" }
    ]
  },
  {
    id: "paris",
    name: "Paris (Alexandros)",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "Prince of Troy Who Judged the Goddesses",
    hook: "The Trojan prince whose choice sparked the greatest war of the mythic age.",
    image: "assets/images/heracles.jpg",
    story: "Son of Priam and Hecuba. Exposed as an infant due to a prophecy, he was raised as a shepherd. When asked to judge which goddess was the most beautiful (Hera, Athena, or Aphrodite), he chose Aphrodite, who promised him the love of Helen. His abduction (or elopement) with Helen from Sparta triggered the Trojan War. He is often portrayed as charming but cowardly and irresponsible compared to his brother Hector. In the Iliad he fights well when he must but prefers the bedroom to the battlefield. His arrow, guided by Apollo, kills Achilles and ends the greatest Greek hero.",
    sources: ["Homer, Iliad", "Euripides, Trojan Women and Helen"],
    variants: "The degree of Helen’s willingness in leaving with him varies significantly across sources. Some portray her as abducted; others as a willing lover.",
    symbols: ["Apple of Discord"],
    relations: [
      { id: "helen", label: "Wife / Abducted Lover" },
      { id: "hector", label: "Brother" }
    ]
  },
  {
    id: "priam",
    name: "Priam",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "King of Troy, Father of Many Sons",
    hook: "The aged king who watched his city and family destroyed in the greatest war of the age.",
    image: "assets/images/heracles.jpg",
    story: "King of Troy during the war with the Greeks. Father of fifty sons, including Hector and Paris. He is portrayed as a wise but tragic figure who loses almost everything. His ransom of Hector’s body from Achilles is one of the most moving scenes in the Iliad, showing the shared humanity between enemies. In Iliad 24 he travels alone at night to the Greek camp, kisses the hands that killed his son, and returns with the body for proper burial. It is one of the greatest moments of grace and reconciliation in ancient literature.",
    sources: ["Homer, Iliad"],
    symbols: ["Scepter"],
    relations: [
      { id: "hector", label: "Son" },
      { id: "paris", label: "Son" },
      { id: "hecuba", label: "Wife" }
    ]
  },
  {
    id: "hecuba",
    name: "Hecuba",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "Queen of Troy, Mother of Princes",
    hook: "The queen who lost almost all her children in the destruction of Troy.",
    image: "assets/images/athena.jpg",
    story: "Wife of Priam and mother of many sons and daughters, including Hector, Paris, and Cassandra. After the fall of Troy, she witnessed the deaths of her husband and most of her children. Her transformation into a dog in some versions symbolizes the ultimate degradation of royal dignity. Euripides’ Hecuba and Trojan Women give her the most powerful laments in Greek tragedy, turning her personal grief into an indictment of war itself.",
    sources: ["Homer, Iliad", "Euripides, Trojan Women and Hecuba"],
    symbols: ["Veil"],
    relations: [
      { id: "priam", label: "Husband" },
      { id: "hector", label: "Son" }
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
    story: "Son of Zeus and Semele, Dionysus represents the arrival of something wild and transformative. His worship involved altered states of consciousness, the blurring of social roles, and a direct encounter with the divine that could be both ecstatic and terrifying. He is also the god of theatre, linking ritual performance with religious experience. His arrival often disrupts established order but also brings renewal and the possibility of transcendence through ecstasy. Euripides’ Bacchae is the greatest exploration of his power: the god returns to Thebes to establish his rites, the king Pentheus resists, and the result is the tearing apart of the king by his own mother and the women of the city. Dionysus embodies the truth that civilization requires both order and the controlled release of what lies beneath it.",
    sources: ["Euripides, Bacchae", "Homeric Hymn to Dionysus"],
    variants: "The degree to which his cults involved actual violence or ritual madness remains debated. Some sources emphasize liberation and joy; others emphasize terror and destruction. The Orphic tradition gives him a very different cosmic role as a suffering and reborn god-child.",
    symbols: ["Thyrsus", "Grapevine", "Leopard"],
    relations: [
      { id: "zeus", label: "Father" }
    ]
  },

  // === THE THEBAN CYCLE ===
  {
    id: "oedipus",
    name: "Oedipus",
    type: "Hero",
    cycle: "The Theban Cycle",
    epithet: "The King Who Solved the Sphinx’s Riddle",
    hook: "The man who unknowingly killed his father and married his mother, becoming a central figure in Greek tragedy.",
    image: "assets/images/heracles.jpg",
    story: "Son of Laius and Jocasta, rulers of Thebes. After being exposed as an infant due to a prophecy, he was raised in Corinth. Returning to Thebes, he killed his father at a crossroads and solved the Sphinx’s riddle, becoming king and unknowingly marrying his mother. His eventual discovery of the truth led to catastrophe. His story explores fate, free will, knowledge, and the limits of human understanding more powerfully than almost any other Greek myth. Sophocles’ Oedipus Rex dramatizes the day of discovery with unmatched intensity; Oedipus at Colonus shows the blinded, exiled king finding a mysterious sacred death that blesses Athens. The Theban cycle as a whole (Laius, Oedipus, the Seven Against Thebes, Antigone) forms one of the two great epic-tragic complexes of Greek myth, rivaled only by the Trojan War.",
    sources: ["Sophocles, Oedipus Rex, Oedipus at Colonus", "Apollodorus, Library 3.5.7-9"],
    variants: "The details of how Oedipus discovered the truth and the extent of his self-punishment vary across sources. Some versions are more focused on his suffering, others on his guilt. The oracle’s wording and whether Oedipus could have avoided his fate are perennial questions.",
    symbols: ["Sphinx", "Staff"],
    relations: [
      { id: "jocasta", label: "Mother and Wife" },
      { id: "antigone", label: "Daughter" },
      { id: "creon", label: "Brother-in-law and Successor" }
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
    story: "Daughter of Oedipus and Jocasta. After the deaths of her brothers Eteocles and Polynices, she defied King Creon’s order and buried Polynices, leading to her own death. Her story explores the conflict between family duty, divine law, and state authority, and remains one of the most powerful examinations of individual conscience versus political power in Western literature. Sophocles’ Antigone has been read for centuries as a clash between two rights: the duty to the dead and the gods versus the necessity of civic order. Her death is both a victory of principle and a profound human tragedy.",
    sources: ["Sophocles, Antigone"],
    symbols: ["Burial"],
    relations: [
      { id: "oedipus", label: "Father" },
      { id: "creon", label: "Uncle and Opponent" }
    ]
  },
  {
    id: "creon",
    name: "Creon",
    type: "Hero",
    cycle: "The Theban Cycle",
    epithet: "King of Thebes, Guardian of Civic Order",
    hook: "The ruler whose defense of the city’s laws led to the destruction of his own family.",
    image: "assets/images/heracles.jpg",
    story: "Brother of Jocasta and uncle of Antigone. After the deaths of Eteocles and Polynices, Creon assumes the throne and decrees that Polynices, as a traitor, must remain unburied. When Antigone defies him, he sentences her to death, only to lose his son Haemon (betrothed to Antigone) and his wife Eurydice to suicide. Creon is not a simple villain; he genuinely believes he is defending the city against chaos. His tragedy is that the very rigidity that makes him a strong ruler destroys everything he loves. Sophocles uses him to explore the limits of human law when it conflicts with deeper obligations to the dead and the gods.",
    sources: ["Sophocles, Antigone", "Sophocles, Oedipus Rex"],
    variants: "In some earlier versions Creon is a more minor figure; Sophocles elevates him into one of the great tragic rulers. His fate after the play varies in later tradition.",
    symbols: ["Crown", "Scepter"],
    relations: [
      { id: "antigone", label: "Niece and Opponent" },
      { id: "jocasta", label: "Sister" },
      { id: "oedipus", label: "Brother-in-law" }
    ]
  },
  {
    id: "eteocles-polynices",
    name: "Eteocles and Polynices",
    type: "Hero",
    cycle: "The Theban Cycle",
    epithet: "The Brothers Who Killed Each Other for the Throne of Thebes",
    hook: "The sons of Oedipus whose fratricidal war fulfilled their father’s curse.",
    image: "assets/images/heracles.jpg",
    story: "The two sons of Oedipus and Jocasta. After their father’s fall, they agreed to rule Thebes in alternate years. When Eteocles refused to yield the throne, Polynices raised an army of seven champions (the Seven Against Thebes) and attacked the city. In the final battle the brothers killed each other at the seventh gate, fulfilling the curse Oedipus had laid upon them. Their bodies became the center of the conflict dramatized in Sophocles’ Antigone: one brother honored, the other left unburied. Aeschylus’s Seven Against Thebes and Euripides’ Phoenician Women give different emphases to the same doomed story. The Theban civil war is the dark mirror of the Trojan War — a city destroyed from within by its own royal house.",
    sources: ["Aeschylus, Seven Against Thebes", "Sophocles, Antigone", "Euripides, Phoenician Women", "Apollodorus, Library 3.6"],
    variants: "The exact terms of the brothers’ agreement and the identity of the seven champions vary. Some traditions give Polynices a stronger moral claim; others present both as cursed and doomed.",
    symbols: ["Shield", "Gate"],
    relations: [
      { id: "oedipus", label: "Father" },
      { id: "jocasta", label: "Mother" },
      { id: "antigone", label: "Sister" },
      { id: "creon", label: "Uncle" }
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
    story: "Son of Zeus and Leto, twin brother of Artemis. Apollo is associated with the sun, music, poetry, prophecy (especially at Delphi), healing, and sudden, pitiless punishment. He represents order, clarity, and the dangerous power of divine knowledge. His oracles were among the most important religious institutions in the Greek world, and his myths often explore the tension between divine certainty and human limitation. He guided the arrow that killed Achilles and repeatedly intervened in the Trojan War on the side of the Trojans. His shrine at Delphi was the religious heart of the Greek world for centuries. He was also the god of purification and the founder of colonies.",
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
    story: "Twin sister of Apollo and daughter of Zeus and Leto. Artemis roams the wild with her nymphs. She is fiercely protective of young animals and girls, but merciless to those who offend her chastity or sacred groves (most famously Actaeon). She represents the untamed aspects of nature and female independence in a world dominated by male gods and heroes. She demanded the sacrifice of Iphigenia at Aulis and was the divine power behind many of the most terrifying moments of the heroic age. Her worship was especially strong in rural and border regions.",
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
    story: "Sister of Zeus and mother of Persephone. When Hades abducted her daughter, Demeter’s grief caused the earth to stop producing food. The resulting famine forced Zeus to negotiate Persephone’s partial return, establishing the cycle of the seasons. Her worship was central to the Eleusinian Mysteries, one of the most important religious cults in ancient Greece, which promised initiates a better fate after death. The Homeric Hymn to Demeter is one of the most beautiful and moving texts in Greek literature, telling the story from the mother’s perspective with extraordinary psychological depth.",
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
    story: "Daughter of Demeter and Zeus. Abducted by Hades while picking flowers, she became queen of the Underworld. Her annual return to the surface world brings spring and growth; her descent brings winter. She embodies the tension between life and death, and was worshipped alongside her mother in the Eleusinian Mysteries. In some traditions she is a terrifying queen of the dead; in others a gentle figure who mediates between the upper and lower worlds.",
    sources: ["Homeric Hymn to Demeter"],
    symbols: ["Pomegranate", "Torch"],
    relations: [
      { id: "demeter", label: "Mother" },
      { id: "hades", label: "Husband" }
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
    story: "Born from the sea foam near Cyprus (or as daughter of Zeus and Dione). She represents the overwhelming force of erotic desire and beauty. Her affairs (notably with Ares and Anchises) and her role in sparking the Trojan War through the Judgment of Paris demonstrate the disruptive and creative power of love and beauty in Greek myth. She is both irresistible and dangerous. The Homeric Hymn to Aphrodite shows her power even over Zeus himself, and the story of her love for the mortal Anchises (parent of Aeneas) bridges the divine and heroic worlds.",
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
    story: "Son of Zeus and Maia. Hermes is the messenger of the gods, guide of the dead to the Underworld, patron of travelers, merchants, and thieves. From his earliest myths he displays remarkable cunning (stealing Apollo’s cattle as an infant). He represents movement across boundaries — between gods and mortals, life and death, truth and deception. He is also the god of communication and interpretation. In the Odyssey he gives Odysseus the moly that protects him from Circe; in the Homeric Hymn he is the charming, amoral infant trickster who becomes the herald of the gods.",
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
    story: "Son of Zeus and Hera (or, in some versions, of Hera alone). Thrown from Olympus because of his lameness, he became the master craftsman of the gods. He forged Zeus’s thunderbolts, Achilles’ armor, and many other divine artifacts. His marriage to Aphrodite and his revenge on her lovers (trapping them in a net) are among his most famous myths. He represents both the creative power of craft and the marginalization of the physically imperfect in a world that values beauty and strength. In the Iliad his intervention on behalf of the Greeks (the great shield of Achilles) is one of the most moving celebrations of human artistry in the poem.",
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
    story: "Son of Zeus and Hera. Ares represents the violent, chaotic, and bloodthirsty aspects of war, in contrast to Athena’s strategic warfare. He is frequently humiliated in myth (most famously caught in bed with Aphrodite by Hephaestus) and is generally portrayed negatively by Greek authors, reflecting Greek ambivalence toward mindless violence and the glorification of war for its own sake. In the Iliad he fights on both sides and is repeatedly wounded or driven off the field. His worship was more prominent in some regions (especially Thebes and parts of northern Greece) than in Athens.",
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
    story: "Son of Aeson, rightful king of Iolcus. Sent on an impossible quest by his uncle Pelias to retrieve the Golden Fleece, he assembled the greatest heroes of his age (the Argonauts) and succeeded with the help of Medea. His later betrayal of Medea and the destruction of his family make his story one of the most morally complex of the heroic age. Apollonius of Rhodes’ Argonautica gives the fullest surviving narrative, showing Jason as a leader who is often passive and reliant on the women around him. His abandonment of Medea for the daughter of the king of Corinth leads to the horrors dramatized in Euripides’ Medea. He was also said to have died when his old ship, the Argo, collapsed on him.",
    sources: ["Apollonius of Rhodes, Argonautica", "Apollodorus"],
    symbols: ["Golden Fleece", "Argo"],
    relations: [
      { id: "medea", label: "Wife and Helper" }
    ]
  },
  {
    id: "atalanta",
    name: "Atalanta",
    type: "Hero",
    cycle: "The Heroic Age",
    epithet: "The Swift-Footed Huntress",
    hook: "One of the greatest female heroes, famous for her speed and participation in the Calydonian Boar hunt.",
    image: "assets/images/artemis.jpg",
    story: "Raised in the wilderness and devoted to Artemis, Atalanta was one of the few women to join the hunt for the Calydonian Boar. She drew first blood and was awarded the hide, sparking a deadly quarrel. She later agreed to marry only the man who could beat her in a footrace, which Hippomenes won by using golden apples given by Aphrodite. Her story explores female independence, the tension between wilderness and civilization, and the power of desire. She is one of the clearest examples of a woman who lives by heroic values in a world that rarely allows it.",
    sources: ["Apollodorus", "Ovid, Metamorphoses"],
    symbols: ["Bow", "Boar Hide"],
    relations: [
      { id: "hippomenes", label: "Husband" }
    ]
  },
  {
    id: "orpheus",
    name: "Orpheus",
    type: "Hero",
    cycle: "The Heroic Age",
    epithet: "The Greatest Poet and Musician",
    hook: "The poet whose music could charm gods, beasts, and the dead themselves.",
    image: "assets/images/apollo.jpg",
    story: "Son of Apollo (or Oeagrus) and the Muse Calliope. His music was so powerful it could move trees and stones and tame wild animals. He joined the Argonauts and later descended to the Underworld to retrieve his wife Eurydice, charming Hades and Persephone with his song. His failure to obey the condition not to look back at her until they reached the surface, and his subsequent death at the hands of the Maenads, make him one of the most tragic and culturally influential figures in Greek myth. His story became central to Orphic religion and to later Western ideas of the power and limits of art.",
    sources: ["Apollonius of Rhodes, Argonautica", "Virgil, Georgics", "Ovid, Metamorphoses"],
    symbols: ["Lyre"],
    relations: [
      { id: "eurydice", label: "Wife" }
    ]
  },
  {
    id: "medea",
    name: "Medea",
    type: "Hero",
    cycle: "The Heroic Age",
    epithet: "The Sorceress of Colchis",
    hook: "The powerful witch who helped Jason win the Golden Fleece and whose revenge became legendary.",
    image: "assets/images/athena.jpg",
    story: "Daughter of King Aeëtes of Colchis and granddaughter of the sun god Helios. She fell in love with Jason and used her magic to help him complete the impossible tasks set by her father to win the Golden Fleece. After Jason later betrayed her for another woman, she murdered their children and his new bride in one of the most horrifying acts of vengeance in Greek myth. Her story explores the destructive power of passion, the limits of loyalty, and the terrifying capabilities of a woman scorned and armed with magic. Euripides’ Medea is one of the greatest and most disturbing tragedies ever written; Apollonius of Rhodes shows a younger, more vulnerable Medea before the catastrophe.",
    sources: ["Euripides, Medea", "Apollonius of Rhodes, Argonautica"],
    variants: "Some versions emphasize her divine heritage and magical power more than others; the motivation for killing her children (jealousy vs. mercy) is debated in later interpretations. Some traditions send her to Athens or back to Colchis after the events in Corinth.",
    symbols: ["Cauldron", "Poison"],
    relations: [
      { id: "jason", label: "Husband (later betrayed)" }
    ]
  },
  {
    id: "ariadne",
    name: "Ariadne",
    type: "Hero",
    cycle: "The Heroic Age",
    epithet: "The Woman Who Gave Theseus the Thread",
    hook: "The daughter of Minos who saved Theseus and was later abandoned and found by Dionysus.",
    image: "assets/images/artemis.jpg",
    story: "Daughter of King Minos of Crete. She fell in love with Theseus and gave him the thread that allowed him to navigate the Labyrinth and slay the Minotaur. After helping him escape, he abandoned her on the island of Naxos. She was later found by Dionysus, who made her his wife and immortal. Her story explores themes of love, betrayal, and divine redemption. In some versions she hangs herself in despair; in others she becomes a constellation or a goddess in her own right.",
    sources: ["Plutarch, Life of Theseus", "Ovid, Metamorphoses"],
    symbols: ["Thread"],
    relations: [
      { id: "theseus", label: "Lover (later abandoned)" },
      { id: "dionysus", label: "Husband" }
    ]
  },
  {
    id: "cassandra",
    name: "Cassandra",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "The Prophetess No One Believed",
    hook: "The Trojan princess cursed to see the future but never be believed.",
    image: "assets/images/athena.jpg",
    story: "Daughter of Priam and Hecuba. Apollo gave her the gift of prophecy in exchange for her love, but when she refused him, he cursed her so that no one would believe her prophecies. She foretold the fall of Troy and Agamemnon’s murder but was ignored. After the war, she was taken as a concubine by Agamemnon and murdered alongside him by Clytemnestra. Her story is one of the most bitter in the Trojan cycle: the truth-teller whom no one heeds. Aeschylus gives her the greatest scene in Agamemnon when she enters the palace foreseeing her own death and the history of the House of Atreus.",
    sources: ["Homer, Iliad", "Aeschylus, Agamemnon", "Euripides, Trojan Women"],
    symbols: ["Prophecy"],
    relations: [
      { id: "agamemnon", label: "Captor / Concubine" }
    ]
  },
  {
    id: "penelope",
    name: "Penelope",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "Wife of Odysseus, Model of Fidelity",
    hook: "The queen who waited twenty years for her husband’s return while fending off suitors.",
    image: "assets/images/athena.jpg",
    story: "Wife of Odysseus and mother of Telemachus. While Odysseus was away at Troy and on his long journey home, she remained faithful, cleverly delaying the suitors who wanted to marry her and claim the throne by weaving a shroud by day and unraveling it by night. Her reunion with Odysseus is one of the most moving scenes in the Odyssey and represents the enduring power of loyalty and home. In later tradition she is sometimes portrayed as less faithful or as the mother of Pan by Hermes, but the Homeric Penelope remains the supreme example of steadfastness under pressure.",
    sources: ["Homer, Odyssey"],
    symbols: ["Loom"],
    relations: [
      { id: "odysseus", label: "Husband" },
      { id: "telemachus", label: "Son" }
    ]
  },
  {
    id: "daedalus",
    name: "Daedalus",
    type: "Hero",
    cycle: "The Heroic Age",
    epithet: "The Master Craftsman and Inventor",
    hook: "The greatest artisan of the mythic age, creator of the Labyrinth and the wings that led to tragedy.",
    image: "assets/images/zeus.jpg",
    story: "Legendary Athenian craftsman and inventor. He designed the Labyrinth for King Minos to contain the Minotaur. Later, to escape Crete with his son Icarus, he crafted wings from feathers and wax. When Icarus flew too close to the sun and fell to his death, Daedalus’ ingenuity became both salvation and source of profound grief. He is the archetype of the artist whose creations escape his control and bring both wonder and disaster.",
    sources: ["Ovid, Metamorphoses", "Apollodorus"],
    symbols: ["Wings", "Labyrinth"],
    relations: [
      { id: "icarus", label: "Son" }
    ]
  },
  {
    id: "icarus",
    name: "Icarus",
    type: "Hero",
    cycle: "The Heroic Age",
    epithet: "The Boy Who Flew Too Close to the Sun",
    hook: "The tragic youth whose flight ended in the first human death from hubris.",
    image: "assets/images/heracles.jpg",
    story: "Son of Daedalus. Imprisoned with his father in Crete, he escaped using the wings his father crafted. Ignoring warnings not to fly too high, he soared toward the sun. The wax melted, the wings failed, and he fell into the sea and drowned. His story is one of the most famous warnings against overreaching human ambition. In later tradition he becomes a symbol of artistic and scientific daring as well as of tragic failure.",
    sources: ["Ovid, Metamorphoses"],
    symbols: ["Wings"],
    relations: [
      { id: "daedalus", label: "Father" }
    ]
  },
  {
    id: "nestor",
    name: "Nestor",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "The Wise Counselor of the Greeks",
    hook: "The aged king whose experience and counsel guided the Greek leaders at Troy.",
    image: "assets/images/heracles.jpg",
    story: "King of Pylos and the oldest of the Greek leaders at Troy. Though no longer able to fight in the front lines, his wisdom, diplomacy, and storytelling made him one of the most respected figures in the Greek camp. He often acts as a mediator between Agamemnon and Achilles and provides historical perspective that enriches the Iliad. His long speeches in the Iliad (Books 1, 11, 23) are full of memories of earlier heroic generations, giving the poem a sense of deep time and the continuity of heroic values.",
    sources: ["Homer, Iliad"],
    symbols: ["Scepter"],
    relations: [
      { id: "agamemnon", label: "Ally and Advisor" }
    ]
  },
  {
    id: "ajax",
    name: "Ajax the Greater (Telamonian Ajax)",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "The Greatest Greek Warrior After Achilles",
    hook: "The massive, unbreakable defender of the Greek ships at Troy.",
    image: "assets/images/heracles.jpg",
    story: "Son of Telamon and one of the greatest Greek warriors at Troy, second only to Achilles in strength and prowess. He single-handedly defended the Greek ships when the Trojans broke through, and later competed with Odysseus for Achilles’ armor. His eventual suicide after losing the contest to Odysseus is one of the most tragic events following the main action of the Iliad. Sophocles’ Ajax dramatizes his madness, his recovery of sanity, and his decision to die rather than live dishonored. He represents the older, more straightforward heroic code that cannot survive the world of cunning and politics represented by Odysseus.",
    sources: ["Homer, Iliad", "Sophocles, Ajax"],
    symbols: ["Shield"],
    relations: [
      { id: "achilles", label: "Rival for Armor" },
      { id: "odysseus", label: "Rival and Opponent" }
    ]
  },
  {
    id: "diomedes",
    name: "Diomedes",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "The Hero Who Wounded Gods",
    hook: "One of the greatest Greek warriors at Troy, famous for wounding Ares and Aphrodite.",
    image: "assets/images/heracles.jpg",
    story: "Son of Tydeus and king of Argos. One of the most formidable Greek leaders at Troy, he wounded both Ares and Aphrodite in battle (a rare feat for a mortal). He also played a key role in the theft of the Palladium, a sacred statue whose removal helped doom Troy. His story shows the heights of mortal heroism while still respecting the limits set by the gods. In Iliad Book 5 he is granted extraordinary strength by Athena and fights like a god until Apollo warns him back. After the war he returns home safely, unlike most of the Greek leaders, and appears in later tradition as a wise and pious ruler.",
    sources: ["Homer, Iliad"],
    symbols: ["Armor"],
    relations: [
      { id: "odysseus", label: "Companion in the Palladium Theft" }
    ]
  },

  // NEW EXPANSIONS — AJAX THE LESSER, BRISEIS, PATROCLUS, ANDROMACHE (from previous batch)
  {
    id: "ajax-lesser",
    name: "Ajax the Lesser (Oilean Ajax)",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "The Swift and Violent Son of Oileus",
    hook: "The Greek warrior whose sacrilege at Athena’s altar brought doom upon himself and the Greek fleet.",
    image: "assets/images/heracles.jpg",
    story: "Son of Oileus, king of the Locrians. A formidable fighter at Troy, he was known for his speed and his fierce, almost savage style of combat. After the fall of Troy he dragged Cassandra from the altar of Athena where she had sought sanctuary and raped her. This act of sacrilege against the goddess’s temple and suppliant provoked Athena’s wrath against the entire Greek fleet. On the return voyage Ajax was shipwrecked; Poseidon shattered his ship with a thunderbolt, and when Ajax boasted that he had escaped the gods’ power, Poseidon split the rock on which he clung and drowned him. His story is one of the clearest examples in Greek myth of the gods’ punishment for the violation of sacred space and the rights of suppliants. The Locrians later performed an annual penance for his crime.",
    sources: ["Homer, Iliad 2.527-535, 13.1-205", "Odyssey 4.499-511", "Apollodorus, Epitome 5.22-23", "Virgil, Aeneid 1.39-45"],
    variants: "Some sources say Athena herself killed him with a thunderbolt; others have Poseidon acting on her behalf. The precise nature of his crime against Cassandra (rape or merely dragging her from sanctuary) is emphasized differently across traditions.",
    symbols: ["Spear", "Shield"],
    relations: [
      { id: "cassandra", label: "Violator of" },
      { id: "athena", label: "Offender of" }
    ]
  },
  {
    id: "briseis",
    name: "Briseis",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "The Captive Whose Loss Nearly Destroyed the Greek Cause",
    hook: "The woman at the center of the quarrel between Achilles and Agamemnon that opens the Iliad.",
    image: "assets/images/athena.jpg",
    story: "Daughter of Brises and wife of Mynes, king of Lyrnessus. When Achilles sacked her city, she was taken as a prize of war and given to him. When Agamemnon was forced to return his own captive Chryseis to her father, he seized Briseis from Achilles in compensation. This act of dishonor caused Achilles to withdraw from battle, nearly costing the Greeks the war. In the Iliad Briseis is a quiet but emotionally powerful presence; when she is returned to Achilles after Patroclus’s death, she delivers a moving lament in which she reveals that Achilles had promised to marry her and make her his queen in Phthia. She is one of the most fully realized captive women in Greek literature, given dignity and a voice even within the brutal economy of war prizes.",
    sources: ["Homer, Iliad 1.1-348, 9.328-343, 19.282-300", "Apollodorus, Library 3.13.7"],
    variants: "Later authors sometimes expanded her story into a romance with Achilles. The Iliad itself treats her with remarkable sympathy and gives her one of the poem’s most poignant speeches.",
    symbols: ["Captive’s Veil"],
    relations: [
      { id: "achilles", label: "Captor and Promised Husband" },
      { id: "agamemnon", label: "Seizer" }
    ]
  },
  {
    id: "patroclus",
    name: "Patroclus",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "The Beloved Companion Whose Death Awoke Achilles’ Wrath",
    hook: "The man whose death turned the tide of the Trojan War and broke the greatest of the Greek heroes.",
    image: "assets/images/heracles.jpg",
    story: "Son of Menoetius and closest companion of Achilles. When the Greeks were suffering from Achilles’ absence, Patroclus begged to be allowed to lead the Myrmidons into battle wearing Achilles’ armor. Achilles consented, but warned him not to press the attack all the way to the walls of Troy. Patroclus fought brilliantly, killing many Trojans including Sarpedon, son of Zeus. But Apollo intervened, stripped him of his borrowed armor, and left him to be killed by Euphorbus and Hector. His death is the turning point of the Iliad. Achilles’ grief is so absolute that he refuses to eat or wash until he has killed Hector and desecrated his body. Patroclus’s funeral games in Book 23 are the most elaborate in the poem. The depth of Achilles’ love and grief for him has been interpreted in every age as the emotional heart of the Iliad.",
    sources: ["Homer, Iliad 16.1-867, 18.1-147, 23.1-897", "Apollodorus, Library 3.13.8"],
    variants: "The exact nature of the relationship between Achilles and Patroclus (friendship, erotic love, or both) was debated already in antiquity. Aeschylus and Plato treat it as a lover-beloved pair; the Iliad itself is more ambiguous and ultimately more moving for it.",
    symbols: ["Achilles’ Armor"],
    relations: [
      { id: "achilles", label: "Closest Companion and Lover" },
      { id: "hector", label: "Slayer" }
    ]
  },
  {
    id: "andromache",
    name: "Andromache",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "Wife of Hector, Mother of Astyanax, Symbol of Troy’s Suffering",
    hook: "The woman who lost everything when Troy fell and whose fate became the archetype of the captive widow.",
    image: "assets/images/athena.jpg",
    story: "Daughter of Eëtion, king of Thebe, and wife of Hector. In the Iliad her farewell to Hector on the walls of Troy (Book 6) is one of the most heartbreaking scenes in literature: she begs him not to fight, reminds him that he is all she has left after Achilles killed her father and brothers, and foresees the enslavement of herself and their son. After Hector’s death and the fall of Troy, her son Astyanax was thrown from the walls by the Greeks. She herself was given to Neoptolemus (Achilles’ son) and later became the wife of Helenus, Hector’s brother. Euripides’ Trojan Women and Andromache give her some of the most powerful laments in Greek tragedy. She is the human face of the cost of the heroic code.",
    sources: ["Homer, Iliad 6.1-529, 22.1-515, 24.1-804", "Euripides, Trojan Women and Andromache"],
    variants: "Some traditions make her the mother of Molossus by Neoptolemus and ancestress of the Molossian kings. The degree of her suffering and the fate of her son vary across sources.",
    symbols: ["Veil", "Child"],
    relations: [
      { id: "hector", label: "Husband" },
      { id: "astyanax", label: "Son" }
    ]
  },

  // === CURRENT BATCH: NEW ESSENTIAL FIGURES (Phoenix, Orestes, Electra, Neoptolemus, Jocasta, Laius, Tiresias, Iphigenia, Aegisthus) ===
  {
    id: "phoenix",
    name: "Phoenix",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "Achilles’ Tutor and Mentor, Emissary to the Embassy",
    hook: "The old counselor who taught Achilles and tried to heal the quarrel between him and Agamemnon.",
    image: "assets/images/heracles.jpg",
    story: "Son of Amyntor. As a young man he was blinded (or nearly blinded) by his father after a family conflict involving his father’s concubine. He fled to the court of Peleus, where he was received kindly and became the tutor and companion of the young Achilles. He taught Achilles the arts of war, storytelling, and perhaps medicine. In the Iliad he is one of the three ambassadors sent to Achilles in Book 9 to persuade him to return to battle. His long, emotional speech — recounting his own story and the parable of the Prayers — is one of the most moving appeals in the epic. After Patroclus’s death he remains with Achilles and helps prepare his friend’s body. He represents the older, wiser generation that tries to temper the destructive pride of the younger heroes.",
    sources: ["Homer, Iliad 9.432-605, 19.310-337", "Apollodorus, Library 3.13.8"],
    variants: "Some traditions say he was actually blinded by his father; others that he was only threatened. His exact relationship to Achilles (tutor, foster-father, or lover in some later readings) was discussed in antiquity.",
    symbols: ["Staff"],
    relations: [
      { id: "achilles", label: "Pupil and Companion" },
      { id: "peleus", label: "Host and Protector" }
    ]
  },
  {
    id: "orestes",
    name: "Orestes",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "Son of Agamemnon, Avenger of His Father, Haunted by the Furies",
    hook: "The young man compelled by Apollo to kill his mother and her lover, becoming the central figure of the Oresteia.",
    image: "assets/images/heracles.jpg",
    story: "Son of Agamemnon and Clytemnestra. While still a child he was sent away by his sister Electra or by a nurse to escape the murderous household. Years later, commanded by Apollo, he returns to Mycenae to avenge his father by killing Clytemnestra and Aegisthus. After the matricide he is driven mad by the Erinyes (Furies) and wanders as a suppliant. In Aeschylus’s Eumenides he is tried at Athens before Athena and a jury of citizens; the vote is tied, Athena casts the deciding vote for acquittal, and the Furies are transformed into the Eumenides (Kindly Ones), protectors of the city. His story dramatizes the transition from blood vengeance to civic justice. Later tragedies (Sophocles’ Electra, Euripides’ Orestes and Iphigenia in Tauris) explore his guilt, his relationship with his sister, and his further adventures including the recovery of the statue of Artemis from the Tauri.",
    sources: ["Aeschylus, Libation Bearers and Eumenides", "Sophocles, Electra", "Euripides, Orestes and Iphigenia in Tauris", "Apollodorus, Epitome 6.24-28"],
    variants: "The degree of his remorse and the length of his persecution by the Furies vary. Some versions send him to the land of the Tauri to fetch the statue of Artemis as further purification. The trial in Athens is largely Aeschylus’s invention and has deep political resonance for the Athenian audience.",
    symbols: ["Sword", "Suppliants’ Bough"],
    relations: [
      { id: "agamemnon", label: "Father" },
      { id: "clytemnestra", label: "Mother (whom he kills)" },
      { id: "electra", label: "Sister and Ally" },
      { id: "aegisthus", label: "Mother’s Lover (whom he kills)" }
    ]
  },
  {
    id: "electra",
    name: "Electra",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "Daughter of Agamemnon, Relentless Avenger and Loyal Sister",
    hook: "The daughter who preserved her brother Orestes and drove the vengeance against their mother.",
    image: "assets/images/athena.jpg",
    story: "Daughter of Agamemnon and Clytemnestra. After her father’s murder she saved the infant Orestes and sent him into hiding. She remained in the palace, despised and often mistreated by her mother and Aegisthus, nursing her grief and hatred. In Aeschylus she is a secondary but crucial figure who recognizes her brother and helps plan the revenge. Sophocles and Euripides give her much larger, more tormented roles. In Sophocles’ Electra she is almost monomaniacal in her devotion to vengeance; in Euripides she is married to a poor farmer and lives in poverty while still plotting. Her reunion with Orestes and the subsequent killings are among the most intense scenes in Greek tragedy. After the events she marries Pylades, Orestes’ loyal friend.",
    sources: ["Aeschylus, Libation Bearers", "Sophocles, Electra", "Euripides, Electra"],
    variants: "The characterization of Electra varies sharply: Aeschylus’s Electra is pious and restrained; Sophocles’ is fierce and almost inhuman in her single-mindedness; Euripides’ is more psychologically damaged and socially degraded. All three versions were performed within a few decades of each other.",
    symbols: ["Urn", "Mourning Veil"],
    relations: [
      { id: "agamemnon", label: "Father" },
      { id: "clytemnestra", label: "Mother (whom she hates)" },
      { id: "orestes", label: "Brother (whom she saves and supports)" },
      { id: "aegisthus", label: "Mother’s Lover (whom she helps kill)" }
    ]
  },
  {
    id: "neoptolemus",
    name: "Neoptolemus (Pyrrhus)",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "Son of Achilles, Brutal Victor at Troy, Later King of Epirus",
    hook: "The fierce young warrior who killed Priam at the altar and took Andromache as his prize.",
    image: "assets/images/heracles.jpg",
    story: "Son of Achilles and Deidamia (or in some versions a different mother). Too young to fight at the beginning of the Trojan War, he was brought to Troy in the final stages after his father’s death, often by Odysseus and Diomedes, because a prophecy required his presence for the city to fall. He fought with terrifying ferocity. He killed the aged Priam at the altar of Zeus (or Apollo), an act of sacrilege that shocked even other Greeks. He claimed Andromache as his concubine and, in some versions, threw her son Astyanax from the walls. After the war he returned to Greece, became king of the Molossians in Epirus, and was the ancestor of several royal lines (including, later, Alexander the Great claimed descent through him). He was eventually killed at Delphi, either for sacrilege or in a quarrel over spoils. His story shows the brutal next generation of the heroic age.",
    sources: ["Homer, Odyssey 11.506-537", "Euripides, Trojan Women and Andromache", "Virgil, Aeneid 2", "Apollodorus, Epitome 5.21, 6.12-13"],
    variants: "The exact circumstances of Priam’s death and the fate of Astyanax vary. Some sources make Neoptolemus more pious and reluctant; others emphasize his savagery. His death at Delphi is given different causes in different traditions.",
    symbols: ["Sword", "Achilles’ Armor"],
    relations: [
      { id: "achilles", label: "Father" },
      { id: "andromache", label: "Concubine (later wife in some versions)" },
      { id: "priam", label: "Victim" }
    ]
  },
  {
    id: "jocasta",
    name: "Jocasta",
    type: "Hero",
    cycle: "The Theban Cycle",
    epithet: "Queen of Thebes, Wife and Mother of Oedipus",
    hook: "The woman at the dark center of the Theban curse, wife and mother of the same man.",
    image: "assets/images/athena.jpg",
    story: "Wife of Laius and queen of Thebes. After the prophecy that their son would kill his father, she consented to (or ordered) the exposure of the infant Oedipus. When the grown Oedipus saved Thebes from the Sphinx and became king, she married him and bore him four children: Eteocles, Polynices, Antigone, and Ismene. In Sophocles’ Oedipus Rex she is a strong, rational woman who tries to calm Oedipus’s fears and dismisses prophecy. When the truth emerges she hangs herself. Some earlier versions suggest she lived longer or met a different end. Her story is one of the most compressed and terrible in Greek myth: a woman whose attempts to escape fate only tighten its grip, and whose love for her son/husband leads to the destruction of her entire house.",
    sources: ["Sophocles, Oedipus Rex", "Euripides, Phoenician Women", "Apollodorus, Library 3.5.7"],
    variants: "In some early traditions Jocasta (sometimes called Epicaste) lived long enough to see her sons kill each other. Euripides gives her a more active, suffering role in the Phoenician Women, trying until the end to prevent the fratricide.",
    symbols: ["Veil", "Noose"],
    relations: [
      { id: "laius", label: "First Husband" },
      { id: "oedipus", label: "Second Husband and Son" },
      { id: "eteocles-polynices", label: "Sons" },
      { id: "antigone", label: "Daughter" }
    ]
  },
  {
    id: "laius",
    name: "Laius",
    type: "Hero",
    cycle: "The Theban Cycle",
    epithet: "King of Thebes, Father of Oedipus, Origin of the Curse",
    hook: "The man whose crimes against guest-friendship and his own son began the terrible chain of Theban suffering.",
    image: "assets/images/heracles.jpg",
    story: "King of Thebes and husband of Jocasta. As a young man he was exiled and received hospitality from Pelops. While under Pelops’ roof he abducted and raped the king’s young son Chrysippus. This act of xenia violation brought a curse upon his house. Later, when an oracle warned that his own son would kill him, he ordered the infant Oedipus exposed on Mount Cithaeron. The exposed child survived, grew up, and fulfilled the prophecy by killing Laius at a crossroads (not knowing he was his father). Laius’s story shows how one act of hubris and violation of sacred laws can poison generations. He is a shadowy but crucial figure whose crimes set the entire Theban cycle in motion.",
    sources: ["Sophocles, Oedipus Rex", "Euripides, Phoenician Women (fragments and references)", "Apollodorus, Library 3.5.7"],
    variants: "The story of the rape of Chrysippus appears in some but not all traditions and was used to explain the origin of the curse on the Labdacids. Some sources emphasize Laius’s arrogance toward the oracle more than the earlier crime.",
    symbols: ["Chariot", "Scepter"],
    relations: [
      { id: "jocasta", label: "Wife" },
      { id: "oedipus", label: "Son (whom he tries to kill and who kills him)" }
    ]
  },
  {
    id: "tiresias",
    name: "Tiresias",
    type: "Hero",
    cycle: "The Theban Cycle",
    epithet: "The Blind Prophet Who Lived Seven Generations",
    hook: "The seer who appears in almost every major Theban story, seeing what others cannot.",
    image: "assets/images/apollo.jpg",
    story: "The most famous prophet in Greek mythology. According to one tradition he was blinded by Athena after seeing her bathe, but given the gift of prophecy in compensation. Another story says he was turned into a woman for seven years after striking mating snakes, then turned back, and was asked by Zeus and Hera to settle a dispute about which sex enjoyed love more (he said women). For this he was blinded by Hera but given long life and prophetic power by Zeus. He appears in Oedipus Rex (where he is forced to reveal the truth Oedipus does not want to hear), Antigone, the Bacchae (where he supports the new god Dionysus), and the Odyssey (where Odysseus consults his shade in the Underworld). He is the living embodiment of the cost and power of divine knowledge across the generations of Theban suffering.",
    sources: ["Sophocles, Oedipus Rex and Antigone", "Euripides, Bacchae", "Homer, Odyssey 11", "Apollodorus, Library 3.7.1-3"],
    variants: "The exact cause of his blindness and the length of his life vary. Some traditions give him multiple lives or the ability to retain his prophetic powers even in Hades. He is one of the few figures who bridges the heroic age and the world of the gods across many different poems and plays.",
    symbols: ["Staff", "Snakes"],
    relations: [
      { id: "oedipus", label: "Revealer of Truth To" },
      { id: "creon", label: "Advisor To" },
      { id: "dionysus", label: "Supporter Of" }
    ]
  },
  {
    id: "iphigenia",
    name: "Iphigenia",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "Daughter of Agamemnon, Sacrificed at Aulis",
    hook: "The innocent girl whose death at her father’s hand launched the Greek fleet and set the Oresteia in motion.",
    image: "assets/images/athena.jpg",
    story: "Eldest daughter of Agamemnon and Clytemnestra. When the Greek fleet was becalmed at Aulis, the seer Calchas declared that Artemis demanded her sacrifice before the winds would allow the ships to sail for Troy. Agamemnon, after terrible inner conflict, consented (or was tricked into consenting). Iphigenia was brought to Aulis under the false pretense of marriage to Achilles. In Aeschylus she is sacrificed; in Euripides’ Iphigenia in Aulis she goes willingly to her death for the glory of Greece. In another Euripidean play (Iphigenia in Tauris) she is miraculously saved by Artemis at the last moment, taken to the land of the Tauri, and later rescued by her brother Orestes. Her death (or apparent death) is the primal wound that drives Clytemnestra’s revenge.",
    sources: ["Aeschylus, Agamemnon", "Euripides, Iphigenia in Aulis and Iphigenia in Tauris"],
    variants: "The question of whether she was actually killed or saved by Artemis was already debated in antiquity. Aeschylus presents a completed sacrifice; Euripides offers both the tragic and the redemptive versions in different plays.",
    symbols: ["Veil", "Altar"],
    relations: [
      { id: "agamemnon", label: "Father (who sacrifices her)" },
      { id: "clytemnestra", label: "Mother (who never forgives)" },
      { id: "orestes", label: "Brother" }
    ]
  },
  {
    id: "aegisthus",
    name: "Aegisthus",
    type: "Hero",
    cycle: "The Trojan War",
    epithet: "Cousin and Lover of Clytemnestra, Usurper and Murderer of Agamemnon",
    hook: "The weak but vengeful man who helped murder the returning king and ruled Mycenae for seven years.",
    image: "assets/images/heracles.jpg",
    story: "Son of Thyestes and (in the usual version) his own daughter Pelopia, conceived as part of the terrible feud between the houses of Atreus and Thyestes. He was the only surviving son of Thyestes after Atreus’s horrific revenge banquet. Raised in exile, he returned to Mycenae, became the lover of Clytemnestra while Agamemnon was at Troy, and together they murdered the king in his bath upon his return. He ruled for seven years until Orestes killed him. In Aeschylus he is a weak, gloating tyrant; in other versions he is more of a partner in crime. His story is the final link in the multi-generational curse of the House of Atreus that began with Tantalus and continued through Atreus’s feast of his brother’s children.",
    sources: ["Aeschylus, Agamemnon and Libation Bearers", "Sophocles, Electra", "Euripides, Electra", "Apollodorus, Epitome 6.23-25"],
    variants: "The exact parentage and the degree of his agency in the murder vary. Some sources make him more of a tool of Clytemnestra; others give him a stronger role in planning the coup.",
    symbols: ["Sword"],
    relations: [
      { id: "clytemnestra", label: "Lover and Accomplice" },
      { id: "agamemnon", label: "Victim (cousin)" },
      { id: "orestes", label: "Avenger (who kills him)" }
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