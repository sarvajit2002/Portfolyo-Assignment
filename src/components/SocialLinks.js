import React, { Fragment, useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

const SocialLinks = () => {
  const [socialHandles, setSocialHandles] = useState([]);

  useEffect(() => {
    const fetchSocialHandles = async () => {
      try {
        const response = await axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        setSocialHandles(response.data.user.social_handles);
      } catch (error) {
        console.error("Error fetching social handles:", error);
      }
    };

    fetchSocialHandles();
  }, []);

  return (
    <Fragment>
      <div className="social-links-container">
        <h3 style={{paddingLeft:'600px'}}>Social Links</h3>
        {socialHandles && socialHandles.map((handle, index) => (
          <a key={index} href={handle.url} target="_blank" rel="noopener noreferrer">
            <img style={{width:'10%',marginLeft:'369px'}} src={handle.image.url} alt={handle.platform} />
          </a>
        ))}
      </div>
    </Fragment>
  );
};

export default SocialLinks;
