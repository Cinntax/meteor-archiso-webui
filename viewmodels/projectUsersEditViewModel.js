
if (Meteor.isClient) {
    Template.projectUsersEditView.users = function () {
        return userList.find({project: Session.get("selected_project")});  
    };
    
    Template.projectUsersEditView.isVisible = function()
    {
        return Template.projectEditView.currentStage() == 'users';
    };
    
    Template.projectUsersEditView.events({
        'click #UserAddButton' : function () {
            console.log('adduser');
            var newUser = new User();
            newUser.name = $('#UserName').val();
            newUser.password = $('#UserPassword').val();
            newUser.project = Session.get("selected_project");
            userList.insert(newUser);
        },
        'click #UserRemoveButton' : function (){
            //UserList.remove(Session.get("selected_project"));
        }
    });
}