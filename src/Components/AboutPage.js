import {Link} from "react-router-dom"



function AboutPage(){

    return (
        <>

        <div className="summary-container">
            <div>
                <h1> Title </h1>
                <p> Summary </p>
            </div>
            <button><Link to="/main-page"> Let's Go </Link> </button>
        </div>


        </>
    )

}

export default AboutPage