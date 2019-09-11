var alphabet = "ОЕАИНТСРВЛКМДПУЯЫЬГЗБЧЙХЖШЮЙЩЭФЪЁЦоеаинтсрвлкмдпуяыьгзбчйхжшюйщэфъёц.!)(1234567890,:?+-_";
var fyrphabet = "МЯУ-";

function encode(text)
{
    var result = "";

    for (var  i = 0; i < text.length; i++) {
        var n = alphabet.indexOf(text[i]);
        result += "м";
        for (var j = 0; j <= n; j++) {
            result += "я";
            if (j > 1 && (n - j) % 4 == 0) {
                for (var z = 0; z < (n - j) / 4; z++) {
                    result += "y";
                }
                break;
            }
        }
        result += "у";
        if ((i+1) != text.length) result += '-';
    }

    return result.replace(/-му-/g, function(space) {
        var random = Math.floor(Math.random() * 10);
        if (random > 6) {
            return " ";
        } else if (random > 4) {
            return " <3 ";
        } else if (random > 2) {
            return " ^^ ";
        } else {
            return " (ᵔᴥᵔ) ";
        }
    });
}

function decode(text) {
    text = text.replace(/м/g, "")
        .replace(/у/g, "")
        .replace(/y/g, "яяяя")
        .replace(/\<\3|\^\^|\(\ᵔ\ᴥ\ᵔ\)/g, "");
console.log(text);

    var words = text.split(" ");

    var result = "";

    for (var i = 0; i < words.length; i++) {
        var letters = words[i].split("-");

        for (var j = 0; j < letters.length; j++) {
            var n = (letters[j].match(/я/g) || []).length;
            if (typeof  alphabet[n - 1] != "undefined") result += alphabet[n - 1];
        }

        result += " ";
    }

    return result;
}
