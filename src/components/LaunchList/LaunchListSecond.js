import { useState, useRef, useCallback, useEffect } from "react";
import LaunchCard from "../../components/LaunchCard/LaunchCard";
import useDebounce from "../../hooks/useDebounce";
import InputComponent from "../Input/InputComponent";
import LogoutComponent from "../Logout/LogoutComponent";
import { useQuery } from "@apollo/client";
import { LAUNCHES } from "../../hooks/useGetLaunches";

const LaunchList = () => {
  const [offset, setOffset] = useState(0);
  const limit = 20;
  const [filter, setFilter] = useState("");
  const [inputFilter, setInputFilter] = useState("");
  const [launches, setLaunches] = useState([]);
  const { loading, data, error } = useQuery(LAUNCHES, {
    variables: { limit: limit, offset: offset, launch_year: filter },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (data) {
      setLaunches((prevVal) => prevVal.concat(data.launchesPast));
    }
  }, [data]);
  const observer = useRef();
  const lastLaunchRefElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (launches.length % 20 === 0) {
            setOffset((prevOffset) => prevOffset + 20);
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const handleSearch = (e) => {
    setInputFilter(e.target.value);
  };

  useDebounce(
    useCallback(() => {
      setFilter(inputFilter);
    }, [inputFilter]),
    useCallback(() => {
      setOffset(0);
      setLaunches([]);
    }, []),
    inputFilter
  );
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <InputComponent
          onChange={handleSearch}
          value={inputFilter}
          placeholder="Find launches by year..."
        />
        <LogoutComponent />
      </div>
      <div className="row">
        {error && <div style={{ color: "red" }}>{error}</div>}
        {loading && <h1 style={{ color: "green" }}>Loading...</h1>}
        {launches &&
          launches.map((launch, index) => {
            if (launches.length === index + 1) {
              return (
                <div
                  className="m-5 col-3"
                  key={index}
                  ref={lastLaunchRefElement}
                >
                  <LaunchCard launch={launch} />
                </div>
              );
            } else {
              return (
                <div className="m-5 col-3" key={index}>
                  <LaunchCard launch={launch} />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};
export default LaunchList;
