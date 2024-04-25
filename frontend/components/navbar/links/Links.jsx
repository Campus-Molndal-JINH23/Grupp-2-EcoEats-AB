const { default: Link } = require("next/link");

const Links = () => {
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Produkter",
            path: "/products",
        },
        {
            title: "Om oss",
            path: "/about",
        },
        {
            title: "Kontakt",
            path: "/contact",
        },
    ];
    return (
        <div>{links.map((link=>(
            <Link href={link.path}key={link.title}>{link.title}</Link>
        )
        ))}</div> )
    }

    export default Links