
// based on new style revision codes
// https://github.com/raspberrypi/documentation/blob/develop/documentation/asciidoc/computers/raspberry-pi/revision-codes.adoc#new-style-revision-codes

class PiRevisionCodes {
  // get revision codes
  static getCodes (revision) {
    let number = PiRevisionCodes.revisionToNumber(revision);
    return {
      type: PiRevisionCodes.getType(number),
      revision: PiRevisionCodes.getRevision(number),
      processor: PiRevisionCodes.getProcessor(number),
      memory: PiRevisionCodes.getMemory(number),
      manufacturer: PiRevisionCodes.getManufacturer(number)
    };
  }

  // convert revision hex string to number
  static revisionToNumber (revision) {
    let number = parseInt(revision, 16);
    if (isNaN(number)) throw Error(`Revision code ${revision} is not a hex number.`);
    return number;
  }

  // get hardware type code from revision number bits 4-11
  static getType (number) {
    let code = (number >> 4) & 0xFF;
    switch(code) {
      case 0x00:
        return "A";

      case 0x01:
        return "B";

      case 0x02:
        return "A+";

      case 0x03:
        return "B+";

      case 0x04:
        return "2B";

      case 0x06:
        return "CM1";

      case 0x08:
        return "3B";

      case 0x09:
        return "Zero";

      case 0x0a:
        return "CM3";

      case 0x0c:
        return "Zero W";

      case 0x0d:
        return "3B+";

      case 0x0e:
        return "3A+";

      case 0x10:
        return "CM3+";

      case 0x11:
        return "4B";

      case 0x12:
        return "Zero 2 W";

      case 0x13:
        return "400";

      case 0x14:
        return "CM4";

      case 0x15:
        return "CM4S";

      case 0x17:
        return "5";

      default:
        return "Unknown";
    }
  }

  // get hardware revision number from bits 0-3
  static getRevision (number) {
    return `1.${(number & 0xf)}`;
  }

  // get processor type from bits 12-15
  static getProcessor (number) {
    let code = (number >> 12) & 0xf;
    switch (code) {
      case 0:
        return "BCM2835";

      case 1:
        return "BCM2836";

      case 2:
        return "BCM2837";

      case 3:
        return "BCM2711";

      case 4:
        return "BCM2712";

      default:
        return "Unknown";
    }
  }

  // get memory size from bits 20-22
  static getMemory (number) {
    let code = (number >> 20) & 0x7;
    switch (code) {
      case 0:
        return "256MB";

      case 1:
        return "512MB";

      case 2:
        return "1GB";

      case 3:
        return "2GB";

      case 4:
        return "4GB";

      case 5:
        return "8GB";

      case 6:
        return "16GB";

      default:
        return "Unknown";
    }
  }

  // get manufacturer from bits 16-19
  static getManufacturer (number) {
    let code = (number >> 16) & 0xf
    switch (code) {
      case 0:
        return "Sony UK";

      case 1:
        return "Egoman";

      case 2:
        return "Embest";

      case 3:
        return "Sony Japan";

      case 4:
        return "Embest";

      case 5:
        return "Stadium";

      default:
        return "Unknown";
    }
  }
}

module.exports = PiRevisionCodes;
