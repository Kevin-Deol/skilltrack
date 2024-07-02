
import React from 'react'

import { signOut } from "../../auth"

const MyLogout: React.FC = () => {
  return (
    <div>
        <form action={async () => {
            "use server"
            await signOut();
        }} >
            <div className="bg-blue-500 w-full flex flex-col gap-4">
                <button>Sign out</button>
            </div>
        </form>
    </div>
  );
}

export default MyLogout;