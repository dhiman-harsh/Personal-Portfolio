import MenuButton from "./MenuButton"

const Menu = () => {
    return (
        <div className="gap-6 hidden md:flex">
            <MenuButton value="Home" link="#home" />
            <MenuButton value="Skills" link="#skills" />
            <MenuButton value="Projects" link="#projects" />
            <MenuButton value="Contact" link="#contact" />
        </div>
    )
}

export default Menu