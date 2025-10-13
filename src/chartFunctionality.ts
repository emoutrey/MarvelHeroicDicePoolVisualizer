//for performance reasons, iterate over the array only once
export function take2Dice(arr: number[]) {
	var takenDie1 = 0;
	var takenDie2 = 0;
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 1) continue; //opps will come in a future version
		if (arr[i] > takenDie1) {
			takenDie2 = takenDie1;
			takenDie1 = arr[i];
		}
		else if (arr[i] > takenDie2) {
			takenDie2 = arr[i];
		}
	}
	
	return takenDie1 + takenDie2
}

//for performance reasons, iterate over the array only once
export function take3Dice(arr: number[]) {
	var takenDie1 = 0;
	var takenDie2 = 0;
	var takenDie3 = 0;
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 1) continue;
		if (arr[i] > takenDie1) {
			takenDie3 = takenDie2;
			takenDie2 = takenDie1;
			takenDie1 = arr[i];
		}
		else if (arr[i] > takenDie2) {
			takenDie3 = takenDie2;
			takenDie2 = arr[i];
		}
		else if (arr[i] > takenDie3) {
			takenDie3 = arr[i];
		}
	}
	
	return takenDie1 + takenDie2 + takenDie3;
}

//represent the probability map as an array of arrays
//each subarray is a list of all possibilies of an individual roll
//the superarray is therefore a list of all possibilities of all rolls
export function generatePermutationMap(d4: number, d6: number, d8: number, d10: number, d12: number) {
	const d4Array = [[1], [2], [3], [4]];
	const d6Array = [[1], [2], [3], [4], [5], [6]];
	const d8Array = [[1], [2], [3], [4], [5], [6], [7], [8]];
	const d10Array = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]];
	const d12Array = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12]];
	
	var allDice = [];
	
	for (let i = 0; i < d4; i++) { allDice.push(d4Array); }
	for (let i = 0; i < d6; i++) { allDice.push(d6Array); }
	for (let i = 0; i < d8; i++) { allDice.push(d8Array); }
	for (let i = 0; i < d10; i++) { allDice.push(d10Array); }
	for (let i = 0; i < d12; i++) { allDice.push(d12Array); }
	
	var rollingMap: number[][] = [];
	
	//this is a big performance bottleneck
	//can this be improved with tail recursion?
	for (let i = 0; i < allDice.length; i++) {
		rollingMap = getAllPermutations(rollingMap, allDice[i]);
	}
	
	return rollingMap;
}

//could probably make this more readable
function getAllPermutations(arr1: number[][], arr2: number[][]) {
	if (!arr1 || arr1.length === 0) return arr2;
	if (!arr2 || arr2.length === 0) return arr1;

	var newArr: number[][] = [];
	
	arr1.forEach(d => arr2.forEach(e => newArr.push([d, e].flat())));
	
	return newArr;
}

//need this somewhere
	