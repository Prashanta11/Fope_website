import backgroundMobile from "../assets/images/background-mobile.jpeg";
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
        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 sm:hidden bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${backgroundMobile})`, // Mobile background image
            backgroundSize: "cover", // Ensures the image covers the screen without tiling
            backgroundPosition: "center", // Ensures the image is centered
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-0"></div>

        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
