import { useState } from "react";

const UserEvents = () => {
  const [userEvents, setUserEvents] = useState([]);

  return (
    <div>
      {userEvents.map((anEvent, i) => {
        return (
          <div key={i}>
            <h3>{anEvent.name}</h3>
            <a href={anEvent.url} rel="noreferrer noopener" target="_blank">
              {anEvent.url}
            </a>
            <ul>
              <li>Start Time: {anEvent.start_time}</li>
              <li>End Time: {anEvent.end_time}</li>
              <li>Location: {anEvent.site}</li>
              <li>Status: {anEvent.status}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default UserEvents;
