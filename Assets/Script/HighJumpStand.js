#pragma strict

public var HighJumpPower : float = 20;

function Start () {

}

function Update () {

}

function OnCollisionEnter2D(col : Collision2D){
if(col.gameObject.tag=="Player"){
col.gameObject.rigidbody2D.velocity.y = HighJumpPower;
}
}