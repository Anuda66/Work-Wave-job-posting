import React from "react";
import Header from "../Components/Header";
import SpacalityMeny from "../Components/SpacalityMeny";

import LatestJobs from "../Components/LatestJobs";

function Home() {
  return (
    <div>
      <Header />
      <SpacalityMeny />
      <LatestJobs />
    </div>
  );
}

export default Home;
