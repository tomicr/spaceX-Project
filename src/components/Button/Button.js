const ButtonComponent = ({ title, type }) => {
  return (
    <>
      <div className="mb-2">
        <button type={type} className="btn btn-primary btn-lg mt-3">
          {title}
        </button>
      </div>
    </>
  );
};
export default ButtonComponent;
