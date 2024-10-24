import "./style.css";

function Topic() {
    return (
        <div className="topics">
            <h1 className="topics__title">Topics Recommended for You</h1>
            <div className="topics__container">
                <p>Website</p>
                <p>JavaScript</p>
                <p>CSS</p>
                <p>MongoDB</p>
                <p>Azure</p>
                <p>AWS</p>
                <p>Docker</p>
                <p>GitHub</p>
                <p>React JS</p>
            </div>
        </div>
    );
}

export default Topic;