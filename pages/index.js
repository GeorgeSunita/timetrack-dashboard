import { InfoCard } from "../components/InfoCard";
import { ProfileCard } from "../components/ProfileCard";

import { useState } from "react";

export default function Home() {
  const [report, setReport] = useState("weekly");

  const handleReport = (e) => {
    setReport(e.target.value);
  };

  return (
    <>
      <div className="container stack h">
        <ProfileCard
          firstName="Jeremy"
          lastName="Robson"
          report={report}
          handleReport={handleReport}
        />{" "}
        <InfoCard report={report} handleReport={handleReport} />
      </div>
      <style jsx>{`
        .container {
          margin: 12rem auto;
          align-items: center;
          justify-content: center;
        }

        /******media query **************/

        @media (min-width: 2100px) {
          .container {
            margin: 12rem auto;
            width: 100%;
            height: 100%;
          }
        }
        @media (max-width: 1024px) {
          .container {
            width: 100%;
            height: 100%;
          }
        }

        @media (max-width: 768px) {
          .container {
            width: 65%;
            height: 100%;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
