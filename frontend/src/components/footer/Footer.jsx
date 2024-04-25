import "./footer.module.css"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <p>2024 EcoEat AB.</p>
                    <nav>
                        <Link href="#" className="mr-4 hover:text-gray-300">Hem</Link>
                        <Link href="#" className="mr-4 hover:text-gray-300">Om oss</Link>
                        <Link href="#" className="hover:text-gray-300">Kontakt</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer