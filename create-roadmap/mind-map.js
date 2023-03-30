const {
  prepTitle,
  mindmapTemplate,
  mindmapMarkdownTemplate,
  mindmapHtmlTemplate,
} = require("./utils");
const fs = require("fs");

const spacing = ["    ", "        ", "            ", "                "];

exports.outputRoadmapMindmap = (data) => {
  mermaidOne = easierToAdoptMermaid(
    data["1.0_ Make the Outpost platform easier to adopt"]
  );
  mermaidTwo = ImproveDataMermaid(
    data["2.0_ Improve data quality and ease of sharing"]
  );
  mermaidThree = ImproveScoutMermaid(data["3.0_ Improvements to Scout"]);
  mermaidFour = ImproveOutpostMermaid(
    data["4.0_ Make Outpost a better easier to use product"]
  );
  mermaidFive = ProblemsToSolveMermaid(data["5.0_ Problems to solve"]);

  // make the mermaid markdown info
  generateMarkdownData = mindmapMarkdownTemplate
    .replace("###EASIER_TO_ADOPT_TASKS###", mermaidOne)
    .replace("###IMPROVE_DATA_TASKS###", mermaidTwo)
    .replace("###IMPROVE_SCOUT_TASKS###", mermaidThree)
    .replace("###IMPROVE_OUTPOST_TASKS###", mermaidFour)
    .replace("###PROBLEMS_TO_SOLVE_TASKS###", mermaidFive);

  // put it into the mindmap markdown template
  generatedData = mindmapTemplate.replace(
    "###CONTENT###",
    generateMarkdownData
  );

  // put it into the mindmap html template
  generatedHtmlData = mindmapHtmlTemplate.replace(
    "###CONTENT###",
    generateMarkdownData
  );

  return { generatedData, generatedHtmlData };
};

const easierToAdoptMermaid = (data) => {
  let mermaid = ``;

  for (var key of Object.keys(data)) {
    if (key.substring(0, 3) === "1.1") {
      let mermaidData1 = data[key].map(
        (v, i) =>
          `${spacing[2]}RemoveRelianceOnToolsTask${i}("${prepTitle(
            v.title
          )}")\n${spacing[2]}:::EasierToAdoptTasks`
      );
      mermaid += `${spacing[1]}RemoveRelianceOnTools[Remove reliance on specific<br />tools that other local<br />authorities might not have]\n${spacing[1]}:::EasierToAdoptLv2\n`;
      mermaid += `${mermaidData1.join("\n")}\n`;
    }
    if (key.substring(0, 3) === "1.2") {
      let mermaidData2 = data[key].map(
        (v, i) =>
          `${spacing[2]}MakeSetupEasierTask${i}("${prepTitle(v.title)}")\n${
            spacing[2]
          }:::EasierToAdoptTasks`
      );
      mermaid += `${spacing[1]}MakeSetupEasier[Make setup easier]\n${spacing[1]}:::EasierToAdoptLv2\n`;
      mermaid += `${mermaidData2.join("\n")}\n`;
    }
    if (key.substring(0, 3) === "1.3") {
      let mermaidData3 = data[key].map(
        (v, i) =>
          `${spacing[2]}MakeCustomisationEasierTask${i}("${prepTitle(
            v.title
          )}")\n${spacing[2]}:::EasierToAdoptTasks`
      );
      mermaid += `${spacing[1]}MakeCustomisationEasier[Make customisation easier]\n${spacing[1]}:::EasierToAdoptLv2\n`;
      mermaid += `${mermaidData3.join("\n")}\n`;
    }
    if (key.substring(0, 3) === "1.4") {
      let mermaidData4 = data[key].map(
        (v, i) =>
          `${spacing[2]}MakeDevelopmentEasierTask${i}(${v.title})\n${spacing[2]}:::EasierToAdoptTasks`
      );
      mermaid += `${spacing[1]}MakeDevelopmentEasier[Make development easier]\n${spacing[1]}:::EasierToAdoptLv2\n`;
      mermaid += `${mermaidData4.join("\n")}\n`;
    }
  }
  // console.log(mermaid);
  return mermaid;
};

const ImproveDataMermaid = (data) => {
  let mermaid = ``;
  let mermaidData1 = data.map(
    (v, i) =>
      `${spacing[1]}ImproveDataQualityTask${i}("${prepTitle(v.title)}")\n${
        spacing[1]
      }:::ImproveDataQualityTasks`
  );

  mermaid += `${mermaidData1.join("\n")}\n`;

  // console.log(mermaid);
  return mermaid;
};
const ImproveScoutMermaid = (data) => {
  let mermaid = ``;

  for (var key of Object.keys(data)) {
    if (key.substring(0, 3) === "3.1") {
      let mermaidData1 = data[key].map(
        (v, i) =>
          `${spacing[2]}ImproveScoutMiscTask${i}("${prepTitle(v.title)}")\n${
            spacing[2]
          }:::ImproveScoutTasks`
      );

      mermaid += `${spacing[1]}ImproveScoutMisc[Misc]\n${spacing[1]}:::ImproveScoutLv2\n`;
      mermaid += `${mermaidData1.join("\n")}\n`;
    }
    if (key.substring(0, 3) === "3.2") {
      let mermaidData2 = data[key].map(
        (v, i) =>
          `${spacing[2]}ImproveScoutSearchTask${i}("${prepTitle(v.title)}")\n${
            spacing[2]
          }:::ImproveScoutTasks`
      );

      mermaid += `${spacing[1]}ImproveScoutSearch[Search]\n${spacing[1]}:::ImproveScoutLv2\n`;
      mermaid += `${mermaidData2.join("\n")}\n`;
    }
  }
  // console.log(mermaid);
  return mermaid;
};
const ImproveOutpostMermaid = (data) => {
  let mermaid = ``;

  for (var key of Object.keys(data)) {
    if (key.substring(0, 3) === "4.1") {
      for (var subkey of Object.keys(data[key])) {
        mermaid += `${spacing[1]}OutpostEfficientAndIntuitive[Outpost is more efficient and<br />intuitive to use]\n${spacing[1]}:::ImproveOutpostLv2\n`;
        if (subkey.substring(0, 5) === "4.1.1") {
          let mermaidData1 = data[key][subkey].map(
            (v, i) =>
              `${
                spacing[3]
              }OutpostEfficientAndIntuitiveMiscTask${i}("${prepTitle(
                v.title
              )}")\n${spacing[3]}:::ImproveOutpostTasks`
          );

          mermaid += `${spacing[2]}OutpostEfficientAndIntuitiveMisc[Misc]\n${spacing[2]}:::ImproveOutpostLv3\n`;
          mermaid += `${mermaidData1.join("\n")}\n`;
        }
        if (subkey.substring(0, 5) === "4.1.2") {
          let mermaidData1 = data[key][subkey].map(
            (v, i) =>
              `${
                spacing[3]
              }OutpostEfficientAndIntuitiveFeedbackTask${i}("${prepTitle(
                v.title
              )}")\n${spacing[3]}:::ImproveOutpostTasks`
          );

          mermaid += `${spacing[2]}OutpostEfficientAndIntuitiveFeedback[Misc]\n${spacing[2]}:::ImproveOutpostLv3\n`;
          mermaid += `${mermaidData1.join("\n")}\n`;
        }
        if (subkey.substring(0, 5) === "4.1.3") {
          let mermaidData1 = data[key][subkey].map(
            (v, i) =>
              `${
                spacing[3]
              }OutpostEfficientAndIntuitiveApprovalsTask${i}("${prepTitle(
                v.title
              )}")\n${spacing[3]}:::ImproveOutpostTasks`
          );

          mermaid += `${spacing[2]}OutpostEfficientAndIntuitiveApprovals[Misc]\n${spacing[2]}:::ImproveOutpostLv3\n`;
          mermaid += `${mermaidData1.join("\n")}\n`;
        }
        if (subkey.substring(0, 5) === "4.1.4") {
          let mermaidData1 = data[key][subkey].map(
            (v, i) =>
              `${
                spacing[3]
              }OutpostEfficientAndIntuitiveContentUpdatesTask${i}("${prepTitle(
                v.title
              )}")\n${spacing[3]}:::ImproveOutpostTasks`
          );

          mermaid += `${spacing[2]}OutpostEfficientAndIntuitiveContentUpdates[Misc]\n${spacing[2]}:::ImproveOutpostLv3\n`;
          mermaid += `${mermaidData1.join("\n")}\n`;
        }
      }
    }

    if (key.substring(0, 3) === "4.2") {
      let mermaidData2 = data[key].map(
        (v, i) =>
          `${
            spacing[2]
          }NecessaryInformationInServiceListingsTask${i}("${prepTitle(
            v.title
          )}")\n${spacing[2]}:::ImproveOutpostTasks`
      );

      mermaid += `${spacing[1]}NecessaryInformationInServiceListings[Service listings contain all<br />the necessary information for<br />someone to understand what it<br />is, who it's for, and how<br />it's run]\n${spacing[1]}:::ImproveOutpostLv2\n`;
      mermaid += `${mermaidData2.join("\n")}\n`;
    }
    if (key.substring(0, 3) === "4.3") {
      let mermaidData3 = data[key].map(
        (v, i) =>
          `${spacing[2]}OrganisationsMoreDetailedTask${i}("${prepTitle(
            v.title
          )}")\n${spacing[2]}:::ImproveOutpostTasks`
      );

      mermaid += `${spacing[1]}OrganisationsMoreDetailed[Organisations contain more detail]\n${spacing[1]}:::ImproveOutpostLv2\n`;
      mermaid += `${mermaidData3.join("\n")}\n`;
    }
    if (key.substring(0, 3) === "4.4") {
      let mermaidData4 = data[key].map(
        (v, i) =>
          `${spacing[2]}ServiceListingsAccessibleTask${i}("${prepTitle(
            v.title
          )}")\n${spacing[2]}:::ImproveOutpostTasks`
      );

      mermaid += `${spacing[1]}ServiceListingsAccessible[Service listings are more<br />accessible and easy to read]\n${spacing[1]}:::ImproveOutpostLv2\n`;
      mermaid += `${mermaidData4.join("\n")}\n`;
    }
    if (key.substring(0, 3) === "4.5") {
      let mermaidData4 = data[key].map(
        (v, i) =>
          `${spacing[2]}QuirksTask${i}("${prepTitle(v.title)}")\n${
            spacing[2]
          }:::ImproveOutpostTasks`
      );

      mermaid += `${spacing[1]}Quirks[Fixing quirks]\n${spacing[1]}:::ImproveOutpostLv2\n`;
      mermaid += `${mermaidData4.join("\n")}\n`;
    }
  }
  // console.log(mermaid);
  return mermaid;
};
const ProblemsToSolveMermaid = (data) => {
  let mermaid = ``;

  let mermaidData1 = data.map(
    (v, i) =>
      `${spacing[1]}ProblemsToSolveTask${i}("${prepTitle(v.title)}")\n${
        spacing[1]
      }:::ProblemsToSolveTasksStyle`
  );

  mermaid += `${mermaidData1.join("\n")}\n`;

  // console.log(mermaid);
  return mermaid;
};
