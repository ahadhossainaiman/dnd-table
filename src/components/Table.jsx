/* eslint-disable react/prop-types */


const Table = ({currentItems}) => {
    console.log(currentItems);
    return (
        <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>status</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {/* row 2 */}
         {
            currentItems?.map((item)=>{
                return (
                    <>
           <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-bold">{item.client_name}</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
           </tr>
           </>
                )
            })
         }
        </tbody>
     
      </table>
    );
};

export default Table;