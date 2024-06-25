import React from 'react'
import Conversation from './Conversation'
import useGetUsers from '../../hooks/useGetUsers'

function Conversations() {
  const {loading, users} = useGetUsers()
  return (
    <>
      <div className='py-2 flex flex-col overflow-auto sm:display-none'>
        {users.map((user, index) => {
          return <Conversation
            key={user.id}
            user={user}
            laIDX={index === user.length - 1}
            />
        })}
      </div>
    </>

  )
}

export default Conversations
