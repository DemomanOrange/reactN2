

const Table = ({data}) => {
    return (
        <div>
            {
                JSON.stringify(data)  !== '{}'
                ? <table>
                    <tr>
                        <td>temp</td>
                        <td>{(data.main.temp - 273.15).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>descriptoin</td>
                        <td>{data.weather[0].description}</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>{data.name}</td>

                    </tr>

                    <tr>
                        <td>Country</td>
                        <td>{data.sys.country}</td>

                    </tr>
                   
                </table>
                :''
            }
        </div>
    );
}

export default Table;
















