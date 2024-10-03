import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

interface Task {
    title: string;
}

function App() {
    const [goods, setTask] = useState<Task[]>([])

    useEffect(() => {
        const taskListUrl = 'http://localhost:8000/api/v1/task?format=json'
        axios.get<Task[]>(taskListUrl)
            .then(response => setTask(response.data))
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {goods.map((task, index) => (
                <div className="bg-white rounded-lg shadow-md overflow-hidden" key={index}>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{task.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default App