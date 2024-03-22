function Navigation() {
    return ( 
        <nav className="bg-white w-dvw h-16 border-b-2 border-gray-200 flex justify-between items-center px-64">
            <img className="h-5/6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" alt="instagram" />

            <input className="h-3/6 w-1/5 border-2 border-gray-200 rounded" type="text" placeholder="   Search" />

            <section className="h-full w-1/4 flex justify-between items-center">
                <img className="h-3/6 inline-block" src="https://cdn1.iconfinder.com/data/icons/chunk/16/Home-512.png" alt="house-icon" />
                <img className="h-3/6 inline-block" src="https://cdn0.iconfinder.com/data/icons/user-interface-pack-7-facebook-solid/48/Messanger-512.png" alt="messanger-icon" />
                <img className="h-3/6 inline-block" src="https://cdn2.iconfinder.com/data/icons/instagram-outline/19/2-512.png" alt="add-icon" />
                <img className="h-3/6 inline-block" src="https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Compass-01-512.png" alt="compasss-icon" />
                <img className="h-3/6 inline-block" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-512.png" alt="heart-icon" />
                <div className="h-3/6 inline-block border-2 aspect-square border-gray-200 rounded-full"></div>
            </section>
        </nav>
    );
}

export default Navigation;