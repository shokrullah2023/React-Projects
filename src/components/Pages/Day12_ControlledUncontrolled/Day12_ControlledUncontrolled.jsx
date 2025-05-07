import React from 'react';
import ControlledForm from "./ControlledForm";
import UncontrolledForm from "./UncontrolledForm";


export default function Day12_ControlledUncontrolled() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Day 12: Controlled vs Uncontrolled Components</h1>
      <p>
        In React, controlled components are those that derive their state from props and notify changes through callbacks. Uncontrolled components manage their own state internally.
      </p>
      <div className="flex gap-4">
        <ControlledForm />
        <UncontrolledForm />
      </div>
    </div>
  )
}