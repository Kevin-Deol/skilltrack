import React from 'react'
import Link from 'next/link'
import laptopGuy from '../asset/Guywithlaptop.svg'
import lines from '../asset/Frame.svg'

const MySubscriptionCard: React.FC = () => {
  return (
    <div className="relative rounded-lg  bg-white mt-64 ml-5 h-[260px] w-[280px] overflow-visible">
    <img className="absolute -top-52  left-3 w-[60%]" src={laptopGuy} alt="Laptop Guy" />
    <h1 className="absolute text-xl left-[13px] top-24" >GET PREMIUM NOW</h1>
    <p className="absolute" >Reach our special features by subscribing</p>
    <Link href="#" className="absolute top-48 left-[50px] py-3 px-10 w-48 bg-blue-600 text-white">SUBSCRIBE</Link>
    <img className="" src={lines} alt="Lines" />
</div>
  )
}

export default MySubscriptionCard;