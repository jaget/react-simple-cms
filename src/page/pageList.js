import React, { Component } from 'react';

const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((number, i) =>
    <li key={i}>{number}</li>
);

class PageList extends Component {
    render() {
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default PageList;
