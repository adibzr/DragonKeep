export const story = {
  title: "Dragon's Keep: An Interactive Dungeon Crawler Story",
  branches: {
    start: {
      title: "The Entrance",
      description: `You stand before the ancient stone entrance of Dragon's Keep, a labyrinthine dungeon rumored to house untold treasures guarded by a fearsome dragon. Armed with only your wits, a rusty sword, and a small torch, you step into the darkness.

The heavy door slams shut behind you.`,
      choices: [
        {
          text: "Take the Left Corridor - A narrow passage with flickering torches",
          nextBranch: "branchA",
        },
        {
          text: "Take the Right Corridor - A wider tunnel with strange markings on the walls",
          nextBranch: "branchB",
        },
        {
          text: "Take the Central Staircase - Stone steps descending into deeper darkness",
          nextBranch: "branchC",
        },
      ],
    },
    branchA: {
      title: "Left Corridor",
      description:
        "The narrow passage winds through the dungeon. You hear water dripping somewhere in the distance. After walking for several minutes, you encounter a wounded knight slumped against the wall.",
      choices: [
        { text: "Help the knight", nextBranch: "branchA1" },
        { text: "Ignore the knight", nextBranch: "branchA2" },
      ],
    },
    branchA1: {
      title: "Knight's Gratitude",
      description:
        'The knight thanks you and offers his shield. "Take this," he whispers. "It\'s enchanted against dragon fire. Follow this passage to the end, and you\'ll find a hidden entrance to the dragon\'s lair."',
      choices: [
        { text: "Take his advice", nextBranch: "bossPath1" },
        { text: "Ask about other routes", nextBranch: "branchA1-2" },
      ],
    },
    "branchA1-2": {
      title: "The Treasure Room",
      description:
        "You discover a room filled with gold coins and jewels. As you reach for a particularly beautiful emerald, you trigger a trap! The floor gives way beneath you.",
      type: "LOOP",
      choices: [{ text: "Fall through the trap", nextBranch: "start" }],
    },
    branchA2: {
      title: "Continued Journey",
      description:
        "Ignoring the knight, you press forward into the darkness. The passage eventually opens into a large chamber with two doors.",
      choices: [
        {
          text: "Choose the door with dragon carving",
          nextBranch: "bossPath2",
        },
        {
          text: "Choose the door with skull carving",
          nextBranch: "branchA2-2",
        },
      ],
    },
    "branchA2-2": {
      title: "The Poison Room",
      description:
        "As you enter, you're greeted by an overpowering sweet smell. Too late, you realize the room is filled with poisonous spores.",
      type: "DEATH",
    },
    branchB: {
      title: "Right Corridor",
      description:
        "The strange markings on the walls appear to be an ancient script. As you move deeper, you notice the markings begin to glow faintly.",
      choices: [
        { text: "Touch the glowing markings", nextBranch: "branchB1" },
        { text: "Continue without touching anything", nextBranch: "branchB2" },
      ],
    },
    branchB1: {
      title: "Hidden Passage",
      description:
        "The passage leads to a small library filled with ancient tomes. One book on a pedestal catches your eye.",
      choices: [
        { text: "Read the book", nextBranch: "bossPath3" },
        { text: "Ignore the book", nextBranch: "branchB1-2" },
      ],
    },
    "branchB1-2": {
      title: "The Escape Route",
      description:
        "You discover a tunnel that appears to lead out of the dungeon.",
      type: "NO_BOSS",
    },
    branchB2: {
      title: "The Guardian",
      description:
        "Continuing down the corridor, you encounter a stone golem blocking your path.",
      choices: [
        { text: "Try to fight the golem", nextBranch: "branchB2-2" },
        { text: "Try to sneak around", nextBranch: "bossPath4" },
      ],
    },
    "branchB2-2": {
      title: "The Golem's Challenge",
      description:
        "The golem doesn't attack but instead poses a riddle. Answer correctly, and it will let you pass.",
      choices: [
        { text: "Answer the riddle", nextBranch: "bossPath5" },
        { text: "Attack instead of answering", nextBranch: "deathPath2" },
      ],
    },
    branchC: {
      title: "Central Staircase",
      description:
        "The staircase descends deep into the earth. The air grows warmer as you continue downward.",
      choices: [
        { text: "Approach the massive iron door", nextBranch: "branchC1" },
        { text: "Take the side passage", nextBranch: "branchC2" },
      ],
    },
    branchC1: {
      title: "The Iron Door",
      description: "The door is locked with a complex mechanism.",
      choices: [
        { text: "Force it open", nextBranch: "branchC1-2" },
        { text: "Look for the key", nextBranch: "branchC1-3" },
      ],
    },
    "branchC1-2": {
      title: "Breaking Through",
      description:
        "Your attempt to force the door alerts the dragon to your presence.",
      type: "NO_BOSS",
    },
    "branchC1-3": {
      title: "The Hidden Key",
      description:
        "You find a key hidden in a nearby torch sconce. The door opens silently to reveal the dragon's lair.",
      choices: [{ text: "Enter the lair", nextBranch: "bossPath1" }],
    },
    branchC2: {
      title: "The Side Passage",
      description:
        "The tunnel leads to a strange underground lake. A small boat is tethered to the shore.",
      choices: [
        { text: "Take the boat", nextBranch: "branchC2-2" },
        { text: "Walk around the lake", nextBranch: "branchC2-3" },
      ],
    },
    "branchC2-2": {
      title: "Across the Lake",
      description:
        "In the middle of the lake, something massive moves beneath the water. The boat rocks violently.",
      choices: [{ text: "Prepare for battle", nextBranch: "bossPath2" }],
    },
    "branchC2-3": {
      title: "The Lake Path",
      description:
        "Following the edge of the lake, you discover a dragon scale glimmering on the ground. It's warm to the touch.",
      choices: [{ text: "Pick up the scale", nextBranch: "bossPath3" }],
    },
    bossPath1: {
      title: "The Final Confrontation - Shield Path",
      description:
        "You enter cautiously, shield raised, ready to face the dragon. The massive beast lies atop a mountain of treasure, smoke curling from its nostrils. It opens one eye and regards you with ancient malice.",
      type: "BOSS",
    },
    bossPath2: {
      title: "The Final Confrontation - Lake Battle",
      description:
        "The 'lake' was actually part of the dragon's lair! The dragon rises from the water, wings unfurling. You leap from the boat onto a rocky outcropping, drawing your sword as the dragon roars.",
      type: "BOSS",
    },
    bossPath3: {
      title: "The Final Confrontation - Dragon Scale",
      description:
        "As you pick up the scale, you hear a thunderous roar. The dragon has sensed your presence. It crashes through a nearby wall, blocking your path. There's nowhere to run - you must fight!",
      type: "BOSS",
    },
    bossPath4: {
      title: "The Final Confrontation - Sneak Attack",
      description:
        "Using the small gap behind the golem, you slip into a massive cavern filled with treasure. The dragon lies sleeping on a mound of gold. You have the element of surprise.",
      type: "BOSS",
    },
    bossPath5: {
      title: "The Final Confrontation - Magical Approach",
      description:
        "With the knowledge gained from answering the golem's riddle, you find yourself in a chamber with magical sigils on the floor. Stepping on them in the correct order, a portal opens, leading directly to a ledge overlooking the dragon's lair.",
      type: "BOSS",
    },
    deathPath2: {
      title: "The Golem's Wrath",
      description:
        "The golem is too powerful for your weapons. The golem crushes you with its massive stone fist. Your adventure ends here.",
      type: "DEATH",
    },
  },
};
