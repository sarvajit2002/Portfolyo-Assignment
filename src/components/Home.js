import { useState, useEffect } from "react";
import { HomeModal } from "./ContentModal";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
  });
  const [userData, setUserData] = useState(null); // State to store user data fetched from API

  useEffect(() => {
    // Fetch user data from the API
    fetchUserData();
  }, []); // Empty dependency array to ensure this effect runs only once, similar to componentDidMount

  const fetchUserData = async () => {
    try {
      const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
      if (response.ok) {
        const data = await response.json();
        setUserData(data.user.about); // Assuming "user.about" contains the user's details
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const onOpenModal = (img, title) => {
    setOpen(true);
    setModalValue({ img, title });
  };

  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "" });
  };

  return (
    <div className="kura_tm_section" id="home">
      {userData && (
        <div className="kura_tm_hero">
          <div className="container">
            <div className="content">
              <div className="left">
                <span className="name">{userData.name}</span>
                <h3 className="job">{userData.title}</h3>
                <p>{userData.subTitle}</p>
                <p>{userData.quote}</p>
                <p>{userData.exp_year}</p>
                <p>{userData.address}</p>
                <p>{userData.phoneNumber}</p>
                {/* Render other user details as needed */}
              </div>
              <div className="right">
              <div className="image">
                <div
                  className="main"
                  style={{ backgroundImage: `url(${userData.avatar.url})` }}
                ></div>
                <div className="shape"></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}
      <HomeModal
        open={open}
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
      />
    </div>
  );
};

export default Home;
