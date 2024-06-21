function SubCountBox({ value, name, icon }) {
  return (
    <div className="count-box">
      <i className={`fa fa-${icon}`}></i>
      <span>{value}</span>
      <p>{name}</p>
    </div>
  );
}

export default SubCountBox;
