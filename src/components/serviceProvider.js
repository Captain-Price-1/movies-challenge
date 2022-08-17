import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const ServiceProvider = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 12,
    swipeToSlide: true,
    arrows: false,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  const a = 3;
  const [provider, setProvider] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchService = async () => {
    setLoading(true);
    const response = await fetch(
      "https://dummy-api-dep-06.herokuapp.com/api/movies/providers"
    );
    const data = await response.json();
    setProvider(data.results);
    console.log(provider);
    setLoading(false);
  };

  useEffect(() => {
    fetchService();
  }, []);

  return (
    <div>
      <div>
        <p>service provider</p>
        <div>
          <h2> Single Item</h2>
          {loading ? (
            <p>loading</p>
          ) : (
            <Slider {...settings} className="react-slider-custom">
              {provider.map((item) => {
                return (
                  <div className="sliderr">
                    <img
                      className="provider-logo"
                      src={item.logo_path}
                      alt=""
                    />
                  </div>
                );
              })}
              {/* <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div> */}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceProvider;
