const astrology = {
    _zodiacSigns: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
    _fortunes: ["A great opportunity is on the horizon—be ready to seize it!", "Unexpected kindness will bring you joy today.", "The path you choose will lead to great success.", "Good fortune will come when you least expect it.", "You will soon embark on a journey that changes your life.", "Trust in yourself; your intuition is guiding you correctly.", "A new friendship will bring happiness and adventure.", "You will overcome the obstacle that has been worrying you.", "Someone close to you has wonderful news—listen carefully.", "Financial prosperity is within your reach—stay determined.", "A secret admirer will soon make their presence known.",
    "Your creative energy will lead to an exciting opportunity.", "Take a leap of faith—fortune favors the bold!", "A long-awaited answer is coming—be patient and hopeful.", "You will make a difference in someone's life today.", "Happiness is not a destination but a way of life—embrace the present.", "The universe is aligning for your dreams to come true.", "You will soon receive recognition for your hard work.",
    "Your kindness and generosity will be returned tenfold.", "A small change in your routine will lead to big results.", "Now is the perfect time to start something new.", "A surprise gift is headed your way—keep an eye out!", "New doors will open where you least expect them.", "Your strength and resilience will carry you through any challenge.", "A loved one will bring you laughter and joy today.", "Your dreams are closer than they appear—keep going!", "An old friend will reconnect and bring good news.", "Embrace change, for it will lead you to something wonderful.", "A moment of clarity will help you make the right decision.", "Your future is bright—believe in yourself!" ],

    generateMessage() {
        const randomZodiacSigns = this._zodiacSigns[Math.floor(Math.random() * this._zodiacSigns.length)];
        const randomFortunes = this._fortunes[Math.floor(Math.random() * this._fortunes.length)];
        const randomLuckyNumber = Math.floor(Math.random() * 100 + 1); 

        return `your Zodiac Sign is ${randomZodiacSigns}. With todays fortune being " ${randomFortunes} ". lastly your Lucky Number is ${randomLuckyNumber}.`
    } 
}


console.log(astrology.generateMessage());
