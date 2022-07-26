import { useEffect, useState } from "react";
import { fetchContest } from "../utlis";

const EventComponent = () => {
  // useState
  const [contests, setContest] = useState([]);

  useEffect(() => {
    fetchContest(setContest);
  }, []);

  // Handle click for removing items
  const handleRemove = (index) => {
    let storeContests = [...contests];
    storeContests.splice(index, 1);
    setContest(storeContests);
    console.log(userEvents);
  };

  //
  const [userEvents, setUserEvents] = useState([{}]);
  //
  const handleInterested = (index) => {
    let storeContests = [...contests];
    // console.log(storeContests);
    let storeUserEvent = [...userEvents];
    // console.log(storeUserEvent);
    let toStore = storeContests[index];
    // console.log(toStore);
    storeUserEvent.push(toStore);
    setUserEvents(storeUserEvent);
    handleRemove(index);
  };

  return (
    <div>
      {contests.map((contest, i) => {
        return (
          <div key={i}>
            <h3>{contest.name}</h3>
            <a href={contest.url} rel="noreferrer noopener" target="_blank">
              {contest.url}
            </a>
            <ul>
              <li>Start Time: {contest.start_time}</li>
              <li>End Time: {contest.end_time}</li>
              <li>Location: {contest.site}</li>
              <li>Status: {contest.status}</li>
            </ul>
            <button onClick={() => handleInterested(i)}>Interested</button>
          </div>
        );
      })}
    </div>
  );
};

export default EventComponent;
