const fs = require("fs");

exports.prepTitle = (title) => {
  return title.replace(/['"]/g, "").replace(/(.{1,29})(?:\n|$| )/g, "$1<br />");
};

exports.flowchartTemplate = fs.readFileSync(
  "./create-roadmap/roadmap-template-flowchart.md",
  "utf8"
);

exports.mindmapTemplate = fs.readFileSync(
  "./create-roadmap/roadmap-template-mindmap.md",
  "utf8"
);

exports.mindmapMarkdownTemplate = fs.readFileSync(
  "./create-roadmap/template-mindmap-markdown-only.txt",
  "utf8"
);

exports.mindmapHtmlTemplate = fs.readFileSync(
  "./create-roadmap/template-mindmap.txt",
  "utf8"
);
