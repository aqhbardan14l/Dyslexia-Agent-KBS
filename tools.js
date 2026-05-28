function ChunkingTool(text){

  const sentences = text.split('.');

  let output = [];

  for(let i=0;i<sentences.length;i++){

      output.push("• " + sentences[i].trim());

  }

  return output.join("<br>");
}

function HighlightTool(text){

  return text.replace(
    /(important|key|main|remember)/gi,
    "<b>$1</b>"
  );

}

function GlossaryTool(text){

  const glossary = {

    comprehend: "understand",

    cognitive: "thinking process",

    analysis: "study",

    paragraph: "group of sentences"

  };

  let result = text;

  Object.keys(glossary).forEach(word => {

      const regex = new RegExp(word,"gi");

      result = result.replace(
        regex,
        ${word} (${glossary[word]})
      );

  });

  return result;

}
