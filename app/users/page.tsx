import UserTable from "./UserTable"


interface Props {
    searchParams: {
        sortOrder: string
    }
}

const UserPage = async ({searchParams}: Props) => {
   
const {sortOrder} = searchParams
console.log(sortOrder)
  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  )
}

export default UserPage

