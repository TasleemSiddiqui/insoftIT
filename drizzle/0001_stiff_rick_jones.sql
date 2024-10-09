CREATE TABLE IF NOT EXISTS "coworking_bookings" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(100) NOT NULL,
	"last_name" varchar(100) NOT NULL,
	"phone_number" varchar(15) NOT NULL,
	"email" varchar(255) NOT NULL,
	"location" varchar(100) NOT NULL,
	"num_of_people" integer NOT NULL,
	"shift" varchar(10) NOT NULL,
	"ac" varchar(10) NOT NULL,
	"start_time" date NOT NULL,
	"end_time" date NOT NULL,
	"budget" varchar(20) NOT NULL,
	"created_at" timestamp DEFAULT now()
);
