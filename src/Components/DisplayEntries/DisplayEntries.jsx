
const DisplayEntries=(props)=> {
    return ( 
    <table>
        <tbody>
        {props.parentEntries.map((entry) => {
            return (
            <tr>
                <td>{entry.name}</td>
                <td>{entry.comment}</td>
            </tr>
            );
        })}
        </tbody>
    </table>
    );
}
 
export default DisplayEntries;