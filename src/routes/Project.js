import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Heroimg2 from "../components/heroimg2";
import Pw from "../components/Pw.js";
import "../components/Pw.css";
import Pwdata from "../components/Pwdataset";

const Project = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Heroimg2 heading="Projects" para="This is my some recent Projects." />
        <div className="project-first">
          {Pwdata.map((value, index) => {
            return <Pw i={value.i} t={value.t} para={value.para} />;
          })}
        </div>

        <Footer />
      </div>
    </div>
  );
};
export default Project;
