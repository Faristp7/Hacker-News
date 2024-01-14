
export default function NavigationBar() {
  return (
    <div className="bg-gray-300 dark:bg-gray-800 mb-0 sm:mb-10">
      <div className="flex justify-center gap-5 p-2">
        <div className="flex items-center gap-2">
            <div className="bg-gray-100 rounded dark:bg-gray-900 px-3.5 py-1.5 text-gray-600 shadow-lg">
                j
            </div>
            Next Comment
        </div>
        <div className="flex items-center gap-2">
            <div className="bg-gray-100 rounded dark:bg-gray-900 px-3.5 py-1.5 text-gray-600 shadow-lg">
                K
            </div>
            Prev Comment
        </div>
        <div className="flex items-center gap-2">
            <div className="bg-gray-100 rounded dark:bg-gray-900 px-3.5 py-1.5 text-gray-600 shadow-lg">
                x
            </div>
            Collapse Comment
        </div>
      </div>
    </div>
  )
}
