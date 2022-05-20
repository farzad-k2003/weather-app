import { Data } from "../Main/Context";
import { useContext } from "react";

const MainDetail = () => {
  const data = useContext(Data);
  return (
    <div className="main-detail">
      <div className="main-detail-name">
        <div className="country">{data?.city.country}</div>
        <div className="city">{data?.city.name}</div>
      </div>
      <div className="main-detail-icon">
        <div className="main-detail-current-temp">
          {data?.list[0].main.temp}°
        </div>
        <img
          id="main-detail-current-icon"
          src={`http://openweathermap.org/img/wn/${data?.list[0]?.weather[0].icon}@2x.png`}
          alt="icon"
        />
      </div>
    </div>
  );
};

export default MainDetail;
