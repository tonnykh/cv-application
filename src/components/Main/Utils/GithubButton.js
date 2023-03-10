import { BsGithub } from "react-icons/bs";

const GithubButton = (props) => {
  const { username, projectName } = props;

  return (
    <a
      href={`https://github.com/${username}/${projectName}`}
      target="_blank"
      rel="noopener noreferrer"
      className="GithubButton"
      title="Check out my GitHub!"
    >
      <BsGithub />
      {username}
    </a>
  );
};

export default GithubButton;
