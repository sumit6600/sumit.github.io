const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://sumit-12.herokuapp.com/";

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
