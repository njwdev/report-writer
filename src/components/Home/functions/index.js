// Shuffle function - Fisher-Yates shuffle
// This will take an array and return the same array in a different order
export const shuffle = array => {
  /* -disable no-param-reassign */
  let currentIndex = array.length;
  let tempValue;
  let randomIndex;
  // While there remain elements to shuffle…
  while (currentIndex) {
    // Pick a remaining element…
    randomIndex = Math.floor(Math.random() * currentIndex--);
    // And swap it with the current element.
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }
  return array;
};

// This is used to capitalise the first character of every string in an array.
export const capitalize = str => {
  // Get individual sentences
  const arrayOfStrings = str
    .split('. ')
    // Capitalise the first letter
    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
    // Put the sentences back together
    .join('. ');
  return arrayOfStrings;
};

export const autoGen = (comment, name, pronoun) =>
  comment
    .replace(/1NNN/g, name)
    .replace(/1SSS/g, pronoun === 'male' ? 'he' : 'she')
    .replace(/1YYY/g, pronoun === 'male' ? 'him' : 'her')
    .replace(/1AAA/g, pronoun === 'male' ? 'his' : 'her')
    .replace(/1PPP/g, pronoun === 'male' ? 'his' : 'hers')
    .replace(/1RRR/g, pronoun === 'male' ? 'himself' : 'herself')
    // add a space after full stops
    .replace(/\.(\S)/g, '. $1');

export const formatSingleComment = (text, name, pronoun) => {
  const formattedText = text
    .replace(/1NNN/g, name)
    .replace(/1SSS/g, pronoun === 'male' ? 'he' : 'she')
    .replace(/1YYY/g, pronoun === 'male' ? 'him' : 'her')
    .replace(/1AAA/g, pronoun === 'male' ? 'his' : 'her')
    .replace(/1PPP/g, pronoun === 'male' ? 'his' : 'hers')
    .replace(/1RRR/g, pronoun === 'male' ? 'himself' : 'herself');
  const textToDisplay = `${formattedText.charAt(0).toUpperCase() +
    formattedText.slice(1)} `;
  return textToDisplay;
};

// Make each sentence start with a capital letter and add a space at the of the text
