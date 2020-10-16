import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

import Pagination from "./pagination";


const Cell = ({ isHeader, children }) => {
    return isHeader ? <th>{children}</th> : <td>{children}</td>
};

/*

    Example

    ----- cols -----

    [
        {
            prop: 'age',
            name: 'Age'
        },
        {
            name: 'Avatar',
            onRender: (item) => <image src={item.avatar} />
        }
    ]

    ----- items ------

    [
        {
            age: 19,
            avatar: 'https://agentdiscoveries/avatars/1.png'
        }
    ]
 */

const ResultsTable = ({cols, items}) => {
    const [currentItems, setCurrentItems] = useState([]);

    const handleChangePage = currentItems => setCurrentItems(currentItems);

    const renderHeader = ({name}, index) => <Cell key={index} isHeader children={name} />;

    const renderRow = (item, index) => {
        return (
            <tr key={index}>
                {cols.map(({prop, onRender}, index) => <td key={index}>{onRender ? onRender(item) : item[prop]}</td>)}
            </tr>
        );
    };

    if (!items.length) return null;

    return (
        <div>
            <Table responsive hover>
                <thead>
                    <tr>{cols.map(renderHeader)}</tr>
                </thead>
                <tbody>{currentItems.map(renderRow)}</tbody>
            </Table>
            <Pagination items={items} onChangePage={handleChangePage} />
        </div>
    );
};

export default ResultsTable;
