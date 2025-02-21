import axios from "axios"

const API_URL = "http://localhost:8080"

export async function getTasks(token: string) {
  try {
    const response = await axios.get(`${API_URL}/tasks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error) {
    throw new Error("Failed to fetch tasks")
  }
}

export async function createTask(
  token: string,
  task: {
    title: string
    description: string
  },
) {
  try {
    const response = await axios.post(`${API_URL}/tasks`, task, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error) {
    throw new Error("Failed to create task")
  }
}

