import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const MyLogo: React.FC = () => {
  return (
    <div className='flex w-full'>
      <Link href="/" className='flex items-center rounded-lg text-3xl text-[#5B5B5B] hover:bg-[#1F1C39] hover:text-white'>
      <FontAwesomeIcon className='mr-2 h-8' icon={faArrowLeft} />
        SkillTrack
      </Link>
    </div>
  );
}

export default MyLogo;