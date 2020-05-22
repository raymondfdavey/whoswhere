const colors = [
  "#ff206e",
  "#fbff12",
  "#41ead4",
  "#3e92cc",
  "#00a6fb",
  "#ee6352",
  "#f5e0b7",
  "#57a773",
  "#0a2463",
  "#484d6d",
  "#f7aef8",
  "#b388eb",
  "#8093f1",
  "#72ddf7",
  "#f4f4ed",
  "#7ac74f",
  "#adeee3",
  "#8b9474",
  "#271f30",
  "#87f1ff"
];

export const fullBlockName = blockAbbrev => {
  if (blockAbbrev === "fun") return "Fundamentals";
  if (blockAbbrev === "be") return "Back-End";
  if (blockAbbrev === "fe") return "Front-End";
  if (blockAbbrev === "proj") return "Project";
  if (blockAbbrev === "grad") return "Graduated";
};

export const createBlockTally = blockArray => {
  if (!blockArray.length) {
    return [];
  }
  const newObj = { totalTimeAtNorthcoders: 0 };

  blockArray.map(blockInfo => {
    if (blockInfo.name !== "Graduated") newObj.totalTimeAtNorthcoders += 1;
    console.log(blockInfo);

    return newObj.hasOwnProperty(blockInfo.name)
      ? (newObj[blockInfo.name] += 1)
      : (newObj[blockInfo.name] = 1);
  });
  delete newObj["Graduated"];
  return newObj;
};

export const analyseData = studentsArray => {
  const newObj = {
    totalStudents: studentsArray.length,
    cohortNumbers: {},
    currentBlockNumbers: {},
    totalNumberOfBlocks: 0,
    repeatedBlocks: {
      Fundamentals: 0,
      "Back End": 0,
      "Front End": 0,
      "Project Phase": 0
    }
  };
  studentsArray.map(student => {
    return newObj.cohortNumbers.hasOwnProperty(student.startingCohort)
      ? (newObj.cohortNumbers[student.startingCohort] += 1)
      : (newObj.cohortNumbers[student.startingCohort] = 1);
  });
  studentsArray.map(student => {
    console.log(student.currentBlock);
    return newObj.currentBlockNumbers.hasOwnProperty(student.currentBlock)
      ? (newObj.currentBlockNumbers[student.currentBlock] += 1)
      : (newObj.currentBlockNumbers[student.currentBlock] = 1);
  });

  studentsArray.map(student => {
    for (const key in student.blockSummary) {
      if (key === "totalTimeAtNorthcoders") {
        newObj.totalNumberOfBlocks += student.blockSummary[key];
      } else if (student.blockSummary[key] > 1) {
        newObj.repeatedBlocks[key] += student.blockSummary[key] - 1;
      }
    }
  });

  return newObj;
};

// export const inDepthAnalysis = detailedInfoArray => {
//   console.log(detailedInfoArray);
// };

export const mergeData = (bigD, smallD) => {
  const refObj = {};
  bigD.map(student => {
    refObj[student["_id"]] = student.blockHistory;
  });

  const mergedData = smallD.map(student => {
    const mergedObj = {
      ...student
    };

    mergedObj.blockHistory = refObj[student["_id"]];
    mergedObj.blockSummary = createBlockTally(mergedObj.blockHistory);
    return mergedObj;
  });

  console.log(mergedData, "MERGED DATA BEFORE RETURN ");
  return mergedData;
};

// const combinedData = smal;
// lDataArr.map(student => {
//   bigDataArr.map(bigDataStudent => {});
// });
// combinedData;
// console.log(smallDataArr, "HERE");
// console.log(bigDataArr, "here");

export const formatForDoughnut = (
  summaryObject,
  keys,
  nameOfKey,
  descriptionForSegment
) => {
  const betterKeyName = keys.map(key =>
    descriptionForSegment === "Cohort"
      ? `${descriptionForSegment} ${key}`
      : `${fullBlockName(key)}`
  );
  const dataArray = keys.map(key => summaryObject[nameOfKey][key]);
  const colorArray = keys.map((key, i) => colors[i]);

  console.log(dataArray);
  console.log(colorArray);
  console.log(betterKeyName);

  const dataObj = {
    labels: betterKeyName,
    datasets: [
      {
        data: dataArray,
        backgroundColor: colorArray
      }
    ]
  };
  console.log(dataObj);

  return dataObj;
};

export const formatForRepeatedBlocksBar = summaryObj => {
  console.log(summaryObj, "HEHRHEHEHE INPUT");

  const dataObj = {
    labels: ["Fundamentals", "Back End", "Front End", "Project Phase"],
    datasets: [
      {
        label: "Repeated Blocks Total",
        backgroundColor: "rgba(255,99,132,0.2)",
        // borderColor: "rgba(255,99,132,1)",
        // borderWidth: 1,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: []
      }
    ]
  };
  dataObj.labels.forEach(key => {
    dataObj.datasets[0].data.push(summaryObj.repeatedBlocks[key]);
  });
  console.log(dataObj, "OUTPUT");

  return dataObj;
};

export const formatForNorthcoderJourneyBar = detailedArray => {
  const dataObj = {
    labels: [],
    datasets: [
      {
        label: "Number of Students",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: []
      }
    ]
  };

  detailedArray.forEach(student => {
    dataObj.labels.push(student.name);
    dataObj.datasets[0].data.push(
      student.blockSummary.totalTimeAtNorthcoders * 3
    );
  });
  return dataObj;
};

export const formatForJourneySummaryBar = formattedDataObj => {
  const refObj = {};
  formattedDataObj.datasets[0].data.forEach(value => {
    if (!refObj.hasOwnProperty(value)) {
      refObj[value] = 1;
    }
    if (refObj.hasOwnProperty(value)) {
      refObj[value] += 1;
    }
  });

  const valuesForLabelsArray = Object.keys(refObj).map(
    key => `${key} weeks to graduate`
  );

  const valuesForDataArray = [];
  for (let key in refObj) {
    valuesForDataArray.push(refObj[key]);
  }
  console.log(valuesForLabelsArray);
  console.log(valuesForDataArray);
  formattedDataObj.datasets[0].data = valuesForDataArray;
  formattedDataObj.labels = valuesForLabelsArray;
  return formattedDataObj;
};
