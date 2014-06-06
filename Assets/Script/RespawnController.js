#pragma strict

public var target:Transform;
private var child:Transform;

function Start () {

}

function Update () {

}

function Respawn(position:Vector3){
child = Instantiate(target,position,Quaternion.identity);
child.transform.parent = transform;
}