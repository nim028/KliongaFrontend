import React from "react";
import img from "../../assets/images/anonyme.jpg";
export default function AvatarGroup({ data }) {
  return (
    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
      {data.map((d, i) => (
        <div key={i} className="avatar">
          <div className="w-12">
            <img src={d.img} width={12} className="rounded-full" />
          </div>
        </div>
      ))}
      <div className="avatar placeholder">
        <div className="w-12 bg-neutral text-neutral-content">
          <span>+{data.length / 2}</span>
        </div>
      </div>
    </div>
  );
}
