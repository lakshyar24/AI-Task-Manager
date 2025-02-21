import { useState } from "react";
import { useRouter } from "next/router"; // Import router for navigation
import API_BASE_URL from "@/config";  // ✅ Use absolute import

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Initialize Next.js router

  const handleLogin = async () => {
    setError(""); // Clear previous errors

    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log("Login successful!");
      router.push("/dashboard"); // Redirect to dashboard on success
    } else {
      console.log("Login failed.");
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container px-4 md:px-6 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center">Sign in</h2>
          <p className="text-center text-muted-foreground">Sign in to manage your AI-powered tasks</p>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          
          <div className="mt-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="m@example.com"
              className="w-full px-3 py-2 border rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-3 py-2 border rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogin}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
