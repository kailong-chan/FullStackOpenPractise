import { useState } from 'react'

const App = () => {
    const [selected, setSelected] = useState(0)

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    // a helper function copied from MDN, for selecting random int between two values, exclusive maximum
    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    const getRandomAnecdotes = () => {
        setSelected(getRandomInt(0, anecdotes.length))
    }

    //create a zero-filled array to store the state for each anecdote vote count, preserving state using useState
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

    // handler to increment vote count for the currently selected anecdote
    const voteSelectedAnecdote = () => {
        // make a copy of the array to update state stored in complex data structure, in this case : array
        const voteCopy = [...votes] // we use IMMUTABLE copy so React will be able to detect changes and re-render
        voteCopy[selected] += 1
        setVotes(voteCopy)
    }

    return (
        <div>
            <DisplayAnecdote text={anecdotes[selected]} />
            <Button text="vote" action={voteSelectedAnecdote}/>
            <Button text="next anecdote" action={getRandomAnecdotes} />
            <DisplayVote voteCount={votes[selected]} />
        </div>
    )
}

const Button = ({text, action}) =>
    <button onClick={action}>{text}</button>

const DisplayAnecdote = ({text}) =>
    <p>{text}</p>

const DisplayVote = ({voteCount}) =>
    <p>has {voteCount} votes</p>

export default App