export default function CreateForm(props) {
    function handleUserInput(e) {
        e.preventDefault();
        let tempArr = props.columnTotals

        const inputObject = {
            "location": e.target.location.value,
            "minCustomers": e.target.min_cph.value,
            "maxCustomers": e.target.max_cph.value,
            "avgCookies": e.target.avg_cps.value,
            "hourly_sales": [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
        }

        if (props.userInput) {
            props.setUserInput([...props.userInput, inputObject])

            let sum = tempArr.map((item, idx) => item += inputObject.hourly_sales[idx])

            props.setcolumnTotals(sum)
        }
        else {
            props.setUserInput([inputObject])
            tempArr = inputObject.hourly_sales
            props.setcolumnTotals(inputObject.hourly_sales)
        }


    }

    return (
        <form onSubmit={handleUserInput} className='mx-auto'>
            <div className='flex my-2 mb-4 '>
                <label htmlFor="" className='ml-5 mr-2 font-semibold'>Location</label>
                <input className='w-10/12 text-black rounded' type="text" name='location' maxlength="50" />
            </div>

            <div className='flex'>
                <div className='inline-block ml-5 w-1/4 h-16 bg-green-500'>
                    <div className=" w-full text-center">
                        <label htmlFor="" className='text-sm md:text-base inline-block font-semibold'>Minimum Customers per Hour</label>
                    </div>

                    <input className='relative w-5/6 ml-6 rounded' type="number" name='min_cph' />
                </div>

                <div className='inline-block ml-5 w-1/4 h-16 bg-green-500'>
                    <div className=" w-full text-center">
                        <label htmlFor="" className='text-sm md:text-base inline-block font-semibold'>Maximum Customers per Hour</label>
                    </div>
                    <input className='relative w-5/6 ml-6 rounded' type="number" name='max_cph' />
                </div>

                <div className='inline-block ml-5 w-1/4 h-16 bg-green-500'>
                    <div className=" w-full text-center">
                        <label htmlFor="" className='text-sm md:text-base inline-block font-semibold'>Average Cookies per Sale</label>
                    </div>
                    <input className='relative w-5/6 ml-6 rounded' type="number" name='avg_cps' />
                </div>

                <div className='ml-5 mr-5 w-1/4 h-16 bg-green-500 hover:scale-105 cursor-pointer rounded'>
                    <input type="submit" className='w-full h-full font-semibold' value="Create" />
                </div>

            </div>

        </form>
    )

}