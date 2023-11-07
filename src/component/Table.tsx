// @ts-nocheck
export const Table = ({ data, columns }) => {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <TableHeader columns={columns} />
                <TableBody data={data} columns={columns} />
            </table>
        </div>
    );
};

// TableHeader.js
const TableHeader = ({ columns }) => {
    return (
        <thead className="thead-dark">
            <tr>
                {columns.map((column) => (
                    <th key={column}>{column}</th>
                ))}
            </tr>
        </thead>
    );
};

// TableRow.js
const TableRow = ({ rowData, columns }) => {
    return (
        <tr>
            {columns.map((column) => (
                <td key={column}>{rowData[column]}</td>
            ))}
        </tr>
    );
};

// TableBody.js
const TableBody = ({ data, columns }) => {
    return (
        <tbody>
            {data.map((rowData, index) => (
                //   <TableRow key={index} rowData={rowData} columns={columns} />
                <tr>
                    {columns.map((column) => (
                        <>
                        <td key={column}>{rowData[column]}</td>
                        </>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};