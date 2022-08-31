export default function Footer(props) {
    return (
        <footer className="bg-teal-600  text-black p-4 mt-8 mb-0 ">
            {props.userInput ?
                <p className="text-center"><span className="text-black font-blod text-2xl">{props.userInput.length} Locations World Wide</span></p>
                :
                <p>&copy; 2022</p>
            }

        </footer>
    )
}