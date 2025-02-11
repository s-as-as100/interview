
import React, { useState } from 'react'

const useCustomHook = () => {
    const [loading,setLoading] = useState(false);
    const  [ data,setData] = useState(null);
    const [error,setError]= useState(null);

    async function fetchUserData() {

        try {
            const data = await fetch("");
            const result = data.json()
            
        } catch (error) {
            
        }

    }
  
  
}

export default useCustomHook
