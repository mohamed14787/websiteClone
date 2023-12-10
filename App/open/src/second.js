import Block from "./block";

function Second () {
    return (
        <div className="second"  >
            <div className="cent3">
                <h1>The majority our customers do not understand their workflows.</h1>
                <p>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
            </div>

            <div className="cent2">
            <Block image="./cover.jpeg" />
            <Block image="./cover.jpeg" />
            <Block image="./cover.jpeg" />
            </div>

            <div className="cent2">
            <Block image="./cover.jpeg" />
            <Block image="./cover.jpeg" />
            <Block image="./cover.jpeg" />
            </div>
            
        </div>
    );
}

export default Second;