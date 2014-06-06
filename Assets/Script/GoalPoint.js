#pragma strict

private var UI:PlayerUI;

function Start () {
UI = GameObject.Find("PlayerUI").GetComponent(PlayerUI);
}

function Update () {

}

function OnTriggerEnter2D(col:Collider2D){
if(col.tag=="Player"){
Time.timeScale = 0.2;
UI.GoalText();
StartCoroutine(Clear());
}
}

function Clear(){
yield WaitForSeconds(1.5);
Application.LoadLevel("GameClear");
}