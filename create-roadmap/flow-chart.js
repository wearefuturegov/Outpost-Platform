const { updateReadMe } = require("./git-update");
const { prepTitle, flowchartTemplate } = require("./utils");
const fs = require("fs");

exports.outputRoadmapFlowChart = (data) => {
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
  generatedData = flowchartTemplate
    .replace("###EASIER_TO_ADOPT_TASKS###", mermaidOne)
    .replace("###IMPROVE_DATA_TASKS###", mermaidTwo)
    .replace("###IMPROVE_SCOUT_TASKS###", mermaidThree)
    .replace("###IMPROVE_OUTPOST_TASKS###", mermaidFour)
    .replace("###PROBLEMS_TO_SOLVE_TASKS###", mermaidFive);

  return generatedData;
};

const easierToAdoptMermaid = (data) => {
  let mermaid = ``;

  for (var key of Object.keys(data)) {
    mermaid += `    %% ${key} - tasks\n\n`;
    if (key.substring(0, 3) === "1.1") {
      let mermaidData1 = data[key].map(
        (v, i) =>
          `     RemoveRelianceOnToolsTask${i}("${prepTitle(
            v.title
          )}"):::EasierToAdoptTasks\n     click RemoveRelianceOnToolsTask${i} href "${
            v.html_url
          }"`
      );

      mermaid += `    subgraph RemoveRelianceOnToolsTasks[ ]\n`;
      mermaid += `${mermaidData1.join("\n")}\n`;
      mermaid += `    end\n\n`;
    }
    if (key.substring(0, 3) === "1.2") {
      let mermaidData2 = data[key].map(
        (v, i) =>
          `     MakeSetupEasierTask${i}("${prepTitle(
            v.title
          )}"):::EasierToAdoptTasks\n     click MakeSetupEasierTask${i} href "${
            v.html_url
          }"`
      );

      mermaid += `    subgraph MakeSetupEasierTasks[ ]\n`;
      mermaid += `${mermaidData2.join("\n")}\n`;
      mermaid += `    end\n\n`;
    }
    if (key.substring(0, 3) === "1.3") {
      let mermaidData3 = data[key].map(
        (v, i) =>
          `     MakeCustomisationEasierTask${i}("${prepTitle(
            v.title
          )}"):::EasierToAdoptTasks\n     click MakeCustomisationEasierTask${i} href "${
            v.html_url
          }"`
      );

      mermaid += `    subgraph MakeCustomisationEasierTasks[ ]\n`;
      mermaid += `${mermaidData3.join("\n")}\n`;
      mermaid += `    end\n\n`;
    }
    if (key.substring(0, 3) === "1.4") {
      let mermaidData4 = data[key].map(
        (v, i) =>
          `     MakeDevelopmentEasierTask${i}(${v.title}):::EasierToAdoptTasks\n     click MakeDevelopmentEasierTask${i} href "${v.html_url}"`
      );

      mermaid += `    subgraph MakeDevelopmentEasierTasks[ ]\n`;
      mermaid += `${mermaidData4.join("\n")}\n`;
      mermaid += `    end\n\n`;
    }
  }
  // console.log(mermaid);
  return mermaid;
};

const ImproveDataMermaid = (data) => {
  let mermaid = ``;

  mermaid += `    %% 2.0_ Improve data quality and ease of sharing - tasks\n\n`;

  let mermaidData1 = data.map(
    (v, i) =>
      `     ImproveDataQualityTask${i}("${prepTitle(
        v.title
      )}"):::ImproveDataQualityTasks\n     click ImproveDataQualityTask${i} href "${
        v.html_url
      }"`
  );

  mermaid += `    subgraph ImproveDataQualityTasks[ ]\n`;
  mermaid += `${mermaidData1.join("\n")}\n`;
  mermaid += `    end\n\n`;

  // console.log(mermaid);
  return mermaid;
};
const ImproveScoutMermaid = (data) => {
  let mermaid = ``;

  for (var key of Object.keys(data)) {
    mermaid += `    %% ${key} - tasks\n\n`;
    if (key.substring(0, 3) === "3.1") {
      let mermaidData1 = data[key].map(
        (v, i) =>
          `     ImproveScoutMiscTask${i}("${prepTitle(
            v.title
          )}"):::ImproveScoutTasks\n     click ImproveScoutMiscTask${i} href "${
            v.html_url
          }"`
      );

      mermaid += `    subgraph ImproveScoutMiscTasks[ ]\n`;
      mermaid += `${mermaidData1.join("\n")}\n`;
      mermaid += `    end\n\n`;
    }
    if (key.substring(0, 3) === "3.2") {
      let mermaidData2 = data[key].map(
        (v, i) =>
          `     ImproveScoutSearchTask${i}("${prepTitle(
            v.title
          )}"):::ImproveScoutTasks\n     click ImproveScoutSearchTask${i} href "${
            v.html_url
          }"`
      );

      mermaid += `    subgraph ImproveScoutSearchTasks[ ]\n`;
      mermaid += `${mermaidData2.join("\n")}\n`;
      mermaid += `    end\n\n`;
    }
  }
  // console.log(mermaid);
  return mermaid;
};
const ImproveOutpostMermaid = (data) => {
  let mermaid = ``;

  for (var key of Object.keys(data)) {
    mermaid += `    %% ${key} - tasks\n\n`;
    if (key.substring(0, 3) === "4.1") {
      for (var subkey of Object.keys(data[key])) {
        mermaid += `    %% ${subkey} - tasks\n\n`;
        if (subkey.substring(0, 5) === "4.1.1") {
          let mermaidData1 = data[key][subkey].map(
            (v, i) =>
              `     OutpostEfficientAndIntuitiveMiscTask${i}("${prepTitle(
                v.title
              )}"):::ImproveOutpostTasks\n     click OutpostEfficientAndIntuitiveMiscTask${i} href "${
                v.html_url
              }"`
          );

          mermaid += `    subgraph OutpostEfficientAndIntuitiveMiscTasks[ ]\n`;
          mermaid += `${mermaidData1.join("\n")}\n`;
          mermaid += `    end\n\n`;
        }
        if (subkey.substring(0, 5) === "4.1.2") {
          let mermaidData1 = data[key][subkey].map(
            (v, i) =>
              `     OutpostEfficientAndIntuitiveFeedbackTask${i}("${prepTitle(
                v.title
              )}"):::ImproveOutpostTasks\n     click OutpostEfficientAndIntuitiveFeedbackTask${i} href "${
                v.html_url
              }"`
          );

          mermaid += `    subgraph OutpostEfficientAndIntuitiveFeedbackTasks[ ]\n`;
          mermaid += `${mermaidData1.join("\n")}\n`;
          mermaid += `    end\n\n`;
        }
        if (subkey.substring(0, 5) === "4.1.3") {
          let mermaidData1 = data[key][subkey].map(
            (v, i) =>
              `     OutpostEfficientAndIntuitiveApprovalsTask${i}("${prepTitle(
                v.title
              )}"):::ImproveOutpostTasks\n     click OutpostEfficientAndIntuitiveApprovalsTask${i} href "${
                v.html_url
              }"`
          );

          mermaid += `    subgraph OutpostEfficientAndIntuitiveApprovalsTasks[ ]\n`;
          mermaid += `${mermaidData1.join("\n")}\n`;
          mermaid += `    end\n\n`;
        }
        if (subkey.substring(0, 5) === "4.1.4") {
          let mermaidData1 = data[key][subkey].map(
            (v, i) =>
              `     OutpostEfficientAndIntuitiveContentUpdatesTask${i}("${prepTitle(
                v.title
              )}"):::ImproveOutpostTasks\n     click OutpostEfficientAndIntuitiveContentUpdatesTask${i} href "${
                v.html_url
              }"`
          );

          mermaid += `    subgraph OutpostEfficientAndIntuitiveContentUpdatesTasks[ ]\n`;
          mermaid += `${mermaidData1.join("\n")}\n`;
          mermaid += `    end\n\n`;
        }
      }
    }

    if (key.substring(0, 3) === "4.2") {
      let mermaidData2 = data[key].map(
        (v, i) =>
          `     NecessaryInformationInServiceListingsTask${i}("${prepTitle(
            v.title
          )}"):::ImproveOutpostTasks\n     click NecessaryInformationInServiceListingsTask${i} href "${
            v.html_url
          }"`
      );

      mermaid += `    subgraph NecessaryInformationInServiceListingsTasks[ ]\n`;
      mermaid += `${mermaidData2.join("\n")}\n`;
      mermaid += `    end\n\n`;
    }
    if (key.substring(0, 3) === "4.3") {
      let mermaidData3 = data[key].map(
        (v, i) =>
          `     OrganisationsMoreDetailedTask${i}("${prepTitle(
            v.title
          )}"):::ImproveOutpostTasks\n     click OrganisationsMoreDetailedTask${i} href "${
            v.html_url
          }"`
      );

      mermaid += `    subgraph OrganisationsMoreDetailedTasks[ ]\n`;
      mermaid += `${mermaidData3.join("\n")}\n`;
      mermaid += `    end\n\n`;
    }
    if (key.substring(0, 3) === "4.4") {
      let mermaidData4 = data[key].map(
        (v, i) =>
          `     ServiceListingsAccessibleTask${i}("${prepTitle(
            v.title
          )}"):::ImproveOutpostTasks\n     click ServiceListingsAccessibleTask${i} href "${
            v.html_url
          }"`
      );

      mermaid += `    subgraph ServiceListingsAccessibleTasks[ ]\n`;
      mermaid += `${mermaidData4.join("\n")}\n`;
      mermaid += `    end\n\n`;
    }
    if (key.substring(0, 3) === "4.5") {
      let mermaidData4 = data[key].map(
        (v, i) =>
          `     QuirksTask${i}("${prepTitle(
            v.title
          )}"):::ImproveOutpostTasks\n     click QuirksTask${i} href "${
            v.html_url
          }"`
      );

      mermaid += `    subgraph QuirksTasks[ ]\n`;
      mermaid += `${mermaidData4.join("\n")}\n`;
      mermaid += `    end\n\n`;
    }
  }
  // console.log(mermaid);
  return mermaid;
};
const ProblemsToSolveMermaid = (data) => {
  let mermaid = ``;

  mermaid += `    %% 5 Problems to solve - tasks\n\n`;

  let mermaidData1 = data.map(
    (v, i) =>
      `     ProblemsToSolveTask${i}("${prepTitle(
        v.title
      )}"):::ProblemsToSolveTasksStyle\n     click ProblemsToSolveTask${i} href "${
        v.html_url
      }"`
  );

  mermaid += `    subgraph ProblemsToSolveTasks[ ]\n`;
  mermaid += `${mermaidData1.join("\n")}\n`;
  mermaid += `    end\n\n`;

  // console.log(mermaid);
  return mermaid;
};
