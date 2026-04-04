const MenuButton = ({ value, link }) => {
    return (
        <a className="cursor-pointer text-neutral-200 hover:text-white hover:scale-110" href={link}>{value}</a>

    )
}

export default MenuButton