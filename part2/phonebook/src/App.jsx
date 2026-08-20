import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' },
        { name: 'Ada Lovelace' }
    ])
    const [newName, setNewName] = useState('')

    const handleNameChange = (e) => {
        setNewName(e.target.value)
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

        setPersons(persons.concat({name: trimmedName}))
        setNewName('')
    }

    return (
        <div>
            <Title title={"Phonebook"} />
            <AddPerson
                onSubmit={addNewPerson}
                newName={newName}
                onNameChange={handleNameChange}
            />
            <Title title="Numbers" />
            <div>
                {persons.map(person =>
                    <PersonName person={person} key={person} />
                )}
            </div>
        </div>
    )
}

const Title = ({title}) =>
    <h2>{title}</h2>

const AddPerson = ({onSubmit, newName, onNameChange}) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input value={newName} onChange={onNameChange}/>
            </div>
            <button type="submit">add</button>
        </form>
    )
}

const PersonName = ({person}) => (
    <p key={person.name}>{person.name}</p>
)

export default App