"use client";
import * as React from "react";
import Card5 from "./Card5";
import axios from "axios";

interface ITeamsSection1Props {}

const TeamsSection1: React.FunctionComponent<ITeamsSection1Props> = (props) => {
  const [userData1, setUserData1] = React.useState([]);
  const [userData2, setUserData2] = React.useState([]);
  const [userData3, setUserData3] = React.useState([]);
  const [userData4, setUserData4] = React.useState([]);
  const [userData5, setUserData5] = React.useState([]);
  const [userData6, setUserData6] = React.useState([]);
  const [userData7, setUserData7] = React.useState([]);
  const [userData8, setUserData8] = React.useState([]);

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
      setUserData1(responses1.data.results);
      setUserData2(responses2.data.results);
      setUserData3(responses3.data.results);
      setUserData4(responses4.data.results);
      setUserData5(responses5.data.results);
      setUserData6(responses6.data.results);
      setUserData7(responses7.data.results);
      setUserData8(responses8.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    loadDatabase();
  }, []);

  return (
    <section className=" bg-[#ebecf0] py-[5rem] container">
      <div className="text-center justify-center items-center text-[#0D2A40]">
        <h1 className="text-3xl font-bold">Meet Our Team </h1>
        <p className="mt-5 text-sm">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div
        id="card-container"
        className=" flex flex-col md:flex-row gap-5 md:gap-10 mt-10 p-5"
      >
        <Card5
          textcolor="text-teal-800"
          name={`${userData1[0]?.name.first} ${userData1[0]?.name.last}`}
          occupation="Co-Founder"
          imageURL={userData1[0]?.picture.large}
          email={userData1[0]?.email}
          phone={userData1[0]?.phone}
        ></Card5>
        <Card5
          textcolor="text-teal-800"
          name={`${userData2[0]?.name.first} ${userData2[0]?.name.last}`}
          occupation="Regional Sales Manager"
          imageURL={userData2[0]?.picture.large}
          email={userData2[0]?.email}
          phone={userData2[0]?.phone}
        ></Card5>
        <Card5
          textcolor="text-teal-800"
          name={`${userData3[0]?.name.first} ${userData3[0]?.name.last}`}
          occupation="Regional Sales Manager"
          imageURL={userData3[0]?.picture.large}
          email={userData3[0]?.email}
          phone={userData3[0]?.phone}
        ></Card5>
        <Card5
          textcolor="text-teal-800"
          name={`${userData4[0]?.name.first} ${userData4[0]?.name.last}`}
          occupation="Agronomist"
          imageURL={userData4[0]?.picture.large}
          email={userData4[0]?.email}
          phone={userData4[0]?.phone}
        ></Card5>
      </div>
      <div
        id="card-container"
        className=" flex flex-col md:flex-row gap-5 md:gap-10 p-5"
      >
        <Card5
          textcolor="text-teal-800"
          name={`${userData5[0]?.name.first} ${userData5[0]?.name.last}`}
          occupation="Agronomist"
          imageURL={userData5[0]?.picture.large}
          email={userData5[0]?.email}
          phone={userData5[0]?.phone}
        ></Card5>
        <Card5
          textcolor="text-teal-800"
          name={`${userData6[0]?.name.first} ${userData6[0]?.name.last}`}
          occupation="Designer"
          imageURL={userData6[0]?.picture.large}
          email={userData6[0]?.email}
          phone={userData6[0]?.phone}
        ></Card5>
        <Card5
          textcolor="text-teal-800"
          name={`${userData7[0]?.name.first} ${userData7[0]?.name.last}`}
          occupation="Designer"
          imageURL={userData7[0]?.picture.large}
          email={userData7[0]?.email}
          phone={userData7[0]?.phone}
        ></Card5>
        <Card5
          textcolor="text-teal-800"
          name={`${userData8[0]?.name.first} ${userData8[0]?.name.last}`}
          occupation="Sales"
          imageURL={userData8[0]?.picture.large}
          email={userData8[0]?.email}
          phone={userData8[0]?.phone}
        ></Card5>
      </div>
    </section>
  );
};

export default TeamsSection1;
