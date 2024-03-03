import React from "react";

const FormPage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="px-24 py-6 shadow-md">
        <form className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <input
              name="title"
              className="title w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <input
              name="location"
              className="location w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Location"
            />
          </div>
          <div className="mb-4">
            <input
              name="url"
              className="url w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="URL"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="description"
              className="description w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Description"
              rows={4}
            ></textarea>
          </div>
          <div className=" flex gap-3 justify-center">
            <div className="mb-4">
              <input
                type="checkbox"
                name="checkbox1"
                id="checkbox1"
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <label htmlFor="checkbox1" className="ml-2">
                Jobs
              </label>
            </div>
            <div className="mb-4">
              <input
                type="checkbox"
                name="checkbox2"
                id="checkbox2"
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <label htmlFor="checkbox2" className="ml-2">
                Internships
              </label>
            </div>
            <div className="mb-4">
              <input
                type="checkbox"
                name="checkbox3"
                id="checkbox3"
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <label htmlFor="checkbox3" className="ml-2">
                Scholarships
              </label>
            </div>
          </div>
          <button
            className="col-span-2  bg-[#92A4B1] text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
