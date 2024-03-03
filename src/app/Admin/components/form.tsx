"use client";
import React, { useState } from "react";

const FormPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-[#92A4B1] min-h-screen text-black font-[Poppins]">
      <div className="w-2/5 mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add Job</h2>
        <form>
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
              name="type"
              className=" type w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Type"
            />
          </div>
          <div className="mb-4">
            <input
              name="url"
              className=" url w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="URL"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="description"
              className=" description w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Description"
              rows={4}
            ></textarea>
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
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
