export class WebSocketService {
  private ws: WebSocket | null = null
  private url = "ws://localhost:8080/ws"

  connect() {
    this.ws = new WebSocket(this.url)

    this.ws.onopen = () => {
      console.log("Connected to WebSocket")
    }

    this.ws.onmessage = (event) => {
      console.log("Received:", event.data)
      // Handle incoming messages
    }

    this.ws.onerror = (error) => {
      console.error("WebSocket error:", error)
    }

    this.ws.onclose = () => {
      console.log("Disconnected from WebSocket")
      // Attempt to reconnect
      setTimeout(() => this.connect(), 5000)
    }
  }

  send(message: any) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message))
    }
  }

  disconnect() {
    this.ws?.close()
  }
}

export const wsService = new WebSocketService()

