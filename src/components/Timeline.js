import React, { useEffect, useState } from "react";
const Timeline = () => {
  const [timelineData, setTimelineData] = useState(null); // State to store fetched timeline data

  useEffect(() => {
    // Fetch timeline data from your API
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched timeline data to the component state
        setTimelineData(data.user.timeline);
      })
      .catch((error) => {
        console.error("Error fetching timeline data:", error);
      });
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className="kura_tm_section" id="timeline">
      <div className="kura_tm_timeline">
        <div className="container">
          <div className="kura_tm_main_title">
            <span>Timeline</span>
            <h3>Working Period</h3>
          </div>
          <div className="timeline_list">
            <ul>
              {/* Render timeline data from API */}
              {timelineData &&
                timelineData.map((item, index) => (
                  <li
                    key={index}
                    className="wow fadeInUp"
                    data-wow-duration=".7s"
                    data-wow-delay={index * 0.2 + "s"} // Add delay for animation
                  >
                    <div className="list_inner">
                      <span>
                        {new Date(item.startDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            year: "numeric",
                          }
                        )}{" "}
                        -{" "}
                        {item.endDate
                          ? new Date(item.endDate).toLocaleDateString(
                              "en-US",
                              {
                                month: "long",
                                year: "numeric",
                              }
                            )
                          : "Today"}
                      </span>
                    </div>
                    <div className="list_inner">
                      <span>{item.jobTitle}</span>
                    </div>
                    <div className="list_inner">
                      <span>{item.company_name}</span>
                    </div>
                    <div className="list_inner">
                      <span>{item.jobLocation}</span>
                    </div>
                    <div className="list_inner">
                    <ul>
                      {item.bulletPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
