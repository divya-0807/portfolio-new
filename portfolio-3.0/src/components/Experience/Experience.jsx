import React from "react";

import { ExperienceData } from "../../data/ExperienceData";
import { Timeline } from "./TextGenerateEffect";

const Experience = () => {
  const formattedData = ExperienceData.map((exp) => ({
    title: exp.timerange,
    content: (
      <div>
        <h3 className="text-xl font-semibold text-black dark:text-white">
          {exp.role} - {exp.company}
        </h3>
        <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {exp.about}
        </p>
      </div>
    ),
  }));

  return <Timeline data={formattedData} />;
};

export default Experience;
