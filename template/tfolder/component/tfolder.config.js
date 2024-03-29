let { prompts } = require("tfolder-cli/utils");

const questions = [
  {
    type: "text",
    name: "name",
    message: "Component Name?",
    initial: "custom-element",
  },
];

module.exports = async function () {
  let data = await prompts(questions);
  data.name = data.name.trim().replace(/ +/g, "-");
  data.nameCamelCase = ("-" + data.name).replace(/-(\w)/g, (all, letter) =>
    letter.toUpperCase()
  );
  return data;
};
