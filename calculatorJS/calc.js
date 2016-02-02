var FCalculator = document.calculator;
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";

function NumPress(Num) {
	if(FlagNewNum) {
		FCalculator.ReadOut.value = Num;
		FlagNewNum = false;
	} else {
		if(FCalculator.ReadOut.value == "0")
			FCalculator.ReadOut.value = Num;
		else
			FCalculator.ReadOut.value += Num;
	}
}
function Operation(Op) {
	var Readout = FCalculator.ReadOut.value;
	if (FlagNewNum && PendingOp != "=") {
		FCalculator.ReadOut.value = Currents;
	} else {
		FlagNewNum = true;
		if("+" == PendingOp)
			Currents += parseFloat(Readout);
		else if ("-" == PendingOp)
			Currents -= parseFloat(Readout);
		else if ("*" == PendingOp)
			Currents *= parseFloat(Readout);
		else if ("/" == PendingOp)
			Currents /= parseFloat(Readout);
		else 
			Currents = parseFloat(Readout);
		FCalculator.ReadOut.value = Currents;
		PendingOp = Op;
	}
}
function Decimal() {
	var curReadOut = FCalculator.ReadOut.value;
	if(FlagNewNum) {
		curReadOut = "0.";
		FlagNewNum = false;
	} else {
		if(curReadOut.indexOf(".") == -1)
			curReadOut += ".";
	}
	FCalculator.ReadOut.value = curReadOut;
}
function ClearEntry() {
	FCalculator.ReadOut.value = "0";
	FlagNewNum = true;
}
function Clear() {
	Currents = 0;
	PendingOp = "";
	ClearEntry();
}

function Negative() {
	FCalculator.ReadOut.value = parseFloat(FCalculator.ReadOut.value) * -1;
}
function Percent() {
	FCalculator.ReadOut.value = 
			(parseFloat(FCalculator.ReadOut.value) / 100) *
			 parseFloat(Currents);

}