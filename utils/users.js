const users = [];

//Join user to the chat
function userJoin(id, username, room) {
  const user = { id: id, username: username, room: room };
  users.push(user);
  return user;
}

//get current user
function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}

module.exports = {
  userJoin,
  getCurrentUser,
};
