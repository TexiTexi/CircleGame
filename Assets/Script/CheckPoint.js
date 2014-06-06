#pragma strict

private var baseColor : Color;
private var player:Player;

function Start () {
baseColor = renderer.material.color;
player = GameObject.Find("Player").GetComponent(Player);
}

function Update () {

}

function OnTriggerEnter2D(col : Collider2D){
if(col.tag=="Player"){
renderer.material.color = Color.yellow;
player.respawnPoint = transform.position;
}
}