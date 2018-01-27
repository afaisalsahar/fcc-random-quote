particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);

var quotes = [
{
    rank: "1",
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
    author: "Helen Keller"
}, {
    rank: "2",
    quote: "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.",
    author: "Oscar Wilde"
}, {
    rank: "3",
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
}, {
    rank: "4",
    quote: "Try to be a rainbow in someone's cloud.",
    author: "Maya Angelou"
}, {
    rank: "5",
    quote: "Find a place inside where there's joy, and the joy will burn out the pain.",
    author: "Joseph Campbell"
}, {
    rank: "6",
    quote: "Nothing is impossible, the word itself says 'I'm possible'!",
    author: "Audrey Hepburn"
}, {
    rank: "7",
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson"
}, {
    rank: "8",
    quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha"
}, {
    rank: "9",
    quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke"
}, {
    rank: "10",
    quote: "One of the most beautiful qualities of true friendship is to understand and to be understood.",
    author: "Lucius Annaeus Seneca"
}, {
    rank: "11",
    quote: "Where there is love there is life.",
    author: "Mahatma Gandhi"
}, {
    rank: "12",
    quote: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle"
}, {
    rank: "13",
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
}, {
    rank: "14",
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
}, {
    rank: "15",
    quote: "Do all things with love.",
    author: "Og Mandino"
}, {
    rank: "16",
    quote: "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend.",
    author: "Albert Camus"
}, {
    rank: "17",
    quote: "Love isn't something you find. Love is something that finds you.",
    author: "Loretta Young"
}, {
    rank: "18",
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
}, {
    rank: "19",
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale"
}, {
    rank: "20",
    quote: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela"
}, {
    rank: "21",
    quote: "Today you are you! That is truer than true! There is no one alive who is you-er than you!",
    author: "Dr. Seuss"
}, {
    rank: "22",
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
}, {
    rank: "23",
    quote: "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails. William Arthur Ward",
    author: "William Arthur Ward"
}, {
    rank: "24",
    quote: "Happiness resides not in possessions, and not in gold, happiness dwells in the soul.",
    author: "Democritus"
}, {
    rank: "25",
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
}, {
    rank: "26",
    quote: "Life's most persistent and urgent question is, 'What are you doing for others?'",
    author: "Martin Luther King, Jr."
}, {
    rank: "27",
    quote: "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
    author: "John F. Kennedy"
}, {
    rank: "28",
    quote: "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
    author: "A. A. Milne"
}, {
    rank: "29",
    quote: "For it was not into my ear you whispered, but into my heart. It was not my lips you kissed, but my soul.",
    author: "Judy Garland"
}, {
    rank: "30",
    quote: "A kiss is a lovely trick designed by nature to stop speech when words become superfluous.",
    author: "Ingrid Bergman"
}, {
    rank: "31",
    quote: "Everything has beauty, but not everyone sees it.",
    author: "Confucius"
}, {
    rank: "32",
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates"
}, {
    rank: "33",
    quote: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw"
}, {
    rank: "34",
    quote: "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Soren Kierkegaard"
}, {
    rank: "35",
    quote: "You don't choose your family. They are God's gift to you, as you are to them.",
    author: "Desmond Tutu"
}, {
    rank: "36",
    quote: "Friends show their love in times of trouble, not in happiness.",
    author: "Euripides"
}, {
    rank: "37",
    quote: "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
    author: "Swami Vivekananda"
}, {
    rank: "38",
    quote: "A single rose can be my garden... a single friend, my world.",
    author: "Leo Buscaglia"
}, {
    rank: "39",
    quote: "It's not what you look at that matters, it's what you see.",
    author: "Henry David Thoreau"
}, {
    rank: "40",
    quote: "We know what we are, but know not what we may be.",
    author: "William Shakespeare"
}, {
    rank: "41",
    quote: "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney"
}, {
    rank: "42",
    quote: "We love life, not because we are used to living but because we are used to loving.",
    author: "Friedrich Nietzsche"
}, {
    rank: "43",
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
}, {
    rank: "44",
    quote: "What we achieve inwardly will change outer reality.",
    author: "Plutarch"
}, {
    rank: "45",
    quote: "Problems are not stop signs, they are guidelines.",
    author: "Robert H. Schuller"
}, {
    rank: "46",
    quote: "When we are no longer able to change a situation - we are challenged to change ourselves.",
    author: "Viktor E. Frankl"
}, {
    rank: "47",
    quote: "The World is my country, all mankind are my brethren, and to do good is my religion.",
    author: "Thomas Paine"
}, {
    rank: "48",
    quote: "Wise men speak because they have something to say; Fools because they have to say something.",
    author: "Plato"
}, {
    rank: "49",
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead"
}, {
    rank: "50",
    quote: "Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.",
    author: "Marcel Proust"
}, {
    rank: "51",
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
}, {
    rank: "52",
    quote: "If opportunity doesn't knock, build a door.",
    author: "Milton Berle"
}, {
    rank: "53",
    quote: "There is only one happiness in this life, to love and be loved.",
    author: "George Sand"
}, {
    rank: "54",
    quote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius"
}, {
    rank: "55",
    quote: "A leader is one who knows the way, goes the way, and shows the way.",
    author: "John C. Maxwell"
}, {
    rank: "56",
    quote: "There is nothing on this earth more to be prized than true friendship.",
    author: "Thomas Aquinas"
}, {
    rank: "57",
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
}, {
    rank: "58",
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison"
}, {
    rank: "59",
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank"
}, {
    rank: "60",
    quote: "Not all those who wander are lost.",
    author: "J. R. R. Tolkien"
}, {
    rank: "61",
    quote: "Change your life today. Don't gamble on the future, act now, without delay.",
    author: "Simone de Beauvoir"
}, {
    rank: "62",
    quote: "Coming together is a beginning; keeping together is progress; working together is success.",
    author: "Henry Ford"
}, {
    rank: "63",
    quote: "God gave us the gift of life; it is up to us to give ourselves the gift of living well.",
    author: "Voltaire"
}, {
    rank: "64",
    quote: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    author: "Samuel Beckett"
}, {
    rank: "65",
    quote: "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
    author: "Edith Wharton"
}, {
    rank: "66",
    quote: "A new command I give you: Love one another. As I have loved you, so you must love one another.",
    author: "Jesus Christ"
}, {
    rank: "67",
    quote: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown, Jr."
}, {
    rank: "68",
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
}, {
    rank: "69",
    quote: "Honesty is the first chapter in the book of wisdom.",
    author: "Thomas Jefferson"
}, {
    rank: "70",
    quote: "There is only one corner of the universe you can be certain of improving, and that's your own self.",
    author: "Aldous Huxley"
}, {
    rank: "71",
    quote: "You can't blame gravity for falling in love.",
    author: "Albert Einstein"
}, {
    rank: "72",
    quote: "Love has no age, no limit; and no death.",
    author: "John Galsworthy"
}, {
    rank: "73",
    quote: "Happiness can exist only in acceptance.",
    author: "George Orwell"
}, {
    rank: "74",
    quote: "Being entirely honest with oneself is a good exercise.",
    author: "Sigmund Freud"
}, {
    rank: "75",
    quote: "Keep your face always toward the sunshine - and shadows will fall behind you.",
    author: "Walt Whitman"
}, {
    rank: "76",
    quote: "The supreme art of war is to subdue the enemy without fighting.",
    author: "Sun Tzu"
}, {
    rank: "77",
    quote: "Independence is happiness.",
    author: "Susan B. Anthony"
}, {
    rank: "78",
    quote: "Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.",
    author: "Thomas Carlyle"
}, {
    rank: "79",
    quote: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill"
}, {
    rank: "80",
    quote: "It is far better to be alone, than to be in bad company.",
    author: "George Washington"
}, {
    rank: "81",
    quote: "Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching.",
    author: "Satchel Paige"
}, {
    rank: "82",
    quote: "Love cures people - both the ones who give it and the ones who receive it.",
    author: "Karl A. Menninger"
}, {
    rank: "83",
    quote: "No act of kindness, no matter how small, is ever wasted.",
    author: "Aesop"
}, {
    rank: "84",
    quote: "Life without love is like a tree without blossoms or fruit.",
    author: "Khalil Gibran"
}, {
    rank: "85",
    quote: "Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.",
    author: "William Blake"
}, {
    rank: "86",
    quote: "Good judgment comes from experience, and a lot of that comes from bad judgment.",
    author: "Will Rogers"
}, {
    rank: "87",
    quote: "The only journey is the one within.",
    author: "Rainer Maria Rilke"
}, {
    rank: "88",
    quote: "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.",
    author: "Francis of Assisi"
}, {
    rank: "89",
    quote: "All that we see or seem is but a dream within a dream.",
    author: "Edgar Allan Poe"
}, {
    rank: "90",
    quote: "There is no charm equal to tenderness of heart.",
    author: "Jane Austen"
}, {
    rank: "91",
    quote: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci"
}, {
    rank: "92",
    quote: "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.",
    author: "Henry James"
}, {
    rank: "93",
    quote: "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.",
    author: "Amelia Earhart"
}, {
    rank: "94",
    quote: "It is better to be feared than loved, if you cannot be both.",
    author: "Niccolo Machiavelli"
}, {
    rank: "95",
    quote: "Let us sacrifice our today so that our children can have a better tomorrow.",
    author: "A. P. J. Abdul Kalam"
}, {
    rank: "96",
    quote: "You cannot shake hands with a clenched fist.",
    author: "Indira Gandhi"
}, {
    rank: "97",
    quote: "There is nothing permanent except change.",
    author: "Heraclitus"
}, {
    rank: "98",
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt"
}, {
    rank: "99",
    quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
    author: "Ernest Hemingway"
}, {
    rank: "100",
    quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
    author: "John Keats"
}];

// 0, accesing, 1, decending, 2, random;
var mode = 1, lastQuote = quotes[quotes.length-1],
colors = ['#000c19','#19000a','#000019','#190015','#001219','#150019','#010019','#000419','#000b19'];

function randomN(star, end) {
    return Math.floor(Math.random(0) * end);
}

function newQuote() {
    lastQuote =
    (mode == 2) ? quotes[randomN(0, quotes.length)] :
    (mode == 0) ? quotes[quotes.indexOf(lastQuote)+1] : quotes[quotes.indexOf(lastQuote)-1];

    return lastQuote;
}

function tweetQuote() {
    $("#tweet").attr("href",'https://twitter.com/intent/tweet?source=webclient&text=' + 
        encodeURIComponent($(".quote").text() + ' - ') +
        encodeURIComponent($(".author").text() + ' #Quote'));
};

function background() {
    var stop1 = colors[randomN(0, colors.length)];
    var stop2 = colors[randomN(0, colors.length)];

    while(stop2 == stop1) {stop2 = colors[randomN(0, colors.length)];}

    $("body").css("background", "linear-gradient("+stop1+","+stop2+")");
}

$("#refresh").on("click", function() {
    var quote = newQuote();
    $(".quotes").fadeOut(400, function() {

        $(".quote").html(quote.quote); $(".author").html(quote.author); $("#rank").html(quote.rank);
        tweetQuote();

        $("body").animate({ opacity: 0
        }, 400, function() {
                background();
                $("body").animate({ opacity: 1
            }, 400, function() {
                $(".quotes").fadeIn(400);    
            });
        });
    });
});

$(".welcome .button").on("click", function() {
    if(this.dataset.mode) mode = parseInt(this.dataset.mode);
    lastQuote = 
    (mode == 0) ? quotes[0] : quotes[(mode == 1) ? quotes.length-1 : randomN(0, quotes.length)];

    $(".quote").html(lastQuote.quote); $(".author").html(lastQuote.author); $("#rank").html(lastQuote.rank);
    tweetQuote();

    $(".welcome").fadeOut(400, function() {
        $(".quotes").fadeIn(400);
    });
});

$(document).ready(function() {
    setTimeout(function(){$("body").animate({ opacity: 1 }, 400);}, 100);
});