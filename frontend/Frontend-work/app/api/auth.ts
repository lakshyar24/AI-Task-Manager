import axios from "axios"

const API_URL = "http://localhost:8080"

export async function login(username: string, password: string) {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    })
    return response.data
  } catch (error) {
    throw new Error("Authentication failed")
  }
}

