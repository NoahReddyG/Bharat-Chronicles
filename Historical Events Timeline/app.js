/* ============================================================
   BHARAT CHRONICLES — Indian History Timeline
   JavaScript Application Logic
   ============================================================ */

'use strict';

// ============================================================
// DATA — Historical Events of India
// ============================================================
const EVENTS = [
  // ── ANCIENT ERA ──────────────────────────────────────────
  {
    id: 'ev-001',
    era: 'ancient',
    date: 'c. 3300 BCE',
    icon: '🏙️',
    title: 'Indus Valley Civilization Emerges',
    shortDesc: 'One of the world\'s earliest urban civilizations flourished along the Indus River, featuring remarkable city planning, sanitation, and trade networks.',
    fullDesc: 'The Indus Valley Civilization (also known as the Harappan Civilization) was among the earliest and most advanced urban cultures in the ancient world. Stretching across present-day Pakistan and northwest India, it featured meticulously planned cities like Mohenjo-daro and Harappa with grid-layout streets, multi-story houses, and advanced drainage systems far ahead of their time. The civilization operated a sophisticated economy with standardized weights and measures and engaged in long-distance trade with Mesopotamia.',
    significance: 'The Indus Valley Civilization is one of three earliest world civilizations (alongside Mesopotamia and Egypt). Its urban planning, including covered drains and centralized granaries, was unsurpassed for nearly 2,000 years.',
    figures: ['Indus scribes', 'Harappan craftsmen', 'Mohenjo-daro city planners']
  },
  {
    id: 'ev-002',
    era: 'ancient',
    date: 'c. 1500 BCE',
    icon: '📜',
    title: 'Vedic Age & Composition of the Rigveda',
    shortDesc: 'The Indo-Aryan peoples composed the Rigveda, the world\'s oldest extant religious text, marking the beginning of Hindu civilization.',
    fullDesc: 'The Vedic Age (1500–500 BCE) marked the composition of the four sacred Vedas — the Rigveda, Samaveda, Yajurveda, and Atharvaveda — which form the spiritual and philosophical foundation of Hinduism. This era saw the development of Sanskrit, early caste structure, and a complex ritualistic society centered around fire sacrifices (yajnas). The philosophical Upanishads composed during this period explored concepts of Brahman (universal consciousness) and Atman (individual soul) that continue to influence Eastern philosophy today.',
    significance: 'The Vedas are humanity\'s oldest written wisdom texts. The philosophical traditions born here — including Advaita Vedanta — laid groundwork for Buddhism, Jainism, and influenced Greek philosophy through cultural exchanges.',
    figures: ['Sage Vishwamitra', 'Sage Vashishtha', 'Sage Vyasa']
  },
  {
    id: 'ev-003',
    era: 'ancient',
    date: '563 BCE',
    icon: '🪷',
    title: 'Birth of Siddhartha Gautama (The Buddha)',
    shortDesc: 'Born in Lumbini, Nepal, Siddhartha Gautama would attain enlightenment under the Bodhi tree and found Buddhism, influencing billions across Asia.',
    fullDesc: 'Siddhartha Gautama was born a prince in the Shakya clan. After witnessing human suffering — sickness, old age, and death — he renounced his royal life to seek the cause and end of suffering. After six years of ascetic practice and meditation, he attained enlightenment (Bodhi) under a pipal tree in Bodh Gaya, Bihar. He then preached his first sermon at Sarnath — the "Dharmachakra Pravartana" — setting the wheel of Dharma in motion. His teachings on the Four Noble Truths and Eightfold Path formed the foundation of Buddhism.',
    significance: 'Buddhism became one of the world\'s major religions, spreading from India to Sri Lanka, East Asia, and Southeast Asia. Emperor Ashoka later made it a state religion, and Buddhist philosophy transformed science, ethics, and governance across Asia.',
    figures: ['Siddhartha Gautama', 'King Suddhodana', 'Ananda', 'Mahakashyapa']
  },
  {
    id: 'ev-004',
    era: 'ancient',
    date: '321 BCE',
    icon: '⚔️',
    title: 'Chandragupta Maurya Founds the Mauryan Empire',
    shortDesc: 'With the guidance of Chanakya, Chandragupta Maurya overthrew the Nanda dynasty and established India\'s first true pan-continental empire.',
    fullDesc: 'Chandragupta Maurya, guided by the brilliant strategist Chanakya (Kautilya), author of the Arthashastra, overthrew the Nanda dynasty and established the expansive Mauryan Empire. At its peak, it covered almost the entire Indian subcontinent plus modern Afghanistan. Chandragupta later converted to Jainism, abdicated and fasted unto death. The empire established a sophisticated bureaucracy, spy network, standardized coinage, and roads — creating an administrative model that would influence future Indian states.',
    significance: 'The Mauryan Empire was the first to politically unify most of the Indian subcontinent. Chanakya\'s Arthashastra is considered one of the world\'s first works on political science and statecraft, rivaling Machiavelli\'s The Prince by 1,800 years.',
    figures: ['Chandragupta Maurya', 'Chanakya (Kautilya)', 'Bindusara', 'Helena (Seleucid ambassador)']
  },
  {
    id: 'ev-005',
    era: 'ancient',
    date: '268 BCE',
    icon: '☸️',
    title: 'Emperor Ashoka Embraces Buddhism',
    shortDesc: 'After the devastating Kalinga War, Emperor Ashoka renounced violence, embraced Buddhism, and spread its message of peace across Asia via his famous Edicts.',
    fullDesc: 'After witnessing the massive carnage of the Kalinga War (c. 261 BCE), Ashoka the Great was stricken with remorse and converted to Buddhism under the monk Upagupta. He subsequently spread Buddhist teaching (Dhamma) throughout his kingdom and beyond, erecting pillars and rock edicts across his empire. He sent missionaries to Sri Lanka, Central Asia, and even as far as Greece and Egypt. He built hospitals for humans and animals, dug wells, planted trees, and banned animal sacrifice — creating perhaps the world\'s first welfare state.',
    significance: 'Ashoka\'s Dhamma edicts are India\'s earliest deciphered writing. The National Emblem of India — the Ashoka Lion Capital — is derived from his pillar at Sarnath. He is often called the "philosopher king" and greatly influenced Jawaharlal Nehru in shaping modern India.',
    figures: ['Emperor Ashoka', 'Queen Devi', 'Mahendra & Sanghamitta (missionaries)', 'Monk Upagupta']
  },
  {
    id: 'ev-006',
    era: 'ancient',
    date: '320 CE',
    icon: '🌟',
    title: 'Gupta Empire — The Golden Age of India',
    shortDesc: 'The Gupta Empire ushered in India\'s Golden Age of mathematics, astronomy, literature, art, and science under rulers like Chandragupta II.',
    fullDesc: 'Founded by Sri Gupta and reaching its zenith under Chandragupta II (Vikramaditya), the Gupta Empire represented the Classical Age of Indian civilization. This era produced extraordinary achievements: Aryabhata calculated pi and declared Earth rotates on its axis and revolves around the sun; Brahmagupta developed the concept of zero and negative numbers; Kalidasa wrote timeless Sanskrit literature (Shakuntala, Meghaduta); and the famous Ajanta Caves were carved. Kamasutra, Panchatantra fables, iron pillar metallurgy — all emerged during this era.',
    significance: 'The Gupta period achievements in mathematics, astronomy, medicine, and philosophy directly influenced the Islamic Golden Age and Renaissance Europe. Aryabhata\'s works were translated into Arabic and later into Latin, fundamentally shaping modern science.',
    figures: ['Chandragupta II (Vikramaditya)', 'Aryabhata', 'Kalidasa', 'Brahmagupta', 'Varahamihira']
  },

  // ── MEDIEVAL ERA ──────────────────────────────────────────
  {
    id: 'ev-007',
    era: 'medieval',
    date: 'c. 850 CE',
    icon: '🌊',
    title: 'Chola Dynasty — Masters of the South Seas',
    shortDesc: 'The Chola Empire became a naval superpower, controlling trade routes across Southeast Asia and leaving iconic temple masterpieces like Brihadeeswarar.',
    fullDesc: 'The Chola dynasty, centered in Tamil Nadu, flourished from the 9th to 13th centuries CE and became one of the longest-ruling dynasties in world history. Under Rajaraja Chola I and his son Rajendra Chola I, the empire established an unrivaled naval force that dominated the Bay of Bengal, launching naval expeditions to Sumatra, Malay Peninsula, Thailand, and Sri Lanka. The magnificent Brihadeeswarar Temple at Thanjavur (1010 CE), a UNESCO World Heritage Site, stands as a masterpiece of Dravidian architecture. Chola bronze sculptures, the Nataraja (Dancing Shiva), and local self-governance (village assemblies) were hallmarks of their administration.',
    significance: 'The Chola Empire was arguably the most powerful maritime empire in Asia for over two centuries. Their naval expeditions established Indian cultural influence across Southeast Asia — Buddhism, Hinduism, temple architecture, and Sanskrit literature spread throughout the region.',
    figures: ['Rajaraja Chola I', 'Rajendra Chola I', 'Kulottunga Chola I']
  },
  {
    id: 'ev-008',
    era: 'medieval',
    date: '1206 CE',
    icon: '🏰',
    title: 'Delhi Sultanate Established',
    shortDesc: 'Qutb ud-Din Aibak founded the Delhi Sultanate, beginning 300 years of Turkic-Afghan Muslim rule over northern India.',
    fullDesc: 'Founded by Qutb ud-Din Aibak, a slave-turned-general of Muhammad of Ghor, the Delhi Sultanate marked the establishment of Islamic political authority in northern India. Over the next three centuries, five dynasties ruled — the Mamluk (Slave), Khalji, Tughlaq, Sayyid, and Lodi dynasties. The Sultanate introduced Persian administrative models, new agricultural technologies (wheat, cotton), the concept of a standing army with war elephants and cavalry, and magnificent architectural monuments like the Qutb Minar — the world\'s tallest brick minaret. Alauddin Khalji successfully repelled multiple Mongol invasions, saving India from the devastation that befell Persia and Baghdad.',
    significance: 'The Delhi Sultanate permanently transformed northern India\'s cultural, linguistic, and architectural landscape. It gave rise to Urdu language (a blend of Hindi, Persian, Arabic, Turkish), Hindustani music, and Indo-Islamic architecture — beginning a new composite Indian civilization.',
    figures: ['Qutb ud-Din Aibak', 'Razia Sultana (first female Muslim ruler of India)', 'Alauddin Khalji', 'Muhammad bin Tughluq', 'Ibrahim Lodi']
  },
  {
    id: 'ev-009',
    era: 'medieval',
    date: '1336 CE',
    icon: '🔱',
    title: 'Vijayanagara Empire — The Last Hindu Kingdom',
    shortDesc: 'Founded by brothers Harihara and Bukka, Vijayanagara became the most powerful Hindu kingdom, protecting South Indian culture for 200 years.',
    fullDesc: 'Founded by Harihara I and Bukka I (believed to be former ministers of the Hoysala Empire), Vijayanagara ("City of Victory") served as a powerful bulwark protecting Hindu culture against the Delhi Sultanate\'s southward expansion. At its peak under Krishnadevaraya (1509–1529), the empire was one of the wealthiest and most populous states in the world. The capital city could have housed 500,000 people. Krishnadevaraya was a brilliant poet (Amuktamalyada in Telugu), patron of arts, and military genius who defeated Portuguese, Bijapur Sultanate, and the Gajapati Kingdom. The ruins of Hampi (capital) are now a UNESCO World Heritage Site.',
    significance: 'Vijayanagara preserved Dravidian architecture, Telugu and Kannada literature, and classical Hindu traditions at a time when northern India underwent massive cultural transformation. Its fall at the Battle of Talikota (1565) shifted South Indian political history permanently.',
    figures: ['Harihara I', 'Bukka I', 'Krishnadevaraya', 'Nikitin Afanasy (Russian traveler who wrote about it)']
  },
  {
    id: 'ev-010',
    era: 'medieval',
    date: '1526 CE',
    icon: '👑',
    title: 'Battle of Panipat — Babur Founds the Mughal Empire',
    shortDesc: 'Babur defeated Ibrahim Lodi at the First Battle of Panipat using artillery warfare, establishing the Mughal Empire that would rule India for 300 years.',
    fullDesc: 'Babur, a Timurid prince from Fergana (modern Uzbekistan) and a descendant of both Timur and Genghis Khan, defeated Sultan Ibrahim Lodi\'s much larger army (100,000 men vs Babur\'s 12,000) using revolutionary field artillery and flanking cavalry tactics (Tulughma). This decisive battle ended the Delhi Sultanate and inaugurated the Mughal Empire. Babur\'s memoirs — the Baburnama — are among the most vivid and personal in literary history, describing his battles, loves, nature, and the cultural wonders he encountered in Hindustan.',
    significance: 'The founding of the Mughal Empire began a 300-year dynasty that transformed Indian art, architecture, cuisine, language, and governance. The Mughals created the Taj Mahal, Red Fort, Mughal miniature paintings, Mughal gardens, biriyani, and the administrative framework British India inherited.',
    figures: ['Babur', 'Ibrahim Lodi', 'Humayun', 'Khanzada Begum']
  },
  {
    id: 'ev-011',
    era: 'medieval',
    date: '1556 CE',
    icon: '🌺',
    title: 'Akbar the Great — Reign of the Magnificent',
    shortDesc: 'Emperor Akbar created a vast, religiously tolerant Mughal state, promoted the syncretic Din-i-Ilahi faith, and built the architectural wonder Fatehpur Sikri.',
    fullDesc: 'Akbar, who became emperor at just 13, is widely regarded as the greatest Mughal emperor and one of history\'s most enlightened rulers. He abolished the Jizya tax on non-Muslims, married Hindu Rajput princesses, and created the innovative Din-i-Ilahi ("Religion of God") — a syncretic spiritual movement that drew from all religions. His court featured Nine Gems (Navaratnas) including Birbal, Tansen (the greatest classical singer), Minister Todar Mal, and poet Abdur Rahim Khan-i-Khana. He built the remarkable planned city of Fatehpur Sikri. Akbar codified the mansabdari system, a ranked bureaucracy that efficiently administered his vast empire.',
    significance: 'Akbar\'s policy of Sulh-i-kul (peace with all) created a model of multicultural, religiously tolerant governance rare in the medieval world. His administrative reforms — land revenue settlements (Zabt system), unified weights and measures — formed the template for British colonial administration.',
    figures: ['Emperor Akbar', 'Birbal', 'Tansen', 'Hemu Bikramjit', 'Rani Durgawati', 'Todar Mal']
  },
  {
    id: 'ev-012',
    era: 'medieval',
    date: '1632 CE',
    icon: '🕌',
    title: 'Shah Jahan Builds the Taj Mahal',
    shortDesc: 'Built as a monument of eternal love for his wife Mumtaz Mahal, the Taj Mahal is today a UNESCO World Heritage Site and one of the Seven Wonders of the World.',
    fullDesc: 'Emperor Shah Jahan commissioned the Taj Mahal in Agra as a mausoleum for his beloved wife Arjumand Banu Begum (Mumtaz Mahal), who died in 1631 giving birth to their 14th child. Construction took 20,000 artisans and 22 years to complete (1632–1653). The main dome is 73 meters tall; the white Makrana marble changes color with the light — pinkish at dawn, brilliant white in daylight, golden in moonlight. Persian architect Ustad Ahmad Lahauri is credited as chief designer. The complex includes a mosque, guest house, and Mughal gardens in the Charbagh style.',
    significance: 'The Taj Mahal is UNESCO\'s "jewel of Muslim art in India and one of the universally admired masterpieces of the world\'s heritage." It attracts 7–8 million visitors annually and is India\'s most iconic symbol globally, symbolizing the pinnacle of Mughal artistic achievement.',
    figures: ['Shah Jahan', 'Mumtaz Mahal', 'Ustad Ahmad Lahauri (architect)', 'Aurangzeb (successor)']
  },
  {
    id: 'ev-013',
    era: 'medieval',
    date: '1674 CE',
    icon: '🗡️',
    title: 'Shivaji Maharaj Establishes the Maratha Empire',
    shortDesc: 'Chhatrapati Shivaji Bhonsle founded the Maratha Kingdom, pioneering guerrilla warfare, a strong navy, and establishing Swaraj (self-rule) against the Mughals.',
    fullDesc: 'Chhatrapati Shivaji Bhonsle is one of India\'s greatest national heroes. Born into a Maratha clan serving the Muslim Adil Shah Sultanate of Bijapur, Shivaji built his own army from local Mavals, mastered guerrilla warfare (Ganimi Kava), and seized numerous Deccan forts. He famously escaped from Aurangzeb\'s Mughal court at Agra in a basket and was crowned Chhatrapati at Raigad Fort in 1674. He built a formidable navy of over 300 vessels — making him the Father of the Indian Navy. His Rajya Vyavahar Kosh established Marathi administrative terms, replacing Persian. He treated all women with respect and forbade his troops from harming civilians.',
    significance: 'Shivaji created the foundation for the Maratha Confederacy that would eventually control much of India by the 18th century and pose the greatest challenge to British territorial expansion. He is a symbol of Hindu nationalism, resistance, and just governance celebrated across Maharashtra and India.',
    figures: ['Chhatrapati Shivaji Maharaj', 'Jijabai (mother)', 'Tanaji Malusare', 'Guru Ramdas', 'Afzal Khan (adversary)']
  },

  // ── COLONIAL ERA ────────────────────────────────────────
  {
    id: 'ev-014',
    era: 'colonial',
    date: '1498 CE',
    icon: '⚓',
    title: 'Vasco da Gama Arrives at Calicut',
    shortDesc: 'Portuguese explorer Vasco da Gama\'s arrival in Calicut opened a direct sea route from Europe to India, beginning centuries of European involvement in India.',
    fullDesc: 'On May 20, 1498, Portuguese explorer Vasco da Gama anchored his fleet at Calicut (Kozhikode), Kerala, completing the first direct sea voyage from Europe to India. This momentous journey bypassed the Ottoman-controlled overland Silk Road and connected Europe directly to the spice-rich Malabar Coast. The Samoothiri (Zamorin) of Calicut was initially hospitable, but Portuguese attempts to gain trade monopolies through violence would soon begin a new chapter of colonial exploitation. The Portuguese established the first European colonial outpost at Goa in 1510 under Afonso de Albuquerque.',
    significance: 'Vasco da Gama\'s voyage fundamentally shifted global trade routes from land to sea, diminished Arab and Ottoman commercial power, and began the Age of European colonialism in Asia. It set the stage for the Dutch, English, and French to follow — ultimately leading to British colonial rule over India.',
    figures: ['Vasco da Gama', 'Zamorin (Samoothiri) of Calicut', 'Afonso de Albuquerque']
  },
  {
    id: 'ev-015',
    era: 'colonial',
    date: '1757 CE',
    icon: '🏳️',
    title: 'Battle of Plassey — British Power Established',
    shortDesc: 'The East India Company\'s Robert Clive defeated Nawab Siraj-ud-Daulah at Plassey through treachery, beginning effective British colonial rule in Bengal and eventually all of India.',
    fullDesc: 'The Battle of Plassey on June 23, 1757, was the decisive event that established British dominance in India. Robert Clive of the British East India Company (EIC) conspired with Mir Jafar, the Nawab\'s own commander-in-chief, who betrayed Siraj-ud-Daulah and stood aside during battle. With barely 800 European soldiers and 2,200 Indian sepoys against an army of 50,000, the EIC won by treachery rather than battlefield superiority. Following Siraj-ud-Daulah\'s capture and execution, Mir Jafar was installed as a puppet nawab — beginning the era of British political control masquerading as "protection."',
    significance: 'Plassey marked the beginning of British territorial empire in India. The plunder of Bengal\'s treasury (estimated at ₹230 million in today\'s terms) financed the Industrial Revolution in Britain. The betrayal model of divide-and-conquer became the EIC\'s template for expanding control across India.',
    figures: ['Robert Clive', 'Siraj-ud-Daulah', 'Mir Jafar (traitor)', 'Amichand (spy)']
  },
  {
    id: 'ev-016',
    era: 'colonial',
    date: '1857 CE',
    icon: '🔥',
    title: 'The Great Uprising — First War of Independence',
    shortDesc: 'The Sepoy Mutiny of 1857 was a massive armed uprising against British East India Company rule, making heroes of figures like Rani Lakshmibai and Mangal Pandey.',
    fullDesc: 'The revolt of 1857, initially triggered by sepoys (Indian soldiers) at Meerut over greased cartridges (allegedly containing pig and cow fat — offensive to both Hindu and Muslim soldiers), rapidly spread into a widespread uprising involving civilian populations, princes, and landlords across north and central India. Key leaders included Nana Sahib at Kanpur, Rani Lakshmibai of Jhansi (who died fighting), Tantia Tope, and Bahadur Shah Zafar — the last Mughal emperor, who became a reluctant figurehead. The British responded with extreme brutality, and the rebellion was eventually suppressed.',
    significance: 'The 1857 uprising ended the East India Company\'s rule and transferred power directly to the British Crown (Queen Victoria). It revealed the fragility of colonial rule and sowed seeds of Indian nationalism. Rani Lakshmibai became one of India\'s greatest national heroes, inspiring future independence fighters.',
    figures: ['Mangal Pandey', 'Rani Lakshmibai of Jhansi', 'Bahadur Shah Zafar', 'Nana Sahib', 'Tantia Tope']
  },
  {
    id: 'ev-017',
    era: 'colonial',
    date: '1885 CE',
    icon: '🏛️',
    title: 'Indian National Congress Founded',
    shortDesc: 'The Indian National Congress was founded in Bombay, giving Indians the first organized political platform to voice their concerns and eventually demand self-rule.',
    fullDesc: 'On December 28, 1885, 72 delegates drawn from across India gathered in Bombay (Mumbai) under the leadership of retired British civil servant Allan Octavian Hume, along with Dadabhai Naoroji (the "Grand Old Man of India") and Dinshaw Wacha, to form the Indian National Congress. Initially a moderate organization seeking reforms within the British system, the INC evolved under leaders like Bal Gangadhar Tilak ("Swaraj is my birthright!"), Gopal Krishna Gokhale, and ultimately Mahatma Gandhi into the primary vehicle for India\'s independence movement, embracing mass politics and non-violent civil disobedience.',
    significance: 'The INC became India\'s premier political organization and mobilizing force for independence. It brought together Hindus, Muslims, Sikhs, and other communities around a shared national identity. After independence, Nehru led the INC to become India\'s dominant political party for decades, shaping independent India\'s democracy.',
    figures: ['A.O. Hume', 'Dadabhai Naoroji', 'Bal Gangadhar Tilak', 'Gopal Krishna Gokhale']
  },
  {
    id: 'ev-018',
    era: 'colonial',
    date: '1905 CE',
    icon: '✊',
    title: 'Partition of Bengal & Swadeshi Movement',
    shortDesc: 'Lord Curzon\'s divisive partition of Bengal sparked the Swadeshi Movement — Indians boycotting British goods and promoting Indian products for the first time at a national scale.',
    fullDesc: 'Lord Curzon\'s 1905 decision to partition Bengal was widely seen as a divide-and-rule strategy to weaken Bengali nationalism by separating the Hindu-majority west from the Muslim-majority east. The response was the explosive Swadeshi Movement — Indians burned British cloth, boycotted foreign goods, and promoted indigenous (swadeshi) alternatives. Rabindranath Tagore penned inspirational songs (including "Amar Sonar Bangla," later Bangladesh\'s national anthem). Leaders like Bal Gangadhar Tilak organized the Ganesh festival as a political rallying event. The partition was revoked in 1911 due to massive resistance.',
    significance: 'The Swadeshi Movement transformed Indian nationalism from elite discussion to mass participation for the first time. It established the economic dimension of freedom struggle — promoting Indian industry — and was the direct precursor to Gandhi\'s Non-Cooperation Movement. The concept of economic self-reliance became central to India\'s independence ideology.',
    figures: ['Lord Curzon', 'Bal Gangadhar Tilak', 'Rabindranath Tagore', 'Bipin Chandra Pal', 'Lala Lajpat Rai']
  },
  {
    id: 'ev-019',
    era: 'colonial',
    date: '1919 CE',
    icon: '💔',
    title: 'Jallianwala Bagh Massacre',
    shortDesc: 'On April 13, 1919, British General Dyer ordered troops to fire on a peaceful gathering in Amritsar\'s Jallianwala Bagh, killing hundreds and changing India forever.',
    fullDesc: 'On Baisakhi (the Punjabi harvest festival), thousands of unarmed civilians — including women and children — gathered in the enclosed garden of Jallianwala Bagh in Amritsar to peacefully protest the Rowlatt Act (which allowed indefinite imprisonment without trial). Brigadier General Reginald Dyer marched his troops in, blocked the only exit, and ordered 10 minutes of continuous firing — 1,650 rounds — into the trapped crowd. Official British figures counted 379 dead (unofficial estimates exceed 1,000). Rooted Indians, desperate to escape, jumped into the well — the well is still there.',
    significance: 'Jallianwala Bagh was the defining moment that turned moderate Indians into committed independence fighters. Rabindranath Tagore returned his British knighthood in protest. Bhagat Singh, 12 years old, collected soil from the site and vowed vengeance. Udham Singh assassinated Dyer\'s sponsor Michael O\'Dwyer in 1940. The massacre accelerated Gandhi\'s mass movement.',
    figures: ['General Reginald Dyer', 'Udham Singh (avenger)', 'Bhagat Singh (witness)', 'Michael O\'Dwyer', 'Dina Nath']
  },
  {
    id: 'ev-020',
    era: 'colonial',
    date: '1930 CE',
    icon: '🧂',
    title: 'Gandhi\'s Salt March — Dandi March',
    shortDesc: 'Mahatma Gandhi led a 240-mile march to the sea to make salt in defiance of British salt laws, launching the Civil Disobedience Movement and inspiring the world.',
    fullDesc: 'On March 12, 1930, Mahatma Gandhi left Sabarmati Ashram with 78 chosen followers for a 382 km (240-mile) march to Dandi on the Gujarat coast. On April 6, Gandhi picked up salt from the beach, breaking the British salt monopoly law. The act — simple, symbolic, and elegant — unleashed mass civil disobedience across India. Within months, 60,000 Indians were arrested, including Gandhi. Global media coverage, especially an iconic photograph of Gandhi and his followers, transformed world opinion about British rule in India. Albert Einstein called the Salt March "a morally superior response to oppression."',
    significance: 'The Salt March was a masterpiece of political strategy. It demonstrated the power of non-violent civil disobedience as a weapon against colonial power — a template studied by Martin Luther King Jr., Nelson Mandela, and Aung San Suu Kyi. It boosted the international profile of India\'s independence movement irreversibly.',
    figures: ['Mahatma Gandhi', 'Sarojini Naidu', 'Abbas Tyabji', 'Manilal Gandhi', 'Imam Sahib']
  },
  {
    id: 'ev-021',
    era: 'colonial',
    date: '1942 CE',
    icon: '📢',
    title: 'Quit India Movement',
    shortDesc: '"Do or Die!" — Gandhi\'s thunderous call launched the Quit India Movement, the most aggressive demand for British withdrawal from India.',
    fullDesc: 'On August 8, 1942, at the Bombay session of the All India Congress Committee (AICC) at Gowalia Tank Maidan (now August Kranti Maidan), Mahatma Gandhi gave what became known as his "Do or Die" speech: "I want freedom immediately, this very night, before dawn if it can be had." He launched the Quit India Movement — the most forceful demand for immediate British departure from India during World War II. The British arrested the entire Congress leadership within hours. The Indian people rose in massive, leaderless rebellion — railway lines cut, telegraph wires severed, government buildings seized. The British required 57 army battalions to suppress it.',
    significance: 'The Quit India Movement, though suppressed, was a crucial turning point. It demonstrated that Indian masses would no longer accept foreign rule and that the cost of holding India was becoming too high for a war-exhausted Britain. The movement accelerated the post-war British decision to grant independence.',
    figures: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Vallabhbhai Patel', 'Aruna Asaf Ali', 'Ram Manohar Lohia']
  },

  // ── MODERN ERA ───────────────────────────────────────────
  {
    id: 'ev-022',
    era: 'modern',
    date: 'Aug 15, 1947',
    icon: '🇮🇳',
    title: 'India\'s Independence — Tryst with Destiny',
    shortDesc: 'At the stroke of midnight, India awoke to freedom as Nehru\'s voice rang out from Red Fort: "At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom."',
    fullDesc: 'At midnight on August 14–15, 1947, India achieved independence after nearly 200 years of British rule. The Indian Independence Act of 1947, passed by the British Parliament, transferred power to two new dominions — India and Pakistan. The horrific partition of Bengal and Punjab along religious lines led to one of the largest mass migrations in human history — 14–17 million people displaced — and terrible communal violence claiming an estimated 200,000–2,000,000 lives. Yet India\'s birth as a nation remained extraordinary: for the first time in their history, 350 million people became citizens of a sovereign, democratic republic.',
    significance: 'India\'s independence was a watershed moment in world history, directly inspiring independence movements in Africa, Southeast Asia, and the Caribbean. India\'s choice of secular democracy — given its diversity — defied predictions and established a model for multicultural nation-states. The Indian tricolor was unfurled for the first time at Red Fort.',
    figures: ['Jawaharlal Nehru (1st PM)', 'Mahatma Gandhi', 'Lord Mountbatten', 'Sardar Vallabhbhai Patel', 'Dr. B.R. Ambedkar', 'Jinnah']
  },
  {
    id: 'ev-023',
    era: 'modern',
    date: 'Jan 26, 1950',
    icon: '📜',
    title: 'India\'s Constitution Comes Into Force',
    shortDesc: 'Dr. B.R. Ambedkar\'s monumental Constitution — the world\'s longest written constitution — came into effect, declaring India a sovereign, secular, democratic republic.',
    fullDesc: 'At 10:18 AM on January 26, 1950, the Constitution of India came into effect, making India a Republic. Dr. B.R. Ambedkar, chairman of the drafting committee, presented a document of extraordinary scope — 448 articles, 12 schedules, and 101 amendments to date. The Constitution guaranteed all citizens fundamental rights regardless of religion, caste, or gender. It established a parliamentary democracy with universal adult suffrage (India became the world\'s largest democracy overnight), an independent judiciary, and a federal structure. Dr. Rajendra Prasad became the first President of India.',
    significance: 'The Indian Constitution is the world\'s longest written constitution and is considered a masterpiece of democratic governance. It abolished caste-based discrimination, guaranteed women equal rights, and established universal suffrage at a time when many democracies still had property or literacy requirements. The date, January 26, is celebrated annually as Republic Day.',
    figures: ['Dr. B.R. Ambedkar (Father of Constitution)', 'Dr. Rajendra Prasad (1st President)', 'Jawaharlal Nehru', 'Alladi Krishnaswami Ayyar']
  },
  {
    id: 'ev-024',
    era: 'modern',
    date: '1965, 1971 CE',
    icon: '⚔️',
    title: 'India-Pakistan Wars — 1965 & Liberation of Bangladesh',
    shortDesc: 'India won decisive conflicts with Pakistan in 1965 and 1971, the latter resulting in the creation of Bangladesh and cementing India\'s geopolitical supremacy in South Asia.',
    fullDesc: 'The 1965 Indo-Pak War ended in a stalemate (Tashkent Agreement); but the 1971 war was a defining victory. When Pakistani military committed genocide against Bengalis in East Pakistan, India under PM Indira Gandhi intervened militarily. Operation Vijay resulted in the largest military surrender since World War II — 93,000 Pakistani soldiers surrendered to Indian General J.F.R. Jacob on December 16, 1971, in Dhaka. Bangladesh was born as an independent nation. Indira Gandhi was hailed as "Goddess Durga" by Atal Bihari Vajpayee in Parliament.',
    significance: 'The 1971 victory fundamentally altered South Asian geopolitics, created India as the dominant regional power, and demonstrated India\'s military capability. It was a personal triumph for Indira Gandhi and remains India\'s greatest military victory. December 16 is celebrated as Vijay Diwas in India.',
    figures: ['PM Indira Gandhi', 'General Sam Manekshaw', 'General J.F.R. Jacob', 'Yahya Khan', 'Sheikh Mujibur Rahman']
  },
  {
    id: 'ev-025',
    era: 'modern',
    date: 'May 18, 1974',
    icon: '☢️',
    title: 'Operation Smiling Buddha — India\'s First Nuclear Test',
    shortDesc: 'India successfully detonated its first nuclear device at Pokhran, Rajasthan, becoming the 6th nation to develop nuclear capability under PM Indira Gandhi.',
    fullDesc: 'Operation Smiling Buddha was India\'s first successful nuclear weapons test, conducted on May 18, 1974 at the Pokhran Test Range in Rajasthan. India claimed it was a "peaceful nuclear explosion" — a 8 kiloton device. The test shocked the world and led to Western sanctions. Scientists like Dr. Homi Bhabha had laid the foundations of India\'s nuclear program. India\'s nuclear capability was significantly enhanced by Operation Shakti in 1998 (under PM Vajpayee), when India conducted five nuclear tests, prompting Pakistan to follow suit and drawing international condemnation but establishing India as a confirmed nuclear state.',
    significance: 'India\'s nuclear tests established it as a nuclear power outside the Nuclear Non-Proliferation Treaty (NPT) framework. This gave India deterrence capability and strategic depth in a dangerous neighborhood. The 1998 tests led to US sanctions that were later reversed through the landmark India-US Civil Nuclear Agreement (2008).',
    figures: ['PM Indira Gandhi', 'Dr. Homi Bhabha', 'Dr. Raja Ramanna', 'Dr. R. Chidambaram', 'Dr. A.P.J. Abdul Kalam']
  },
  {
    id: 'ev-026',
    era: 'modern',
    date: '1991 CE',
    icon: '📈',
    title: 'Economic Liberalization — India Opens Up',
    shortDesc: 'Finance Minister Manmohan Singh\'s 1991 reforms dismantled the License Raj, opened India to foreign investment, and ignited the world\'s fastest-growing major economy.',
    fullDesc: 'In 1991, India faced a severe balance-of-payments crisis — foreign reserves had fallen to less than 3 weeks of imports. PM Narasimha Rao and Finance Minister Dr. Manmohan Singh responded with sweeping economic reforms: the License Raj (elaborate industrial regulation system) was largely dismantled, import duties were drastically reduced, the rupee was devalued, and foreign direct investment was welcomed. India pledged 67 tonnes of gold to secure IMF loans. These reforms unleashed India\'s entrepreneurial energy: the economy grew at 6–8% annually in subsequent decades, the IT sector boomed (Infosys, Wipro, TCS), and hundreds of millions were lifted out of poverty.',
    significance: 'The 1991 reforms fundamentally transformed India\'s economic trajectory. India moved from a heavily planned economy (commanding heights model) to a market economy. The IT revolution that followed made India a global software powerhouse, creating the "India Inc." phenomenon and a thriving middle class of 300+ million.',
    figures: ['PM P.V. Narasimha Rao', 'FM Manmohan Singh', 'C. Rangarajan (RBI Governor)', 'Montek Singh Ahluwalia']
  },
  {
    id: 'ev-027',
    era: 'modern',
    date: '2008 CE',
    icon: '🚀',
    title: 'Chandrayaan-1 — India Reaches the Moon',
    shortDesc: 'India\'s first lunar mission Chandrayaan-1 successfully orbited the Moon and made the historic discovery of water molecules on the lunar surface.',
    fullDesc: 'Chandrayaan-1, launched by ISRO on October 22, 2008, was India\'s first lunar probe. The spacecraft consisted of an orbiter and an impact probe (MIP). In a landmark discovery confirmed in 2009, instruments aboard Chandrayaan-1 detected water molecules in the permanently shadowed regions of the Moon\'s south pole — a discovery that revolutionized our understanding of the lunar surface and has significant implications for future human colonization of the Moon. This came 40 years after Apollo 11 and made India only the fourth nation to send a probe to the Moon. The mission was achieved at a fraction of the cost of comparable Western missions.',
    significance: 'The discovery of water on the Moon by Chandrayaan-1 was one of the most important lunar discoveries of the 21st century. India\'s Moon missions (Chandrayaan-2 in 2019, Chandrayaan-3 in 2023 — the first to land on the Moon\'s south pole) established ISRO as a world-class space agency. India demonstrated that space exploration could be made vastly more affordable.',
    figures: ['Dr. G. Madhavan Nair (ISRO Chief)', 'Dr. Mylswamy Annadurai (Project Director)', 'K. Kasturirangan']
  },
  {
    id: 'ev-028',
    era: 'modern',
    date: 'Aug 23, 2023',
    icon: '🌕',
    title: 'Chandrayaan-3 Lands on the Moon\'s South Pole',
    shortDesc: 'India became the first nation in history to land a spacecraft near the Moon\'s south pole, and the fourth country ever to achieve a soft lunar landing, with the Vikram lander.',
    fullDesc: 'On August 23, 2023, India made history when ISRO\'s Chandrayaan-3 mission successfully landed its Vikram lander near the Moon\'s south pole at 6:04 PM IST, deploying the Pragyan rover. India became the first country to successfully land near the lunar south pole — a region believed to hold ice water in permanently shadowed craters, crucial for future Moon bases. The landing came just days after Russia\'s Luna-25 crashed in the same region. Achieves at a mission cost of just ₹600 crore (~$75 million) — less than the budget of many Hollywood films. PM Modi watched the landing from South Africa where he was attending the BRICS summit.',
    significance: 'Chandrayaan-3 placed India in an exclusive club of nations — USA, USSR/Russia, and China — that have soft-landed on the Moon. Being the first to reach the south pole makes this uniquely historic. It solidified ISRO\'s reputation for cost-effective, high-quality space missions and sparked a massive surge of pride and interest in science among Indian youth.',
    figures: ['S. Somanath (ISRO Chairman)', 'Kalpana K. (mission director)', 'PM Narendra Modi', 'ISRO scientists']
  },
  {
    id: 'ev-029',
    era: 'modern',
    date: '2024 CE',
    icon: '🌐',
    title: 'India Becomes World\'s 5th Largest Economy',
    shortDesc: 'India officially surpassed the UK to become the world\'s 5th largest economy, with ambitions to reach $5 trillion and become the world\'s 3rd largest economy by 2030.',
    fullDesc: 'India\'s GDP officially surpassed that of the United Kingdom (its former colonial ruler) and France to become the world\'s 5th largest economy at approximately $3.7 trillion (2024). India is now the world\'s fastest-growing major economy, consistently growing at 6.5–8% annually. The UPI (Unified Payments Interface) digital payments system processes more transactions than Visa and Mastercard combined globally. India hosts the world\'s largest startup ecosystem outside the US and China, with 100+ unicorns. India\'s middle class — estimated at 300–400 million people — is increasingly driving global consumption.',
    significance: 'India\'s economic rise is one of the defining geopolitical stories of the 21st century. From a country that pledged gold to avoid bankruptcy in 1991, India has become the world\'s fastest-growing major economy within 30 years. India is projected to become the world\'s 3rd largest economy by 2030 and 2nd by 2075, potentially the world\'s largest.',
    figures: ['PM Narendra Modi', 'Finance Minister Nirmala Sitharaman', 'Mukesh Ambani', 'Ratan Tata (legacy)']
  }
];

// Gallery items with emoji art (no images needed)
const GALLERY_ITEMS = [
  { emoji: '🕌', title: 'Taj Mahal', desc: 'Icon of Mughal architecture, Agra — 1632 CE', bg: 'rgba(212,175,55,0.06)' },
  { emoji: '🏛️', title: 'Brihadeeswarar Temple', desc: 'Chola masterpiece, Thanjavur — 1010 CE', bg: 'rgba(255,107,0,0.06)' },
  { emoji: '☸️', title: 'Ashoka Chakra', desc: 'Symbol of Dharma on India\'s national flag', bg: 'rgba(19,136,8,0.06)' },
  { emoji: '🏙️', title: 'Mohenjo-daro', desc: 'Ancient planned city, Indus Valley — 2500 BCE', bg: 'rgba(155,89,182,0.06)' },
  { emoji: '🪷', title: 'Bodh Gaya', desc: 'Place of Buddha\'s enlightenment — 528 BCE', bg: 'rgba(212,175,55,0.06)' },
  { emoji: '🗡️', title: 'Shivaji\'s Sword', desc: 'Symbol of Maratha valor and Swaraj', bg: 'rgba(231,76,60,0.06)' },
  { emoji: '🚀', title: 'ISRO Vikram Lander', desc: 'First Moon south pole landing — 2023 CE', bg: 'rgba(19,136,8,0.06)' },
  { emoji: '📜', title: 'Indian Constitution', desc: 'World\'s longest written constitution — 1950', bg: 'rgba(212,175,55,0.06)' },
  { emoji: '🧂', title: 'Dandi Salt', desc: 'Symbol of Gandhi\'s Civil Disobedience — 1930', bg: 'rgba(255,107,0,0.06)' }
];

// Facts data
const FACTS = [
  { icon: '🔢', title: 'Zero Invented in India', text: 'The concept of zero as a number was invented by Indian mathematician Brahmagupta in 628 CE. This revolutionary idea transformed mathematics and made modern computing possible.' },
  { icon: '♟️', title: 'Chess Born in India', text: 'Chess (originally Chaturanga, meaning "four divisions of the military") was invented in India during the Gupta period (c. 600 CE) and spread to Persia, then the Arab world, and eventually Europe.' },
  { icon: '💧', title: 'World\'s First Sanitation System', text: 'The Indus Valley Civilization (c. 2600 BCE) had covered drainage systems, public baths, and water management infrastructure more advanced than ancient Rome, which came 2,000 years later.' },
  { icon: '🧮', title: 'Pi Calculated to 5 Decimal Places', text: 'Aryabhata (499 CE) calculated pi (π) to be 3.1416 — accurate to 4 decimal places — over 1,000 years before European mathematicians made similar calculations.' },
  { icon: '💊', title: 'Ayurveda — World\'s Oldest Medicine', text: 'Developed in ancient India, Ayurveda is the world\'s oldest comprehensive medical system. Sushruta (600 BCE) described 300+ surgical procedures including plastic surgery and cataract operations.' },
  { icon: '📡', title: 'Radio Before Marconi', text: 'Jagadish Chandra Bose demonstrated wireless radio communication in 1895 — before Guglielmo Marconi\'s 1897 demonstration. Bose was generously unconcerned with patents, allowing Marconi to take commercial credit.' },
  { icon: '🌍', title: 'India Was Richest Nation for 1,700 Years', text: 'According to economist Angus Maddison, India was the world\'s largest economy from 1 CE to 1700 CE — consistently contributing 20–33% of global GDP before colonial wealth extraction began.' },
  { icon: '🐘', title: 'Sanskrit — Mother of Languages', text: 'Sanskrit\'s influence extends across Asia and even into English. Words like "sugar" (sharkara), "jungle" (jangala), "yoga," "karma," "avatar," "pundit," and "shampoo" all originate from Sanskrit.' },
  { icon: '🌊', title: 'India\'s Navy Is Older Than You Think', text: 'The word "navigation" derives from Sanskrit "navgatih." The Indus Valley Civilization built the world\'s first known dock at Lothal (c. 2400 BCE), capable of docking large ships.' }
];

// ============================================================
// DOM REFERENCES
// ============================================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const timelineContainer = document.getElementById('timelineContainer');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const noResults = document.getElementById('noResults');
const filterBtns = document.querySelectorAll('.filter-btn');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const galleryGrid = document.getElementById('galleryGrid');
const factsGrid = document.getElementById('factsGrid');

// State
let activeFilter = 'all';
let searchQuery = '';

// ============================================================
// NAVIGATION
// ============================================================
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ============================================================
// PARTICLE SYSTEM
// ============================================================
function createParticles() {
  const container = document.getElementById('particles');
  const count = 25;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      opacity: ${Math.random() * 0.4 + 0.1};
      --dur: ${Math.random() * 6 + 5}s;
      --delay: ${Math.random() * 4}s;
    `;
    container.appendChild(p);
  }
}

// ============================================================
// COUNTER ANIMATION
// ============================================================
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    const start = Date.now();
    const duration = 2000;
    function update() {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    }
    update();
  });
}

// ============================================================
// TIMELINE RENDERING
// ============================================================
function getEventsFiltered() {
  return EVENTS.filter(evt => {
    const matchEra = activeFilter === 'all' || evt.era === activeFilter;
    const matchSearch = !searchQuery ||
      evt.title.toLowerCase().includes(searchQuery) ||
      evt.shortDesc.toLowerCase().includes(searchQuery) ||
      evt.date.toLowerCase().includes(searchQuery) ||
      (evt.figures && evt.figures.some(f => f.toLowerCase().includes(searchQuery)));
    return matchEra && matchSearch;
  });
}

function eraLabel(era) {
  const map = { ancient: 'Ancient', medieval: 'Medieval', colonial: 'Colonial', modern: 'Modern' };
  return map[era] || era;
}

function renderTimeline() {
  const events = getEventsFiltered();
  timelineContainer.innerHTML = '';

  if (events.length === 0) {
    noResults.classList.add('visible');
    return;
  }

  noResults.classList.remove('visible');

  events.forEach((evt, index) => {
    const el = document.createElement('div');
    el.classList.add('timeline-event');
    el.setAttribute('data-era', evt.era);
    el.setAttribute('data-id', evt.id);
    el.style.transitionDelay = `${index * 0.05}s`;

    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="event-card" tabindex="0" role="button" aria-label="Read more about ${evt.title}">
        <div class="event-header">
          <span class="event-icon" aria-hidden="true">${evt.icon}</span>
          <div class="event-meta">
            <span class="event-era-badge badge-${evt.era}">${eraLabel(evt.era)}</span>
            <div class="event-date">${evt.date}</div>
          </div>
        </div>
        <h3 class="event-title">${evt.title}</h3>
        <p class="event-description">${evt.shortDesc}</p>
        <span class="event-more">Read more →</span>
      </div>
    `;

    // Card click
    el.querySelector('.event-card').addEventListener('click', () => openModal(evt));
    el.querySelector('.event-card').addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openModal(evt);
    });

    timelineContainer.appendChild(el);
  });

  // Intersection Observer for reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.timeline-event').forEach(el => observer.observe(el));
}

// ============================================================
// FILTER & SEARCH
// ============================================================
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderTimeline();
  });
});

// Handle era card clicks to filter
document.querySelectorAll('.era-card').forEach(card => {
  card.addEventListener('click', () => {
    const era = card.dataset.era;
    document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      filterBtns.forEach(b => b.classList.remove('active'));
      const targetBtn = document.getElementById(`filter-${era}`);
      if (targetBtn) targetBtn.classList.add('active');
      activeFilter = era;
      renderTimeline();
    }, 500);
  });
});

// Handle nav filter links
document.querySelectorAll('.nav-link[data-filter]').forEach(link => {
  link.addEventListener('click', (e) => {
    const filter = link.dataset.filter;
    if (filter && filter !== 'all') {
      e.preventDefault();
      document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        filterBtns.forEach(b => b.classList.remove('active'));
        const targetBtn = document.getElementById(`filter-${filter}`);
        if (targetBtn) targetBtn.classList.add('active');
        activeFilter = filter;
        renderTimeline();
      }, 600);
    }
  });
});

searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.toLowerCase().trim();
  searchClear.classList.toggle('visible', searchQuery.length > 0);
  renderTimeline();
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  searchClear.classList.remove('visible');
  renderTimeline();
});

// ============================================================
// MODAL
// ============================================================
function openModal(evt) {
  document.getElementById('modalEraBadge').textContent = eraLabel(evt.era);
  document.getElementById('modalEraBadge').className = `modal-era-badge badge-${evt.era}`;
  document.getElementById('modalDate').textContent = evt.date;
  document.getElementById('modalTitle').textContent = evt.title;
  document.getElementById('modalIcon').textContent = evt.icon;
  document.getElementById('modalDescription').textContent = evt.fullDesc;
  document.getElementById('modalSignificance').textContent = evt.significance;

  const figuresEl = document.getElementById('modalFigures');
  figuresEl.innerHTML = evt.figures
    ? evt.figures.map(f => `<span class="figure-tag">👤 ${f}</span>`).join('')
    : '';

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ============================================================
// GALLERY RENDERING
// ============================================================
function renderGallery() {
  galleryGrid.innerHTML = GALLERY_ITEMS.map((item, i) => `
    <div class="gallery-item fade-in-section" style="background: ${item.bg}; transition-delay: ${i * 0.08}s">
      <span class="gallery-emoji" aria-hidden="true">${item.emoji}</span>
      <div class="gallery-caption">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    </div>
  `).join('');
}

// ============================================================
// FACTS RENDERING
// ============================================================
function renderFacts() {
  factsGrid.innerHTML = FACTS.map((fact, i) => `
    <div class="fact-card fade-in-section" style="transition-delay: ${i * 0.07}s">
      <div class="fact-icon" aria-hidden="true">${fact.icon}</div>
      <h3 class="fact-title">${fact.title}</h3>
      <p class="fact-text">${fact.text}</p>
    </div>
  `).join('');
}

// ============================================================
// INTERSECTION OBSERVER — Generic Fade in
// ============================================================
function setupFadeObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe all fade-in-section elements (re-run after rendering)
  function observeNew() {
    document.querySelectorAll('.fade-in-section:not(.visible)').forEach(el => observer.observe(el));
  }

  // Initial pass
  observeNew();

  // Re-observe after dynamic content
  setTimeout(observeNew, 300);
}

// ============================================================
// HERO COUNTER TRIGGER
// ============================================================
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(animateCounters, 300);
      heroObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

heroObserver.observe(document.querySelector('.hero-stats'));

// ============================================================
// SECTION FADE-IN OBSERVER
// ============================================================
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.era-card, .fact-card, .gallery-item').forEach((card, i) => {
        setTimeout(() => card.classList.add('visible'), i * 80);
      });
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.eras-section, .facts-section, .gallery-section').forEach(s => sectionObserver.observe(s));

// ============================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target && !this.hasAttribute('data-filter')) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================================================
// INITIALIZE
// ============================================================
function init() {
  createParticles();
  renderTimeline();
  renderGallery();
  renderFacts();
  setupFadeObserver();
}

document.addEventListener('DOMContentLoaded', init);
