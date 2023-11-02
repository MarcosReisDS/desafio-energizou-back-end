USE energizou_desafio;

CREATE TABLE IF NOT EXISTS `companies` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`password` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`client_name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`name_company` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`cnpj` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`zip_code` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`address` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`number` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`phone` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`email` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`is_admin` TINYINT(3) NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;

INSERT IGNORE INTO companies (id, username, password, is_admin) VALUES(1, "admin", "admin", 1);