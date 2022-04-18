import { Link } from "react-router-dom";
import ButtonComponent from "../Button/Button";

const LaunchCard = ({ launch }) => {
  return (
    <div className="card">
      {launch.links.mission_patch_small ? (
        <img
          src={launch.links.mission_patch_small}
          className="p-3 card-img-top"
          alt="launch"
        />
      ) : (
        <div>NO IMAGE</div>
      )}

      <div className="card-body">
        <h5 className="card-title">{launch.mission_name}</h5>
        {launch.details ? (
          <p className="card-text">{launch.details}</p>
        ) : (
          <div>NO DETAILS</div>
        )}
        <Link to={`/launchDetails/${launch.flight_number}`}>
          <ButtonComponent title="More Details" />
        </Link>
      </div>
    </div>
  );
};
export default LaunchCard;
