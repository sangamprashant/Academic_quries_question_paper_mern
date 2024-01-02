function SubCountBox({ value, name, icon }) {
  return (
    <div className="col-lg-3 col-6 mt-5 mt-lg-0">
      <div className="count-box">
        <i className={`fa fa-${icon}`}></i>
        <span>{value}</span>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default SubCountBox;
