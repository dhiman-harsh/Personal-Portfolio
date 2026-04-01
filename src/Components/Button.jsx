const Button = ({ value, link = "" }) => {
    return (
        <button className="py-2 px-4 rounded-sm bg-blue-700 text-white active:scale-95 md:w-fit pointer">{value}</button>
    )
}

export default Button