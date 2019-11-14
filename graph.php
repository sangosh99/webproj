<?php

$conn = mysqli_connect("localhost:3307", "root", "", "kpi");

if(! $conn ) {
  die('Could not connect: ' . mysqli_error($conn));
}

$query = "SELECT * FROM area_graph";

$result = mysqli_query($conn, $query);

if(! $result ) {
	die('Could not get data: ' . mysqli_error($conn));
}

$chart_data = "[";
while($row = mysqli_fetch_array($result))
{
	//$chart_data .= "{ date:'".$row["date"]."', no_of_days:".$row["no_of_days"].", count:".$row["count"]."}, ";
	$chart_data .= "{'y':".$row["year"].",a:".$row["a"].",b:".$row["b"]."}, ";
}
$chart_data = substr($chart_data, 0, -2);
$chart_data .= "]";
echo json_encode($chart_data);
?>
 