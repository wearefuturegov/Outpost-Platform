const { outputRoadmapFlowChart } = require("./flow-chart");
const { getIssues } = require("./get-issues");
const { outputRoadmapMindmap } = require("./mind-map");
const fs = require("fs");

const init = async () => {
  const grouped = await getIssues();
  const flowChartData = outputRoadmapFlowChart(grouped);
  const { generatedData: mindmapData, generatedHtmlData: mindmapHtmlData } =
    outputRoadmapMindmap(grouped);

  generatedData = `${flowChartData}\n\n${mindmapData}`;
  if (process.env.COMMIT_CHANGE === "true") {
    console.log(`Committing update to ROADMAP-ALT.md`);
    updateReadMe(generatedData);
  } else {
    fs.writeFileSync("create-roadmap/ROADMAP.md", generatedData);
    fs.writeFileSync("create-roadmap/mindmap.html", mindmapHtmlData);
  }
};

init();
