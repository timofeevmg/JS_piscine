'use strict';

// Место для первой задачи
function calculateVolumeAndArea(edgeLength) {
    if (Number.isInteger(edgeLength) && edgeLength >= 0) {
        const cubeVolume = edgeLength * edgeLength * edgeLength;
        const cubeSurfaceArea = 6 * edgeLength * edgeLength;
        return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeSurfaceArea}`
    } else {
        return 'При вычислении произошла ошибка';
    }
}

// Место для второй задачи
function getCoupeNumber(seatNumber) {
    if (!Number.isInteger(seatNumber) || seatNumber < 0)
		return 'Ошибка. Проверьте правильность введенного номера места';
	else if (seatNumber === 0 || seatNumber > 36)
		return 'Таких мест в вагоне не существует';
	else {
		return (seatNumber - 1) / 4 - ((seatNumber - 1) % 4) / 4 + 1;
	}
}
