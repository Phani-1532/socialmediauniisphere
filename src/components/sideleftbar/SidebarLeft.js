import React from "react";
import "./SidebarLeft.css";
import event1 from "../../assets/leftSidebarImages/event1.svg";
import event2 from "../../assets/leftSidebarImages/event2.svg";
import event3 from "../../assets/leftSidebarImages/event3.svg";
import news1 from "../../assets/rightSidebarImages/fifthImage.svg";
import news2 from "../../assets/rightSidebarImages/firstImage.svg";
import news3 from "../../assets/rightSidebarImages/fourthImage.svg";

const SidebarLeft = () => {
  const events = [
    { id: 1, date: "26 Jan 2025", university: "University Of Delhi", image: event1 },
    { id: 2, date: "26 Jan 2025", university: "University Of Delhi", image: event2 },
    { id: 3, date: "26 Jan 2025", university: "University Of Delhi", image: event3 },
  ];

  const news = [
    { id: 1, title: "Students Association Union", description: "As per the rumors it is said that the elections of this year is going...", image: news1 },
    { id: 2, title: "Students Association Union", description: "As per the rumors it is said that the elections of this year is going...", image: news2 },
    { id: 3, title: "Students Association Union", description: "As per the rumors it is said that the elections of this year is going...", image: news2 },
    { id: 4, title: "Students Association Union", description: "As per the rumors it is said that the elections of this year is going...", image: news1 },
    { id: 4, title: "Students Association Union", description: "As per the rumors it is said that the elections of this year is going...", image: news3 },
  ];

  return (
    <div className="left-sidebar">
      {/* Upcoming Events */}
      <div className="events-section">
        <h4>Upcoming Events</h4>
        {events.map((event) => (
          <div key={event.id} className="event-item">
            <img src={event.image} alt="Event" className="event-pic" />
            <div className="event-info">
              <p className="event-date">{event.date}</p>
              <p className="event-university">{event.university}</p>
            </div>
            <span className="read-more">Read More</span>
          </div>
        ))}
        <button className="see-all-btn">See All</button>
      </div>

      {/* Top News */}
      <div className="news-section">
        <h4>Top News</h4>
        {news.map((newsItem) => (
          <div key={newsItem.id} className="news-item">
            <img src={newsItem.image} alt="News" className="news-pic" />
            <div className="news-info">
              <p className="news-title">{newsItem.title}</p>
              <p className="news-description">
                {newsItem.description} <span className="read-more">more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarLeft;
