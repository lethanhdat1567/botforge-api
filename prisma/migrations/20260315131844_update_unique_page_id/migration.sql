/*
  Warnings:

  - A unique constraint covering the columns `[page_uid]` on the table `pages` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `pages_page_uid_key` ON `pages`(`page_uid`);
