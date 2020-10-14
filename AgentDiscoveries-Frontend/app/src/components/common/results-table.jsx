import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

import Pagination from "./pagination";

const Cell = ({ isHeader, children }) => {
    return isHeader ? <th>{children}</th> : <td>{children}</td>
};

const ResultsTable = ({cols, items}) => {
    const [currentItems, setCurrentItems] = useState([]);

    const handleChangePage = currentItems => setCurrentItems(currentItems);

    const renderHeader = ({prop, name}) => <Cell key={prop} children={name} />;

    const renderRow = (item, index) => {
        return (
            <tr key={index}>
                {cols.map(({prop}) => <td key={prop}>{item[prop]}</td>)}
            </tr>
        );
    };

    return (
        <div>
            <Table>
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
