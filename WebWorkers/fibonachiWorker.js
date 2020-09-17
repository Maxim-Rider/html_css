
		// Числа Фибоначчи = элементы числовой последовательности
		// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, ...
		// в которой каждое последующее число равно сумме двух предыдущих чисел.
		function calcFib(x) {
			if (x > 1) {
				return calcFib(x - 1) + calcFib(x - 2);
			}
			else {
				return x;
			}
		}

		addEventListener("message", function () {
			for (var i = 0; i < 50; i++) {
				postMessage(i + " = " + calcFib(i) + "<br />");
		}
		
		}, false);
