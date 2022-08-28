export default function Header(props) {
    return (
        <header className='flex justify-between bg-teal-600  text-gray-50 p-4'>
            <h1 className=" text-2xl text-black font-semibold">
                Cookie Stand Admin
            </h1>
            <button className="float-right mr-5 text-black font-bold bg-green-500 rounded w-20 hover:bg-green-700">
                Overview
            </button>
        </header>
    )
}