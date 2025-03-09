import React from "react";

function AddJobs() {
  return (
    <form>

      <p>Add Jobs</p>

      <div>

        <div>
          <p>Compnay Name</p>
          <input type="text" placeholder="Ex : Microsoft" required />
        </div>

        <div>
          <p>Job Title</p>
          <input type="text" placeholder="Ex : Front-End Engineer" required />
        </div>

        <div>
          <p>Technology</p>
          <input type="text" placeholder="Ex : React, JacvaScript" required />
        </div>

        <div>
          <p>Discription </p>
          <input type="text" placeholder="Ex : Warehouse applications using a wide range of technologies..." required />
        </div>

        <div>
          <p>Requirements</p>
          <input type="text" placeholder="Ex : Requirements" required />
        </div>

      </div>
    </form>
  );
}

export default AddJobs;
