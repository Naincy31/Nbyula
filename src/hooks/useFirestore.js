import { useState } from 'react'
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

export const useFirestore = () => {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    const setData = async (data) => {
        setIsPending(true)
        setError(null)
        try{
            const response = await addDoc(collection(db, 'Jobs'), data)
            console.log(response);
            setIsPending(false)
            setError(null)
        } catch (error) {
            console.log(error);
            setError(error)
            setIsPending(false)
        }
    }
    return {setData, isPending, error}
  
}
