<?php
namespace Model;

use PDO;
use DateTimeZone;
use DateTime;

class MapModel extends Model
{
	public function find($id, $basePath = '')
	{
		if (false === $map = parent::find($id)) {
			return false;
		}
		return $this->adaptValues($map, $basePath);
	}

	public function findLast($basePath = '')
	{
		if (false === $map = parent::findLast()) {
			return false;
		}
		return $this->adaptValues($map, $basePath);
	}

	/**
	 * Gets a list of maps from an id in an order
	 * @param int $from id of the first item to retrieve (included)
	 * @param string $order 'ASC' or 'DESC'
	 * @param int $limit number of items
	 * @param string $basePath needed for image url adaptation
	 * @return array page of maps
	 */
	public function listFrom($from, $order, $limit, $basePath)
	{
		$op = $order == 'ASC' ? '>' : '<';
		$sql = "SELECT
			`id`,
			`json`,
			`image`,
			`scale`,
			`date`,
			`pseudo`
			FROM `map`
			WHERE `id` $op= :f
			ORDER BY `id` $order
			LIMIT :l;";
		$req = $this->dbh->prepare($sql);
		$req->bindParam('f', $from, PDO::PARAM_INT);
		$req->bindParam('l', $limit, PDO::PARAM_INT);
		$res = $req->execute();

		return array_map(function ($row) use ($basePath) {
			return $this->adaptValues($row, $basePath);
		}, $req->fetchAll());
	}

	/**
	 * Gets a list of maps from an id to another
	 * @param int $from id of the first item to retrieve (included)
	 * @param int $to id of the last item to retrieve (excluded)
	 * @param int $limit number of items
	 * @param string $basePath needed for image url adaptation
	 * @return array page of maps
	 */
	public function listFromTo($from, $to, $limit, $basePath)
	{
		$diff = $from - $to;
		$opFrom = $diff > 0 ? '<' : '>';
		$opTo = $diff > 0 ? '>' : '<';
		$order = $diff > 0 ? 'DESC' : 'ASC';
		$sql = "SELECT
			`id`,
			`json`,
			`image`,
			`scale`,
			`date`,
			`pseudo`
			FROM `map`
			WHERE `id` $opFrom= :f
			AND `id` $opTo :t
			ORDER BY `id` $order
			LIMIT :l;";
		$req = $this->dbh->prepare($sql);
		$req->bindParam('f', $from, PDO::PARAM_INT);
		$req->bindParam('t', $to, PDO::PARAM_INT);
		$req->bindParam('l', $limit, PDO::PARAM_INT);
		$res = $req->execute();

		return array_map(function ($row) use ($basePath) {
			return $this->adaptValues($row, $basePath);
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

	/**
	 * (not used yet) Delete the overfull of maps from the bdd
	 * @param int $nbMax the max number of maps allowed
	 * @return int number of lines deleted
	 */
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

	/**
	 * Adapt Sql results value du correct ones
	 * @param mixed[] $map Sql results row
	 * @param string $basePath needed for image url adaptation
	 * @return mixed[]
	 */
	protected function adaptValues($map, $basePath)
	{
		$date = new DateTime($map['date'], new DateTimeZone('UTC'));
		$map['date'] = $date->format('c');
		$map['image'] = $basePath . $map['image'];
		$map['json'] = json_decode($map['json']);
		return $map;
	}
}