const MenuButton = ({ value, link }) => {
    return (
        <a className="cursor-pointer" href={link}>{value}</a>

    )
}

export default MenuButton