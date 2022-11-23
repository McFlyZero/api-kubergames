-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema kubergames
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `kubergames` DEFAULT CHARACTER SET utf8mb4 ;
USE `kubergames` ;

-- -----------------------------------------------------
-- Table `kubergames`.`sb_flappy_bird`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `kubergames`.`sb_flappy_bird` ;

CREATE TABLE IF NOT EXISTS `kubergames`.`sb_flappy_bird` (
  `id_fb` INT(11) NOT NULL AUTO_INCREMENT,
  `name_fb` VARCHAR(4) NOT NULL,
  `date_fb` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `score_fb` INT(11) NOT NULL,
  PRIMARY KEY (`id_fb`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `kubergames`.`sb_minesweeper`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `kubergames`.`sb_minesweeper` ;

CREATE TABLE IF NOT EXISTS `kubergames`.`sb_minesweeper` (
  `id_ms` INT(11) NOT NULL AUTO_INCREMENT,
  `name_ms` VARCHAR(4) NOT NULL,
  `date_ms` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `score_ms` INT(11) NOT NULL,
  PRIMARY KEY (`id_ms`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `kubergames`.`sb_snake_game`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `kubergames`.`sb_snake_game` ;

CREATE TABLE IF NOT EXISTS `kubergames`.`sb_snake_game` (
  `id_sg` INT(11) NOT NULL AUTO_INCREMENT,
  `name_sg` VARCHAR(4) NOT NULL,
  `date_sg` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `score_sg` INT(11) NOT NULL,
  PRIMARY KEY (`id_sg`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `kubergames`.`sb_space_invaders`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `kubergames`.`sb_space_invaders` ;

CREATE TABLE IF NOT EXISTS `kubergames`.`sb_space_invaders` (
  `id_si` INT(11) NOT NULL AUTO_INCREMENT,
  `name_si` VARCHAR(4) NOT NULL,
  `date_si` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `score_si` INT(11) NOT NULL,
  PRIMARY KEY (`id_si`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
