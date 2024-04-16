import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark text-white fixed-bottom">
            <div className="container text-center">
                <strong>
                    <span>&copy; 2024 - Orçamento GTech</span>
                    <span className="mx-3">|</span>
                    <span>
                        Desenvolvido por {" "}
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-caglianone-77559852/" target="_blank" rel="noopener noreferrer" style={{ color: "gold" }}>
                            João Pedro S. Caglianone
                        </a>
                    </span>
                </strong>

            </div>
        </footer>
    );
};

export default Footer;
