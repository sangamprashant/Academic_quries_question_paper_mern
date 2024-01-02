import "./Count.css";
import SubCountBox from "./SubCountBox";

export const fetchUserCount = async () => {
  const res = await fetch(`${process.env.DOMAIN}/api/count/visitors`,{
    // cache:"force-cache",  //SSG get static side props
    cache:"no-store",  //SSR get server side props
    // next: {
    //   revalidate:0,
    // }
  });
  const data = await res.json();
  return data;
};

export const fetchPaperCount = async () => {
  const res = await fetch(`${process.env.DOMAIN}/api/count/valid-paper`,{
    // cache:"force-cache",  //SSG get static side props
    cache:"no-store",  //SSR get server side props
    // next: {
    //   revalidate:0,
    // }
  });
  const data = await res.json();
  return data;
};

async function Count() {
  const count= await fetchUserCount();
  const paperCount = await fetchPaperCount()

  return (
    <div>
      <section id="counts" className="counts">
        <div className="container">
          <div className="row">
            <SubCountBox value={count} name={"Number of visitors"} icon={"eye"}/>
            <SubCountBox value={paperCount} name={"Papers"} icon={"file-text"}/>
            <SubCountBox value={"24/7"} name={"Hours Of Support"} icon={"headset"}/>
            <SubCountBox value={"02"} name={"Developers"} icon={"user"}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Count;
