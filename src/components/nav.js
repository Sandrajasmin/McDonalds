function header() {
    return (
        <div className="nav">
            {/* <div className="nav-coockie">
				<div className="nav-coockie-message">
                    <p>
                        Denne nettsiden bruker cookies for å gi deg en bedre brukeropplevelse. Om du vil vite mer om hvordan du endrer
                        dine instillinger, finner du det under vår<span>Cookie policy.</span>
                    </p>
                    <div className="coockie-button">
                        <button className="coockie-btn">OK</button>
                    </div>
                </div>
			</div> */}
            <img alt="" className="logo" src="https://www.mcdonalds.com/content/dam/sites/no/nfl/icons/mcd_logo_no.jpg"></img>
            <div className="extra">
                <ul className="extra-links">
                    <li>Næringskalkulator</li>
                    <li>McDelivery</li>
                    <li>Appen Vår</li>
                </ul>
                <div className="search">
                    <form class="example" action="action_page.php">
                        <i class="fa fa-search"></i>
                        <input type="text" placeholder="Søk" name="search"></input>
                    </form>
                    <div className="location">
                        <i id="location-icon" class="fa fa-map-marker" aria-hidden="true"></i>
                        <span>Finn resturant</span>
                    </div>
                </div>

            </div>
            <div className="nav-bar">
                <ul className="nav-links">
                    <li>Vår meny</li>
                    <li>Kampanje</li>
                    <li>Om vår mat</li>
                    <li>Bærekraft</li>
                    <li>Hos oss</li>
                    <li>For familien</li>
                    <li>Jobb hos McDonald's</li>
                </ul>
            </div>
        </div>
    );
}

export default header;
