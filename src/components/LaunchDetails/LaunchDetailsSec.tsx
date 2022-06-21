import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { PathParams } from "../../types/PropTypes";
import { DataLaunch, LaunchDataVariables } from "../../types/LaunchTypes";
import noImage from "../../assets/no-image.png";
import back from "../../assets/back.png";
import { LAUNCH } from "../../queries/useGetLaunch";

const LaunchDetails = () => {
  const { id } = useParams<PathParams>();
  const { loading, data, error } = useQuery<DataLaunch, LaunchDataVariables>(
    LAUNCH,
    {
      variables: { id: id },
    }
  );
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/launch-list-sec");
  };

  if (error) {
    return null;
  }
  return (
    <>
      <div className="container">
        <div>
          <button
            style={{ background: "transparent", border: "none" }}
            onClick={handleBack}
          >
            <img width="20px" height="20px" src={back} alt="back" /> Back
          </button>
        </div>
        {error && <h1 style={{ color: "red" }}> {error}</h1>}
        {loading && <h1 style={{ color: "green" }}>Loading...</h1>}
        {data?.launch && (
          <div className="row">
            <div className="m-5 col-5">
              <div className="card text-center bg-transparent">
                {data.launch.links.mission_patch_small ? (
                  <img
                    src={data.launch.links.mission_patch_small}
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
                    Mission name : {data.launch.mission_name}
                  </h5>
                  {data.launch ? (
                    <p className="card-text">DETAILS : {data.launch.details}</p>
                  ) : (
                    <div>NO DETAILS</div>
                  )}
                  <p className="card-text">
                    Launch year : {data.launch.launch_year}
                  </p>
                  <p className="card-text">
                    Launch date : {data.launch.launch_date_local}
                  </p>
                </div>
              </div>
            </div>
            <div className="m-5 col-5">
              <div className="card text-center bg-transparent">
                <div className="card-body">
                  <h5 className="card-title">
                    Rocket name : {data.launch.rocket.rocket_name}
                  </h5>
                  <p className="card-text">
                    Rocket type : {data.launch.rocket.rocket_type}
                  </p>
                  <p className="card-text">
                    Launch year : {data.launch.launch_year}
                  </p>
                  {data.launch.links.flickr_images ? (
                    <div>
                      {data.launch.links.flickr_images.map((launchImg) => {
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
                  ) : (
                    <div>
                      {" "}
                      <img
                        src={noImage}
                        alt="noImage"
                        className="p-5 pb-5 card-image"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default LaunchDetails;
