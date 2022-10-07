import { FC } from "react";

interface IssueProps {
  url: string;
  repositoryUrl: string;
  number: number;
  title: string;
  labels: { name: string; color: string; description: string }[];
}

const Issue: FC<IssueProps> = () => {
  return <div>Issue</div>;
};

export default Issue;
