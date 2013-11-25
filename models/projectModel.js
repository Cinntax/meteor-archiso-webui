ArchISOProject = function()
{
    this.name = 'Untitled Project';
    this.architecture = enums_ARCHITECTURES.arch_BOTH;
    this.description = 'Default Description';
    this.author = 'Default Author';
    this.version = '0.0.0';
   // this.customFiles = null; //array
    //this.customBuildScript = null;
    //this.partitionConfiguration = null; //object
    this.isValid = function()
    {
        return true;
    }
}