import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
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
        setNewNumber('')
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <p>filter shown with <input/></p>
            <h2>add a new</h2>
            <PersonForm
                onSubmit={addNewPerson}
                newName={newName}
                onNameChange={handleNameChange}
                newNumber={newNumber}
                onNumberChange={handleNumberChange}
            />
            <h2>Numbers</h2>
            <div>
                {persons.map(person =>
                    <Persons name={person.name} number={person.number} key={person.id}/>
                )}
            </div>
        </div>
    )
}

const PersonForm = ({onSubmit, newName, onNameChange, newNumber, onNumberChange}) => {
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

const Persons = ({name, number}) => (
    <p>{name} {number}</p>
)

export default App