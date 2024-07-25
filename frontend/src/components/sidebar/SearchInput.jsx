import { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversations'
import toast from 'react-hot-toast'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const { setSelectedConversation } = useConversation()
  const { conversations } = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!search) return

    if (search.length < 3) {
      return toast.error('Search term must be at least 3 characters...')
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    )

    if (conversation) {
      setSelectedConversation(conversation)
      setSearch('')
    } else toast.error('Not Found')
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
      <input
        type='text'
        className='input input-bordered rounded-full'
        placeholder='Search...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type='submit'
        className='btn btn-circle bg-amber-600 hover:bg-amber-500 text-slate-300'
      >
        <IoSearchSharp className='w-6 h-6 outline-none' />
      </button>
    </form>
  )
}
export default SearchInput
