<?php
namespace Model;

use PDO;

class Model extends \W\Model\Model
{

	/**
	 * Get max id from table
	 * @return mixed max id
	 */
	public function max()
	{
		return $this->dbh
			->query("SELECT MAX(`$this->primaryKey`) FROM `$this->table`")
			->fetchColumn();
	}

	/**
	 * Get min id from table
	 * @return mixed min id
	 */
	public function min()
	{
		return $this->dbh
			->query("SELECT MIN(`$this->primaryKey`) FROM `$this->table`")
			->fetchColumn();
	}

	/**
	 * Find the last entry of the table
	 * @return string[]|false
	 */
	public function findLast()
	{
		return $this->dbh
			->query("SELECT * FROM `$this->table` WHERE `$this->primaryKey` = (SELECT MAX(`$this->primaryKey`) FROM `$this->table`)")
			->fetch();
	}
}