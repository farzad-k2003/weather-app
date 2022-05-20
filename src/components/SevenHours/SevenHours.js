import "./SevenHours.css";

const SevenHours = ({ data }) => {
  return (
    <div className="seven-hours">
      {data?.list.map((item, index) => {
        return (
          <div className={`weather-item`}>
            <img
              src={`http://openweathermap.org/img/wn/${item?.weather[0].icon}@2x.png`}
              alt=""
            />
            <h4>{item?.weather[0].description}</h4>
            <span>
              {new Date(item?.dt * 1000).getHours() +
                ":" +
                new Date(item?.dt * 1000).getMinutes()}
            </span>
            <div className={`weather-item-temp`}>
              <span className={`high-temp`}>
                {Math.floor(item?.main?.temp_max)}
              </span>
              <span className={`low-temp`}>
                {Math.floor(item?.main?.temp_min)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SevenHours;
