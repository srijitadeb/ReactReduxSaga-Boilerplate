// export default function() {
//     return [
//       {
//         name: "Sambit"
//       },
//       {
//         name: "Chandan"
//       },
//       {
//         name: "Srijita"
//       }
//     ];
//   }

import { getContacts } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case "CONTACTS_SUCCESS":
      return Object.assign({}, action.payload)

    default: {
      return state
    }
  }
}