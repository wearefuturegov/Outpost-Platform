const { request } = require("@octokit/request");

exports.updateReadMe = async (generatedData) => {
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
};

exports.commitNewReadme = async (path, sha, encoding, updatedContent) => {
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
        committer: [{ name: "fg-dev bot", email: "fg-dev@tpximpact.com" }],
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
};
