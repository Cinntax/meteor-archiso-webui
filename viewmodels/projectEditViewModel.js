if (Meteor.isClient) {

    Template.projectEditView.events({
        'click #saveChanges' : function () {
            //First, get the original value, so we have a model to do validation with.
            var currentProject = new ArchISOProject(Template.projectDisplayView.selectedProject());
            currentProject.name = $('#projectName').val();
            currentProject.description = $('#projectDesc').val();
            currentProject.author = $('#projectAuthor').val();
            currentProject.version = $('#projectVersion').val();
            currentProject.architecture = $('#projectArchitecture').val();
            if(currentProject.isValid())
            {
                projectList.update({_id: Session.get("selected_project")}, currentProject);
                $('#editModal').modal('toggle');
            }
        },
        'click #nextButton' : function () {
            if(Template.projectEditView.currentStage() == 'header')
                Session.set('edit_stage', 'packages');
            else if(Template.projectEditView.currentStage() == 'packages')
                Session.set('edit_stage', 'users');
        },
        'click #previousButton' : function() {
            if(Template.projectEditView.currentStage() == 'packages')
                Session.set('edit_stage', 'header');
            else if(Template.projectEditView.currentStage() == 'users')
                Session.set('edit_stage', 'packages');
        }
    });
    Template.projectEditView.currentStage = function()
    {
        if(!Session.get("edit_stage") || Session.get("edit_stage") == 'header')
            return 'header';
        else
            return Session.get("edit_stage");
    }
}