import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/Testimonial/Testimonial";
import "slick-carousel/slick/slick.css";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4 overflow-hidden ">
      <Navbar></Navbar>
      <div className="container xl:max-w-screen-xl mx-auto font-titleFont">
        <Banner></Banner>
        <Features></Features>
        <Projects></Projects>
        <Resume></Resume>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
