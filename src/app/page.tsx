import { cookies } from "next/headers";
import LandingPage from "./page-client";

export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  return <LandingPage token={token} />;
}
