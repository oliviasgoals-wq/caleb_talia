const Footer = (props: any) => {
    if (props.message == "dark"){
        return (
            <footer> 
                <img 
                src={"/footer_dark.png"}
                height={100}
                width={100}
                alt="Photo of the footer"
                className="bottom-0 mx-auto h-40 w-40 lg:h-55 lg:w-55"
                >
                </img>
            </footer>
        );
    }
    else
    return (
        <footer> 
            <img 
            src={"/footer_lighter.png"}
            height={100}
            width={100}
            alt="Photo of the footer"
            className="bottom-0 mx-auto h-40 w-40 lg:h-55 lg:w-55"
            >
            </img>
        </footer>
    );
    
}

export default Footer;