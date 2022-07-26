// import { useEffect, useState } from "react";
// import { fetchContest } from "../../../utlis";

// const EventsComponent = ({ setter, user }) => {
//   // useState
//   const [contests, setContest] = useState([]);
//   const [userEvents, setUserEvents] = useState([]);

//   useEffect(() => {
//     fetchContest(setContest);
//   }, []);

//   return (
//     <div>
//       {contests.map((contest, i) => {
//         return (
//           <div key={i}>
//             <h3>{contest.name}</h3>
//             <a href={contest.url} rel="noreferrer noopener" target="_blank">
//               {contest.url}
//             </a>
//             <ul>
//               <li>Start Time: {contest.start_time}</li>
//               <li>End Time: {contest.end_time}</li>
//               <li>Location: {contest.site}</li>
//               <li>Status: {contest.status}</li>
//             </ul>
//             <button
//               onClick={() =>
//                 setUserEvents([
//                   ...userEvents,
//                   [
//                     contest.name,
//                     contest.url,
//                     contest.start_time,
//                     contest.end_time,
//                     contest.site,
//                     contest.status,
//                   ],
//                 ])
//               }
//             >
//               Interested
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default EventsComponent;
