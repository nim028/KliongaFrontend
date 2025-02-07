import React from 'react'

export default function StatsPaiement() {
  return (
    <div className="sm:w-[98%] w-fit h-[120px] sm:h-fit mx-auto">
      <div className="stats stats-vertical  sm:stats-horizontal w-full h-full shadow overflow-y-auto snap-center sm:overflow-x-auto sm:snap-x ">
        <div className="stat">
          <div className="stat-title">Total Abonnement  ecole</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Abonnement Service</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Paiement</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
    </div>
  );
}
