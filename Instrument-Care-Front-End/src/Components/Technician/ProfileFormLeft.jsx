import React from "react";

export default function ProfileFormLeft({ formData, handleChange }) {
  return (
    <div className="flex flex-col gap-3">
      <h5 className="font-bold">Affiliation</h5>
      <label className="pl-4">
        Institute Name 
        <input
          type="text"
          name="fullNames"
          value={formData.fullName}
          onChange={handleChange}
          className="border rounded p-1 w-full"
        />
      </label>
      <label className="pl-4">
        Designation
        <input
          type="text"
          name="fullNames"
          value={formData.fullName}
          onChange={handleChange}
          className="border rounded p-1 w-full"
        />
      </label>

      <h5 className="font-bold">Details of the Supervisor</h5>

      <label className="pl-4">
        Name 
        <input
          type="email"
          name="emails"
          value={formData.email}
          onChange={handleChange}
          className="border rounded p-1 w-full"
        />
      </label>

      <label className="pl-4">
        Designation 
        <input
          type="email"
          name="emails"
          value={formData.email}
          onChange={handleChange}
          className="border rounded p-1 w-full"
        />
      </label>

      <label className="pl-4">
        Email 
        <input
          type="email"
          name="emails"
          value={formData.email}
          onChange={handleChange}
          className="border rounded p-1 w-full"
        />
      </label>

      <label className="pl-4">
        Contract No 
        <input
          type="email"
          name="emails"
          value={formData.email}
          onChange={handleChange}
          className="border rounded p-1 w-full"
        />
      </label>

    <h5 className="font-bold">Techinical Expertise</h5>

      <label className="pl-4">
        Laboratory Category
        <select
          name="laboratory_category"
          value={formData.contractNo}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        >
          <option value="">Select Laboratory Category</option>
          <option value="1">Chemical Testing</option>
          <option value="2">Biological Testing</option>
          <option value="3">Physical & Mechanical Testing</option>
          <option value="4">Calibration Service</option>
          <option value="5">Biochemistry, Chemical Pathology, Clinical Pathology</option>
          <option value="6">Hematology and Immuno Hematology</option>
          <option value="7">Microbiology and Serology</option>
          <option value="8">Histopathology/Cytopathology</option>
          <option value="9">Immunology</option>
          <option value="10">Molecular Biology</option>
          <option value="11">Pharmacology</option>
          <option value="12">Andrology Clinical</option>
          <option value="13">Nuclear Medicine</option>
          <option value="14">Embryology</option>
        </select>
      </label>

      <label className="pl-4">
        Instrument Category
        <select
          name="instrument_category"
          value={formData.contractNo}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        >
          <option value="">Select Instrument Category</option>
          <option value="1">Analiytical Balance</option>
          <option value="2">Microscope</option>
          <option value="3">Centrifuger</option>
          <option value="4">Gas Chromatograph & GC/MS</option>
          <option value="5">High Performance Liquid Chromatograph (HPLC)</option>
          <option value="6"></option>
          <option value="7"></option>
          <option value="8"></option>
          <option value="9"></option>
          <option value="10"></option>
          <option value="11"></option>
          <option value="12"></option>
          <option value="13"></option>
          <option value="15"></option>
          <option value="16"></option>
          <option value="17"></option>
          <option value="18"></option>
          <option value="19"></option>
          <option value="20"></option>
          <option value="21"></option>
          <option value="22"></option>
          <option value="23"></option>
          <option value="24"></option>
          <option value="25"></option>
          <option value="26"></option>
          <option value="27"></option>
          <option value="28"></option>
          <option value="29"></option>
          <option value="30"></option>
        </select>
      </label>


    </div>
  );
}
