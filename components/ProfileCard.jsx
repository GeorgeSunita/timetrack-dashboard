export function ProfileCard({ firstName, lastName, report, handleReport }) {
  const borderRadius = 16;
  const padding = 24;
  const reportList = ["daily", "weekly", "monthly"];

  return (
    <>
      <div className="card stack v">
        <div className="content ">
          <div className="profile-picture">
            <img src="/image-jeremy.png" />
          </div>

          <div className="stack v g-1">
            <p className="alt">Report for</p>
            <h1>{`${firstName} ${lastName}`}</h1>
          </div>
        </div>

        <div className="filters stack v g-3">
          {reportList.map((item, index) => (
            <button
              key={index}
              value={item}
              className={`${
                report === item ? "text-white" : "text-DesaturatedBlue"
              } `}
              onClick={handleReport}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-size: 32px;
        }
        .alt {
          color: #b5b5b5;
        }
        .card {
          background-color: rgb(30, 32, 71);
          border-radius: ${borderRadius}px;
          color: #fff;
          width: 13%;
          height: 25rem;
        }
        .content {
          background-color: rgb(84, 70, 225);
          border-radius: ${borderRadius}px;
          padding: ${padding}px;
          z-index: 5;
          flex-grow: 1;
          flex-shrink: 0;
        }
        .filters {
          align-items: flex-start;
          padding: ${padding}px;
          z-index: 0;
          flex-grow: 0;
          flex-shrink: 1;
        }
        .profile-picture {
          height: 4rem;
          margin-bottom: 30px;
          width: 4rem;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid white;
        }
        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
        .text-white {
          color: white;
        }
        .text-DesaturatedBlue {
          color: hsl(235, 45%, 61%);
        }

        @media (min-width: 2100px) {
          .card {
            width: 15%;
            height: 23rem;
          }
          .filters {
            margin-top: -0.5rem;
            border-radius: 16px;
            flex-direction: row;
            background-color: rgb(30, 32, 71);
          }
        }

        @media (max-width: 1024px) {
          .card {
            width: 25%;
            height: 10rem;
          }
          .filters {
            margin-top: -0.5rem;
            border-radius: 16px;
            flex-direction: row;
            background-color: rgb(30, 32, 71);
          }
        }

        @media (max-width: 768px) {
          .card {
            width: 93%;
            height: 7rem;
            margin-bottom: 10rem;
          }
          .filters {
            border-radius: 16px;
            flex-direction: row;
            background-color: rgb(30, 32, 71);
          }
        }
      `}</style>
    </>
  );
}
