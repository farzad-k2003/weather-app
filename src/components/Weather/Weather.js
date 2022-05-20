import "./Weather.css";
import MainDetail from "../MainDetail/MainDetail";
import ExtraDetail from "../ExtraDetail/ExtraDetail";
import SevenHours from "../SevenHours/SevenHours";

const Weather = ({ data }) => {
  return (
    <div className="weather-container">
      <MainDetail data={data} />
      <ExtraDetail data={data} />
      <SevenHours data={data} />
    </div>
  );
};

export default Weather;
