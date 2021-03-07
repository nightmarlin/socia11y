import { Metrics } from "../types";
// import * as functions from "firebase-functions";

function lowScore(length: number): number {
  return length / 15; //simply works out the percentage towards 15
}

function highScore(length: number): number {
  let returnable: number = 0; //works out the percentage distance from 20 going to 40
  length = length - 20;
  if (length >= 20) {
    return 0; //if it is past 40 then it fails and gets auto 0
  } else {
    returnable = length / 20; //works as a percentage of 20
    returnable = 1 - returnable; //inverts the percentage as closer to 20 the worse the score
    return returnable;
  }
}

function review(sentence: string): number[] {
  let resArr: Array<number> = []; //sets an array which will return sentence score and the length in characters
  resArr.push(sentence.length); //adding the sentence length
  const words = sentence.split(" "); //splotting at the spaces to count words
  if (words.length < 15) {
    resArr.push(lowScore(words.length)); //going to the different methods depending on if the sentence is too long or too short
    return resArr;
  } else if (words.length > 20) {
    resArr.push(highScore(words.length));
    return resArr;
  } else {
    resArr.push(1); //ideal sentence length
    return resArr;
  }
}

/**
 * Process sentence length evaluates the average length of sentences in the text
 * @param text The text to evaluate
 * @param source Where the text came from
 */
export function processSentenceLength(text: string): Metrics {
  const sentences = text.split(". "); //splitting the text block into sentences via full stop and space
  const results: Array<number> = []; //setting up arrays, one for setence score, one for errors(bad scores)
  const errorLog: Array<number[]> = [];
  let textTrack: number = 0; //tracking the position of each sentence
  sentences.forEach((element) => {
    let feedBack: Array<number> = review(element); //gets array with sentence character length and score
    if (feedBack[1] < 0.3) {
      let errorItem: Array<number> = [textTrack, textTrack + feedBack[0]]; //if low score, it will log the location of the sentence
      errorLog.push(errorItem);
    }
    textTrack += feedBack[0] + 2; //increasing the tracker
    results.push(feedBack[1]); //adding the score
  });
  const overallScore = (
    results //overall score for the text block
      .reduce((prev, current) => prev + current, 0) / results.length
  ).toFixed(3);

  return {
    sentenceLength: {
      name: "Sentence Length",
      explanation: "",
      score: overallScore,
      errorLocation: errorLog,
    },
  };
}
