if (Meteor.isClient) {
   
    Template.jobList.isVisible = function()
    {
        return Template.nav.currentTab() == 'jobList';
    };
    
    Template.jobList.jobs = function () {
        return jobList.find({});  
    };
}