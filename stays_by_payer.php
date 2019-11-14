<?php

$conn = mysqli_connect("localhost:3307", "root", "", "kpi");

if(! $conn ) {
  die('Could not connect: ' . mysqli_error($conn));
}

$query = "SELECT * FROM stays_by_payer";

$result = mysqli_query($conn, $query);

if(! $result ) {
	die('Could not get data: ' . mysqli_error($conn));
}

$chart_data = "[";
while($row = mysqli_fetch_array($result))
{
	$chart_data .= "{\"label\":\"".$row["label"]."\", \"value\":".$row["value"]."},";
}
$chart_data = substr($chart_data, 0, -1);
$chart_data .= "]";
header('Content-Type: application/json');
$someArray = json_decode($chart_data);
echo $chart_data;

?>