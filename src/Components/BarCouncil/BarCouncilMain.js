import React from "react";
import BarCouncildashboard from "./BarCouncildashboard";
import BarCouncilSidebar from "./BarCouncilSidebar";
import BarCouncilLogin from "./BarCouncilLogin";
import BarcouncilViewAllAdvocate from "./BarcouncilViewAllAdvocate";
import BarCouncilViewDetails from "./BarCouncilViewDetails";
import BarCouncilViewComplaints from "./BarCouncilViewComplaints";
import BarCouncilViewAllCase from "./BarCouncilViewAllCase";
import BarCouncilViewAllCaseDeatils from "./BarCouncilViewAllCaseDeatils";
import BarCouncilDbarViewAdvocate from "./BarCouncilDbarViewAdvocate";
import BarCouncilDbarViewAdocateDetails from "./BarCouncilDbarViewAdocateDetails";
import BarcouncilAddLegalPolicies from "./BarcouncilAddLegalPolicies";
import BarcouncilViewAppeals from "./BarcouncilViewAppeals";

function BarCouncilMain({ data }) {
  return (
    <div>
      <div class="row">
        <div class="col col-lg-2 col-sm-2">
          <BarCouncilSidebar />
        </div>

        <div class="col-sm-10 col-lg-10 ">
          {data === "dashboard" ? (
            <BarCouncildashboard />
          ) : data === "viewadvocate" ? (
            <BarcouncilViewAllAdvocate />
          ) : data === "details" ? (
            <BarCouncilViewDetails />
          ) : data === "complaints" ? (
            <BarCouncilViewComplaints />
          ) : data === "cases" ? (
            <BarCouncilViewAllCase />
          ) : data === "case_details" ? (
            <BarCouncilViewAllCaseDeatils />
          ) : data === "view_d-bar_advocate" ? (
            <BarCouncilDbarViewAdvocate />
          ) : data === "view_d-bar_advocate_details" ? (
            <BarCouncilDbarViewAdocateDetails />
          ) : data === "add_legal" ? (
            <BarcouncilAddLegalPolicies />
          ) : data === "appeals" ? (
            <BarcouncilViewAppeals />
          ) : (
            <BarCouncildashboard />
          )}
        </div>
      </div>
    </div>
  );
}

export default BarCouncilMain;
