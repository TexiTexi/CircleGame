#pragma strict

function Start () {

}

function Update () {
if(rigidbody2D.angularVelocity == 0){
transform.rotation = Quaternion.identity;
}
}