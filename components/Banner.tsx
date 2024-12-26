import { globalActions } from '@/store/globalSlices'
import { RootState } from '@/utils/interfaces'
import React from 'react'
import { BiNetworkChart } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'

const Banner: React.FC = () => {
  const { questions, wallet } = useSelector((states: RootState) => states.globalStates)
  const dispatch = useDispatch()
  const { setQuestionModal } = globalActions

  return (
    <div className="w-full py-3 px-4 sm:px-10">
      <div className="mt-16 sm:mt-9 text-zinc-200">
        <h1
          className="font-extrabold text-[48px] sm:text-[59px] inline-block mb-3
          from-amber-700 to-yellow-400 bg-gradient-to-r bg-clip-text text-transparent"
        >
          Knowledge Unlocks Rewards !!
        </h1>

        <div className="flex justify-between items-center font-bold text-sm h-[10vh]">
          <div className="flex space-x-2 items-center h-[24px] text-[#f6eded]">
            <BiNetworkChart className="text-yellow-400 w-[24px] h-[24px]" />
            <p>{questions.length} question(s)</p>
          </div>

          {wallet && (
            <button
              onClick={() => dispatch(setQuestionModal('scale-100'))}
              className="h-[48px] w-[145px] mb-3 border rounded-full tracking-tighter
           border-amber-700 hover:text-yellow-400 transition-colors duration-300"
            >
              Ask a Question
            </button>
          )}
        </div>

        <hr className="bottom border-amber-700 w-full" />
      </div>
    </div>
  )
}

export default Banner
