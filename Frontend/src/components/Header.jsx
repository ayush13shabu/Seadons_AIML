import React from "react";

function Header() {
    return (
        <header style={headerStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    alt="Trip Planner AI Logo"
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="mr-2 rounded-sm"
                    src="https://tripplanner.ai/_next/image?url=%2Flogo%2Flogo.webp&amp;w=64&amp;q=75"
                    style={logoStyle}
                />
                <h1 style={titleStyle}>Travel_There</h1>
            </div>
            <div style={profileContainerStyle}>
                {/* Example user profile icon */}
                <img
                    alt="User Profile"
                    loading="lazy"
                    width="30"
                    height="30"
                    decoding="async"
                    src="user-profile-icon-url"
                    style={profileIconStyle}
                />
            </div>
        </header>
    );
}

// Styles
const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc',
    borderRadius: '10px', // Rounded edges
};

const logoStyle = {
    marginRight: '10px',
};

const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
};

const profileContainerStyle = {
    marginLeft: 'auto',
    padding: '5px',
    backgroundColor: '#ddd',
    borderRadius: '8px', // Rounded rectangle
};

const profileIconStyle = {
    cursor: 'pointer',
};

export default Header;
