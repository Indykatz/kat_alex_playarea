import { useState } from "react";

const EventMap = ({
  name,
  url,
  start_time,
  end_time,
  site,
  status,
  handleInterested,

  //   handleNotInterested,
}) => {
  const [goingBool, setGoingBool] = useState(false);
  //   if ({ goingBool }) {
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <a href={url} rel="noreferrer noopener" target="_blank">
          {url}
        </a>
        <ul>
          <li>Start Time: {start_time}</li>
          <li>End Time: {end_time}</li>
          <li>Location: {site}</li>
          <li>
            Status: {status}{" "}
            <button
              onClick={() => setGoingBool(!goingBool)}
              style={{ backgroundColor: goingBool ? "green" : "red" }}
            >
              {goingBool ? "Going" : "Not Going"}
            </button>
          </li>
        </ul>

        {/* <button onClick={handleNotInterested}>Not Interested</button> */}
      </div>
    </div>
  );
};
// };

export default EventMap;
