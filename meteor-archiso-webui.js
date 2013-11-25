projectList = new Meteor.Collection("projects")
packageList = new Meteor.Collection("packages")
userList = new Meteor.Collection("users")
jobList = new Meteor.Collection("jobs")

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
 //   var test = new ArchISOProject();
//    console.log(test);
 //     var testProject = new ArchISOProject();
 //     Template.projectView = testProject;
    
  });
}
