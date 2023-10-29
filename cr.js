function findMostPowerful(monsters) {
    
    if(!monsters.length) return null
	
    var strongestMonster = monsters[0];

	for (var i = 0; i < gMonsters.length; i++) {
		if (gMonsters[i].power > strongestMonster.power) {
			strongestMonster = gMonsters[i];
		}
	}

	return strongestMonster;
}
/******* */
function findWorstStudent(students) {
	var worstStudent = students[0];

	for (var i = 0; i < students.length; i++) {
		if (students[i].averageGrade < worstStudent.averageGrade) {
			worstStudent = students[i];
		}
	}

	return worstStudent;
}
