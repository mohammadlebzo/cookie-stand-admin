import { CookieStandAdmin, LoginForm } from "../components";
import { AuthContext } from "../contexts/Auth";
import { useContext } from "react";
import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState();
  const { tokens } = useContext(AuthContext)
  console.log("tokens are", tokens);

  return (
    <>
    {
      tokens ? <CookieStandAdmin username={username} /> : <LoginForm setUsername={setUsername} />
    }
      
    </>
  )
}
