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
  "In a different kingdom, on a different planet in a different universe (though a planet quite like ours), summer has just rolled around the corner, bringing with it warm weather and clear bright skies.",
  "From a window placed high up the ornate walls of the king's chamber, our protagonist could see baby birds chirping and frolicking in their nest, without a care in the world.",
  "\"Are you done looking at the skies, young man?\", the king demanded.",
  "Unfortunately for our protagonist, he had many pressing things on his mind; chief among them was the fact that he was about to be forced out of the kingdom.",
  "\"Sorry, this is just hard for me to process. I'm being exiled? Why?\"",
  "The king made a sort of puzzled expression.",
  "\"Surely you should know why.\", the king said.",
  "\"...but I don't???\"",
  "The king stopped to think about his next words.",
  "\"...nevermind, it'd take too long to explain.\"@@@"
];

// indicate at the end of a line whether to hide the advance > or not (somehow)

var loge = [story_text[0]]; // shared between all story tabs
var story_show_advance = true;
