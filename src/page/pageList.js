import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';
import Nav from '../nav';

const mapStateToProps = (state) => {
    return {
        pages: state.pages
    }
}

class PageList extends React.Component {
    render() {
        let mappedPages = this.props.pages.map((page, i) =>
            <li key={i} ><Link to={"/page/edit/" + i} >Edit [{page.linkText}]</Link></li>
        );

        return (
            <div>
                <Nav/>
                <ul>
                    {mappedPages}
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps)(PageList);