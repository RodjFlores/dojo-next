import React from "react";
import Characters from "./api-fetch";


export default async function Tickets() {
    return (
      <main>
        <h2>Characters</h2>
        <button className="btn-primary">View Ticket</button>
        <Characters/>
      </main>
    )
  }