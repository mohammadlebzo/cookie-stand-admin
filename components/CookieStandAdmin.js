import { useState } from 'react';
import { Head, Header, Footer, CreateForm, ReportTable } from "./";
import { hours } from "../data";

export default function CookieStandAdmin(props) {
    const [userInput, setUserInput] = useState();
    const [columnTotals, setcolumnTotals] = useState(new Array(hours.length).fill(0));

    return (
        <div className="">
            <Head />
            <Header />
            <main>
                <div className='bg-teal-300 h-44 mx-52 my-5 rounded'>
                    <p className='relative text-center font-semibold text-xl mb-3 pt-5'>Create Cookie Stand</p>
                    <CreateForm
                        userInput={userInput}
                        setUserInput={setUserInput}
                        columnTotals={columnTotals}
                        setcolumnTotals={setcolumnTotals}
                        hours={hours}
                    />
                </div>

                <ReportTable
                    userInput={userInput}
                    columnTotals={columnTotals}
                    hours={hours} 
                />
            </main>
            <Footer userInput={userInput}/>
        </div>
    )
}