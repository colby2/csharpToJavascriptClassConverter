# CSharp To Javascript Class Converter
- Converts a c# file containing properties defined with getters and setters into a javascript class
- Useful for large c# classes with lots of properties
- Example Usage: Can save a lot of time retyping entities in angular app if you already have a view model or dto written in c#

# To use
- open the html file using your favorite browser (must support the file reader api(
- Select a .cs file you want 
- Click read file
- Choose whether or not you want to include types
- Click Convert

# Notes
- Properties that you wish to be converted from must have a getter and setter ' { get; set; } ' and must be public 
- Feel free to use/fork/pull request etc...
