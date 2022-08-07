import React from 'react';
import Button from "../reusables/Button";

const Table = () => {
    return (
        <div>
            <div className="table">
                <table>
                    <tbody>
                    <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Deola Deola</td>
                        <td>deola@gmail.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tolani</td>
                        <td>tolani@gmail.com</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Tolani</td>
                        <td>tolani@gmail.com</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Tolani</td>
                        <td>tolani@gmail.com</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Tolani</td>
                        <td>tolani@gmail.com</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Tolani</td>
                        <td>tolani@gmail.com</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Tolani</td>
                        <td>tolani@gmail.com</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Tolani</td>
                        <td>tolani@gmail.com</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Tolani</td>
                        <td>tolani@gmail.com</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Tolani</td>
                        <td>tolani@gmail.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <Button  type={"button"} buttonStyle={"tableButton"}>Generate Matches</Button>
        </div>
    );
};

export default Table;