#pragma strict

public var ready:GameObject;
public var go:GameObject;
public var goal:GameObject;
public var camera:Camera;
public var timer:GameObject;
private var startTimer:boolean;
private var timeCount:float;

function Start () {
timeCount = 0;
startTimer = false;
StartCoroutine(Ready());
}

function Update () {
if(startTimer){
timeCount += Time.deltaTime;
timer.guiText.text = "Time: " + timeCount.ToString("f2");
}
}

function GoalText(){
goal.SetActive(true);
timer.guiText.color = Color.yellow;
startTimer = false;
}

function Ready(){
yield WaitForSeconds(5);
ready.SetActive(false);
go.SetActive(true);
timer.SetActive(true);
startTimer = true;
StartCoroutine(Go());
}

function Go(){
yield WaitForSeconds(1);
go.SetActive(false);
}