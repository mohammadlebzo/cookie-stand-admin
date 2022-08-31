import axios from 'axios';
import useSWR from 'swr'

const url = 'https://cookie-stand-api-401-190.herokuapp.com/api/v1/cookie_stands/'

export default function CreateForm(props) {
    function handleUserInput(e) {
        e.preventDefault();

        const inputObject = {
            "location": e.target.location.value,
            "minimum_customers_per_hour": e.target.min_cph.value,
            "maximum_customers_per_hour": e.target.max_cph.value,
            "average_cookies_per_sale": e.target.avg_cps.value,
            "hourly_sales": [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
            "owner": 1
        }

        const config = {
            headers: {
                'Authorization': `Bearer ${props.tokens.access}`
            }
        }


        axios.post(url, inputObject, config).then(res => props.setUserInput([...props.userInput, res.data]))

        
        // props.setUserInput()
        // if (props.userInput) {
        //     props.setUserInput([...props.userInput, inputObject])

        //     let sum = tempArr.map((item, idx) => item += inputObject.hourly_sales[idx])

        //     props.setcolumnTotals(sum)
        // }
        // else {
        //     props.setUserInput([inputObject])
        //     tempArr = inputObject.hourly_sales
        //     props.setcolumnTotals(inputObject.hourly_sales)
        // }


    }

    return (
        <div className='bg-teal-300 h-72 my-5 rounded border-2 border-gray-500'>
            {/* <p className='relative text-center font-semibold text-xl mb-3 pt-5'>Create Cookie Stand</p> */}
            <form onSubmit={handleUserInput} className='mx-auto mt-10'>

                <div className='flex my-2 mb-14 mx-20'>
                    <div className="inline-block w-2/3 h-16">
                        <div className=" w-full text-center">
                            <label htmlFor="" className='text-sm md:text-base inline-block font-semibold'>Add Location</label>
                        </div>
                        <div className=" w-full text-center">
                            <input className='w-11/12 text-black p-2 rounded' type="text" name='location' maxLength="50" placeholder="Cookie Stand Location"/>
                        </div>

                    </div>

                    <div className='ml-5 w-1/3 h-16 bg-green-700 hover:scale-105 hover:bg-green-500 rounded'>
                        <input type="submit" className='w-full h-full font-semibold' value="Create" />
                    </div>
                </div>

                <div className='flex mx-20'>
                    <div className='inline-block w-1/3 h-16 '>
                        <div className=" w-full text-center">
                            <label htmlFor="" className='text-sm md:text-base inline-block font-semibold'>Minimum Customers per Hour</label>
                        </div>
                        <div className=" w-full text-center">
                            <input className='relative w-5/6 p-2 rounded' type="number" name='min_cph' placeholder="0" />
                        </div>
                    </div>

                    <div className='inline-block ml-5 w-1/3 h-16 '>
                        <div className=" w-full text-center">
                            <label htmlFor="" className='text-sm md:text-base inline-block font-semibold'>Maximum Customers per Hour</label>
                        </div>
                        <div className=" w-full text-center">
                            <input className='relative w-5/6 p-2 rounded' type="number" name='max_cph' placeholder="0" />
                        </div>
                    </div>

                    <div className='inline-block ml-5 w-1/3 h-16 '>
                        <div className=" w-full text-center">
                            <label htmlFor="" className='text-sm md:text-base inline-block font-semibold'>Average Cookies per Sale</label>
                        </div>
                        <div className=" w-full text-center">
                            <input className='relative w-5/6 p-2 rounded' type="number" name='avg_cps' placeholder="0" />
                        </div>
                    </div>

                </div>

            </form>
        </div>
    )

}