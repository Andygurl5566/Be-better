import {Link} from "react-router-dom"



function HomePage(){

    return (
        <>

        <div>
            <h1> Welcome to Be Better! </h1>
            <p> Summary </p>
        </div>

        <button><Link to="/main-page"> Let's Go </Link> </button>



        </>
    )

}

export default HomePage