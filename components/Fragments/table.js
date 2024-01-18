const Table = ({ header, children }) => {
  return (
    <>
      <div class="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-2 mb-2 mr-2">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {header.map((item, index) => (
                <th scope="col" className="px-6 py-3" key={index}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
