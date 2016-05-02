#pragma strict

function Start () {
	Debug.Log("STARTING");

}

function Update () {

}

var screenPoint = new Vector3();
var offset = new Vector3();

function OnMouseDown() {
	
 	screenPoint = Camera.main.WorldToScreenPoint(gameObject.transform.position);
 	Debug.Log(screenPoint.z.ToString());
	offset = gameObject.transform.position - Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z));
	Debug.Log("hello");
}

function OnMouseDrag() {
	var cursorPoint = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z);
	var cursorPosition = Camera.main.ScreenToWorldPoint(cursorPoint) + offset;
	transform.position = cursorPosition;
}