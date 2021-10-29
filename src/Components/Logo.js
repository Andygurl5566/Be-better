// A button that can be clicked to bring you back to the main page
import styled from "styled-components"
import image from "./img/icons8-mastercard-logo-150.png"

function Logo(){
    return(
        <Styleddiv>
        <h1 className = "logo"> <img src={image} width="60px"/> </h1>
        {/* <h2>Hobbit Habits</h2>
        <h4>Creating systems to Achive and Surpass Goals.</h4>
       */}
        </Styleddiv>
    )
}

export default Logo

const Styleddiv = styled.div`

text-align:center;
text-decoration:none;


margin-bottom:20px;


background:#c2e5ff;
padding:1px;


`