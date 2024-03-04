"use client";
import React, { ElementType, useEffect, useState } from "react";
import { Country, State } from "country-state-city/";
import {
  useAuthState,
  useSignInWithEmailLink,
} from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useMutation } from "@tanstack/react-query";
import { auth, firestore } from "../Firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { CollectionDataType, collectionData } from "../../../../lib/zod";
import { CommandDialogDemo as CommandDialog } from "@/app/Components/BaseDialougue";
import { HashLoader, BeatLoader } from "react-spinners";
import { useRouter } from "next/navigation";
const FormPage: React.FC = () => {
  const signin = useSignInWithEmailLink(auth);
  const state = useAuthState(auth);
  const _collection = useCollection(collection(firestore, "entries"));
  // const {} = useMutation({
  //   mutationFn: () => {
  //     // setDoc(collection(firestore, "entries"), {});
  //   },
  // });
  const [data, setData] = useState<CollectionDataType>({
    state: "Abia",
    type: "Job",
  } as CollectionDataType);
  const action = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const doc = collectionData?.parse(data);
    await addDoc(collection(firestore, "entries"), doc);
    console.log("done");
    setData({
      state: "Abia",
      type: "Job",
    } as CollectionDataType);
  };
  const { mutate, isPending, error, status } = useMutation({
    mutationFn: action,
    onSuccess: () => setSuccess(true),
  });
  const { refresh } = useRouter();
  const [open, setOpen] = useState(false);
  const [_error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setOpen(isPending);
  }, [isPending]);
  useEffect(() => {
    setError(status == "error");
  }, [status,error]);
  return (
    <div className="bg-white rounded-xl container mx-auto flex md:items-center justify-center h-screen">
      <CommandDialog open={open} setOpen={setOpen}>
        <div className="flex items-center justify-center min-h-[20rem] flex-col gap-4 text-lg">
          <BeatLoader size={30} />
          Uploading...
        </div>
      </CommandDialog>
      <CommandDialog
        open={success && !error}
        setOpen={() => {
          setSuccess(false);
          refresh();
        }}
      >
        <div className="flex items-center justify-center min-h-[20rem] flex-col gap-4 text-lg">
          <HashLoader size={30} />
          Successfully Uploaded to Database
        </div>
      </CommandDialog>
      <CommandDialog open={_error} setOpen={setError}>
        <div className="flex items-center justify-center min-h-[20rem] flex-col gap-4 text-lg">
          Error occured
        </div>
      </CommandDialog>

      <div className="px-24 py-10 shadow-md bg-gray-950/20 rounded ">
        <form onSubmit={mutate} className="md:grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <input
              value={data?.title}
              onChange={(e) => {
                setData({ ...data, title: e?.target?.value });
              }}
              required
              name="title"
              className="title w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <input
              value={data?.address}
              onChange={(e) => {
                setData({ ...data, address: e?.target?.value });
              }}
              required
              name="address"
              className="title w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Address"
            />
          </div>
          <div className="mb-4">
            <select
              onChange={(e) => {
                setData({ ...data, state: e.target.value });
              }}
              required
              name="state"
              className="location w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              {State.getStatesOfCountry("NG")?.map((state) => {
                return (
                  <option key={state.isoCode} value={state.name}>
                    {state.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-4">
            <input
              value={data?.url}
              onChange={(e) => {
                setData({ ...data, url: e?.target?.value });
              }}
              name="url"
              className="url w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="url"
              placeholder="URL"
            />
          </div>
          <div className=" ">
            <select
              onChange={(e) => {
                // @ts-ignore
                setData({ ...data, type: e?.target?.value });
              }}
              required
              name="category"
              id="category"
              className="w-full py-2 px-3 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option defaultChecked value="Job">
                Job
              </option>
              <option value="Internship">Internship</option>
              <option value="Scholarship">Scholarship</option>
            </select>
          </div>
          <div className="mb-4 col-span-2">
            <textarea
              value={data?.description}
              onChange={(e) => {
                setData({ ...data, description: e?.target?.value });
              }}
              name="description"
              className="description w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Description"
              rows={4}
            ></textarea>
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
