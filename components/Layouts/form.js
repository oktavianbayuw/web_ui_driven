const Form = ({ data }) => {
  return (
    <>
      <form className="w-full mx-auto">
        {data.map((item, index) => (
          <div className="mb-5" key={index}>
            <label
              for={item.name}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {item.label}
            </label>
            {item.type === "textarea" ? (
              <textarea
                id={item.name}
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder={item.placeholder}
                required={item.required}
              ></textarea>
            ) : (
              <input
                type={item.type}
                id={item.name}
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder={item.placeholder}
                required={item.required}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="text-white bg-blue-700 ml-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
