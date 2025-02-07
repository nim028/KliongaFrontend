import React from 'react'

export default function Table({data}) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d,i) => (
              <tr>
                    <th>{ i}</th>
                    <td>{d.name }</td>
                    <td>{"" }</td>
                    <td>{"" }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
