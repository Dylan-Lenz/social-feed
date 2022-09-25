
const DisplayEntries = (props) => {
    return ( 
       <table>
        <tbody>
            {props.parentEntries.map((entry) => {
            return (
                <div>
                <tr>
                    <td>{entry.name}</td>
                </tr>
                <tr>
                    <td>{entry.comment}</td>
                </tr>
                </div>
            );
            })}
        </tbody>
       </table> 
     );
}
 
export default DisplayEntries;