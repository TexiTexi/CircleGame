#pragma strict

private var mainCamera : Camera;

function Start () {
mainCamera = Camera.main;
}

function Update () {

}

function OnTriggerEnter2D(col : Collider2D){
if(col.tag=="Player"){
//col.SendMessage("Damage",1);
var point : Vector3 = col.GetComponent(Player).respawnPoint;
col.transform.position = point;
//col.GetComponent(Player).cameraScroll = col.transform.position.y;
//mainCamera.SendMessage("FocusOnPlayer"); 
}else{
Destroy(col.gameObject);
}
}