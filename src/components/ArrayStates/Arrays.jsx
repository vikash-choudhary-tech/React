import { useState } from "react";

const Arrays = () => {
    const [persons, setPersons] = useState([]);
    const [newPerson,setNewPerson] = useState("");

    const addNewPerson = () => {
        setPersons([...persons, newPerson]);
        setNewPerson('');
    }

    const updatePersonName = () => {
        let indexPos = 3;
        const newArr = persons.map((person,index)=>{
            if(index === indexPos){
                person = "TIKTITKTITKTITK"
            }
          return person;  
        })

        setPersons(newArr);

    }


    const deletePerson = () => {
        const newArr = persons.filter((person,index)=> index !== 2);
        setPersons(newArr);
    }

    const addPersonAtAPosition = () => {
        const newArr = [...persons.slice(0,2), "testtttttt", ...persons.slice(2)];
        setPersons(newArr);
    }

    return(
    <>
        <h2>
            Here is the list of persons
        </h2>

        Add New Person
        <input type="text" value={newPerson} onChange={(event)=>setNewPerson(event.target.value)}/>
        <button onClick={addNewPerson}>Add New Person</button>
        <button onClick={updatePersonName}>Update Person</button>
        <button onClick={deletePerson}>Delete Person</button>
        <button onClick={addPersonAtAPosition}>Add At a particular index</button>

        {persons.map((item,index)=>{
                return(
                <div key={index}>
                   <br/>  
                 {item}
                </div>
                )
            })}
    </>
    )
}


export default Arrays;