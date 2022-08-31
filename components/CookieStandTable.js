import axios from 'axios';

export default function ReportTable(props) {
    let rowTotal = 0

    function deleteRow(key) {
        axios.delete(`${props.url}${key}/`, props.config)
        props.setUserInput(props.userInput.filter(item => item.id != key))
    }

    return (
        <>
            {props.userInput ?
                <div className=" relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left bg-teal-600 rounded">
                        <thead className="text-2xs text-black uppercase bg-teal-600 text-bold">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Location
                                </th>
                                {props.hours.map(item => {
                                    return (
                                        <th scope="col" className="py-3 px-6">
                                            {item}
                                        </th>
                                    )
                                })}
                                <th scope="col" className="py-3 px-6">
                                    Totals
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {props.userInput.map((item, idx) => {
                                let key = item.id
                                return (
                                    <tr className="bg-teal-300 border-b" key={item.id}>
                                        <th scope="row" className="py-4 px-6 font-bold text-black whitespace-nowrap">
                                            <div className="">
                                                {item.location}
                                                <div className="float-right text-red-500">
                                                    <button onClick={() => deleteRow(key)}>
                                                        del
                                                    </button>
                                                </div>

                                            </div>
                                        </th>
                                        {item.hourly_sales.map(hour => {
                                            rowTotal += hour
                                            return (
                                                <td className="py-4 px-6">
                                                    {hour}
                                                </td>
                                            )
                                        })}
                                        <td className="py-4 px-6">
                                            {rowTotal / (idx + 1)}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <th scope="col" className="py-3 px-6 ">
                                Totals
                            </th>
                            {props.columnTotals.map(item => {
                                return (
                                    <td className="py-4 px-6">
                                        {item}
                                    </td>
                                )
                            })}
                            <td className="py-4 px-6">
                                {rowTotal}
                            </td>
                        </tfoot>
                    </table>
                </div>
                :
                <h2 className="text-2xl font-bold text-center">No Cookie Stands Available</h2>
            }

        </>
    )
}