import { Menu } from '@headlessui/react'
import { FiEdit } from 'react-icons/fi'
import { BsTrash3 } from 'react-icons/bs'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import React from 'react'
import { useDispatch } from 'react-redux'
import { globalActions } from '@/store/globalSlices'

const QuestionAction: React.FC = () => {
  const dispatch = useDispatch()
  const { setQuestionUpdateModal, setQuestionDeleteModal } = globalActions

  return (
    <Menu as="div" className="inline-block text-left text-[#f9f1f1]">
      <Menu.Button
        className="inline-flex w-full justify-center
          rounded-md bg-yellow-400 p-4 text-sm
          font-medium hover:bg-amber-700 focus:outline-none
          focus-visible:ring-2 focus-visible:ring-white
          focus-visible:ring-opacity-75"
      >
        <BiDotsVerticalRounded size={17} />
      </Menu.Button>
      <Menu.Items
        className="absolute right-0 mr-2 mt-2 w-56 origin-top-right
          divide-y divide-[#fbf4f4] rounded-md bg-amber-700 shadow-md 
          ing-1 ring-black ring-opacity-5 focus:outline-none shadow-yellow-200 "
      >
        <Menu.Item>
          {({ active }) => (
            <button
              className={`flex justify-start items-center space-x-1 ${
                active ? 'bg-yellow-400 text-[#000000]' : 'text-[#fff8f8]'
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              onClick={() => dispatch(setQuestionUpdateModal('scale-100'))}
            >
              <FiEdit size={17} />
              <span>Edit</span>
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`flex justify-start items-center space-x-1 ${
                active ? 'bg-yellow-400 text-[#000000]' : 'text-[#fff]'
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              onClick={() => dispatch(setQuestionDeleteModal('scale-100'))}
            >
              <BsTrash3 size={17} />
              <span>Delete</span>
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default QuestionAction
