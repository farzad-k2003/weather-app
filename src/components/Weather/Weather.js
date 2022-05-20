import "./Weather.css";
import MainDetail from "../MainDetail/MainDetail";
import ExtraDetail from "../ExtraDetail/ExtraDetail";
import SevenHours from "../SevenHours/SevenHours";

const Weather = () => {
  return (
    <div className="weather-container">
      <MainDetail />
      <ExtraDetail />
      <SevenHours />
    </div>
  );
};

export default Weather;
