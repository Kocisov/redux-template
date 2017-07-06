const USER_LOGGED_IN = 'app/user/USER_LOGGED_IN'
const USER_LOGGED_OUT = 'app/user/USER_LOGGED_OUT'

const initialState = {
  avatar: null,
  id: null,
  name: null,
  token: null,
  authenticated: false,
}

export default function user(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case USER_LOGGED_IN:
      return {
        ...payload,
        authenticated: true,
      }

    case USER_LOGGED_OUT:
      return initialState

    default:
      return state
  }
}

export function fakeLogin() {
  return {
    type: USER_LOGGED_IN,
    payload: {
      id: 1,
      name: 'ravi',
      avatar:
        'https://pbs.twimg.com/profile_images/775100021045768192/-GcozVXq_400x400.jpg',
    },
  }
}
