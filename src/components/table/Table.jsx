import './table.css';


export const Table = () =>{

    const data = {
        head: ["Name", "Designation", "Contact", "Circle", "CMP", "Username", "Password", "Rights"],
        body: [
            {"Name": "ABC", "Designation": "DEF", "Contact":"99XXXXXX98", "Circle":"GHI", "CMP":"JKL", "Username":"MNOP", "Password":"xxxxxx", "Rights":"dssdkfal"},
            {"Name": "ABC", "Designation": "DEF", "Contact":"99XXXXXX98", "Circle":"GHI", "CMP":"JKL", "Username":"MNOP", "Password":"xxxxxx", "Rights":"dssdkfal"},
            {"Name": "ABC", "Designation": "DEF", "Contact":"99XXXXXX98", "Circle":"GHI", "CMP":"JKL", "Username":"MNOP", "Password":"xxxxxx", "Rights":"dssdkfal"},
            {"Name": "ABC", "Designation": "DEF", "Contact":"99XXXXXX98", "Circle":"GHI", "CMP":"JKL", "Username":"MNOP", "Password":"", "Rights":"dssdkfal"},
            {"Name": "ABC", "Designation": "DEF", "Contact":"99XXXXXX98", "Circle":"GHI", "CMP":"JKL", "Username":"MNOP", "Password":"xxxxxx", "Rights":"dssdkfal"},
            {"Name": "ABC", "Designation": "DEF", "Contact":"99XXXXXX98", "Circle":"GHI", "CMP":"JKL", "Username":"MNOP", "Password":"xxxxxx", "Rights":"dssdkfal"},
        ]
    }

    const dataKeys = Object.keys(data.body[0])

    return <table className="table">
        <tr>
            {
                data.head.map(item=>{
                    return <th>{item}</th>
                })
            }
        </tr>

        {
            data.body.map(item=>{
                return <tr>
                    {
                        dataKeys.map(i=>{
                            return <td>{item[i]}</td>
                        })
                    }
                </tr>
            })
        }
                
    </table>
}