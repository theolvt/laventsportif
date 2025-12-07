CREATE TABLE "advent_calendar_progress" (
	"user_id" varchar NOT NULL,
	"day_number" integer NOT NULL,
	"year" integer NOT NULL,
	"completed_at" timestamp DEFAULT now(),
	CONSTRAINT "advent_calendar_progress_user_id_day_number_year_pk" PRIMARY KEY("user_id","day_number","year")
);
