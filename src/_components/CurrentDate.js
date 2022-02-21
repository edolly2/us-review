import { useEffect, useState } from "react";

const CurrentDate = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <div className="date-cont">
      <p className="current-date">{date.toLocaleDateString()}</p>
      <p className="current-time">
        {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </p>
    </div>
  );
};

export default CurrentDate;
