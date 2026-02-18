// For looping rendering - done
// conditional rendering - done - if / ternary

import { useState } from "react";

// Props drilling
export const GeneralL = ({title}) => {

    const arr = [1, 2, 3, 4, 5, null, null, null, false, false, 9, 10]

    const status = ["pending", "inprogress", "completed", "cancelled"]

    const twoMultiplied = arr.map((value) => value * 2);

    const [canShowText, setCanShowText] = useState(false);


    function add(a, b) {
        console.log(a + b)
    }

    add(1, 2)
    add(3, 4)

    return (
        <div>
           {title}
            {
                status.map((val, index) => (
                    <div>
                        {
                            val == "completed" ?
                                <div className="w-[100px] text-green-500 border border-green-600 p-1 rounded-lg">{index} - Completed</div> :
                                val == "pending" ?
                                    <div className="w-[100px] text-yellow-500 border border-yellow-600 p-1 rounded-lg">{index} - Pending</div> :
                                    val == "inprogress" ?
                                        <div className="w-[100px] text-blue-500 border border-blue-600 p-1 rounded-lg">{index} - In-Progress</div> :
                                        val == "cancelled" ?
                                            <div className="w-[100px] text-red-500 border border-red-600 p-1 rounded-lg">{index} - Cancelled</div> :
                                            <div>{val}</div>
                        }
                        {
                            val == 1 ?
                                <div>One</div> :
                                val == 2 ?
                                    <div>Two</div> :
                                    <div>{val}</div>
                        }
                        {
                            val && <div>{val}</div>
                        }
                    </div>
                ))

            }
            {
                canShowText &&
                <div>Text is visible.......</div>
            }
            <button onClick={() => setCanShowText(!canShowText)}>Click me to display the content...</button>
        </div>
    )
}