export const characters = {
  // House of Atreus
  Tantalus: "King who served his son Pelops as a feast to the gods, cursing his bloodline for generations.",
  Pelops: "Son of Tantalus, restored to life by the gods. Won his bride by treachery, continuing the family curse.",
  Atreus: "Father of Agamemnon. Fed his brother Thyestes' own children to him at a banquet of vengeance.",
  Thyestes: "Brother of Atreus, tricked into eating his own sons. His surviving son Aegisthus would avenge him.",
  Clytemnestra: "Queen of Mycenae, sister of Helen. Murdered Agamemnon upon his return from Troy to avenge their daughter Iphigenia.",
  Aegisthus: "Son of Thyestes, born of incest for the sole purpose of vengeance. Lover of Clytemnestra and co-conspirator in Agamemnon's murder.",
  Orestes: "Son of Agamemnon and Clytemnestra. Killed his mother to avenge his father, then was acquitted by Athena's court.",
  Electra: "Daughter of Agamemnon. Helped her brother Orestes plot vengeance against Clytemnestra and Aegisthus.",
  Iphigenia: "Eldest daughter of Agamemnon, sacrificed at Aulis so the Greek fleet could sail for Troy.",

  // Greek Heroes
  Achilles: "Greatest warrior of the Trojan War, son of the goddess Thetis. Chose glory and early death over a long, obscure life.",
  Odysseus: "King of Ithaca, the cunning strategist. Devised the Trojan Horse and endured a ten-year journey home.",
  Ajax: "Ajax the Great, king of Salamis. The strongest Greek after Achilles, an unbreakable wall in battle.",
  Diomedes: "King of Argos who wounded the gods Aphrodite and Ares in combat, guided by Athena.",
  Nestor: "Aged king of Pylos, the eldest and wisest of the Greek commanders. His counsel shaped the war.",
  Patroclus: "Achilles' closest companion. His death in Achilles' armor at Hector's hands turned the tide of the war.",
  Calchas: "Chief seer of the Greek army. His prophecies guided — and haunted — the campaign from Aulis to Troy.",
  Protesilaus: "First Greek to set foot on Trojan soil, fulfilling the prophecy that he would be the first to die.",
  Helen: "Queen of Sparta, called the face that launched a thousand ships. Her abduction by Paris ignited the Trojan War.",
  Menelaus: "King of Sparta, Agamemnon's brother and husband of Helen. His honor demanded the war against Troy.",

  // Trojans
  Paris: "Trojan prince who abducted Helen, igniting the war. Killed Achilles with an arrow guided by Apollo.",
  Hector: "Crown prince of Troy and its greatest champion. Killed Patroclus and was slain by Achilles in revenge.",
  Priam: "Aged king of Troy, father of fifty sons including Hector and Paris. Killed during the sack of his city.",
  Cassandra: "Trojan princess and prophetess cursed by Apollo — doomed to speak true prophecies no one would believe.",
  Sarpedon: "Son of Zeus and king of Lycia, Troy's greatest ally. Zeus wept tears of blood when he fell to Patroclus.",

  // Gods
  Zeus: "King of the gods. Orchestrated the Trojan War and maintained the balance of fate among mortals and immortals.",
  Apollo: "God of prophecy and plague. Champion of Troy who guided Paris' arrow to Achilles' heel.",
  Athena: "Goddess of wisdom and war. Fought for the Greeks and later presided over Orestes' trial, ending the cycle of blood vengeance.",
  Hera: "Queen of the gods. Bitter enemy of Troy who manipulated even Zeus to aid the Greek cause.",
  Poseidon: "God of the sea. Built Troy's walls, then fought to destroy the city when Priam's father refused to pay him.",
  Aphrodite: "Goddess of love. Promised Helen to Paris, igniting the war. Wounded by Diomedes on the battlefield.",
  Ares: "God of war. Fought for Troy and was wounded by Diomedes with Athena's aid.",
  Artemis: "Goddess of the hunt. Demanded the sacrifice of Iphigenia before she would grant winds for the fleet.",
  Hephaestus: "God of the forge. Crafted Achilles' divine armor and the scepter that symbolized Agamemnon's authority.",
  Thetis: "Sea goddess and mother of Achilles. Persuaded Zeus to honor her son and commissioned his divine armor from Hephaestus.",
} as const;

export type CharacterId = keyof typeof characters;
