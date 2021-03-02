import { Metrics } from "../types";

function review(sentence: string): number {
  const words = sentence.split(" ");
  if (words.length <= 20) {
    return 0;
  } else if (words.length <= 30 && words.length > 20) {
    return 1;
  } else if (words.length <= 40 && words.length > 30) {
    return 2;
  } else {
    return 4;
  }
}

/**
 * Process sentence length evaluates the average length of sentences in the text
 * @param text The text to evaluate
 * @param source Where the text came from
 */
export function processSentenceLength(text: string): Metrics {
  const results = text.split(". ").map(review);
  const overallScore = results.reduce((prev, current) => prev + current, 0);

  return {
    sentenceLength: {
      name: "Sentence Length",
      explanation: "",
      score: overallScore,
    },
  };
}
