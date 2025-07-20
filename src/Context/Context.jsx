import React, { createContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'


export const Autho = createContext()


export function Context({ children }) {
  const { register, handleSubmit, reset } = useForm()
  const [signData, setSignData] = useState([])
  const [logData, setLogData] = useState([])

  // Signup handler
  const HandleSign = (data) => {
    setSignData([...signData, data])
    reset()
    toast.success("Signup successful!")
  }

  // Login handler
  const HandleLog = (data) => {
    setLogData([data]) 
    reset()
  }

  
  const check = (signData, logData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = signData.find(
          (user) =>
            user.email === logData[0]?.email &&
            user.pass === logData[0]?.pass
        )

        if (user) {
          resolve("Login successfully!")
        } else {
          reject("Wrong Email or Password.")
        }
      }, 2000) 
    })
  }

  useEffect(() => {
    if (signData.length > 0 && logData.length > 0) {
      check(signData, logData)
        .then((res) => toast.success(res))
        .catch((err) => toast.error(err))
    }
  }, [signData, logData])

  const value = {
    HandleLog,
    HandleSign,
    register,
    handleSubmit,
    reset,
    signData,
    logData,
  }

  return <Autho.Provider value={value}>{children}</Autho.Provider>
}

export default Context
