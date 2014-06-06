#pragma strict

public var cycleSpeed : float;
public var startSpeedX : float;
private var position:Vector3;

function Start () {
rigidbody2D.angularVelocity = cycleSpeed;
rigidbody2D.velocity.x = startSpeedX;
position = transform.position;
position.y += 0.1;
}

function Update () {
if(transform.position.y <= position.y){
rigidbody2D.velocity.x = startSpeedX;
}
}