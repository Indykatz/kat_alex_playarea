import { useEffect, useState } from "react";
import { fetchContest } from "../utlis";
import EventMap from "./eventMap";

const EventComponent = ({ goingBool, setGoingBool }) => {
  const [contests, setContest] = useState([]);

  useEffect(() => {
    fetchContest(setContest);
  }, []);

  const handleInterested = (index) => {
  };

  // const handleNotInterested = (index) => {};

  return (
    <div>
      {contests.map((contest, index) => {
        return (
          // runs ToDoList component
          <EventMap
            name={contest.name}
            url={contest.url}
            start_time={contest.start_time}
            end_time={contest.end_time}
            site={contest.site}
            stauts={contest.staus}
            key={index}
            handleClick={() => handleInterested(index)}
            // handleCheck={() => handleNotInterested(index)}
          />
        );
      })}
    </div>
  );
};

export default EventComponent;

// {contests.map((contest, i) => {
//   return (
//     <div key={i}>
//       <h3>{contest.name}</h3>
//       <a href={contest.url} rel="noreferrer noopener" target="_blank">
//         {contest.url}
//       </a>
//       <ul>
//         <li>Start Time: {contest.start_time}</li>
//         <li>End Time: {contest.end_time}</li>
//         <li>Location: {contest.site}</li>
//         <li>Status: {contest.status}</li>
//       </ul>
//       <button onClick={() => handleInterested(i)}>Interested</button>
//     </div>
//   );
// })}
