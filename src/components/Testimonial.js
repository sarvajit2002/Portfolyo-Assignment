import React, { Fragment, useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsSlider } from "../swiperSliderProps";
import { NewsModal } from "./ContentModal";
const Testimonial= () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
    date: "",
  });
  const [testimonial, setTestimonial] = useState([]); // State to store the project data

  useEffect(() => {
    // Fetch project data when the component mounts
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.user && data.user.testimonials) {
          setTestimonial(data.user.testimonials);
        }
      })
      .catch((error) => {
        console.error('Error fetching services data', error);
      });
  }, []); 
  const onOpenModal = (img, title, date) => {
    setOpen(true);
    setModalValue({ img, title, date });
  };

  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "", date: "" });
  };

  return (
    <Fragment>
      <div className="kura_tm_section" id="news">
        <div className="kura_tm_news">
          <div className="container">
            <div className="kura_tm_main_title">
              <h3>Reviews</h3>
            </div>
            <div className="news_list wow fadeInUp" data-wow-duration=".7s">
              <div className="slick-container">
                <div className="slick-wrapper">
                  <Swiper {...newsSlider}>
                    {testimonial && testimonial.map((testimonial, index) => (
                      <SwiperSlide key={index} className="slick-slide">
                        <div className="list_inner">
                          <div className="image">
                            <img src={testimonial.image.url} alt="" />
                          </div>
                          <div className="overlay"></div>
                          <img
                            className="svg"
                            src="/img/svg/right-arrow.svg"
                            alt=""
                          />
                          <div className="details">
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.review}</p>
                            <span>{testimonial.position}</span>
                          </div>
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
      <NewsModal
        open={open}
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
        date={modalValue.date}
      />
    </Fragment>
  );
};

export default Testimonial;
