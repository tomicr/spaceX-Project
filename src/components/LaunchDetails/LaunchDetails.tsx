import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Launch } from "../../types/LaunchTypes";
import { PathParams } from "../../types/PropTypes";
const noImage = require("../../assets/no-image.png");
const back = require("../../assets/back.png");

const LaunchDetails = () => {
  const { id } = useParams<PathParams>();

  const { data: details, isPending, error } = useFetch<Launch>(
    `${process.env.REACT_APP_SPACEX_API}/${id}`
  );
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/launch-list");
  };
  return (
    <div className="container">
      <div>
        <button
          style={{ background: "transparent", border: "none" }}
          onClick={handleBack}
        >
          <img width="20px" height="20px" src={back} alt="back" /> Back
        </button>
      </div>
      {error && <div style={{ color: "red" }}> {error}</div>}
      {isPending && <h1 style={{ color: "green" }}>Loading....</h1>}
      {details && (
        <div className="row">
          <div className="m-5 col-5">
            <div className="card text-center bg-transparent">
              {details.links.mission_patch_small ? (
                <img
                  src={details.links.mission_patch_small}
                  className="p-3 card-img-top"
                  alt="launch"
                />
              ) : (
                <div>
                  <img
                    src={noImage}
                    alt="noImage"
                    className="p-3 card-img-top"
                  />
                </div>
              )}

              <div className="card-body">
                <h5 className="card-title">
                  Mission name : {details.mission_name}
                </h5>
                {details.details ? (
                  <p className="card-text">Details : {details.details}</p>
                ) : (
                  <div>NO DETAILS</div>
                )}
                <p className="card-text">Launch year : {details.launch_year}</p>
                <p className="card-text">
                  Launch date : {details.launch_date_local}
                </p>
              </div>
            </div>
          </div>
          <div className="m-5 col-5">
            <div className="card text-center bg-transparent">
              <div className="card-body">
                <h5 className="card-title">
                  Rocket name : {details.rocket.rocket_name}
                </h5>
                <p className="card-text">
                  Rocket type : {details.rocket.rocket_type}
                </p>
                <p className="card-text">Launch year : {details.launch_year}</p>
                <div className="row">
                  {details.links.flickr_images &&
                    details.links.flickr_images.map((launchImg) => {
                      return (
                        <div key={launchImg} className="col-5">
                          <img
                            src={launchImg}
                            className="p-1 card-img-top"
                            alt="launch"
                          />
                        </div>
                      );
                    })}
                </div>
                {!details.links.flickr_images.length && (
                  <img
                    src={noImage}
                    alt="noImage"
                    className="p-5 pb-5 card-image"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default LaunchDetails;
