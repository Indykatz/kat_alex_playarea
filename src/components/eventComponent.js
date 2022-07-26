import { useEffect, useState } from "react";
import { fetchContest } from "../utlis";
import EventMap from "./eventMap";

const EventComponent = () => {
  const [contests, setContest] = useState([]);

  useEffect(() => {
    fetchContest(setContest);
  }, []);

  const handleInterested = (index) => {};

  const handleNotInterested = (index) => {};

  return (
    <div>
      {contests.map((contest, index) => {
        return (
          // runs ToDoList component
          <EventMap
            todoItem={contest.item}
            todoChecked={contest.checked}
            key={index}
            handleClick={() => handleInterested(index)}
            handleCheck={() => handleNotInterested(index)}
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
