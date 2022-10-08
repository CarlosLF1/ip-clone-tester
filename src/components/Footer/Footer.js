import { useGlobalState } from "../State";

export default function Footer() {
    // const myIp = useGlobalState('ipAddress')
    // console.log(myIp)
    return (

        
        <footer className="bg-transparent h-3 dark:bg-gray-800 absolute">
            <div className="max-w-screen-xl mx-auto px-4">
                <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-row justify-center items-center">
                    <li className="my-2 mt-4">
                        <button className="text-blue-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="/">
                            Team Oktay/Carlos
                        </button>
                    </li>
                    <li className="my-2">
                        <button className="text-blue-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="/">
                            Configuration
                        </button>
                    </li>
                    <li className="my-2">
                        <button className="text-blue-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="/">
                            Github
                        </button>
                    </li>
                    <li className="my-2">
                        <button className="text-blue-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="/">
                            LinkedIn
                        </button>
                    </li>
                </ul>
            </div>
        </footer>

    );
}