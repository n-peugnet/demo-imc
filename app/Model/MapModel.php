<?php /* app/Model/CommentModel.php */
namespace Model;

use PDO;

class MapModel extends \W\Model\Model
{
	/**
	 * Gets a page of maps
	 * @param int $page number of the page
	 * @param int $items number of items per page
	 */
	public function getPage($page, $items)
	{
		$offset = ($page - 1) * $items;
		$limit = $items;
		$sql = "SELECT *
			FROM map
			LIMIT :l
			OFFSET :o";
		$req = $this->dbh->prepare($sql);
		$req->bindParam('l', $limit, PDO::PARAM_INT);
		$req->bindParam('o', $offset, PDO::PARAM_INT);
		$res = $req->execute();
	}
}