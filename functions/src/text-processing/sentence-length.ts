import { Metrics } from "../types";
import { textProcessing as textExplain } from "../explanations";
import * as functions from "firebase-functions";

function lowScore(length: number): number {
  return length / 10; // simply works out the percentage towards 15
}

function highScore(length: number): number {
  length = length - 20;
  if (length >= 20) {
    return 0; // if past 40 then it fails and gets auto 0
  }

  return 1 - length / 20; // works as a percentage of 20, inverting the percentage as closer to 20 the worse the score
}

/**
 * reviewSentence evaluates a single sentence in a piece of text and works out several pieces of information about it
 * @param sentence The sentence to evaluate
 */
function reviewSentence(
  sentence: string
): {
  score: number;
  wordCount: number;
  averageWordLength: number;
} {
  const words = sentence.split(" ");
  let score = 0;

  // going to the different methods depending on if the sentence is too long or too short
  if (words.length < 10) {
    score = lowScore(words.length);
  } else if (words.length > 20) {
    score = highScore(words.length);
  } else {
    score = 1; // ideal sentence length
  }

  return {
    score,
    wordCount: words.length,
    averageWordLength:
      words.reduce((total, word) => total + word.length, 0) / words.length,
  };
}

/**
 * Process sentence length evaluates the average length of sentences in the text
 * @param text The text to evaluate
 * @param source Where the text came from
 */
export function processSentenceLength(text: string): Metrics {
  functions.logger.debug("processing sentence length");

  const delineators = /[!?.]\s?/; // Sentences end with any of ?, . or ! - split on those (and most will have a whitespace after them)
  const sentences = text.split(delineators); // splitting the text block into sentences via delineators

  const results: number[] = []; // setting up array for sentence score
  const errorLog: { start: number; end: number }[] = []; // track failure locations

  sentences.forEach((s) => {
    if (s === "") return;

    const feedback = reviewSentence(s); // gets object with data
    if (feedback.score < 0.3) {
      // if low score, it will log the location of the sentence
      const location = text.indexOf(s);
      errorLog.push({
        start: location,
        end: location + s.length,
      });
    }

    results.push(feedback.score); // adding the score
  });

  // overall score for the text block
  const overallScore = (
    results.reduce((total, current) => total + current, 0) / results.length
  ).toFixed(3);

  return {
    sentenceLength: {
      name: "Sentence Length",
      explanation: textExplain.sentenceLength.explanation,
      score: overallScore,
      errorLocations: errorLog,
    },
  };
}
