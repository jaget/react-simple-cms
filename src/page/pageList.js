import React from 'react';
import { connect } from "react-redux";
import { addPage } from "../actions/addPage";
import TinyMCE from 'react-tinymce';
import * as tinymce from 'tinymce';

const mapStateToProps = (state) => {
    return {
        pages: state.pages
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
       theThing: (e) => {
           e.preventDefault();
           dispatch(
               addPage({
                   linkText: document.getElementById('linkText').value,
                   title: document.getElementById('title').value,
                   slug: document.getElementById('slug').value,
                   content: document.getElementById('content').value
               })
           );

        }
    });
}

class PageList extends React.Component {
    render() {
        let mappedPages = this.props.pages.map((page, i) =>
            <li key={i} className="asdf">{page.title}</li>
        );

        return (
            <div>
                <ul>
                    {mappedPages}
                </ul>
                <form onSubmit={this.props.theThing}>
                    <label htmlFor="linkText">Link test</label>
                    <input type="text" name="linkText" id="linkText"/>
                    <label htmlFor="slug">Slug</label>
                    <input type="text" name="slug" id="slug" />
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title"/>
                    <TinyMCE
                        content="<p>This is the initial content of the editor</p>"
                        config={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                        }}
                        id="content"
                    />
                    <button>Click me</button>
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PageList);
