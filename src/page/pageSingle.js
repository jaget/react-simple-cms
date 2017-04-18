import React from 'react';
import { connect } from "react-redux";
import Nav from '../nav';
import { Link } from 'react-router';

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
                <Link to={"/page/edit/"+this.props.pages.indexOf(currentPage)} >Edit</Link>
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