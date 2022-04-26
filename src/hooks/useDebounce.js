const { useEffect } = require("react");

const useDebounce = (dependency, callback) => {
  useEffect(() => {
    const tmp = setTimeout(() => {
      if (typeof callback === "function") return callback();
    }, 500);
    return () => {
      clearTimeout(tmp);
    };
  }, [dependency, callback]);
};

export default useDebounce;
