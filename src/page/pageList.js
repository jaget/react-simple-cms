import React from 'react';
import { connect } from "react-redux";
import Nav from '../nav';

const mapStateToProps = (state) => {
    return {
        pages: state.pages
    }
}

class PageList extends React.Component {
    render() {
        let mappedPages = this.props.pages.map((page, i) =>
            <li key={i} className="asdf">{page.title}</li>
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