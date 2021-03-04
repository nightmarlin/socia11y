import { Metrics } from "../types";
import * as functions from "firebase-functions";

function lowScore(length: number): number {
  return length / 15;
}

function highScore(length: number): number {
  // return (length / 15) * 100;
  let returnable: number = 0;
  length = length - 20;
  if (length >= 20) {
    return 0;
  } else {
    returnable = length / 20;
    functions.logger.info("recieved sentence", returnable, " length ", length);
    returnable = 1 - returnable;
    return returnable;
  }
}

function review(sentence: string): number {
  const words = sentence.split(" "); //need to measure sentence length
  if (words.length < 15) {
    return lowScore(words.length);
  } else if (words.length > 20) {
    return highScore(words.length);
  } else {
    return 1;
  }
  // if (words.length <= 20) {
  //   return 1;
  // } else if (words.length <= 30 && words.length > 20) {
  //   return 0.7;
  // } else if (words.length <= 40 && words.length > 30) {
  //   return 0.3;
  // } else {
  //   return 0;
  // }
}

/**
 * Process sentence length evaluates the average length of sentences in the text
 * @param text The text to evaluate
 * @param source Where the text came from
 */
export function processSentenceLength(text: string): Metrics {
  const sentences = text.split(". "); //.map(review);
  const results: Array<number> = [];
  sentences.forEach((element) => {
    review(element); //each thing should return tuple saying how long the sentence was to allow the thing to track the position of sentences in the larger string and then will use this to highlight position of any bad sentences
  });
  const overallScore = results
    .reduce((prev, current) => prev + current, 0)
    .toFixed(3);
  functions.logger.info("recieved sentence", results);

  return {
    sentenceLength: {
      name: "Sentence Length",
      explanation: "",
      score: overallScore, //need to add thing that will say where bad sentences are
    },
  };
}
