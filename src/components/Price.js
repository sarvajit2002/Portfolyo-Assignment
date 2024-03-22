import React, { useEffect, useState } from "react";

const Price = () => {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.user && data.user.services) {
          setServices(data.user.services);
        }
      })
      .catch((error) => {
        console.error('Error fetching services data', error);
      });
  }, []);

  return (
    <div className="kura_tm_section" id="price">
      <div className="kura_tm_pricing">
        <div className="container">
          <div className="pricing_inner">
            <div className="left">
              <div className="kura_tm_sticky_section">
                <div className="kura_tm_main_title">
                  <span>Pricing</span>
                  <h3>Service Prices</h3>
                </div>
                <div className="text">
                  <p>
                    For more than 20 years our experts have been accomplishing
                    enough with modern Web Development, new generation web and
                    app programming language.
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="kura_tm_sticky_section">
                <ul>
                  {services.map((service) => (
                    <li
                      key={service._id}
                      className="wow fadeInUp"
                      data-wow-duration=".7s"
                    >
                     <div className="list_inner">
                        <div className="title">
                          <span>{service.name}</span>
                        </div>
                        <div className="cost">
                          <span>{service.charge}</span>
                        </div>
                        <div className="details">
                          <img src={service.image.url} alt={service.name} />
                          <div className="desc">{service.desc}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
