import { useEffect, useState } from "react";
import { account } from "../services/appwrite";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        await account.get(); // check current session
        setLoading(false);
      } catch {
        navigate("/login"); // redirect if not logged in
      }
    };
    checkUser();
  }, [navigate]);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return children;
}
