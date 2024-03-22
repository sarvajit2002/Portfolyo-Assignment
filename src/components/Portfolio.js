import React, { Fragment, useState, useEffect } from "react";
import LightBox from "react-awesome-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../swiperSliderProps";
import axios from "axios"; // Import Axios for making HTTP requests

const Portfolio = () => {
  const [showLight, setShowLight] = useState(null);
  const [projects, setProjects] = useState([]); // State to store the project data

  useEffect(() => {
    // Fetch project data when the component mounts
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.user && data.user.projects) {
          setProjects(data.user.projects);
        }
      })
      .catch((error) => {
        console.error('Error fetching services data', error);
      });
  }, []); // Empty dependency array to only run the effect once on mount

  const showLightBox = (index) => {
    setShowLight({
      startIndex: index,
    });
  };

  const hideLightBox = () => {
    setShowLight(null);
  };

  return (
    <Fragment>
      <div className="kura_tm_section" id="portfolio">
        <div className="kura_tm_portfolio">
          <div className="container">
            <div className="kura_tm_main_title">
              <h3>Projects</h3>
            </div>
            <div
              className="portfolio_list gallery_zoom wow fadeInUp"
              data-wow-duration=".7s"
            >
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <Swiper {...portfolioSlider}>
                    {projects.map((project, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className="list_inner">
                          <div className="image">
                            <img src={project.image.url} alt="" /> {/* Use the project image URL */}
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(" + project.image.url + ")",
                              }}
                            ></div>
                             <div className="overlay"></div>
                            <img
                              className="svg"
                              src="/img/svg/right-arrow.svg"
                              alt=""
                            />
                             <div className="details">
                              <h3>{project.title}</h3>
                              <span>{project.techStack}</span>
                            </div>
                          </div>
                          {/* Rest of your project details */}
                          <a
                            className="kura_tm_full_link popup-vimeo"
                            onClick={() => showLightBox(index)}
                          ></a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="kura_tm_swiper_progress fill">
                  <div className="my_pagination_in"></div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a className="my_next">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLight ? (
        <LightBox
          images={projects.map((project) => ({
            url: project.image.url,
            title: project.title,
          }))}
          startIndex={showLight.startIndex}
          onClose={hideLightBox}
        />
      ) : null}
    </Fragment>
  );
};

export default Portfolio;

