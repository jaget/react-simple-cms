import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';

const mapStateToProps = (state) => {
    return {
        pages: state.pages
    }
}

class Nav extends React.Component {

    render() {
        let links = this.props.pages.map((page, i) =>
            <li key={i} ><Link to={"/"+page.slug} >{page.linkText}</Link></li>
        );

        return (
            <nav>
                <ul>
                    {links}
                </ul>
            </nav>
        );
    }
}


export default connect(mapStateToProps)(Nav);
