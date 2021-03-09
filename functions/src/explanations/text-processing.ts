const sentenceLength = {
  //explanations and feedback that can be provided to the user
  explanation:
    "When it comes to making accessible content there are lots of important small details, one such detail is sentence length. \nWhen you are trying to convey information it is important to use sentences of an ideal length. The objective is to convey a meanigfull ammount of information without making the sentence overly complicated or long.",

  manyLong:
    "If you have sentences that are too long it can lead to the sentence becoming complicated and difficult to follow. This can also lead to the reader losing interets in the content and possibly missing important information.",
  manyShort:
    "Having sentences that are too short can make your text feel clunky and poorly structured. Having some short sentences for effect can be fine, but too many starts to make the flow of the text difficult to follow. This can lead to the overall text becoming confusing and difficult to understand.",
  // mixed: "", //unsure what to do with
} as const;

export const explanations = {
  sentenceLength,
} as const;
