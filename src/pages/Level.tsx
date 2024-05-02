import { useParams } from "react-router-dom";

const Level = () => {
    const { level } = useParams()
    console.log(level);
    return (
        <h1>Level</h1>
    )
}

export default Level