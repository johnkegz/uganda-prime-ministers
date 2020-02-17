const primeMinisters = require("./primeMinisters");
function getPrimeMinisters() {
  try {
    const primeMinisterInfo = primeMinisters.primeMinisters.map(
      primeMinister => {
        return primeMinister;
      }
    );
    return primeMinisterInfo;
  } catch (err) {
    return err;
  }
}

function getPrimeMinisterBirthDay(name) {
  try {
    if (name === "" || name === undefined) return `Enter prime minister's name`;
    const minister = primeMinisters.primeMinisters.filter(
      primeMinister => primeMinister.name.toLowerCase() === name.toLowerCase()
    );
    if (minister.length === 0) return `The name you entered does not exist`;
    const primeMinisterInfo = minister.map(primeMinister => {
      const result = {
        phase: primeMinister.phase,
        name: primeMinister.name,
        tookOffice: primeMinister.tookOffice,
        leftOffice: primeMinister.leftOffice,
        birthDay: primeMinister.born
      };
      return result;
    });
    return primeMinisterInfo.length > 1
      ? primeMinisterInfo[primeMinisterInfo.length - 1]
      : primeMinisterInfo[0];
  } catch (err) {
    return err;
  }
}

module.exports = {
  getPrimeMinisters,
  getPrimeMinisterBirthDay
};
