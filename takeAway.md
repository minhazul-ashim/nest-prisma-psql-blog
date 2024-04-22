nest new projectName

npm install @prisma/client

run prisma migrate

copy the recommended model named user

create prisma folder along with the service and module prisma files with the same name;

run prisma migrate dev [it will create a new migration file and add the table to the database]

then after that create different artifacts of the module to create api services for that module;
run these commands

nest generate module users
nest generate controller users
