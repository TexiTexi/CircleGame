#pragma strict

public var speed : float = 100;
public var maxSpeed : float = 100;
public var jumpPower : float = 10;
public var dushJumpPower : float = 2;
public var jumpPowerReduce : float = 0.5;
public var HP:int = 3;
public var groundLayer : LayerMask;
var cameraScroll:float;
var respawnPoint:Vector3;
private var mainCamera : Camera;
private var isJumpRelease:boolean = false;

function Start () {
Time.timeScale = 1.0;
mainCamera = Camera.main;
respawnPoint = transform.position;
cameraScroll = transform.position.y;
}

function Update () {
var Grounded : boolean = Physics2D.Linecast(
transform.position,transform.position-transform.up*0.6,groundLayer);
if(Grounded){
isJumpRelease = false;
if(Input.GetKeyDown("space")){
if(Mathf.Abs(rigidbody2D.velocity.x) >= (maxSpeed - 1)){
rigidbody2D.velocity.y = jumpPower + dushJumpPower;
}else{
rigidbody2D.velocity.y = jumpPower;
}
}
}
if(Input.GetKeyUp("space")){
if(!isJumpRelease && rigidbody2D.velocity.y > 0){
rigidbody2D.velocity.y*= jumpPowerReduce;
isJumpRelease = true;
}
}
/*
if(mainCamera.transform.position.y!=cameraScroll){
mainCamera.transform.position.y = Mathf.MoveTowards(
mainCamera.transform.position.y,cameraScroll,0.3);
}*/
}

function FixedUpdate () {
var rightMove :float = Input.GetAxis("Horizontal");
rigidbody2D.AddForce(Vector2.right*rightMove*speed);

if(rigidbody2D.velocity.x>maxSpeed){
rigidbody2D.velocity.x = maxSpeed;
}
if(rigidbody2D.velocity.x<-maxSpeed){
rigidbody2D.velocity.x = -maxSpeed;
}
}
/*
function OnBecameInvisible(){
cameraScroll  = transform.position.y;
}*/

function Damage(damage:int){
HP=HP-damage;
if(HP<=0){
Application.LoadLevel("GameOver");
}
}