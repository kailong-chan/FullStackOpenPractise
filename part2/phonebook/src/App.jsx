import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }

    const handleNumberChange = (e) => {
        setNewNumber(e.target.value)
    }

    const addNewPerson = (e) => {
        e.preventDefault()

        const trimmedName = newName.trim()
        if (!trimmedName)
            return

        if (persons.some(person => person.name === trimmedName)){
            alert(`${trimmedName} is already added to phonebook`)
            return
        }

        setPersons(persons.concat({name: trimmedName, number: newNumber}))
        setNewName('')
    }

    return (
        <div>
            <Title title={"Phonebook"} />
            <AddPerson
                onSubmit={addNewPerson}
                newName={newName}
                onNameChange={handleNameChange}
                newNumber={newNumber}
                onNumberChange={handleNumberChange}
            />
            <Title title="Numbers" />
            <div>
                {persons.map(person =>
                    <Person name={person.name} number={person.number} key={person.id}/>
                )}
            </div>
        </div>
    )
}

const Title = ({title}) =>
    <h2>{title}</h2>

const AddPerson = ({onSubmit, newName, onNameChange, newNumber, onNumberChange}) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input value={newName} onChange={onNameChange}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={onNumberChange}/>
            </div>
            <button type="submit">add</button>
        </form>
    )
}

const Person = ({name, number}) => (
    <p>{name} {number}</p>
)

export default App