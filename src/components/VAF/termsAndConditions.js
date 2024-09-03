import React from "react";
import { Box, Typography } from "@mui/material";
import { sectionTitle } from "../../utils/sectionTitleUtils";
import { VAFSectionTitles } from "../../constants/sectionTitles";

const TermsAndConditions = () => {
  return (
    <Box
      sx={{
        marginBottom: "2rem",
        paddingY: "0.5rem",
        borderTop: "2px solid #000",
      }}
    >
      {sectionTitle(
        VAFSectionTitles.termsAndConditions.number,
        VAFSectionTitles.termsAndConditions.title
      )}
      <Typography
        variant="body1"
        color="secondary.main"
        sx={{ marginLeft: "3.5rem", fontWeight: "bold", fontSize: "14px" }}
      >
        General Information
      </Typography>
      <Box sx={{ paddingLeft: "3.5rem" }}>
        <Typography
          variant="body1"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <span>
            <b>1.</b>
          </span>
          <span style={{ marginLeft: "1rem" }}>
            This application is subject to acceptance by UC8.
          </span>
        </Typography>
        <Typography
          variant="body1"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <span>
            <b>2.</b>
          </span>
          <span style={{ marginLeft: "1rem" }}>
            <b>SERVICES PROVIDED UNDER THIS AGREEMENT</b>
            <br />
            UC8 will supply the following billable services under this
            agreement: <br />
            (a) National Long Distance Calls
            <br />
            (b) Mobile Calls
            <br />
            (c)International Long Distance Calls
            <br />
            (d) Local Calls
            <br />
            (e) On-net Calls (UC8 to UC8)
            <br />
            (f) Other services if listed
          </span>
        </Typography>
        <Typography
          variant="body1"
          color="secondary.main"
          sx={{ fontSize: "14px", display: "flex" }}
        >
          <span style={{ marginTop: "0px", marginBottom: "0px" }}>
            <b>3.</b>
          </span>
          <br></br>
          <br></br>
          <span
            style={{
              marginLeft: "1rem",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <b>
              SERVICES NOT PROVIDED UNDER THIS AGREEMENT - PSTN SERVICE WITH
              ANOTHER CARRIER
            </b>
            <br></br>
            <span>
              UC8 will not provide or be held liable for the following services:
            </span>
            <span>
              (a) All fixed local calls from Preselect and Override services
              will continue to be provided and billed by your current fixed
              telephone service provider (not by UC8).
            </span>
            <span>
              (b) PSTN Line Rental will continue to be provided and billed by
              your current fixed telephone service provider (not by UC8).
            </span>
            <span>
              (c) UC8 services will not permit carriage of calls to
              Directory/Operator Services (12), Free Phone Services (18), Local
              Rate Services
            </span>
            <span>
              (13) , Premium Rate Services (19), Data Access Services (0198),
              Satellite Mobile Services (014), Calling Card Services (189),
              Paging Services (016), VPN Services (188), or UPT Services (05).
              Those calls are to continue being carried by your current fixed
              telephone service provider (not by UC8).
            </span>
            <span>
              (d) Your point of contact for faults related to PSTN Lines will
              continue to be your current fixed telephone service provider; and
              UC8 will not be held liable for PSTN line faults at any time
              during the service period.
            </span>
          </span>
        </Typography>
        <Typography
          variant="body1"
          color="secondary.main"
          style={{ fontSize: "14px", display: "flex" }}
        >
          <b>4.</b>
          <span
            style={{
              marginLeft: "1rem",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <b>BILLING</b>
            <br />
            <span>
              UC8 will bill you monthly, but reserves the right to bill at
              different intervals. Accounts are payable within 14 days of issue.
              UC8 has the right to suspend or terminate any service if an
              account becomes or remains overdue.
            </span>
          </span>
        </Typography>

        <Typography
          variant="body1"
          color="secondary.main"
          style={{ fontSize: "14px", display: "flex" }}
        >
          <b>5.</b>
          <span
            style={{
              marginLeft: "1rem",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <b>MINIMUM SERVICE PERIOD</b>
            <br></br>
            <span>
              The minimum contract period is specified in Item 12. You will be
              charged an early termination fee if you transfer to another
              provider before expiration of the Term.
            </span>
          </span>
        </Typography>
        <Typography
          variant="body1"
          color="secondary.main"
          style={{ fontSize: "14px", display: "flex" }}
        >
          <span style={{ display: "inline-block", minWidth: "1rem" }}><b>6.</b></span>
          <span
            style={{
              display: "inline-block",
              width: "calc(100% - 3rem)",
              marginLeft: "1rem",
              textAlign: "justify",
            }}
          >
            <b>HANDLING OF PERSONAL INFORMATION AND CREDIT INFORMATION</b>
            <br></br>
            <span>
              (a) UC8 collects and uses personal information about you primarily
              to supply you with the products and services you order from it and
              its related companies. UC8 also collects and uses personal
              information for related or secondary purposes including (i)
              billing and account management, (ii) business planning and product
              development, (iii) providing you with information about
              promotions, as well as the products and services of UC8 and other
              organizations.
            </span>
            <br></br>
            <span>
              (b) If you do not provide all the personal information that UC8
              requests from you, UC8 may not be able to supply the products or
              services you have requested, or UC8 may be restricted in the way
              it supplies those products or services to you
            </span>
            <br></br>
            <span>
              (c) UC8 may disclose personal information about you to (i) UC8
              agents, dealers, contractors and franchisees, (ii) UC8 suppliers
              who need access to the personal information to provide UC8 with
              services, enabling UC8 to supply you with the products and
              services you have ordered, and (iii) joint venture partners of
              UC8.
            </span>
          </span>
        </Typography>

        <Typography
          variant="body1"
          color="secondary.main"
          style={{ fontSize: "14px", display: "flex" }}
        >
          <span style={{ display: "inline-block", minWidth: "1rem" }}>
            <b>7.</b>
          </span>

          <span
            style={{
              display: "inline-block",
              width: "calc(100% - 3rem)",
              marginLeft: "1rem",
              textAlign: "justify",
            }}
          >
            <b>GENERAL</b>
            <br></br>
            You will be responsible for all service charges and calls using your
            UC8 phone service, including calls made by another person or
            redirected to another service number. You also agree to be bound by
            the current terms and conditions published online at
            www.UC8-group.com.au (UC8’s Standard Form of Agreement).
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default TermsAndConditions;
