ALTER TABLE `agentdiscoveries`.`location_reports`
ADD COLUMN `title` VARCHAR(45) NOT NULL AFTER `report_body`;