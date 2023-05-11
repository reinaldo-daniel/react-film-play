import { IoMdClose, IoIosMenu } from "react-icons/io";

const Icon = (props) => {
    const renderCloseIcon = () => {
        return (
            <IoMdClose 
                {...props}
            />
        )
    }

    const renderMenuIcon = () => {
        return (
            <IoIosMenu
                {...props}
            />
        )
    }

    const renderIcon = () => {
        switch(props.type) {
            case 'closeIcon': 
                return renderCloseIcon();
            case 'menuIcon':
                return renderMenuIcon();
            default:
                return null;
        }
    }

    return (
        <>
            {renderIcon()}
        </>
    );
};

export default Icon;