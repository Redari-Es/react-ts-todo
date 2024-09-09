import React, { useEffect, useRef, useState } from 'react'
import { useTodo } from '../context/useTodo'
import Input from './Input'
import toast from 'react-hot-toast'

const AddTodo = () => {
    const [input, setInput] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const [todos, setTodos] = useState<string[]>([])

    const { addTodo } = useTodo()

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const handleSubmission = (e: React.FormEvent) => {
        e.preventDefault()
        if (input.trim() !== '') {
            addTodo(input)
            setInput('')
            toast.success('Todo added successfully!')
        } else {
            toast.error('Todo field cannot be empty!')
        }
        console.log("from has been submitted")
    }


    return (
        <form onSubmit={handleSubmission}>
            <div className='flex items-center w-full max-w-lg gap-2 p-5 m-auto'>
                <Input type="text"
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className='w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white'
                    placeholder='start typing ...'
                />
                <button type='submit'
                    className='px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl'>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default AddTodo