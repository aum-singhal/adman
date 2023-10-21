import './table.css';


export const Table = ({data}) =>{

    const dataKeys = Object.keys(data.body[0])

    return <table className="table">
        <tr>
            {
                data.head.map(item=>{
                    return <th className='font-16 semi-bold'>{item}</th>
                })
            }
        </tr>

        {
            data.body.map(item=>{
                return <tr>
                    {
                        dataKeys.map(i=>{
                            return <td className='font-14'>{item[i]}</td>
                        })
                    }
                </tr>
            })
        }
                
    </table>
}