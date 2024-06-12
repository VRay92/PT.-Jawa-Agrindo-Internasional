"use client";
import * as React from "react";
import Card5 from "./Card5";
import axios from "axios";

interface ITeamsSection1Props {}

const TeamsSection1: React.FunctionComponent<ITeamsSection1Props> = (props) => {
  const [userData1, setUserData1] = React.useState<any>([]);
  const [userData2, setUserData2] = React.useState<any>([]);
  const [userData3, setUserData3] = React.useState<any>([]);
  const [userData4, setUserData4] = React.useState<any>([]);
  const [userData5, setUserData5] = React.useState<any>([]);
  const [userData6, setUserData6] = React.useState<any>([]);
  const [userData7, setUserData7] = React.useState<any>([]);
  const [userData8, setUserData8] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const loadDatabase = async () => {
    try {
      const responses1 = await axios.get("https://randomuser.me/api");
      const responses2 = await axios.get("https://randomuser.me/api/");
      const responses3 = await axios.get("https://randomuser.me/api/");
      const responses4 = await axios.get("https://randomuser.me/api/");
      const responses5 = await axios.get("https://randomuser.me/api/");
      const responses6 = await axios.get("https://randomuser.me/api/");
      const responses7 = await axios.get("https://randomuser.me/api/");
      const responses8 = await axios.get("https://randomuser.me/api/");
      setUserData1(responses1.data.results[0]);
      setUserData2(responses2.data.results[0]);
      setUserData3(responses3.data.results[0]);
      setUserData4(responses4.data.results[0]);
      setUserData5(responses5.data.results[0]);
      setUserData6(responses6.data.results[0]);
      setUserData7(responses7.data.results[0]);
      setUserData8(responses8.data.results[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadDatabase();
  }, []);

  return (
    <section className=" container bg-[#ebecf0] py-[5rem]">
      {loading && (
        <div className="z-36 fixed left-0 top-0 h-screen w-screen bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter">
          <span className="absolute left-1/2 top-2/4 -translate-x-1/2 -translate-y-1/2  p-0.5 px-2 text-center text-xs font-medium leading-none text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <div className="flex h-56 w-56 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </span>
        </div>
      )}
      <div className="items-center justify-center text-center text-[#0D2A40]">
        <h1 className="text-3xl font-bold">Meet Our Team </h1>
        <p className="mt-5 text-lg">
          We believe in investing in people <br /> and forming meaningful bonds
        </p>
      </div>
      <div
        id="card-container"
        className=" mt-10 flex flex-col gap-5 p-5 md:flex-row md:gap-10"
      >
        <Card5
          textcolor="text-teal-800"
          name1={`${userData1?.name?.first} ${userData1?.name?.last}`}
          occupation="Co-Founder"
          imageURL={userData1?.picture?.large}
          email={userData1?.email}
          phone={userData1?.phone}
        ></Card5>
        <Card5
          textcolor="text-teal-800"
          name1={`${userData2?.name?.first} ${userData2?.name?.last}`}
          occupation="Regional Sales Manager"
          imageURL={userData2?.picture?.large}
          email={userData2?.email}
          phone={userData2?.phone}
        ></Card5>
        <Card5
          textcolor="text-teal-800"
          name1={`${userData3?.name?.first} ${userData3?.name?.last}`}
          occupation="Regional Sales Manager"
          imageURL={userData3?.picture?.large}
          email={userData3?.email}
          phone={userData3?.phone}
        ></Card5>
        <Card5
          textcolor="text-teal-800"
          name1={`${userData4?.name?.first} ${userData4?.name?.last}`}
          occupation="Agronomist"
          imageURL={userData4?.picture?.large}
          email={userData4?.email}
          phone={userData4?.phone}
        ></Card5>
      </div>
      <div
        id="card-container"
        className=" flex flex-col gap-5 p-5 md:flex-row md:gap-10"
      >
        <Card5
          textcolor="text-teal-800"
          name1={`${userData5?.name?.first} ${userData5?.name?.last}`}
          occupation="Agronomist"
          imageURL={userData5?.picture?.large}
          email={userData5?.email}
          phone={userData5?.phone}
        ></Card5>
        <Card5
          textcolor="text-teal-800"
          name1={`${userData6?.name?.first} ${userData6?.name?.last}`}
          occupation="Designer"
          imageURL={userData6?.picture?.large}
          email={userData6?.email}
          phone={userData6?.phone}
        ></Card5>
        <Card5
          textcolor="text-teal-800"
          name1={`${userData7?.name?.first} ${userData7?.name?.last}`}
          occupation="Designer"
          imageURL={userData7?.picture?.large}
          email={userData7?.email}
          phone={userData7?.phone}
        ></Card5>
        <Card5
          textcolor="text-teal-800"
          name1={`${userData8?.name?.first} ${userData8?.name?.last}`}
          occupation="Sales"
          imageURL={userData8?.picture?.large}
          email={userData8?.email}
          phone={userData8?.phone}
        ></Card5>
      </div>
    </section>
  );
};

export default TeamsSection1;
