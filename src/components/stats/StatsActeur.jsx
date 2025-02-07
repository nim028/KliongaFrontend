import React from "react";

export default function StatsActeur() {
  return (
    <div className="sm:w-[98%] w-fit h-[120px] sm:h-fit mx-auto">
      <div className="stats stats-vertical  sm:stats-horizontal w-full h-full shadow overflow-y-auto snap-center sm:overflow-x-auto sm:snap-x ">
        <div className="stat">
          <div className="stat-title">Total Parent</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Eleve</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Enseignant</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
    </div>
  );
}
