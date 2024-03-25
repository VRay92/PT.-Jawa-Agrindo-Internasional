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
    }
  };

  React.useEffect(() => {
    loadDatabase();
  }, []);

  return (
    <section className=" container bg-[#ebecf0] py-[5rem]">
      <div className="items-center justify-center text-center text-[#0D2A40]">
        <h1 className="text-3xl font-bold">Meet Our Team </h1>
        <p className="mt-5 text-sm">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
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
