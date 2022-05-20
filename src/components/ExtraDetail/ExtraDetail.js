import "./ExtraDetail.css";

const ExtraDetail = ({ data }) => {
  return (
    <div className="extra-detail">
      <div className="wind-speed">
        <div className="wind-speed-title extra-detail-item">
          <span className="wind-speed-title-text">Wind speed:</span>{" "}
          <span className="wind-speed-title-number">
            {data?.list[0].wind.speed}
          </span>
        </div>
      </div>
      <div className="feels-like">
        <div className="feels-like-title extra-detail-item">
          <span className="wind-speed-title-text">Feels like:</span>{" "}
          <span className="wind-speed-title-number">
            {data?.list[0].main.feels_like}
          </span>
        </div>
      </div>
      <div className="hunidity">
        <div className="humidity-title extra-detail-item">
          <span className="wind-speed-title-text">Humidity:</span>{" "}
          <span className="wind-speed-title-number">
            {data?.list[0].main.humidity}
          </span>
        </div>
      </div>
      <div className="pressure">
        <div className="pressure-title extra-detail-item">
          <span className="wind-speed-title-text">Pressure:</span>{" "}
          <span className="wind-speed-title-number">
            {data?.list[0].main.pressure}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExtraDetail;
