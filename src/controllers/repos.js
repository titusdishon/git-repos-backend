import axios from "axios";

export const getUserRepos = async (req, res) => {
  const { username } = req.query;
  if (!username || username === "") {
    return res.status(400).send("username is required");
  }
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    res.status(200).send(response.data);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const getARepo = async (req, res) => {
  const { user, repo, branch } = req.query;
  if (
    !user ||
    !repo ||
    !branch ||
    user === "" ||
    repo === "" ||
    branch === ""
  ) {
    return res.status(400).send("user, repo and branch are required");
  }
  try {
    const response = await axios.get(
      `https://raw.githubusercontent.com/${user}/${repo}/${branch}/README.md`
    );
    res.status(200).send(response.data);
  } catch (err) {
    res.status(400).send(err);
  }
};
