#pragma strict

public var PleasePush : GameObject;
private var time : float;
private var alpha : float;
private var change : boolean;

function Start () {
alpha = 0;
Time.timeScale = 1.0;
}

function Update () {
if(Input.GetKeyDown("space")){
Application.LoadLevel("GameScene");
}
time += Time.deltaTime;
if(time>0.5){
alpha = 255-alpha;
time = 0;
PleasePush.guiText.color = Color(1,1,1,alpha);
}
}