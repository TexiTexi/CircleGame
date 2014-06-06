#pragma strict

private var basePosition : Vector2;
public var rightLimit : float = 0;
public var leftLimit : float = 0;
public var upLimit : float = 0;
public var downLimit : float = 0;
public var speedX : float = 0;
public var speedY : float = 0;


function Start () {
basePosition = transform.position;
rigidbody2D.velocity.x = speedX;
rigidbody2D.velocity.y = speedY;
}

function Update () {
if(transform.position.x
> basePosition.x + rightLimit){
rigidbody2D.velocity.x = -speedX;
}else if(transform.position.x
< basePosition.x - leftLimit){
rigidbody2D.velocity.x = speedX;
}
if(transform.position.y
> basePosition.y + upLimit){
rigidbody2D.velocity.y = -speedY;
}else if(transform.position.y
< basePosition.y - downLimit){
rigidbody2D.velocity.y = speedY;
}
}