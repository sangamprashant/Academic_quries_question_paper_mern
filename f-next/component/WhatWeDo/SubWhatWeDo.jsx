import Link from "next/link";

function SubWhatWeDo({ title, desc, pathTo, icon }) {
  return (
    <div className="col-md-4  d-flex ">
      <Link href={pathTo}>
        <div className="icon-box text-black">
          <div className="icon">
            <i className={`fa fa-${icon}`}></i>
          </div>
          <h4>
            <a>{title}</a>
          </h4>
          <p>{desc}</p>
        </div>
      </Link>
    </div>
  );
}

export default SubWhatWeDo;
