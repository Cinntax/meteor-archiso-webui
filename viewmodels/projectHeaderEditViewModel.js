if (Meteor.isClient) {
    Template.projectHeaderEditView.selectedProject = function()
    {
        var currentProject = projectList.findOne(Session.get("selected_project"));
        if(currentProject)
            $('#projectArchitecture').val(currentProject.architecture);
        return currentProject;
    };
    Template.projectHeaderEditView.isVisible = function()
    {
        return Template.projectEditView.currentStage() == 'header';
    };
    
    Template.projectHeaderEditView.Arch_32 = function ()
        {return enums_ARCHITECTURES.arch_32BIT};
        
    Template.projectHeaderEditView.Arch_64 = function ()
        {return enums_ARCHITECTURES.arch_64BIT};
        
    Template.projectHeaderEditView.Arch_Both = function ()
        {return enums_ARCHITECTURES.arch_BOTH};
        
}