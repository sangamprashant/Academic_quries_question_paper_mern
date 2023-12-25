"use client"
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

function SubCountBox(props) {
  const router = useRouter();

  useEffect(() => {
    router.reload();
  }, []);

  return (
    <div className="col-lg-3 col-6 mt-5 mt-lg-0">
      <div className="count-box">
        <i className="fa fa-headset"></i>
        <span>24/7</span>
        <p>Hours Of Support</p>
      </div>
    </div>
  );
}

export default SubCountBox;
