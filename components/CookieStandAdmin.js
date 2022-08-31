import { useState } from 'react';
import { Head, Header, Footer, CreateForm, CookieStandTable } from "./";
import { hours } from "../data";
import { AuthContext } from '../contexts/Auth';
import { useContext } from 'react';
import { useEffect } from 'react'
import axios from 'axios';
import useSWR from 'swr'

const url = 'https://cookie-stand-api-401-190.herokuapp.com/api/v1/cookie_stands/'

export default function CookieStandAdmin(props) {
    const [userInput, setUserInput] = useState();
    const [columnTotals, setcolumnTotals] = useState(new Array(hours.length).fill(0));
    const { tokens } = useContext(AuthContext)
    // console.log(tokens);

    const config = {
        headers: {
            'Authorization': `Bearer ${tokens.access}`
        }
    }

    // console.log(config)

    const fetcher = url => axios.get(url, config).then(res => res.data)
    const { data, error } = useSWR(url, fetcher)
    // console.log(data);

    useEffect(() => {
        (async () => {
          const data = await axios.get(url, config);
          console.log(data.data);
          let sum = data.data.map(item => item.hourly_sales.map(hour_sale => hour_sale * data.data.length))
          setUserInput(data.data);
          setcolumnTotals(sum[0])
        })();
      }, []);
    
    // console.log(userInput);

    if (tokens && !data) return <div>loading...</div>
    return (
        <div className="">
            <Head />
            <Header username={props.username} />
            <main>
                <div className='mx-52'>
                    <CreateForm
                        userInput={userInput}
                        setUserInput={setUserInput}
                        columnTotals={columnTotals}
                        setcolumnTotals={setcolumnTotals}
                        hours={hours}
                        tokens={tokens}
                    />

                    <CookieStandTable
                        userInput={userInput}
                        setUserInput={setUserInput}
                        columnTotals={columnTotals}
                        setcolumnTotals={setcolumnTotals}
                        hours={hours}
                        url={url}
                        config={config}
                    />
                </div>

            </main>
            <Footer userInput={userInput} />
        </div>
    )
}