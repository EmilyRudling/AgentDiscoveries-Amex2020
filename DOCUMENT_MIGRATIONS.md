# Database Migration Documentation
Every time you make a change to the database using SQL code or the SQL Workbench, you need to document your code that it can be updated on everyone else’s devices. It is important that everyone’s database has the same structure.
Migration documentation is stored in src/main/resources/db/migration, here you can see all of the code that was originally added to the database, as well as code that other members of our team have added.
Migrations V1 – V6 were the ones originally in the project, and the rest were added by us to complete a task.

# Naming Database Migration files:
The class name consists of the following parts:
 - Prefix: V for versioned migrations, U for undo migrations, R for repeatable migrations
 - Version: Underscores (automatically replaced by dots at runtime) separate as many parts as you like (Not for repeatable migrations)
 - Separator: __ (two underscores)
 - Description: Underscores (automatically replaced by spaces at runtime) separate the words
 
 
    For example: V2__Add_new_table 


# Step by step:
 - Add a new file into the migration folder, using the naming convention above. You can do this by right clicking and creating a new file, then making sure to end the file name with “.sql”. (Remember to check with others on the team, if they are also adding database migrations you should ensure you use different file names and numbers)
 - Add your code into this new file – this should be just the plain SQL code, paste it right in, nothing needs to be added in.
 - Once you have added all of the SQL code that you used to change your database so that everyone else’s will match, run your code to check for errors.
 - If you get an error to do with duplicate code, you will need to delete and recreate an empty database called 'agentdiscoveries', then rerun the code.
 - If it now works, you are ready to commit your migrations.

If you have any questions or need help go to 'https://flywaydb.org/documentation/concepts/migrations.html#java-based-migrations', or ask Milly or Hugo, as we have both worked on db migrations before – hope this helps!
