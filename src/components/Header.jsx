export default function Header() {
    return (
        <header className="page-header grey">
            <div className="container">
                <nav className="grey">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Logo</a>
                        <a href="awgarg" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/">Home</a></li>
                            <li><a href="/Contact">Contact</a></li>
                            <li><a href="/About">About</a></li>
                            <li><a href="awgarg">Javascript</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="/">Home</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="awgarg">Javascript</a></li>
                </ul>
            </div>
        </header>
    );
}