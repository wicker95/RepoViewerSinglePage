// JavaScript source code
function textClock() {

    //var newDate = new Date("dec 02, 18 00:01"),
    var newDate = new Date(),
        day = newDate.getDay(),
        date = newDate.getDate(),
		month = newDate.getMonth(),
        hours = newDate.getHours(),
        minutes = newDate.getMinutes().toString(),
        seconds = newDate.getSeconds().toString();
		

    if (hours > 12 && hours !== 0 && hours !== 23) {
        hours = hours - 12;
    }

    if (minutes < 10) {
        minutes = 0 + minutes;
    }
    if (seconds < 10) {
        seconds = 0 + seconds;
    }

    var minsSecs = minutes + seconds;
    if (minsSecs > 3230) {
        hours++;
    }
	
	month++;

    if (day === 5) {
        $('#tgif').html('TGIF'); //.addClass('active');
    }

    hoursObj = {
        1: '#one',
        2: '#two',
        3: '#three',
        4: '#four',
        5: '#five-hr',
        6: '#six',
        7: '#seven',
        8: '#eight',
        9: '#nine',
        10: '#ten-hr',
        11: '#eleven',
        12: '#noon',
		13: '#one',
        23: '#eleven',
        24: '#midnight',
        0: '#midnight'
    };
	
	dateObj = {
		1: '#first',
		2: '#second',
		3: '#third',
		4: '#fourth',
		5: '#fifth',
		6: '#sixth',
		7: '#seventh',
		8: '#eighth',
		9: '#ninth',
		10: '#tenth',
		11: '#eleventh',
		12: '#twelth',
		13: '#thirteenth',
		14: '#fourteenth',
		15: '#fifteenth',
		16: '#sixteenth',
		17: '#seventeenth',
		18: '#eighteenth',
		19: '#nineteenth',
		20: '#twentieth',
		21: '#twentyDay #first',
		22: '#twentyDay #second',
		23: '#twentyDay #third',
		24: '#twentyDay #fourth',
		25: '#twentyDay #fifth',
		26: '#twentyDay #sixth',
		27: '#twentyDay #seventh',
		28: '#twentyDay #eighth',
		29: '#twentyDay #ninth',
		30: '#thirtieth',
		31: '#thirty #first',
	};
	
	monthObj = {
		1: '#jan',
		2: '#feb',
		3: '#mar',
		4: '#apr',
		5: '#may',
		6: '#jun',
		7: '#jul',
		8: '#aug',
		9: '#sep',
		10: '#oct',
		11: '#nov',
		12: '#dec',
	}

    updateHour(hoursObj[hours]);
	updateDate(dateObj[date], monthObj[month])
	

    if ((minsSecs >= 5730 && minsSecs < 6000) || (minsSecs >= 0 && minsSecs < 230)) {
        if (hours !== 24 && hours !== 0) {
            updateDesc('#oclock');
        }
    } else if (minsSecs >= 230 && minsSecs < 730) {
        updateDesc('#five, #past');
    } else if (minsSecs >= 730 && minsSecs < 1230) {
        updateDesc('#ten, #past');
    } else if (minsSecs >= 1230 && minsSecs < 1730) {
        updateDesc('#quarter, #past');
    } else if (minsSecs >= 1730 && minsSecs < 2230) {
        updateDesc('#twenty, #past');
    } else if (minsSecs >= 2230 && minsSecs < 2730) {
        updateDesc('#twenty, #five, #past');
    } else if (minsSecs >= 2730 && minsSecs < 3230) {
        updateDesc('#half, #past');
    } else if (minsSecs >= 3230 && minsSecs < 3730) {
        updateDesc('#twenty, #five, #to');
    } else if (minsSecs >= 3730 && minsSecs < 4230) {
        updateDesc('#twenty, #to');
    } else if (minsSecs >= 4230 && minsSecs < 4730) {
        updateDesc('#quarter, #to');
    } else if (minsSecs >= 4730 && minsSecs < 5230) {
        updateDesc('#ten, #to');
    } else if (minsSecs >= 5230 && minsSecs < 5730) {
        updateDesc('#five, #to');
    } else {
        updateDesc();
    }
}

function updateDesc(classes) {
    $('.desc').removeClass('active');
    $(classes).addClass('active');
}

function updateHour(classes) {
    $('.hr').removeClass('active');
    $(classes).addClass('active');
}

function updateDate(day, month){
	$('.day').removeClass('active');
	var classArray = day.split(' ').forEach(function (item){
		$(item).addClass('active');
	});
	$('.month').removeClass('active');
	$(month).addClass('active');
}

function createString(numberOfCharacters) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	//var possible = "GMOQSUVWXY";

    for (var i = 0; i < numberOfCharacters; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function randomReplacements() {
	var desiredCharacterLength = 56;
	var $lines = $('.line');

	$lines.each(function(index, item){
		console.log('Line: ' + index);
		var $currentReplaceSegments = $(item).find('.replace');
		console.log('Replace Segments: ' + $currentReplaceSegments.length);
		var $replaceCount = $currentReplaceSegments.length;
		var lineLength = $(item).text().length;
		console.log($(item).text());
		if (lineLength < desiredCharacterLength){
			var needed = desiredCharacterLength - lineLength;
			console.log('Needed: ' + needed);
			var random = (Math.floor(needed/$replaceCount));
			
			console.log('Chars per segment: ' + random);
			var blah = ($replaceCount * random)+lineLength;
			console.log('Total length: ' + blah);
			console.log('');
			
			var i = 0;
			while(i < $replaceCount){
				$($currentReplaceSegments[i]).html(createString(random));
				i++;
			}
		
		}	
		if (desiredCharacterLength>blah){
			var finalString = desiredCharacterLength - blah;
			$(item).append('<span class="replace">' + createString(finalString) + '</span>');
		}
	});
	
	/*
	
	var $targetLine = $('#line-1');
	var $replaceSegments = $($targetLine).find('.replace');
	var $replaceCount = $replaceSegments.length;
	console.log('Replacement Section Count: ' + $replaceCount);
	
    var $replacements = $('.replace');
    $replacements.each(function () {
        var stringLength = $(this).data('length');
        $(this).html(createString(stringLength));
    });

	var lineLength = $targetLine.text().length;
	console.log('Expected Line Length: ' + desiredCharacterLength);
	console.log('Total Line Length: ' + lineLength);
	if (lineLength < desiredCharacterLength){
		var needed = desiredCharacterLength - lineLength;
		var random = (Math.floor((Math.random() * needed)/$replaceCount));
		console.log('First random: ' + random);
		random = (Math.floor(needed/$replaceCount));
		console.log('Chars per segment: ' + random);
		var blah = ($replaceCount * random)+lineLength;
		console.log('Total length: ' + blah);
		console.log(lineLength/random%2);
		var i = 0;
		while(i < $replaceCount){
			$($replaceSegments[i]).html(createString(random));
			i++;
		}
		//if (length/random%2){
		//	$($replaceSegments[i]).html(createString(random - 1));
		//}
	*/
	
}

setInterval(function () {
    textClock();
},1000);

textClock();
randomReplacements();