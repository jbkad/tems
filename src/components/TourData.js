import { data } from "../data/tour";
import "../styles/tour.scss";

function toStartOfDay(d) {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function getTourDate(tour) {
  const now = new Date();
  const year = tour.year ? Number(tour.year) : now.getFullYear();
  return new Date(year, Number(tour.monthIndex), Number(tour.date));
}

function isUpcoming(tour) {
  const today = toStartOfDay(new Date());
  const eventDate = toStartOfDay(getTourDate(tour));
  return eventDate >= today;
}

export function Dates({ tours, emptyMessage = "No tour dates yet." }) {
  return (
    <div className="tour-details">
      {tours.length === 0 ? (
        <div className="no-dates">{emptyMessage}</div>
      ) : (
        tours.map((tour) => (
          <a
            key={`${tour.year ?? "unknown"}-${tour.monthIndex}-${tour.date}-${tour.venue}`}
            href={tour.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="card">
              <div className="container">
                <div className="date-box">
                  <div className="month">{tour.month}</div>
                  <div className="date">{tour.date}</div>
                  <div className="year">{tour.year}</div>
                </div>
                <div className="event-details">
                  <div className="venue">{tour.venue}</div>
                  <div className="location">{tour.location}</div>
                  <div className="link">Buy ticket</div>
                </div>
              </div>
            </div>
          </a>
        ))
      )}
    </div>
  );
}

export function UpcomingTours({ limit = 6 } = {}) {
  const upcomingToursSorted = data
    .filter(isUpcoming)
    .sort((a, b) => getTourDate(a) - getTourDate(b));

  const upcomingTours =
    limit == null ? upcomingToursSorted : upcomingToursSorted.slice(0, limit);

  return <Dates tours={upcomingTours} emptyMessage="No upcoming dates." />;
}

export function AllDates() {
  const tours = data
    .slice()
    .sort((a, b) => getTourDate(a) - getTourDate(b));

  return <Dates tours={tours} />;
}

export function PastTours({ limit = null } = {}) {
  const pastToursSorted = data
    .filter((tour) => !isUpcoming(tour))
    .sort((a, b) => getTourDate(b) - getTourDate(a));

  const pastTours =
    limit == null ? pastToursSorted : pastToursSorted.slice(0, limit);

  return <Dates tours={pastTours} emptyMessage="No past dates." />;
}
