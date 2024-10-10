CREATE TABLE IF NOT EXISTS "institute_service" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(100) NOT NULL,
	"last_name" varchar(100) NOT NULL,
	"phone_number" varchar(15) NOT NULL,
	"email" varchar(255) NOT NULL,
	"location" varchar(100) NOT NULL,
	"area" varchar(255) NOT NULL,
	"cnic" varchar(15) DEFAULT null,
	"timing" varchar(50) NOT NULL,
	"feedback" text NOT NULL,
	"course" varchar(100) NOT NULL
);
