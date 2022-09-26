
const DisplayEntries = (props) => {
    return ( 
       <table>
        <thead>
        {props.parentEntries.map((entry) => {
            return (
                <th>{entry.name}</th>
            );
        })}
        </thead>
        <tbody>
        {props.parentEntries.map((entry) => {
            return (
                <tr>
                    <td>{entry.comment}</td>
                </tr>
            );
        })}
        </tbody>
       </table> 
     );
}
 
export default DisplayEntries;