import counter from "../images/Group 1443.svg";

const Counter = () => {
    return (
        <div className="flex justify-center items-center ">
            <div className="relative w-64 h-64">
                <img src={counter} alt="" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-poppins font-semibold text-white">
                </div>
            </div>
        </div>
    );
}

export default Counter;