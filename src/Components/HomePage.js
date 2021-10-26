import {Link} from "react-router-dom"



function HomePage(){

    return (
        <>

        <div>
            <h1> Title </h1>
            <p> Summary </p>
        </div>

        <button><Link to="/main-page"> Let's Go </Link> </button>



        </>
    )

}

export default HomePage