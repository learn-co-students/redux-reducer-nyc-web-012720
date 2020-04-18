
let state = {
  friends: []
}

let action = {
  type: "ADD_FRIEND",
  // type: "REMOVE_FRIEND",
  friend: {
    name: "Chrome Boi",
    homewtown: "NYC",
    id: 1
  },
  id: 1
}
export function manageFriends(state, action){

  switch (action.type) {
    case "ADD_FRIEND" : 
      return {friends: [...state.friends, action.friend]}
            
    case "REMOVE_FRIEND":
      return {friends: state.friends.filter(friend => friend.id!==action.id)}

    default :
    return state

  }
}
