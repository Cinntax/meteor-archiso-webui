
if (Meteor.isClient) {
    Template.projectPackagesEditView.packages = function () {
        return packageList.find({project: Session.get("selected_project")});  
    };
    
    Template.projectPackagesEditView.isVisible = function()
    {
        return Template.projectEditView.currentStage() == 'packages';
    };
    
    Template.projectPackagesEditView.events({
        'click #AddButton' : function () {
            var test = new Package();
            test.name = 'test package';
            test.project = Session.get("selected_project");
            packageList.insert(test);
        },
        'click #RemoveButton' : function (){
            packageList.remove(Session.get("selected_project"));
        },
        'click #AddRecommended' : function (){
            var test = new Package();
            test.name = 'recommended package 1';
            test.project = Session.get("selected_project");
            packageList.insert(test);
        }
    });
}