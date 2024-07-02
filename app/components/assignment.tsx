import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'

const MyAssignment: React.FC = () => {
  return (
    <div className='w-full'>
      <Link href="/" className='block rounded-lg px-6 py-3 text-3xl text-[#5B5B5B] hover:bg-[#1F1C39] hover:text-white'>
        <FontAwesomeIcon className='mr-5' icon={faClipboard} />
        Assignment
      </Link>
    </div>
  )
}

export default MyAssignment
