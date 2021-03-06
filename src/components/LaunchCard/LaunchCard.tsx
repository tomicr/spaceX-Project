import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../Button/Button";
import { LaunchProps } from "../../types/PropTypes";
const noImage = require("../../assets/no-image.png");

const LaunchCard = ({ launch }: LaunchProps) => {
  return (
    <div className="card text-center bg-transparent">
      {launch.links.mission_patch_small ? (
        <img
          src={launch.links.mission_patch_small}
          className="p-3 card-img-top"
          alt="launch"
        />
      ) : (
        <div>
          <img src={noImage} alt="noImage" className="p-3 card-img-top" />
        </div>
      )}

      <div className="card-body">
        <h5 className="card-title">{launch.mission_name}</h5>
        <h6 className="card-title">{launch.launch_year}</h6>
        {launch.details ? (
          <p className="card-text">{launch.details}</p>
        ) : (
          <div>NO DETAILS</div>
        )}
        <Link to={`/launch-details-sec/${launch.id}`}>
          <ButtonComponent type="button" title="More Details" />
        </Link>
      </div>
    </div>
  );
};
export default LaunchCard;
