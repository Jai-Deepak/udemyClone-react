import one from "./asset/images/c1.jpg";
import two from "./asset/images/c2.jpg";
import three from "./asset/images/c3.jpg";
import four from "./asset/images/c4.jpg";
import "./style.css";
function Recommended() {
    return (
        <div className="recommended">
            <h1 className="recommended__title">Recommended for you</h1>
            <p>Pick the best fit</p>
            <div className="recommended__container">

                <div className="course-card">
                    <img src={one} alt="2023 Python Data Visualization Masterclass" />
                    <h3>2023 Python Data Visualization Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={two} alt="Basic to Advance Programming with EMC" />
                    <h3>Basic to Advance Programming with EMC</h3>
                    <p>Col Steele</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={three} alt="Web Development Bootcamp 2023" />
                    <h3>Web Development Bootcamp 2023</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={four} alt="Master UI/UX Designing with Figma" />
                    <h3>Master UI/UX Designing with Figma</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

            </div>
        </div>
    );
}

export default Recommended;