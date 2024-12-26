import { createQuestion } from '@/services/blockchain'
import { globalActions } from '@/store/globalSlices'
import { QuestionParams, RootState } from '@/utils/interfaces'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const AddQuestion: React.FC = () => {
  const [question, setQuestion] = useState<QuestionParams>({
    title: '',
    description: '',
    tags: '',
    prize: '',
  })

  const dispatch = useDispatch()
  const { setQuestionModal } = globalActions
  const { questionModal } = useSelector((states: RootState) => states.globalStates)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!question.title || !question.prize || !question.tags || !question.description) return

    await toast.promise(
      new Promise<void>((resolve, reject) => {
        createQuestion(question)
          .then((tx) => {
            closeModal()
            resolve(tx)
          })
          .catch((error) => reject(error))
      }),
      {
        pending: 'Approve transaction...',
        success: 'Question created successfully 👌',
        error: 'Encountered error 🤯',
      }
    )
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setQuestion((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const closeModal = () => {
    dispatch(setQuestionModal('scale-0'))
    setQuestion({
      title: '',
      description: '',
      tags: '',
      prize: '',
    })
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center
    bg-black bg-opacity-50 transform z-50 transition-transform duration-300 ${questionModal}`}
    >
      <div className="bg-[#252525] text-[#fdf5f5] shadow-lg shadow-yellow-400 rounded-xl w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 h-auto max-h-[90vh] p-6 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <p className="font-semibold">Add question</p>
            <button onClick={closeModal} className="border-0 bg-transparent focus:outline-none">
              <FaTimes />
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-start rounded-xl mt-5 mb-5"
          >
            <label className="text-[12px]">Title</label>
            <div className="py-4 w-full border border-amber-700 rounded-full flex items-center px-4 mb-3 mt-2">
              <input
                placeholder="Question title"
                className="bg-transparent outline-none w-full placeholder-yellow-400 text-sm"
                name="title"
                value={question.title}
                onChange={handleChange}
                required
              />
            </div>
            <label className="text-[12px]">Prize</label>
            <div className="py-4 w-full border border-amber-700 rounded-full flex items-center px-4 mb-3 mt-2">
              <input
                placeholder="ETH e.g 0.02"
                className="bg-transparent outline-none w-full placeholder-yellow-400 text-sm"
                name="prize"
                value={question.prize}
                onChange={handleChange}
                required
              />
            </div>
            <label className="text-[12px]">Tags</label>
            <div
              className="py-4 w-full border border-amber-700 
              rounded-full flex items-center px-4 mb-3 mt-2"
            >
              <input
                placeholder="Separate tags with commas, eg. php, css"
                className="bg-transparent outline-none w-full placeholder-yellow-400 text-sm"
                name="tags"
                value={question.tags}
                onChange={handleChange}
                required
              />
            </div>

            <label className="text-[12px]">Question</label>

            <textarea
              placeholder="Drop your question here"
              className="h-[162px] w-full bg-transparent border border-amber-700 rounded-xl py-3 px-3 mt-2
              focus:outline-none focus:ring-0 resize-none
              placeholder-yellow-400 text-sm"
              name="description"
              value={question.description}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="text-sm bg-yellow-400 rounded-full w-[150px] h-[48px] text-white
              mt-5 hover:bg-amber-700 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddQuestion
