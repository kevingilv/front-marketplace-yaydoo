import React, { useContext } from 'react'
import { Redirect } from 'react-router';
import { UserContext } from '../../context/UserContext'
import {
  Button
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function ManageInventory() {

  const { user } = useContext(UserContext);

  return (
    <>
      {user !== null ?
        <div>
          <RouterLink to='/create-product'>
            <Button bg='white' colorScheme='pink' variant='outline'
              _hover={{ boxShadow: 'xl' }}>
              Crear Producto
            </Button>
          </RouterLink>

          Manage Inventory
        </div>
        : <Redirect to='/login' />}
    </>
  )

}
