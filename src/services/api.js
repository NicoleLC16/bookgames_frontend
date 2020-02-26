const API_URL = "http://localhost:3000"

const token = () => localStorage.getItem("token")

const headers = () => ({
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token()
  })

const login = data => 
  fetch(`${API_URL}/auth`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data)
  }).then(r => r.json())

  const getUser = () => 
  fetch(`${API_URL}/auth/user`, {
    headers: headers()
  }).then(r => r.json())

  const signup = user => 
  fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(user)
  }).then(res => res.json())

  // fetchGames = () => {
  //   fetch(`http://localhost:3000/games`)
  //   .then(res => res.json())
  //   .then(data => this.setState({
  //     games: data
  //   }))
  // }

  const getGame = (id) => {
    return fetch(`http://localhost:3000/games/${id}`)
    .then(res => res.json())
  }

  // const join = user => 
  // fetch(`${API_URL}/games/${id}`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json"
  //   },
  //   body: JSON.stringify(user)
  // }).then(res => res.json())


  export const api = {
    auth: {
      login,
      getUser,
      signup
    },
    game: {
      getGame
    }
  };