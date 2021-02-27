function review(sentence: string) {
  let score: number = 0;
  let words: Array<string> = sentence.split(" ");
  if (words.length <= 20) {
    score = 0;
  }
  if (words.length <= 30 && words.length > 20) {
    score = 1;
  }
  if (words.length <= 40 && words.length > 30) {
    score = 2;
  }
  if (words.length > 40) {
    score = 4;
  }
  return score;
}

var text: string =
  "This is a text file that I am using to test my code. It is designed to give me longer and longer sentences that wil get more complex and mor bad as the file goes so that I have things to say are bad and should not be used like this. really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now really bad one now. now for an e.d.g.e case to spice things up.";
var processArray: Array<string> = text.split(". ");
var results: Array<number>;
processArray.forEach((element) => {
  results.push(review(element));
});
var overAllScore: number = 0;
results.forEach((element) => {
  overAllScore += element;
});
