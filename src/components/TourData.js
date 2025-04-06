import { data } from "../data/tour";
import "../styles/tour.scss";

function checkDate(tour) {
  const today = new Date();
  const eventDate = new Date(today.getFullYear(), tour.monthIndex, tour.date);
  return eventDate >= today;
}

export function Dates({ tours }) {
  return (
    <div className="tour">
      <div className="tour-details">
        {tours.map((tour) => (
          <a href={tour.link} target="blank">
            <div className="card">
              <div className="container">
                <div className="date-box">
                  <div className="month">{tour.month}</div>
                  <div className="date">{tour.date}</div>
                </div>
                <div className="event-details">
                  <div className="venue">{tour.venue}</div>
                  <div className="location">{tour.location}</div>
                  <div className="link">Buy ticket</div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export function UpcomingTours() {
  const upcomingTours = data.filter(checkDate).slice(0, 6);

  return <Dates tours={upcomingTours} />;
}

export function AllDates() {
  const tours = data.filter(checkDate);

  return <Dates tours={tours} />;
}
