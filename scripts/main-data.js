const mainData = [
	{
		ans: "guitar",
		hint: "A musical instrument with strings.",
	},
	{
		ans: "oxygen",
		hint: "A colorless, odorless gas essential for life.",
	},
	{
		ans: "mountain",
		hint: "A large natural elevation of the Earth's surface.",
	},
	{
		ans: "painting",
		hint: "An art form using colors on a surface to create images or expression.",
	},
	{
		ans: "astronomy",
		hint: "The scientific study of celestial objects and phenomena.",
	},
	{
		ans: "football",
		hint: "A popular sport played with a spherical ball.",
	},
	{
		ans: "chocolate",
		hint: "A sweet treat made from cocoa beans.",
	},
	{
		ans: "butterfly",
		hint: "An insect with colorful wings and a slender body.",
	},
	{
		ans: "history",
		hint: "The study of past events and human civilization.",
	},
	{
		ans: "pizza",
		hint: "A savory dish consisting of a round, flattened base with toppings.",
	},
	{
		ans: "jazz",
		hint: "A genre of music characterized by improvisation and syncopation.",
	},
	{
		ans: "camera",
		hint: "A device used to capture and record images or videos.",
	},
	{
		ans: "diamond",
		hint: "A precious gemstone known for its brilliance and hardness.",
	},
	{
		ans: "adventure",
		hint: "An exciting or daring experience.",
	},
	{
		ans: "science",
		hint: "The systematic study of the structure and behavior of the physical and natural world.",
	},
	{
		ans: "bicycle",
		hint: "A human-powered vehicle with two wheels.",
	},
	{
		ans: "sunset",
		hint: "The daily disappearance of the sun below the horizon.",
	},
	{
		ans: "coffee",
		hint: "A popular caffeinated beverage made from roasted coffee beans.",
	},
	{
		ans: "dance",
		hint: "A rhythmic movement of the body often performed to music.",
	},
	{
		ans: "galaxy",
		hint: "A vast system of stars, gas, and dust held together by gravity.",
	},
	{
		ans: "orchestra",
		hint: "A large ensemble of musicians playing various instruments.",
	},
	{
		ans: "volcano",
		hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.",
	},
	{
		ans: "novel",
		hint: "A long work of fiction, typically with a complex plot and characters.",
	},
	{
		ans: "sculpture",
		hint: "A three-dimensional art form created by shaping or combining materials.",
	},
	{
		ans: "symphony",
		hint: "A long musical composition for a full orchestra, typically in multiple movements.",
	},
	{
		ans: "architecture",
		hint: "The art and science of designing and constructing buildings.",
	},
	{
		ans: "ballet",
		hint: "A classical dance form characterized by precise and graceful movements.",
	},
	{
		ans: "astronaut",
		hint: "A person trained to travel and work in space.",
	},
	{
		ans: "waterfall",
		hint: "A cascade of water falling from a height.",
	},
	{
		ans: "technology",
		hint: "The application of scientific knowledge for practical purposes.",
	},
	{
		ans: "rainbow",
		hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.",
	},
	{
		ans: "universe",
		hint: "All existing matter, space, and time as a whole.",
	},
	{
		ans: "piano",
		hint: "A musical instrument played by pressing keys that cause hammers to strike strings.",
	},
	{
		ans: "vacation",
		hint: "A period of time devoted to pleasure, rest, or relaxation.",
	},
	{
		ans: "rainforest",
		hint: "A dense forest characterized by high rainfall and biodiversity.",
	},
	{
		ans: "theater",
		hint: "A building or outdoor area in which plays, movies, or other performances are staged.",
	},
	{
		ans: "telephone",
		hint: "A device used to transmit sound over long distances.",
	},
	{
		ans: "language",
		hint: "A system of communication consisting of anss, gestures, and syntax.",
	},
	{
		ans: "desert",
		hint: "A barren or arid land with little or no precipitation.",
	},
	{
		ans: "sunflower",
		hint: "A tall plant with a large yellow flower head.",
	},
	{
		ans: "fantasy",
		hint: "A genre of imaginative fiction involving magic and supernatural elements.",
	},
	{
		ans: "telescope",
		hint: "An optical instrument used to view distant objects in space.",
	},
	{
		ans: "breeze",
		hint: "A gentle wind.",
	},
	{
		ans: "oasis",
		hint: "A fertile spot in a desert where water is found.",
	},
	{
		ans: "photography",
		hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation.",
	},
	{
		ans: "safari",
		hint: "An expedition or journey, typically to observe wildlife in their natural habitat.",
	},
	{
		ans: "planet",
		hint: "A celestial body that orbits a star and does not produce light of its own.",
	},
	{
		ans: "river",
		hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
	},
	{
		ans: "tropical",
		hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn.",
	},
	{
		ans: "mysterious",
		hint: "Difficult or impossible to understand, explain, or identify.",
	},
	{
		ans: "enigma",
		hint: "Something that is mysterious, puzzling, or difficult to understand.",
	},
	{
		ans: "paradox",
		hint: "A statement or situation that contradicts itself or defies intuition.",
	},
	{
		ans: "puzzle",
		hint: "A game, toy, or problem designed to test ingenuity or knowledge.",
	},
	{
		ans: "whisper",
		hint: "To speak very softly or quietly, often in a secretive manner.",
	},
	{
		ans: "shadow",
		hint: "A dark area or shape produced by an object blocking the light.",
	},
	{
		ans: "secret",
		hint: "Something kept hidden or unknown to others.",
	},
	{
		ans: "curiosity",
		hint: "A strong desire to know or learn something.",
	},
	{
		ans: "unpredictable",
		hint: "Not able to be foreseen or known beforehand; uncertain.",
	},
	{
		ans: "obfuscate",
		hint: "To confuse or bewilder someone; to make something unclear or difficult to understand.",
	},
	{
		ans: "unveil",
		hint: "To make known or reveal something previously secret or unknown.",
	},
	{
		ans: "illusion",
		hint: "A false perception or belief; a deceptive appearance or impression.",
	},
	{
		ans: "moonlight",
		hint: "The light from the moon.",
	},
	{
		ans: "vibrant",
		hint: "Full of energy, brightness, and life.",
	},
	{
		ans: "nostalgia",
		hint: "A sentimental longing or wistful affection for the past.",
	},
	{
		ans: "brilliant",
		hint: "Exceptionally clever, talented, or impressive.",
	},
	{
		ans: "musical",
		hint: "A performance that combines music, dance, and acting.",
	},
	{
		ans: "sport",
		hint: "A competitive game played with a ball and specific rules.",
	},
	{
		ans: "book",
		hint: "A written work of fiction or non-fiction with a narrative.",
	},
	{
		ans: "piano",
		hint: "A musical instrument played by pressing keys.",
	},
	{
		ans: "author",
		hint: "A person who writes stories, poems, or other creative works.",
	},
	{
		ans: "saw",
		hint: "A tool used to cut or shape wood.",
	},
	{
		ans: "airplane",
		hint: "A vehicle with wings that can fly.",
	},
	{
		ans: "doctor",
		hint: "A person who studies and treats diseases.",
	},
	{
		ans: "language",
		hint: "A system of communication using symbols and sounds.",
	},
	{
		ans: "magician",
		hint: "A person who studies and performs magic tricks.",
	},
	{
		ans: "planet",
		hint: "A large, rocky object that orbits the sun.",
	},
	{
		ans: "software",
		hint: "A computer program used to perform specific tasks.",
	},
	{
		ans: "race",
		hint: "A competition where athletes race against each other.",
	},
	{
		ans: "pen",
		hint: "A tool used to write with ink on paper.",
	},
	{
		ans: "joy",
		hint: "A feeling of great happiness and wonder.",
	},
	{
		ans: "field",
		hint: "A large, open area of land covered in grass.",
	},
	{
		ans: "zoo",
		hint: "A large, enclosed area where animals are kept on display.",
	},
	{
		ans: "table",
		hint: "A piece of furniture with a flat surface used for eating or working.",
	},
	{
		ans: "hatred",
		hint: "A strong feeling of dislike or disapproval.",
	},
];
