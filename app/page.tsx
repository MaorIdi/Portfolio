import HomePage from "./components/HomePage";
import { BackgroundBeams } from "./components/BackgroundBeams";
export default function Home() {
  return (
    <>
      <BackgroundBeams className="bg-beams" />
      <HomePage />
    </>
  );
}
