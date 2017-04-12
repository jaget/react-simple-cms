import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import TinyMCE from 'react-tinymce';
import * as tinymce from 'tinymce';

class AddPage extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="linkText">Link Text</label>
                    <Field name="linkText" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="title">Title</label>
                    <Field name="title" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="slug">Slug</label>
                    <Field name="slug" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <Field name="content" component={props =>
                        <TinyMCE
                            currentValue={{val: props.value}}
                            thingsChanged={param => props.onChange(param.val)}/>
                    }/>
                </div>
                <button type="submit">Add this page</button>
            </form>
        );
    }
}

// Decorate the form component
AddPage = reduxForm({
    form: 'addPage' // a unique name for this form
})(AddPage);

export default AddPage;