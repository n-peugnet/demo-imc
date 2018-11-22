<?php /* app/Model/CommentModel.php */
namespace Model;

use PDO;
use DateTimeZone;
use DateTime;

class MapModel extends \W\Model\Model
{
	public function find($id, $basePath = '')
	{
		if (false === $map = parent::find($id)) {
			return false;
		}
		$date = new DateTime($map['date'], new DateTimeZone('UTC'));
		$map['date'] = $date->format('Y-m-d H:i:s e');
		$map['image'] = $basePath . $map['image'];
		$map['json'] = json_decode($map['json']);
		return $map;
	}

	/**
	 * Gets a list of maps
	 * @param int $from id of the first item to retrieve
	 * @param int $limit number of items
	 * @return array page of maps
	 */
	public function list($from, $limit, $basePath)
	{
		$sql = "SELECT
			`id`,
			`json`,
			`image`,
			`scale`,
			`date`,
			`pseudo`
			FROM `map`
			WHERE `id` <= :f
			ORDER BY `date` DESC
			LIMIT :l;";
		$req = $this->dbh->prepare($sql);
		$req->bindParam('f', $from, PDO::PARAM_INT);
		$req->bindParam('l', $limit, PDO::PARAM_INT);
		$res = $req->execute();

		return array_map(function ($row) use ($basePath) {
			$date = new DateTime($row['date'], new DateTimeZone('UTC'));
			$row['date'] = $date->format('Y-m-d H:i:s e');
			$row['image'] = $basePath . $row['image'];
			$row['json'] = json_decode($row['json']);
			return $row;
		}, $req->fetchAll());
	}

	/**
	 * Count the total number of maps
	 * @return int number of maps
	 */
	public function count()
	{
		$sql = "SELECT
			COUNT(`id`) AS nb
			FROM `map`;";
		$req = $this->dbh->query($sql);
		return $req->fetch()['nb'];
	}

	public function max()
	{
		return $this->dbh->query('SELECT MAX(`id`) FROM `map`')->fetchColumn();
	}

	public function min()
	{
		return $this->dbh->query('SELECT MIN(`id`) FROM `map`')->fetchColumn();
	}

	// not used yet
	public function deleteOverfull($nbMax)
	{
		$sql = "DELETE `map`
			FROM
				`map`
			WHERE id <= (SELECT id FROM map ORDER BY id DESC LIMIT 1 OFFSET :nb_max);";
		$req = $this->dbh->prepare($sql);
		$req->bindParam('nb_max', $nbMax, PDO::PARAM_INT);
		$res = $req->execute();
		return $req->rowCount();
	}
}