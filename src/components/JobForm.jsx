import { useState } from "react"
import { useFirestore} from "../hooks/useFirestore"


const JobForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [deadline, setDeadline] = useState('')
    const {isPending, error, setData} = useFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            title,
            description,
            location,
            email,
            contact,
            deadline,
            userId: '1263623',
        }
        setData(data)
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>
            <span>Title:</span>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
            />
            </label>
            <label>
            <span>Description:</span>
            <textarea 
                name="description" 
                id="description" 
                cols="20" 
                rows="5"
                onChange={(e) => setDescription(e.target.value)} 
            />
            </label>
            <label>
            <span>Location:</span>
            <select onChange={(e) => setLocation(e.target.value)}>
                <option>Mumbai</option>
                <option>Bangalore</option>
            </select>
            </label>
            <label>
            <span>Email:</span>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </label>
            <label>
            <span>Contact:</span>
            <input 
                type="text"
                onChange={(e) => setContact(e.target.value)}
            />
            </label>
            <label>
            <span>Deadline:</span>
            <input 
                type="date"
                onChange={(e) => setDeadline(e.target.value)}
            />
            </label>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default JobForm