import * as React from "react";

export class Footer extends React.PureComponent<{}, {}>{
    render() {
        return (
            <footer className="footer-container">
                <div className="footer-copyrights">2003 - 2011 Copyright 10bet.com Ltd. All rights reserved.</div>
                <div className="footer-links-elements">
                    <div>Home</div>
                    <div>Terms of use</div>
                    <div>Responsible gaming</div>
                    <div>Contact us</div>
                </div>
            </footer>
        )
    }
}