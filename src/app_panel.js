import React, { useState } from 'react';
import { LoremIpsum } from "lorem-ipsum";

export const AppPanel = React.memo(() => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: { max: 8, min: 4 },
    wordsPerSentence: { max: 16, min: 4 }
  });
  const [data] = useState(lorem.generateParagraphs(3)); 
  return <div>{data}</div>
});
