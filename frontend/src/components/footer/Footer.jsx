import "./footer.module.css"

const Footer = () => {
    return (
        <main>
        <div className="styles.container footer pt-5 mt-5">
            <div className="">
                <div className="pb-4 mb-4">
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <div className="d-flex justify-content-end pt-3">
                                <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-secondary btn-md-square rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-light mb-3">Handla ekologiskt!</h4>
                            <p className="mb-4"> EcoEats är inte bara en matbutik; det är en rörelse! </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-light mb-3">Shop Info</h4>
                            <a className="btn-link" href="">Om oss</a>
                            <a className="btn-link" href="">Kundservice</a>
                            <a className="btn-link" href="">Integritets-policy</a>
                            <a className="btn-link" href="">Terms & Condition</a>
                            <a className="btn-link" href="">FAQs</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-light mb-3">Profil</h4>
                            <a className="btn-link" href="">Kundvagn</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-light mb-3">Kontakt</h4>
                            <p>Email: customerservice@ecoeats.se</p>
                            <p>Phone: +46 123 45 67 89</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid copyright bg-dark py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <span className="text-light"><a href="#"><i className="fas fa-copyright text-light me-2"></i>EcoEats AB</a></span>
                    </div>
                </div>
            </div>
        </div>

            <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>   
        </main>
    )
}

export default Footer