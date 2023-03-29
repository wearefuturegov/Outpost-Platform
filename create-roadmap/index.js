const { request, graphql } = require("@octokit/request");
const fs = require("fs");
const readmeTemplate = fs.readFileSync(
  "./create-roadmap/roadmap-template.md",
  "utf8"
);

const TopLevelTags = [
  "1.0_ Make the Outpost platform easier to adopt",
  "2.0_ Improve data quality and ease of sharing",
  "3.0_ Improvements to Scout",
  "4.0_ Make Outpost a better easier to use product",
  "5.0_ Problems to solve",
];
// These are the tags we fetch tasks for
const EasierToAdopt = [
  "1.1~ Remove reliance on tools others may not have",
  "1.2~ Make set up easier",
  "1.3~ Make customisation easier",
  "1.4~ Make development easier",
];

const ImproveData = ["2.0_ Improve data quality and ease of sharing"];
const ImproveScout = ["3.1~ Misc", "3.1~ Search"];
const ImproveOutpost = [
  "4.2~ Listings contain all necessary information",
  "4.3~ Organisations contain more detail",
  "4.4~ Service listings accessible and easy to read",
  "4.5~ Fixing quirks",
]; // 4.1~ Outpost is more efficient and intuitive
const ImproveOutpostEfficient = [
  "4.1.1~ Misc",
  "4.1.2~ Feedback",
  "4.1.3~ Approvals",
  "4.1.4~ Content updates",
];
const ProblemsToSolve = ["5.0_ Problems to solve"];

const prepTitle = (title) => {
  return title.replace(/['"]/g, "").replace(/(.{1,29})(?:\n|$| )/g, "$1<br />");
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
  console.log(mermaid);
  return mermaid;
};

const improveDataMermaid = (data) => {
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

  console.log(mermaid);
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
          )}"):::ImproveScoutTasks\n     click ImproveScoutSearchTask1${i} href "${
            v.html_url
          }"`
      );

      mermaid += `    subgraph ImproveScoutSearchTasks[ ]\n`;
      mermaid += `${mermaidData2.join("\n")}\n`;
      mermaid += `    end\n\n`;
    }
  }
  console.log(mermaid);
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
  console.log(mermaid);
  return mermaid;
};
const ProblemsToSolveMermaid = (data) => {
  let mermaid = ``;

  mermaid += `    %% 5 Problems to solve - tasks\n\n`;

  let mermaidData1 = data.map(
    (v, i) =>
      `     ProblemsToSolveTask${i}("${prepTitle(
        v.title
      )}"):::ProblemsToSolveTaskStyle${i}\n     click ProblemsToSolveTask${i} href "${
        v.html_url
      }"`
  );

  mermaid += `    subgraph ProblemsToSolveTasks[ ]\n`;
  mermaid += `${mermaidData1.join("\n")}\n`;
  mermaid += `    end\n\n`;

  console.log(mermaid);
  return mermaid;
};

const outputRoadmap = (data) => {
  mermaidOne = easierToAdoptMermaid(
    data["1.0_ Make the Outpost platform easier to adopt"]
  );
  mermaidTwo = improveDataMermaid(
    data["2.0_ Improve data quality and ease of sharing"]
  );
  mermaidThree = ImproveScoutMermaid(data["3.0_ Improvements to Scout"]);
  mermaidFour = ImproveOutpostMermaid(
    data["4.0_ Make Outpost a better easier to use product"]
  );
  mermaidFive = ProblemsToSolveMermaid(data["5.0_ Problems to solve"]);
  generatedData = readmeTemplate
    .replace("###EASIER_TO_ADOPT_TASKS###", mermaidOne)
    .replace("###IMPROVE_DATA_TASKS###", mermaidTwo)
    .replace("###IMPROVE_SCOUT_TASKS###", mermaidThree)
    .replace("###IMPROVE_OUTPOST_TASKS###", mermaidFour)
    .replace("###PROBLEMS_TO_SOLVE_TASKS###", mermaidFive);

  // if (process.env.COMMIT_CHANGE === "true") {
  console.log(`Committing update to ROADMAP.md`);
  updateReadMe(generatedData);
  // } else {
  // fs.writeFileSync("create-roadmap/ROADMAP.md", generatedData);
  // }
};

async function updateReadMe(generatedData) {
  try {
    console.log("Getting current ROADMAP.md");
    const res = await request(
      `GET /repos/wearefuturegov/Outpost-Platform/contents/create-roadmap/ROADMAP.md`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          authorization: process.env.GITHUB_TOKEN,
        },
      }
    );
    const { path, sha, content, encoding, size, html_url } = res.data;

    console.log(`Current version SHA: ${sha}. ${html_url}`);
    if (sha) {
      commitNewReadme(path, sha, encoding, generatedData);
    }
  } catch (error) {
    console.log(error);
  }
}

async function commitNewReadme(path, sha, encoding, updatedContent) {
  try {
    console.log("Updating current ROADMAP.md with new version");
    const updatedRoadmap = await request(
      `PUT /repos/wearefuturegov/Outpost-Platform/contents/create-roadmap/ROADMAP.md`,
      {
        owner: "wearefuturegov",
        repo: "Outpost-Platform",
        message: "Update ROADMAP",
        content: Buffer.from("Test", "utf-8").toString(encoding),
        path: "create-roadmap/ROADMAP.md",
        sha,
        type: "file",
        encoding: "base64",
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          authorization: process.env.GITHUB_TOKEN,
        },
      }
    );

    console.log(`Roadmap update committed: ${updatedRoadmap.commit.html_url}`);
  } catch (err) {
    console.log(err);
  }
}

const init = async () => {
  let grouped = [];

  const EasierToAdoptIssues = await request(
    "GET /repos/wearefuturegov/Outpost-Platform/issues",
    {
      owner: "wearefuturegov",
      repo: "Outpost-Platform",
      state: "open",
      labels: "1.0_ Make the Outpost platform easier to adopt",
      sort: "asc",
      per_page: 100,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        authorization: process.env.GITHUB_TOKEN,
      },
    }
  );

  grouped["1.0_ Make the Outpost platform easier to adopt"] = [];
  EasierToAdopt.map((a) => {
    grouped["1.0_ Make the Outpost platform easier to adopt"][a] =
      EasierToAdoptIssues.data.filter((p) => {
        return p.labels.find((l) => l.name === a);
      });
  });

  const ImproveDataIssues = await request(
    "GET /repos/wearefuturegov/Outpost-Platform/issues",
    {
      owner: "wearefuturegov",
      repo: "Outpost-Platform",
      state: "open",
      labels: "2.0_ Improve data quality and ease of sharing",
      sort: "asc",
      per_page: 100,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        authorization: process.env.GITHUB_TOKEN,
      },
    }
  );

  ImproveData.map((a) => {
    grouped[a] = ImproveDataIssues.data.filter((p) => {
      return p.labels.find((l) => l.name === a);
    });
  });

  const ImproveScoutIssues = await request(
    "GET /repos/wearefuturegov/Outpost-Platform/issues",
    {
      owner: "wearefuturegov",
      repo: "Outpost-Platform",
      state: "open",
      labels: "3.0_ Improvements to Scout",
      sort: "asc",
      per_page: 100,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        authorization: process.env.GITHUB_TOKEN,
      },
    }
  );

  grouped["3.0_ Improvements to Scout"] = [];
  ImproveScout.map((a) => {
    grouped["3.0_ Improvements to Scout"][a] = ImproveScoutIssues.data.filter(
      (p) => {
        return p.labels.find((l) => l.name === a);
      }
    );
  });

  const ImproveOutpostIssues = await request(
    "GET /repos/wearefuturegov/Outpost-Platform/issues",
    {
      owner: "wearefuturegov",
      repo: "Outpost-Platform",
      state: "open",
      labels: "4.0_ Make Outpost a better easier to use product",
      sort: "asc",
      per_page: 100,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        authorization: process.env.GITHUB_TOKEN,
      },
    }
  );

  grouped["4.0_ Make Outpost a better easier to use product"] = [];
  grouped["4.0_ Make Outpost a better easier to use product"][
    "4.1~ Outpost is more efficient and intuitive"
  ] = [];

  ImproveOutpostEfficient.map((a) => {
    grouped["4.0_ Make Outpost a better easier to use product"][
      "4.1~ Outpost is more efficient and intuitive"
    ][a] = ImproveOutpostIssues.data.filter((p) => {
      return p.labels.find((l) => l.name === a);
    });
  });

  ImproveOutpost.map((a) => {
    grouped["4.0_ Make Outpost a better easier to use product"][a] =
      ImproveOutpostIssues.data.filter((p) => {
        return p.labels.find((l) => l.name === a);
      });
  });

  const ProblemsToSolveIssues = await request(
    "GET /repos/wearefuturegov/Outpost-Platform/issues",
    {
      owner: "wearefuturegov",
      repo: "Outpost-Platform",
      state: "open",
      labels: "5.0_ Problems to solve",
      sort: "asc",
      per_page: 100,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        authorization: process.env.GITHUB_TOKEN,
      },
    }
  );

  ProblemsToSolve.map((a) => {
    grouped[a] = ProblemsToSolveIssues.data.filter((p) => {
      return p.labels.find((l) => l.name === a);
    });
  });

  outputRoadmap(grouped);
};

init();
