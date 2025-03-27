# Convert Raspberry Pi hardware revision code into hardware type detail codes.

This module is used to convert the Rasbperry Pi hardware revision code into a detailed hardware type code. The module provides a function `getCodes` that takes a revision code as input and returns an object containing the hardware type details.


# Usage

Install the module as a dependency in your javascript project. Then, you can use the `getCodes` function to convert a revision code into hardware type details. The `getCodes` function takes a revision code as input and returns an object containing the hardware type details.

Example hardware type details object from revision code "b03114":
```json
{
  "revision": "1.4",
  "type": "4B",
  "processor": "BCM2711",
  "manufacturer": "Sony UK",
  "memory": "2GB"
}
```

Example NodeJS application for Raspberry Pi:
```javascript
const PiRevisionCodes = require('pi-revision-codes');
const FS = require('fs');

// read the revision code from /proc/cpuinfo file
let cpuinfo = FS.readFileSync("/proc/cpuinfo").toString();

// capture the Revision code
let match = /^Revision\s*:\s*([^\s]+)$/gm.exec(cpuinfo);
if (!match) {
  console.log("Error: Unable to find revision code in /proc/cpuinfo");
  process.exit(1);
}

// convert the revision code into hardware type details
let hardwareType = PiRevisionCodes.getCodes(match[1]);
console.log(hardwareType);
```
