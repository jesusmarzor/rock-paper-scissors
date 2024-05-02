import { useParams } from "react-router-dom";

const Level = () => {
    const { level } = useParams()
    return (
        <h1>{level}</h1>
    )
}

export default Level