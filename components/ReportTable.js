export default function ReportTable(props) {
    let rowTotal = 0
    return (
        <>
            {props.userInput ?
                <div className="mx-9 relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left bg-teal-600 rounded">
                        <thead className="text-xs text-gray-50 uppercase bg-teal-600">
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
                                return (
                                    <tr class="bg-teal-300 border-b">
                                        <th scope="row" class="py-4 px-6 font-bold text-black whitespace-nowrap">
                                            {item.location}
                                        </th>
                                        {item.hourly_sales.map(hour => {
                                            rowTotal += hour
                                            return (
                                                <td class="py-4 px-6">
                                                    {hour}
                                                </td>
                                            )
                                        })}
                                        <td class="py-4 px-6">
                                            {rowTotal / (idx + 1)}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <th scope="col" className="py-3 px-6">
                                Totals
                            </th>
                            {props.columnTotals.map(item => {
                                return (
                                    <td class="py-4 px-6">
                                        {item}
                                    </td>
                                )
                            })}
                            <td class="py-4 px-6">
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