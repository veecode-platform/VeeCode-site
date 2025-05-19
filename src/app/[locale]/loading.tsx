const LoadingStyle = {
  minHeight: "75vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const loading = () => {
  return (
    <>
      <div style={LoadingStyle}>Loading -- todo</div>
    </>
  );
};

export default loading;
