import { useEffect } from 'react'
import { Link } from 'react-router'

function Error() {
  useEffect(() => {
    document.title = 'Error'
  }, [])

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mb-5 text-center text-2xl font-bold text-gray-900">Error 404</div>
        <div>
          <Link
            to="/react-todo-js/"
            className="mt-4 inline-block rounded-lg border-2 border-white bg-red-800 px-4 py-1 text-center font-semibold text-white hover:bg-red-400"
          >
            Volver
          </Link>
        </div>
      </div>
    </>
  )
}

export default Error
