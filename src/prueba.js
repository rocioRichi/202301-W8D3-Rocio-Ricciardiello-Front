const API_URL_ALL = "http://localhost:4500/users/allfree";

const getAll = async () => {
  const url = API_URL_ALL;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Fetch failed");
  const data = await response.json();

  console.log("GETTING ALL USERS FROM BACKEND");
  console.log(data.results);
  return data.results.map((item) => {
    return {
      id: item.id,
      email: item.email,
      passwd: item.passwd,
      firstName: item.firstName,
      lastName: item.lastName,
      snapUrl: item.snapUrl,
      friends: item.relations[0],
      numOfFriends: item.relations.length,
      foes: item.relations[0],
      numOfFoes: item.relations.length,
    };
  });
};

const getUser = async (clickedId) => {
  const url = API_URL_ALL;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Fetch failed");
  const data = await response.json();
  console.log("GETTING USER ID=64039a38f8d000a5d1923977 FROM SERVER");
  console.log(data.results.filter((item) => item.id === clickedId)[0]);
  return data.results.filter((item) => item.id === clickedId)[0];
};

getAll();
getUser("64039a38f8d000a5d1923977");
