import styled from "styled-components"

function Info(){
    return(
        <Styleddiv>
            <p>
                Hobit Habit builds off of the concepts detailed in the book "Atomic Habits". 
                 All habits results in a response. Positive responses are knowledge, relationships, productivity 
                and education. Negative responses are stress, negative self talk, etc. In order to increase positive
                responses, use Hobit Habits to identify and keep track of habits you'd like to change.
            </p>
            <ul>
                <p> Improve your odds by doing the following: </p>
                <li> 1: Keep Score - identifying our overall day structure and see what habits can be improve. </li>
                <li> 2: Set a time and place for goals </li>
                <li> 3: Habit stack - Stack accomplished habits tackling a new habit.  </li>
                <li> 4: Environment - Create an environment that makes it easier to achieve your goals  </li>
                <li> 5: Make it attractive - Make our goals attractive so that we can look forward to building your habit.`  </li>
            </ul>
        </Styleddiv>
    )

}

export default Info

const Styleddiv = styled.div`

background:#3a5aab3d;
padding-bottom:10px;
margin-top:20px;
margin-bottom:20px;
margin-left: 70px;
Margin-right: 70px;

p{
    display: inline-block;
    padding-right: 200px;
    padding-left:200px;
    
}

ul{
    display: inline-block;
   
 
}

li{
    list-style:none;
    text-align:left;  
   
}
`