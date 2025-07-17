
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../helpers/AuthContext";


export default function AdminAccess() {
  const [code, setCode] = useState("");
  const { setRole } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === "yourSecretCode123") {
      localStorage.setItem("role", "admin");
      setRole("admin");
      navigate("/admin");
    } else {
      alert("Incorrect code");
    }
  };

  return (
    <div className="bg-green-200 flex items-center justify-center h-[16rem]">
      <form onSubmit={handleSubmit} className="p-8">
        <h1 className="text-xl mb-2">Enter Admin Code</h1>
        <input
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter admin code"
          className="border px-4 py-2 rounded m-2"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
