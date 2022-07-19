import React from "react";
import PropTypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="mb-2 rounded-lg bg-blue-100 hover:bg-blue-200">
      <div className="card-body">
        <h3 className="mb-2 text-xl text-neutral font-semibold">
          <a href={html_url}>
            <FaLink className="inline mr-1" />
            {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="badge badge-neutral badge-lg mr-1 lg:mr-2 ">
            <FaEye className="mr-1 lg:mr-2" />
            {watchers_count}
          </div>
          <div className=" badge badge-primary badge-lg mr-1 lg:mr-2">
            <FaStar className="mr-1 lg:mr-2" />
            {stargazers_count}
          </div>
          <div className="badge badge-secondary badge-lg mr-1 lg:mr-2">
            <FaInfo className="mr-1 lg:mr-2" />
            {open_issues}
          </div>
          <div className="badge badge-accent badge-lg mr-1 lg:mr-2">
            <FaUtensils className="mr-1 lg:mr-2" />
            {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
