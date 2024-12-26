import React from 'react'
import { BsFillTrophyFill } from 'react-icons/bs'

const Empty: React.FC = () => {
  return (
    <div className="flex flex-col mt-40 items-center h-screen space-y-4">
      <BsFillTrophyFill className="text-yellow-400" size={40} />
      <p className="text-[#fef2f2]">Be the first one to ask a question.</p>
    </div>
  )
}

export default Empty
