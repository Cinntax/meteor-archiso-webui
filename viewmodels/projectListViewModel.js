if (Meteor.isClient) {
   
    Template.projectList.isVisible = function()
    {
        return Template.nav.currentTab() == 'projectList';
    };
    
    Template.projectList.projects = function () {
        return projectList.find({});  
    };
    
    Template.projectList.events({
        'click #AddButton' : function () {
            var test = new ArchISOProject();
            projectList.insert(test);
        },
        'click #RemoveButton' : function (){
            projectList.remove(Session.get("selected_project"));
        },
        'click li' : function () {
            Session.set("selected_project", this._id);
        }
    });
}