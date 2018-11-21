<?php /* app/Model/CommentModel.php */
namespace Model;

use PDO;

class MapModel extends \W\Model\Model
{
	/**
	 * Gets a page of maps
	 * @param int $page number of the page
	 * @param int $items number of items per page
	 * @return array page of maps
	 */
	public function getPage($page, $items)
	{
		$offset = ($page - 1) * $items;
		$limit = $items;
		$sql = "SELECT
			`id`,
			`json`,
			`image`,
			`date`,
			`pseudo`
			FROM `map`
			ORDER BY `date` DESC
			LIMIT :l
			OFFSET :o";
		$req = $this->dbh->prepare($sql);
		$req->bindParam('l', $limit, PDO::PARAM_INT);
		$req->bindParam('o', $offset, PDO::PARAM_INT);
		$res = $req->execute();
		return $req->fetchAll();
	}

	/**
	 * Count the total number of maps
	 * @return int number of maps
	 */
	public function count()
	{
		$sql = "SELECT
			COUNT(`id`) AS nb
			FROM `map`";
		$req = $this->dbh->query($sql);
		return $req->fetch()['nb'];
	}

	/**
	 * Count the total number of pages
	 * @param int $items number of items per page
	 * @return int number of pages
	 */
	public function nbPages($items)
	{
		$count = $this->count();
		return (int)$count / $items;
	}
}