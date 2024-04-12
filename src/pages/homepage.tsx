// styles
import Banner from "../components/banner/banner";
import "../styles/home/homepage.scss"


export default function HomePage(){

    return(
        <section>
            <Banner />
            <div className="card-container category">
                <div className="card">
                    <img src="#" />
                </div>
                <div className="card">
                    <img src="#" />
                </div>
                <div className="card">
                    <img src="#" />
                </div>
            </div>
            <div className="card-container category">
                <div className="card">
                    <img src="#" />
                </div>
            </div>
            <div className="card-container category">
                <div className="card">
                    <img src="#" />
                </div>
            </div>
        </section>
    );
}