/**
 * Created by haileykeen on 12/15/15.
 */
var Profile = require("./profile.js");

var studentProfile = new Profile("chalkers");

studentProfile.on("end", console.dir);

studentProfile.on("error", console.error);