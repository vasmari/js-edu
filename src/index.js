/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    _preferences, 
    knowsProgramming,
    config,
    ) {
      if (knowsProgramming == true) {
        
        return Math.ceil(800 / config[_preferences]);
      } else {
        return Math.ceil((800 + 500) / config[_preferences]);
      }
     
  };
  