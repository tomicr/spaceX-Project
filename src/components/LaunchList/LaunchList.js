import { useState, useRef, useCallback, useEffect } from "react";
import LaunchCard from "../../components/LaunchCard/LaunchCard";
import useDebounce from "../../hooks/useDebounce";
import useFetch from "../../hooks/useFetch";
import InputComponent from "../Input/InputComponent";
import LogoutComponent from "../Logout/LogoutComponent";

const LaunchList = () => {
  const [offset, setOffset] = useState(0);
  const limit = 20;
  const [filter, setFilter] = useState("");
  const [inputFilter, setInputFilter] = useState("");
  const [launches, setLaunches] = useState([]);
  const { data, isPending, error } = useFetch(
    `${process.env.REACT_APP_SPACEX_API}?offset=${offset}&limit=${limit}&launch_year=${filter}`
  );

  useEffect(() => {
    if (data) {
      setLaunches((prevVal) => prevVal.concat(data));
    }
  }, [data]);
  const observer = useRef();
  const lastLaunchRefElement = useCallback(
    (node) => {
      if (isPending) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (window.scrollY) {
            setOffset((prevOffset) => prevOffset + 20);
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [isPending]
  );

  const handleSearch = (e) => {
    setInputFilter(e.target.value);
  };

  useDebounce(inputFilter, () => {
    setFilter(inputFilter);
    setOffset(0);
    setLaunches([]);
  });

  return (
    <div className="container">
      <LogoutComponent />
      <InputComponent
        onChange={handleSearch}
        value={inputFilter}
        placeholder="Find launches by year..."
      />

      <div className="row">
        {error && <div style={{ color: "red" }}>{error}</div>}
        {isPending && <h1 style={{ color: "green" }}>Loading...</h1>}
        {launches &&
          launches.map((launch, index) => {
            return (
              <div className="m-5 col-3" key={index}>
                <div>
                  <LaunchCard launch={launch} />
                </div>
              </div>
            );
          })}
        <div ref={lastLaunchRefElement}></div>
      </div>
    </div>
  );
};
export default LaunchList;
