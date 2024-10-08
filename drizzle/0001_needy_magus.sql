CREATE TABLE IF NOT EXISTS "coWorkingForm" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"phone_number" varchar(20) NOT NULL,
	"email" varchar(255) NOT NULL,
	"type" varchar(50) NOT NULL,
	"bio" text NOT NULL
);
