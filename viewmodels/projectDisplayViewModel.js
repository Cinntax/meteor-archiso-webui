
if (Meteor.isClient) {
    Template.projectDisplayView.selectedProject = function()
    {
        return projectList.findOne(Session.get("selected_project"));
    };
    
    Template.projectDisplayView.isVisible = function()
    {
        return Template.projectDisplayView.selectedProject() && Template.nav.currentTab() == 'projectList';
    };
    
    Template.projectDisplayView.events({
        'click #BuildButton' : function () {
            var NewJob = new BuildJob();
            NewJob.name = "new Job";
            NewJob.project = Template.projectDisplayView.selectedProject();
            jobList.insert(NewJob);
            exec  = require('child_process').exec
            child = exec('echo "test" >> ~/blahblah');
        }
    });
    
}

