// Hardcoded users
const users = [
  {
    id: 1,
    username: "gagan_brar",
    password: "gagan",
    firstname: "Gagan",
    lastname: "Brar",
    schedule: "Mon-Wed-Fri",
  },
  {
    id: 2,
    username: "ritwika101",
    password: "riwtika", // Hashed password: "ritwika"
    firstname: "Ritwika",
    lastname: "Neupane",
    schedule: "Tue-Thu-Sat",
  },
  {
    id: 3,
    username: "rachel07",
    password: "ritwika", // Hashed password: "rachel"
    firstname: "Rachel",
    lastname: "Renegado",
    schedule: "Tue-Thu-Sat",
  },
  {
    id: 4,
    username: "abnerTheJoker",
    password: "ritwika", // Hashed password: "abner"
    firstname: "Abner",
    lastname: "Yousef",
    schedule: "Tue-Thu-Sat",
  },
];

// Simulated friendships data
const friendships = [
  {
    id: 1,
    user1_id: 1,
    user2_id: 2,
    last_hangout_date: "2023-12-01",
    hangout_count: 5,
  },
  {
    id: 2,
    user1_id: 1,
    user2_id: 3,
    last_hangout_date: "2023-12-05",
    hangout_count: 3,
  },
  {
    id: 3,
    user1_id: 1,
    user2_id: 4,
    last_hangout_date: "2023-11-27",
    hangout_count: 1,
  },
];

// Simulated events data
const events = [
  {
    id: 1,
    location: "University of Calgary - Taylor Family Digital Library",
    latitude: 51.0755, // Example latitude
    longitude: -114.1282, // Example longitude
    event_date: "2023-12-15",
    title: "TFDL Study Session",
    attendee_ids: [1, 2, 4], // IDs of Gagan, Ritwika, and Abner
    pictures: [], // Placeholder for pictures (can be URLs or other data)
  },
  // Add more hardcoded events as needed
];

// Retrieve user data based on username and password
function getUserData(username, password) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return { message: "Invalid username or password" };
  }

  const userFriendships = friendships.filter(
    (f) => f.user1_id === user.id || f.user2_id === user.id
  );
  const userEvents = events.filter((event) =>
    event.attendee_ids.includes(user.id)
  );

  return {
    user,
    friendships: userFriendships,
    events: userEvents,
  };
}

export { getUserData };
