# case-assignment
A quick and dirty tool to automatically assign a case in Salesforce

This tool will automatically click the Assign Case button once every second until a case is assigned. When a case is assigned, it will play a ping, uncheck the box, and stop running until the box is checked again. Click interval can be adjusted in the await command.

To activate:
- Pop out the Case Assignment window
- Open the dev console
- Change the focus to scc_widget_Case_Assignment
- Paste the code into the console and run
- Check the box that has been added to the bottom-left of the case assignment window

NOTE: This was designed exclusively for a specific sonfiguration of Salesforce, and will likely not work with other configurations.
