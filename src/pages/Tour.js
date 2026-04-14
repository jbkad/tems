import { useState } from "react";
import { PastTours, UpcomingTours } from "../components/TourData";
import "../styles/tour.scss";

export default function Tour() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="tour">
      <div className="container">
        <div className="tour-tabs" role="tablist" aria-label="Tour dates">
          <button
            type="button"
            className={`tour-tab ${activeTab === "upcoming" ? "is-active" : ""}`}
            onClick={() => setActiveTab("upcoming")}
            role="tab"
            aria-selected={activeTab === "upcoming"}
          >
            Upcoming
          </button>
          <button
            type="button"
            className={`tour-tab ${activeTab === "past" ? "is-active" : ""}`}
            onClick={() => setActiveTab("past")}
            role="tab"
            aria-selected={activeTab === "past"}
          >
            Past
          </button>
        </div>

        {activeTab === "upcoming" ? (
          <UpcomingTours limit={null} />
        ) : (
          <PastTours limit={null} />
        )}
      </div>
    </div>
  );
}
