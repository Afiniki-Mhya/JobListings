"use client";
import React, { useMemo } from "react";
import JobComp from "../Jobs/jobComp";
import { FaSearch } from "react-icons/fa";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestore } from "../Admin/Firebase/config";
import { collection, addDoc, where, query } from "firebase/firestore";
import { collectionData } from "../../../lib/zod";
import { z } from "zod";
import { FadeLoader } from "react-spinners";

function ScholarshipPage() {
  function handleApply(): void {
    throw new Error("Function not implemented.");
  }
  const itemsRef = collection(firestore, "entries");
  const q = query(itemsRef, where("type", "==", "Scholarship"));
  const [_collection, loading] = useCollection(q);

  const data = useMemo(() => {
    return z
      .array(collectionData)
      .parse(_collection?.docs.map((doc) => doc.data()) ?? []);
  }, [_collection?.size]);
  return (
    <div className="bg-[#92A4B1] min-h-screen text-black  relative flex flex-col -center items-center ">
      <h1 className="text-4xl  font-bold text-center py-4 mt-5">
        Scholarship Listings
      </h1>
      <div className="absolute top-0 right-0 p-8">
        <FaSearch />
      </div>
      {loading ? (
        <div className="h-[80dvh] flex items-center justify-center">
          <FadeLoader />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6 py-10 sm:grid sm:grid-cols-3">
          {data?.map((res, key) => {
            return (
              <JobComp
                key={key}
                title={res?.title}
                company={res?.company}
                location={res?.address!}
                description={res?.description!}
                onApply={handleApply}
                jobLink={res?.url!}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ScholarshipPage;
