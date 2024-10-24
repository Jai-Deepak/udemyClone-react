import one from "./asset/images/c1.jpg";
import two from "./asset/images/c2.jpg";
import three from "./asset/images/c3.jpg";
import four from "./asset/images/c4.jpg"
import "./style.css";
const courses = [
    {
        image: one,
        title: "2023 Python Data Visualization Masterclass",
        instructor: "Col Steele",
        rating: "4.9 ⭐⭐⭐⭐",
        price: "449",
        originalPrice: "1999",
    },
    {
        image: two,
        title: "Basic to Advance Programming with EMC",
        instructor: "Col Steele",
        rating: "3.9 ⭐⭐⭐",
        price: "449",
        originalPrice: "1999",
    },
    {
        image: three,
        title: "Web Development Bootcamp 2023",
        instructor: "Col Steele",
        rating: "4.9 ⭐⭐⭐⭐",
        price: "449",
        originalPrice: "1999",
    },
    {
        image: four,
        title: "Master UI/UX Designing with Figma",
        instructor: "Col Steele",
        rating: "4.9 ⭐⭐⭐⭐",
        price: "449",
        originalPrice: "1999",
    },
];

function PopularSection() {
    return (
        <div className="popular">
            <h1 className="popular__title">Most Popular</h1>
            <p className="popular__subtitle">Pick the best fit</p>

            <div className="popular__container">
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <img src={course.image} alt={course.title}/>
                        <h3>{course.title}</h3>
                        <p>{course.instructor}</p>
                        <p>{course.rating}</p>
                        <p>
                            {course.price} <del>{course.originalPrice}</del>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularSection;