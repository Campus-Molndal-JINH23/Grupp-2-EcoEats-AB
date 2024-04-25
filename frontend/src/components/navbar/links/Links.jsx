"use client";

import { useState } from "react";
import ProfileLink from "./navLink/ProfileLink";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

    const links = [
        {
            title: "Produkter",
            path: "/products",
        },
        {
            title: "Våra gårdar",
            path: "/farms",
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

    const Links = () => {
        const [open, setOpen] = useState(false);
    

        // TEMPORARY
        const session = false
        const isAdmin = false

        return (
            <div className={styles.container}>
                <div className={styles.links}>
                    {links.map((link)=> (
                        <NavLink item={link} key={link.title}/>
                    ))}
                    {session? (
                        <>
                            {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}/>}
                            <button className={styles.logout}>Logga ut</button>
                            {!isAdmin && <NavLink item={{title:"Profil", path: '/profile'}} />}
                            
                        </>
                    ) : (
                        <NavLink item={{title: "Logga in", path: "/login"}}/>
                    )}
                </div>
                <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
                
                {open && ( 
                    <div className={styles.mobileLinks}>
                        {links.map((link)=> (
                            <NavLink item={link} key={link.title} />
                        ))}
                    </div> 
                )}
            </div>
        );
    };

    export default Links;