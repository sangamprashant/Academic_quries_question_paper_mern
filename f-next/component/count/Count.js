import { fetchPaperCount, fetchUserCount } from "@/api_calls";
import "./Count.css";
import SubCountBox from "./SubCountBox";

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
