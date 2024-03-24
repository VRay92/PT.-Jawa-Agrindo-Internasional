import * as React from "react";
import HeroSection from "@/components/HeroSection";
import TeamsHeroSection from "@/components/TeamHeroSection";
import TeamsSection1 from "@/components/TeamsSection1";
import axios from "axios";

interface ITeamsProps {}

const Teams: React.FunctionComponent<ITeamsProps> = (props) => {
  return (
    <div>
      <TeamsHeroSection />
      <TeamsSection1 />
    </div>
  );
};

export default Teams;
