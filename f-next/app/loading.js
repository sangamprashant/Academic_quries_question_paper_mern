import Image from "next/image";

function Loading() {
  return (<>

    <div className="loading-container">
      <div className="loading-bar " />

    </div>
    <div className="animation-path">
      <Image src="/loading.gif" height="150" width="200"/>
    </div>
  </>
  );
}
export default Loading;
