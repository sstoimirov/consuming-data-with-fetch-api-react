import * as React from "react";
export class Header extends React.PureComponent<{}, {}>{
    render() {
        return (
            <header className="header-container">
                <div className="header-menu-elements">
                    <div>Home</div>
                    <div>Sports</div>
                    <div>Casino</div>
                    <div className="header-elements-dropdown">
                        <div>Games</div>
                        <div className="header-elements-dropdown--inner">
                            <div>Mega Moolah</div>
                            <div>The curse of the black Pearl</div>
                            <div>Super slots attack</div>
                        </div>
                    </div>
                </div>
                <div className="header-menu-icons">
                    <div className="header-menu-icons--uk"></div>
                    <div className="header-menu-icons--france"></div>
                    <div className="header-menu-icons--germany"></div>
                </div>
            </header>
        )
    }
}