CREATE TABLE `links` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`feature` text NOT NULL,
	`icon` text,
	`iconThemedLight` text,
	`iconThemedDark` text,
	`category` text NOT NULL,
	`url` text NOT NULL,
	`isFavorite` text DEFAULT '0'
);
