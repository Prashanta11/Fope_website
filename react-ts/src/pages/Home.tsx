import backgroundImage from "../assets/images/background.webp";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className="relative flex justify-center items-center bg-cover bg-no-repeat bg-center min-h-screen text-black"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-0"></div>

        {/* Hero Section Content */}
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
