const { useEffect } = require("react");

// const useDebounce = (dependency, callback) => {
//   useEffect(() => {
//     const tmp = setTimeout(() => {
//       if (typeof callback === "function") return callback();
//     }, 500);
//     return () => {
//       clearTimeout(tmp);
//     };
//   }, [dependency]);
// };

// export default useDebounce;

const useDebounce = (callback1, callback2, dependency) => {
  useEffect(() => {
    if (
      dependency.length > 4 ||
      (dependency.length > 0 && isNaN(parseInt(dependency)))
    ) {
      // eslint-disable-next-line no-alert
      alert(
        "Filter term format is not correct! Filter must be a 4 digit number."
      );
    }
    callback2();
    if (dependency.length === 4 || !dependency) {
      callback1();
    } else {
      const tmp = setTimeout(() => {
        callback1();
      }, 500);

      return () => {
        clearTimeout(tmp);
      };
    }
  }, [dependency, callback1, callback2]);
};
export default useDebounce;
