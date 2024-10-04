import React, { useContext } from "react";
import { TeacherContext } from "../context/TeacherContext";
import StatCard from "../components/StatCard";
import MarkSection from "../components/MarkSection";
import { useNavigate } from "react-router-dom";

const ProjectDetailsPage = () => {
  const { projectId } = useContext(TeacherContext);
  const navigate = useNavigate();
  return (
    <div className="m-5">
      <div className="flex justify-between">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
          Project Overview
        </h2>
        <button
          onClick={() => {
            navigate("/add");
          }}
          type="button"
          class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Add Marks
        </button>
      </div>
      <MarkSection projectId={projectId} isProjectExists={true} />

      <div>
        <h2 className="mt-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
          Project Uploads
        </h2>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
