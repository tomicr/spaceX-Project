const { useEffect } = require("react");

const useDebounce = (
  callback1: { (): void },
  callback2: { (): void },
  dependency: string
) => {
  useEffect(() => {
    if (
      dependency.length > 4 ||
      (dependency.length > 0 && isNaN(parseInt(dependency)))
    ) {
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
