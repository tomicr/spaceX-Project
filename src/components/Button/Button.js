const ButtonComponent = ({ title }) => {
  return (
    <>
      <div className="mb-2">
        <button type="button" className="btn btn-primary btn-lg">
          {title}
        </button>{" "}
      </div>
    </>
  );
};
export default ButtonComponent;
