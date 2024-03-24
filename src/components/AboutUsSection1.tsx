"use client";
import * as React from "react";
import Card4 from "./Card4";
import { useRouter } from "next/navigation";
import axios from "axios";

interface IAboutUsSection1Props {
  name: string;
}

const AboutUsSection1: React.FunctionComponent<IAboutUsSection1Props> = (
  props
) => {
  const [userData1, setUserData1] = React.useState<string[]>([]);
  const [userData2, setUserData2] = React.useState([]);
  const [userData3, setUserData3] = React.useState([]);
  const [userData4, setUserData4] = React.useState([]);
  const router = useRouter();
  const loadDatabase = async () => {
    try {
      const responses1 = await axios.get("https://randomuser.me/api");
      const responses2 = await axios.get("https://randomuser.me/api/");
      const responses3 = await axios.get("https://randomuser.me/api/");
      const responses4 = await axios.get("https://randomuser.me/api/");
      setUserData1(responses1.data.results);
      setUserData2(responses2.data.results);
      setUserData3(responses3.data.results);
      setUserData4(responses4.data.results);
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
        className=" flex flex-col md:flex-row gap-5 md:gap-10 mt-10 p-5 text-justify"
      >
        <Card4
          bgcolor="bg-white"
          textcolor="text-teal-800"
          name={`${userData1[0]?.name?.first} ${userData1[0]?.name?.last}`}
          occupation="Co-Founder"
          imageURL={userData1[0]?.picture.large}
          description={`${userData1[0]?.name?.first} is a visionary entrepreneur and leader, dedicated to driving innovation and creating lasting impact in industry. With a passion for agriculture, ${userData1[0]?.name?.first} co-founded PT.Jawa Agrindo to revolutionize the way industry operates.`}
        ></Card4>
        <Card4
          bgcolor="bg-white"
          textcolor="text-teal-800"
          name={`${userData2[0]?.name?.first} ${userData2[0]?.name?.last}`}
          occupation="Regional Sales Manager"
          imageURL={userData2[0]?.picture.large}
          description={`${userData2[0]?.name?.first}  is an accomplished sales professional with a proven track record of driving revenue growth and exceeding targets in his role as a Regional Sales Manager. With a passion for building strong client relationships and leading high-performing sales teams, ${userData2[0]?.name?.first}  brings a wealth of experience and expertise to his position.`}
        ></Card4>
        <Card4
          bgcolor="bg-white"
          textcolor="text-teal-800"
          name={`${userData3[0]?.name?.first} ${userData3[0]?.name?.last}`}
          occupation="Designer"
          imageURL={userData3[0]?.picture.large}
          description={`${userData3[0]?.name?.first} is a visionary designer known for his exceptional creativity, innovative approach, and keen eye for detail. With a passion for transforming ideas into visually captivating experiences, his brings a unique perspective to every project ${userData3[0]?.name?.first} undertake`}
        ></Card4>
        <Card4
          bgcolor="bg-white"
          textcolor="text-teal-800"
          name={`${userData4[0]?.name?.first} ${userData4[0]?.name?.last}`}
          occupation="Agronomist"
          imageURL={userData4[0]?.picture?.large}
          description={`${userData4[0]?.name?.first} is a dedicated agronomist with a passion for sustainable agriculture and environmental stewardship. With extensive experience in agricultural science and a deep understanding of crop production systems,${userData4[0]?.name?.first} is committed to improving farming practices and promoting food security.`}
        ></Card4>
      </div>
      <div>
        <h1
          className="flex font-bold underline justify-end mr-5 cursor-pointer"
          onClick={() => {
            router.push("/teams");
          }}
        >
          more...
        </h1>
      </div>
    </section>
  );
};

export default AboutUsSection1;
