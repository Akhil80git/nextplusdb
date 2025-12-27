// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";

type User = {
  _id: string;
  name: string;
  email: string;
};

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data.users);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Yahan MongoDB se users list aa rahi hai.</p>

      {loading && <p>Loading...</p>}

      {!loading && (
        <ul>
          {users.map((u) => (
            <li key={u._id}>
              {u.name} - {u.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
