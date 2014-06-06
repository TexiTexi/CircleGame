#pragma strict

public var target : GameObject;
private var isPlay : boolean;

function Start () {
isPlay = false;
StartCoroutine(EndScroll());
}

function Update () {
if(isPlay){
if(target.transform.position.y>-10){
transform.position.x = Mathf.MoveTowards(transform.position.x,target.transform.position.x,1);
transform.position.y = Mathf.MoveTowards(transform.position.y,target.transform.position.y,1);
}
}else{
transform.position.x += 100*Time.deltaTime;
}
}

function EndScroll(){
yield WaitForSeconds(5);
transform.position = target.transform.position;
transform.position.z = -10;
transform.rotation = Quaternion.identity;
camera.orthographicSize = 7;
isPlay = true;
}

function FocusOnPlayer(){

}
