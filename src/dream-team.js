const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if (members instanceof Array !== true) {
    return false;
  }

  let result = '';

  members.forEach(i => {

    if (typeof i === 'string') {
      const trim = i.trim();
      result += trim[0];
    }
  });

  return result.toUpperCase().split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
