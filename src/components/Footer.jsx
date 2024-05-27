export default function Footer() {
    return (
        <footer className="page-footer grey" >
            <div className="container row">
                <div className="footer-text">
                    © {new Date().getFullYear()}
                    Pershina A.
                </div>
                <a id='a' href="https://github.com/DragonReyder.github.io">
                    Repository
                </a>
            </div>
        </footer>
    );
}