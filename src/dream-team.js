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
  if (Array.isArray(members)){
    let val = members.filter((a) => typeof(a) === 'string')
    return val.map(a => a.trim().toUpperCase()).sort().filter(a => a.charCodeAt(0) >
 64 &&  a.charCodeAt(0) < 91 || a.charCodeAt(0) > 96 &&  a.charCodeAt(0) < 123).map(a => a[0]).join('')
} 
  return false;
}
module.exports = {
  createDreamTeam
};
