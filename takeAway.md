Possible Errors and Fixes : If prisma says operation not permitted, then just stop the development server and then run prisma commands on the CLI.

nest new projectName

npm install @prisma/client

run prisma migrate

copy the recommended model named user

create prisma folder along with the service and module prisma files with the same name;

run prisma migrate dev [it will create a new migration file and add the table to the database]

!! When we update anything in the schema.prisma model, then we just need to run cmd 'prisma migrate dev', it will automatically run the migrations and migrate the new table structure, no need to separately run migrations like Laravel or Sequlize Node ORM.

then after that create different artifacts of the module to create api services for that module;
run these commands

!! PRISMS MIGRATION ROLLBACK COMMANDS TO CREATE A ROLLBACK

prisma migrate diff \
> --from-schema-datamodel prisma/schema.prisma \
> --to-schema-datasource prisma/schema.prisma \
> --script > down.sql



!!! CLI commands to create a different module artifacts
nest g module users
nest g controller users
nest g service users
