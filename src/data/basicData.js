const fullBlockName = blockAbbrev => {
  if (blockAbbrev === "fun") return "Fundamentals";
  if (blockAbbrev === "be") return "Back-End";
  if (blockAbbrev === "fe") return "Front-End";
  if (blockAbbrev === "proj") return "Project";
  if (blockAbbrev === "grad") return "Graduated";
};
const data = [
  {
    _id: "5e6a9643c0bf8c00171aeee5",
    name: "Conway and Patrick's lyrically challenged flop",
    startingCohort: -5,
    currentBlock: "grad",
    blockHistory: [
      {
        _id: "5e4e6335f7c6fcc027cc780d",
        number: 1,
        name: "Fundamentals",
        slug: "fun"
      },
      {
        _id: "5e4e6335f7c6fcc027cc780e",
        number: 2,
        name: "Back End",
        slug: "be"
      },
      {
        _id: "5e4e6335f7c6fcc027cc780f",
        number: 3,
        name: "Front End",
        slug: "fe"
      },
      {
        _id: "5e4e6335f7c6fcc027cc7810",
        number: 4,
        name: "Project Phase",
        slug: "proj"
      },
      {
        _id: "5e4e6335f7c6fcc027cc7811",
        number: 5,
        name: "Graduated",
        slug: "grad"
      }
    ],
    blockSummary: {
      totalTimeAtNorthcoders: 4,
      Fundamentals: 1,
      "Back End": 1,
      "Front End": 1,
      "Project Phase": 1
    }
  },
  {
    _id: "5e6a96cec0bf8c00171aeee6",
    name: "I have become death, destroyer of worlds",
    startingCohort: -5,
    currentBlock: "grad",
    blockHistory: [
      {
        _id: "5e4e6335f7c6fcc027cc780d",
        number: 1,
        name: "Fundamentals",
        slug: "fun"
      },
      {
        _id: "5e4e6335f7c6fcc027cc780e",
        number: 2,
        name: "Back End",
        slug: "be"
      },
      {
        _id: "5e4e6335f7c6fcc027cc780f",
        number: 3,
        name: "Front End",
        slug: "fe"
      },
      {
        _id: "5e4e6335f7c6fcc027cc7810",
        number: 4,
        name: "Project Phase",
        slug: "proj"
      },
      {
        _id: "5e4e6335f7c6fcc027cc7811",
        number: 5,
        name: "Graduated",
        slug: "grad"
      }
    ],
    blockSummary: {
      totalTimeAtNorthcoders: 4,
      Fundamentals: 1,
      "Back End": 1,
      "Front End": 1,
      "Project Phase": 1
    }
  },
  {
    _id: "5e6ba658a07be0001752ecea",
    name: "Bruhhh",
    startingCohort: 0,
    currentBlock: "grad",
    blockHistory: [
      {
        _id: "5e4e6335f7c6fcc027cc780d",
        number: 1,
        name: "Fundamentals",
        slug: "fun"
      },
      {
        _id: "5e4e6335f7c6fcc027cc780e",
        number: 2,
        name: "Back End",
        slug: "be"
      },
      {
        _id: "5e4e6335f7c6fcc027cc780f",
        number: 3,
        name: "Front End",
        slug: "fe"
      },
      {
        _id: "5e4e6335f7c6fcc027cc7810",
        number: 4,
        name: "Project Phase",
        slug: "proj"
      },
      {
        _id: "5e4e6335f7c6fcc027cc7811",
        number: 5,
        name: "Graduated",
        slug: "grad"
      }
    ],
    blockSummary: {
      totalTimeAtNorthcoders: 4,
      Fundamentals: 1,
      "Back End": 1,
      "Front End": 1,
      "Project Phase": 1
    }
  },
  {
    _id: "5e6a16196578be001773b893",
    name: "Jim Duggen",
    startingCohort: 1,
    currentBlock: "grad",
    blockHistory: [
      {
        _id: "5e4e6335f7c6fcc027cc780d",
        number: 1,
        name: "Fundamentals",
        slug: "fun"
      },
      {
        _id: "5e4e6335f7c6fcc027cc780e",
        number: 2,
        name: "Back End",
        slug: "be"
      },
      {
        _id: "5e4e6335f7c6fcc027cc780e",
        number: 2,
        name: "Back End",
        slug: "be"
      },
      {
        _id: "5e4e6335f7c6fcc027cc780f",
        number: 3,
        name: "Front End",
        slug: "fe"
      },
      {
        _id: "5e4e6335f7c6fcc027cc7810",
        number: 4,
        name: "Project Phase",
        slug: "proj"
      },
      {
        _id: "5e4e6335f7c6fcc027cc7811",
        number: 5,
        name: "Graduated",
        slug: "grad"
      }
    ],
    blockSummary: {
      totalTimeAtNorthcoders: 5,
      Fundamentals: 1,
      "Back End": 2,
      "Front End": 1,
      "Project Phase": 1
    }
  }
];

const analyseData = studentsArray => {
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

const analysisSummary = {
  totalStudents: 7,
  cohortNumbers: { "1": 7 },
  currentBlockNumbers: { grad: 7 },
  totalNumberOfBlocks: 30,
  repeatedBlocks: {
    Fundamentals: 0,
    "Back End": 1,
    "Front End": 1,
    "Project Phase": 0
  }
};

const formatForRepeatedBlocksBar = summaryObj => {
  const dataObj = {
    labels: ["Fundamentals", "Back End", "Front End", "Project Phase"],
    datasets: [
      {
        label: "Repeated Blocks Total",
        // backgroundColor: "rgba(255,99,132,0.2)",
        // borderColor: "rgba(255,99,132,1)",
        // borderWidth: 1,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: []
      }
    ]
  };
  dataObj.labels.map(key =>
    dataObj.datasets[0].data.push(summaryObj.repeatedBlocks[key])
  );
  console.log(dataObj.datasets[0].data);
  return dataObj;
};

const formatForNorthcoderJourneyBar = detailedArray => {
  const dataObj = {
    labels: [],
    datasets: [
      {
        label: "Time at Northcoders (weeks)",
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

const barChartRepeatedBlocks = formatForNorthcoderJourneyBar(data);

const formatForJourneySummaryBar = formattedDataObj => {
  const refObj = {};
  formattedDataObj.datasets[0].data.forEach(value => {
    if (!refObj.hasOwnProperty(value)) {
      refObj[value] = 1;
    }
    if (refObj.hasOwnProperty(value)) {
      refObj[value] += 1;
    }
  });

  const valuesForLabelsArray = Object.keys(refObj);
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

const summaryForBar = formatForJourneySummaryBar(barChartRepeatedBlocks);
console.log(summaryForBar.datasets[0].data);

/*
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
*/

/*
const blockNumbersKeys = ["grad"];
const cohortKeys = ["1"];
const colors = [
  "#f7aef8",
  "#b388eb",
  "#8093f1",
  "#72ddf7",
  "#f4f4ed",
  "#0a2463",
  "#ff206e",
  "#fbff12",
  "#41ead4",
  "#3e92cc",
  "#7ac74f",
  "#adeee3",
  "#8b9474",
  "#271f30",
  "#87f1ff",
  "#00a6fb",
  "#ee6352",
  "#f5e0b7",
  "#57a773",
  "#484d6d"
];

const formatForDoughnut = (
  summaryObject,
  keys,
  nameOfKey,
  descriptionForSegment
) => {
  const betterKeyName = keys.map(key => `${descriptionForSegment} ${key}`);
  const dataArray = keys.map(key => summaryObject[nameOfKey][key]);
  const colorArray = keys.map((key, i) => colors[i]);
  const dataObj = {
    labels: betterKeyName,
    datasets: [
      {
        data: dataArray,
        backgroundColor: colorArray
      }
    ]
  };
  return dataObj;
};

*/
