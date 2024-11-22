import Header from "./components/Header";
import Hero from "./components/Hero";
import ExploreCourses from "./components/ExploreCourses";
import TrustedBy from "./components/TrustedBy";
import Achievements from "./components/Achievements";
import Heading from "./components/Heading";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Courses from "./components/Courses";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div>
      <Heading />
      <Header />
      <Hero />
      <TrustedBy />
      <ExploreCourses />
      <Achievements />
      <Courses />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}
