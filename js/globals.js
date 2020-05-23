var time = {
  raw: 0,
  minute: 0,
  hour: 0,
  day: 0
};

var resources = {
  wisdom: 10,
  water: 0
};

var cur_indice = 1;

var story_text = [
  "\"Exile!? Is this some sort of a joke gone wrong?\"",
  "In a different kingdom, on a different planet in a different universe, summer has just rolled around the corner, bringing with it warm weather and clear bright skies.",
  "From a window placed high up the ornate walls of the king's chamber, our protagonist could see (but not hear) birds chirping, without a care in the world and without any worries.",
  "\"Are you done looking at the skies, young man?\", the king demanded.",
  "Unfortunately for our protagonist, he had many pressing things on his mind; chief among them was the fact that he was about to be kicked out of the kingdom.",
  "\"Sorry, this is just hard for me to process. I'm being exiled? Why?\"",
  "The king made a sort of puzzled expression.",
  "\"Well, if you don't get exiled, the plot won't progress.\", the king said.",
  "\"The plot? What plot?\"",
  "\"...nevermind, it'd take too long to explain.\""
];

// indicate at the end of a line whether to hide the advance > or not (somehow)

var loge = [story_text[0]]; // shared between all story tabs
