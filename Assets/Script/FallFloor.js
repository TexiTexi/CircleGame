#pragma strict

private var isApplicationQuit:boolean;
private var basePosition:Vector3;
private var baseRotation:Quaternion;

function Start () {
isApplicationQuit = false;
basePosition = transform.position;
baseRotation = transform.rotation;
}

function Update () {

}

function OnApplicationQuit(){
isApplicationQuit = true;
}

function OnCollisionEnter2D(col:Collision2D){
StartCoroutine(Deth());
}

function OnDestroy(){
if(!isApplicationQuit){
SendMessageUpwards("Respawn",basePosition,SendMessageOptions.DontRequireReceiver);
}
}

function Deth(){
yield WaitForSeconds(3);
Destroy(gameObject);
}