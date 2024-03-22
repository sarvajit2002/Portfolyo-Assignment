import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { activeSkillProgress } from "../utilits";

const ParallaxVideo = dynamic(import("./Parallax"), {
  ssr: false,
});

const Skills = () => {
  const [skillsData, setSkillsData] = useState(null); // State to store fetched skills data

  useEffect(() => {
    // Fetch skills data from your API
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.user && data.user.skills) {
          // Set the fetched skills data to the component state
          setSkillsData(data.user.skills);
        }
      })
      .catch((error) => {
        console.error("Error fetching skills data:", error);
      });

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", activeSkillProgress);
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className="kura_tm_section" id="skills">
      <div className="kura_tm_skills">
        <div className="container">
          <div className="skills_inner">
            <div className="left">
              <div className="kura_tm_main_title light">
                <span>Skills</span>
                <h3>Programming Skills</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration=".7s">
                <p>
                  For more than 20 years our experts have been accomplishing
                  enough with modern Web Development, new generation web and app
                  programming language.
                </p>
              </div>
              {/* Render skills data from API */}
              {skillsData && (
                <div className="dodo_progress wow fadeInUp" data-wow-duration=".7s" data-wow-delay=".2s">
                  {skillsData.map((skill, index) => (
                    <div className="progress_inner" key={index} data-value={skill.percentage}>
                      <span>
                        <span className="label">{skill.name}</span>
                        <span className="number">{skill.percentage}%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{ width: `${skill.percentage}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="right">
              <ParallaxVideo />
              <div
                className="my_image jarallax"
                data-speed="0"
                style={{
                  backgroundImage: "url(/img/portfolio/2.jpg)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
