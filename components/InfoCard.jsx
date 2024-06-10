import { useState, useEffect } from "react";

const logos = [
  "/icon-work.svg",

  "/icon-play.svg",

  "/icon-study.svg",

  "/icon-exercise.svg",

  "/icon-social.svg",

  "/icon-self-care.svg",
];
const background = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];

console.log(logos);
export function InfoCard({ report }) {
  const borderRadius = 16;
  const padding = 24;
  console.log(report);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch("./data.json")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    };
    getData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="container stack h g-5">
        {data?.map((item, index) => (
          <div className="card">
            <div
              className="backdrop"
              style={{
                backgroundImage: `url("${logos[index]}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "calc(100% - 18px) -8px",
                backgroundColor: background[index],
              }}
            ></div>
            <div className="content stack v">
              <h4>{item.title}</h4>
              <div className="report stack v g-5">
                <h2>{`${item.timeframes[report].current}hrs`}</h2>
                <p className="alt">{`Last Week – ${item.timeframes[report].previous}hrs`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          padding: 1rem;
          width: 39%;
          flex-wrap: wrap;
        }
        h2 {
          color: white;
          font-size: 35px;
          font-weight: 300;
        }
        h4 {
          color: white;
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .alt {
          color: hsl(235, 45%, 61%);
        }
        .backdrop {
          flex-grow: 0;
          flex-shrink: 1;
          height: 50px;
          border-radius: 13px;
        }

        .card {
          height: 12rem;
          flex-wrap: wrap;
          background-color: rgb(30, 32, 71);
          border-radius: ${borderRadius}px;
          color: #fff;
        }

        .content {
          background-color: rgb(30, 32, 71);
          border-radius: ${borderRadius}px;
          color: #fff;
          flex-grow: 1;
          flex-shrink: 0;
          justify-content: space-between;
          margin-top: -${borderRadius}px;
          padding: 24px;
        }
        .content:hover {
          background-color: hsl(236, 100%, 87%);
          cursor: pointer;
        }

        @media (min-width: 2100px) {
          .container {
            width: 50%;
            height: 100%;
            gap: 4rem;
          }
          .card {
            width: 25%;
            height: 9rem;
          }
        }

        @media (max-width: 1024px) {
          .container {
            width: 100%;
            height: 100%;
            gap: 4rem;
          }
          .card {
            width: 30%;
            height: 10rem;
          }
        }
        @media (max-width: 768px) {
          .container {
            width: 100%;
            height: 100%;
            gap: 10px;
          }
          .card {
            width: 100%;
            height: 100%;
          }
          .content {
            flex-direction: column;
            justify-content: space-evenly;
          }
          .report {
            flex-direction: row;
            justify-content: space-between;
          }
        }
      `}</style>
    </>
  );
}
