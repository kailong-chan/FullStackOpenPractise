import {useState} from "react";

const App = () => {
    const [goodCount, setGoodCount] = useState(0)
    const [neutralCount, setNeutralCount] = useState(0)
    const [badCount, setBadCount] = useState(0)

    return (
        <>
            <Title text="give feedback" />
            <Button text="good" onClick={() => setGoodCount(goodCount + 1)}/>
            <Button text="neutral" onClick={() => setNeutralCount(neutralCount + 1)}/>
            <Button text="bad" onClick={() => setBadCount(badCount + 1)}/>
            <Title text="statistics" />
            <Stat text="good" count={goodCount} />
            <Stat text="neutral" count={neutralCount} />
            <Stat text="bad" count={badCount} />
        </>
    )
}

const Title = ({text}) => (
    <div>
        <h1>{text}</h1>
    </div>
)

const Button = ({text, onClick}) => (
    <button onClick={onClick}>{text}</button>
)

const Stat = ({text, count}) => (
    <div>
        <p>{text} {count}</p>
    </div>
)

export default App