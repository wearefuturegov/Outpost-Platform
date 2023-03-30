const { request } = require("@octokit/request");
const {
  EasierToAdopt,
  ImproveData,
  ImproveScout,
  ImproveOutpostEfficient,
  ImproveOutpost,
  ProblemsToSolve,
} = require("./labels");

exports.getIssues = async () => {
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

  return grouped;
};
