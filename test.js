const PiRevisionCodes = require('./index.js');

const testCodes = [
  {
    revision: "a03140",
    expected: {
      "revision": "1.0",
      "type": "CM4",
      "processor": "BCM2711",
      "manufacturer": "Sony UK",
      "memory": "1GB"
    }
  },
  {
    revision: "b03114",
    expected: {
      "revision": "1.4",
      "type": "4B",
      "processor": "BCM2711",
      "manufacturer": "Sony UK",
      "memory": "2GB"
    }
  },
  {
    revision: "a220a0",
    expected: {
      "revision": "1.0",
      "type": "CM3",
      "processor": "BCM2837",
      "manufacturer": "Embest",
      "memory": "1GB"
    }
  },
  {
    revision: "9000c1",
    expected: {
      "type": "Zero W",
      "revision": "1.1",
      "processor": "BCM2835",
      "memory": "512MB",
      "manufacturer": "Sony UK"
    }
  }
];

let success = true;
console.log("Testing revision codes...");
testCodes.forEach(testCode => {
  const result = PiRevisionCodes.getCodes(testCode.revision);
  console.log(`Testing revision code ${testCode.revision}:`);
  console.log(JSON.stringify(result, null, 2));
  if (!validateExpected(result, testCode.expected)) success = false;
  console.log("");
});
if (success) {
  console.log("All revision codes tested successfully.");
  process.exit(0);
} else {
  console.error("Some revision codes failed to test.");
  process.exit(1);
}

function validateExpected(result, expected) {
  let success = true;
  for (const key in expected) {
    if (expected.hasOwnProperty(key)) {
      const value = result[key];
      if (value !== expected[key]) {
        console.error(`Error: Expected ${key} to be ${expected[key]}, but got ${value}`);
        success = false;
      }
    }
  }
  return success;
}
