import React from 'react'

interface Props {
    params: {
        id: number
    }
}

const UserDetailPage = ({params}: Props) => {
    const {id} = params
  return (
    <div>
      user id {id}
    </div>
  )
}

export default UserDetailPage
