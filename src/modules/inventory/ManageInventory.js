import React, { useContext } from 'react'
import { Redirect } from 'react-router';
import { UserContext } from '../../context/UserContext'

export default function ManageInventory() {

  const { user } = useContext(UserContext);

  return (
    <>
      {user !== null ?
        <div>Manage Inventory</div>
        : <Redirect to='/login' />}
    </>
  )

}
