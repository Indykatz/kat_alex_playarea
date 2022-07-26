// import { useEffect, useState } from "react";
// // import Navbar from "../components/navbar";
// import ContestComp from "./contest";
// import Quote from "../components/quote";
// import { fetchContest } from "../utlis";

// const TheEvents = ({ setter, user }) => {
//   // useState
//   const [contests, setContest] = useState([]);

//   useEffect(() => {
//     fetchContest(setContest);
//   }, []);

//   // Handle click for removing items
//   const handleRemove = (index) => {
//     let storeContests = [...contests];
//     storeContests.splice(index, 1);
//     setContest(storeContests);
//   };

//   //
//   const [userEvents, setUserEvents] = useState([{}]);
//   //
//   const handleInterested = (index) => {
//     let storeContests = [...contests];
//     console.log(storeContests);
//     let storeUserEvent = [...userEvents];
//     console.log(storeUserEvent);
//     let toStore = storeContests[index].contests;
//     console.log(toStore);
//     storeUserEvent.push(toStore);
//     setUserEvents(storeUserEvent);
//     handleRemove(index);
//   };

//   return (
//     <div>
//       <Quote />
//       <h1 className="Header1Styled">Events</h1>
//       <div>
//         <div>
//           {contests.map((contest, i) => {
//             return (
//               <ContestComp
//                 key={i}
//                 name={contest.name}
//                 url={contest.url}
//                 start_time={contest.start_time}
//                 end_time={contest.end_time}
//                 site={contest.site}
//                 status={contest.status}
//                 handleInterested={() => handleInterested(i)}
//               />
//             );
//           })}
//           ,
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TheEvents;
