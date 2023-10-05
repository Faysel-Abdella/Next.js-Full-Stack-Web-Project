import { Suspense } from "react"
import UserTable from "./UserTable"

import Link from "next/link"


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
      <Link href='/users/new' className="btn">New user</Link>
      <Suspense fallback={<p>Loading...</p>}>
      <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  )
}

export default UserPage

