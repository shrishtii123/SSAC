import { useRef } from "react";
import "./App.css";
import Card from "./components/Card";
import { Exams } from "./components/Exams";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { News } from './components/News';
import ContactUs from "./components/Contact";
import About from "./components/About";

function App() {

  const HomeRef = useRef(null)
  const ExamRef = useRef(null)
  const NewsRef = useRef(null)
  const FooterRef = useRef(null)

  return (
    <div className="App">
      <Navbar homeR={HomeRef} examR={ExamRef} newsR={NewsRef} contactR={FooterRef}/>
      <div ref={HomeRef}>
      <Header />
      </div>
      <div className="about-section">
        <h1>About SSAC</h1><br></br>
        <p>The Study Abroad Chapter at our college is a student-led club that helps students explore and pursue opportunities to study abroad or intern overseas. With regular meetings, workshops, and events, the chapter provides resources and support to students interested in expanding their horizons beyond our campus. By participating in these programs, students can learn new languages, gain international perspectives, and build a global network that will benefit them in their future careers.
<br></br><br></br>
The Study Abroad Chapter also offers a range of social and cultural events to help students connect with others who share their interests. These events include language exchanges, cultural festivals, and networking events with alumni who have studied or worked abroad. Through these activities, students can build friendships and support networks that will help them navigate the challenges of studying or working in a foreign country. Overall, the Study Abroad Chapter is an invaluable resource for any student who wants to explore the world and gain valuable life experiences that will serve them well in their future endeavors.
</p>
      </div>
      <div ref={ExamRef}>
      <Exams />
      </div>
      <div class="custom-shape-divider-bottom-1682237467">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
          </svg>
      </div>
      <div ref={NewsRef}>
      <News/>
      </div>
      <div class="custom-shape-divider-top-1682238582">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" class="shape-fill"></path>
    </svg>
</div>

      <div ref={FooterRef}>
      <About/>
      <Footer />
      </div>
    </div>
  );
}

export default App;
