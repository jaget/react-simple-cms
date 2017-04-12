import React from 'react';
import { connect } from "react-redux";
import Nav from '../nav';

class PageSingle extends React.Component {
    render() {
        let currentPage = this.props.pages.filter((page) => {
            return page.slug == this.props.routeParams.pageSlug;
        })[0];

        const pageMarkup = () => {
            return {
                __html: currentPage.content
            }
        }

        return (
            <div>
                <Nav/>
                    <h1>{currentPage.title}</h1>
                <div dangerouslySetInnerHTML={pageMarkup()} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pages: state.pages
    }
}

export default connect(mapStateToProps)(PageSingle);