import React, { useEffect, useState } from "react";

const Footer = () => {
  const [gitHubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/brandonBritton/portfolio")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div>
      <a href="https://github.com/brandonBritton/portfolio">
        <div>Designed &amp; Built by Brandon Britton 🤟</div>

        {gitHubInfo.stars && gitHubInfo.forks && (
          <div>
            <span>Stars: {gitHubInfo.stars.toLocalString()}</span>
            <span>Forks: {gitHubInfo.forks.toLocalString()}</span>
          </div>
        )}
      </a>
    </div>
  );
};

export default Footer;
