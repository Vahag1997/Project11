import VotingComponent from "./VotingComponent"
import { option1, option2, option3, option4 } from "./constants"

const Voting = () => {

    return (
        <>
            <VotingComponent options={option1} heading={"HOW LONG DOES IT LAST?"}/>
            <VotingComponent options={option2} heading={"FOR WHAT TIME OF YEAR"}/>
            <VotingComponent options={option3} heading={"IT CAN BE FELT FROM A DISTANCE"}/>
            <VotingComponent options={option4} heading={"FOR WHAT TIME OF DAY"}/>
        </>
    )
}

export default Voting