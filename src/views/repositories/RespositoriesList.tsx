import React, { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const RespositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const { searchRepositories } = useActions();
  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  );

  console.log(data);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="isolate bg-white">
          <div className="grid grid-cols-12 ">
            <div className="col-span-12 sm:col-span-6 ml-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Search
              </label>
              <input
                type="text"
                name="company-website"
                id="company-website"
                className=" block w-full flex-1  pl-2 rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Type your word..."
                onChange={(e) => setTerm(e.target.value)}
                value={term}
              />
            </div>
            <div className="col-span-2 mt-6 sm:col-span-2 ml-2">
              <button
                type="submit"
                className="group  flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      {error && <h1 className={"text-red-500"}>Error</h1>}
      {loading && <h1 className={"text-red-500"}>Loading...</h1>}
      {!error &&
        !loading &&
        data.map((item: string) => {
          return <li>{item}</li>;
        })}
    </>
  );
};

export default RespositoriesList;
