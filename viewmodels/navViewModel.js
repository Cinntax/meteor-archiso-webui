if(Meteor.isClient) {
    Template.nav.currentTab = function()
    {
        if(!Session.get("currentTab") || Session.get("currentTab") == 'projectList')
            return 'projectList';
        else
            return Session.get("currentTab");
    }
    
    Template.nav.events({
        'click #navProjects' : function () {
            Session.set('currentTab', 'projectList');
        },
        'click #navJobs' : function (){
            Session.set('currentTab', 'jobList');
        }
    });
}