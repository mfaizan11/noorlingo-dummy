import Hero from "@/components/Home/Hero";
import Whoweare from "@/components/Home/Whoweare";
import About from "@/components/Home/About";
import Screentime from "@/components/Home/Screentime";
import Confidence from "@/components/Home/Confidence";
import App from "@/components/Home/App";
import Experience from "@/components/Home/Experience";
import Founder from "@/components/Home/Founder";
import Download from "@/components/Home/Download";

export default function Home() {
  return (
    <div>
      <Hero />
      <Whoweare />
      <About />
      <Screentime />
      <Confidence />
      <App />
      <Experience />
      <Founder />
      <Download />
    </div>
  );
}
