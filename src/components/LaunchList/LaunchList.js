import LaunchCard from "../../components/LaunchCard/LaunchCard";
import useFetch from "../../hooks/useFetch";

const LaunchList = () => {
  const { data: launches, isPending, error } = useFetch(
    process.env.REACT_APP_SPACEX_API
  );

  return (
    <div className="container">
      <div className="row">
        {error && <div style={{ color: "red" }}>{error}</div>}
        {isPending && <h1 style={{ color: "green" }}>Loading...</h1>}
        {launches &&
          launches.map((launch) => {
            return (
              <div className="m-5 col-3" key={launch.mission_name}>
                <div>
                  <LaunchCard launch={launch} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default LaunchList;
