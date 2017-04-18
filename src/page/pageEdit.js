import React from 'react';
import { connect } from "react-redux";
import { editPage } from "../actions/editPage";
import Nav from "../nav";
import { Field, reduxForm } from 'redux-form';
import AddPage from "./pageAddForm";

const mapStateToProps = (state) => {//todo is this needed
    return {
        pages: state.pages,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        editPage: (id, values) => {
            dispatch(
                editPage(id, {
                    linkText: values.linkText,
                    title: values.title,
                    slug: values.slug,
                    content: values.content
                })
            );

        }
    });
}

class PageEdit extends React.Component {
    submit = (values) => {
        let id = this.props.routeParams.id;
        // Do something with the form values
        this.props.editPage(id, values);
    }

    render() {
        let currentPage = this.props.pages[this.props.routeParams.id];

        return (
            <div>
                <Nav/>
                <AddPage onSubmit={this.submit} initialValues={currentPage} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageEdit);