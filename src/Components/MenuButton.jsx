const MenuButton = ({ value, link }) => {
    return (
        <a className="pointer" href={link}>{value}</a>

    )
}

export default MenuButton