import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { users } from '../../utils/https.js'

const Profile = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  const getUser = async () => {
    try {
      const response = await users.findOne(id)
      console.log(response.data.payload)
      setUser = response.data.payload
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <React.Fragment>
      <header><h2>Profile {id}</h2></header>

    </React.Fragment>
  )
}

export default Profile