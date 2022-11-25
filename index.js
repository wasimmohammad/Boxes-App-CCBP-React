const Box = (props) => {
  //  Write your code here.
  const { className, message } = props;
  const boxContainerElement = `box-container ${className}`;

  return (
    <div className={boxContainerElement}>
      <p className="box-title">{message}</p>
    </div>
  );
};

const element = (
  <div className="boxes-main-container">
    <h1 className="box-heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="small-box" message="Small" />
      <Box className="medium-box" message="Medium" />
      <Box className="large-box" message="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
