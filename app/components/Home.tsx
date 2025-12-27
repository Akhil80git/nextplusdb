"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;        // 👈 form ko yahan store karo
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");

    setStatus("Saving...");

    const res = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: { "Content-Type": "application/json" }
    });

    if (res.ok) {
      setStatus("User saved to MongoDB!");
      form.reset();                      // 👈 ab yahan form se reset
    } else {
      const data = await res.json();
      setStatus(`Error: ${data.error || "Failed"}`);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Yeh form /api/users ko hit karke MongoDB me data save karega.</p>

      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name: <input name="name" required />
          </label>
        </div>
        <div>
          <label>
            Email: <input name="email" type="email" required />
          </label>
        </div>
        <button type="submit">Save</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}
