# 💕 One Year Anniversary Website

A beautiful, interactive website to celebrate your one-year anniversary with your girlfriend! This website features password-protected daily surprises, romantic messages, and a prize collection system.

## 🌟 Features

- **Initial Password Protection**: Secure entry to the website
- **Welcome Flowers**: Special Day 0 surprise with personalized message
- **7 Mystery Boxes**: One for each day of celebration (Days 1-7)
- **Daily Passwords**: Each box requires a unique password
- **Riddle System**: Fun riddles to solve for daily passwords
- **Heartfelt Messages**: Custom romantic messages for each day
- **Prize Collection**: Shopping cart showing all claimed prizes
- **Beautiful Animations**: Confetti, floating hearts, and smooth transitions
- **Responsive Design**: Works perfectly on all devices
- **Local Storage**: Remembers claimed prizes between visits

## 🚀 Quick Start

1. **Download the files** to your computer
2. **Open `index.html`** in your web browser
3. **Enter the main password**: `love2024` (you can change this)
4. **Enjoy the experience!**

## ⚙️ Customization

### Changing Passwords

Edit the `script.js` file and modify the `CONFIG` object:

```javascript
const CONFIG = {
    mainPassword: "your-main-password", // Change this
    dailyPasswords: {
        0: "flowers", // Day 0 - Flowers (automatic on first visit)
        1: "day1-password",
        2: "day2-password",
        // ... etc
    }
};
```

### Customizing Messages

Update the daily messages in `script.js`:

```javascript
dailyMessages: {
    0: "Your welcome message for Shayla",
    1: "Your custom message for day 1",
    2: "Your custom message for day 2",
    // ... etc
}
```

### Customizing Prizes

Modify the prizes in `script.js`:

```javascript
dailyPrizes: {
    0: "🌹 Your Welcome Prize",
    1: "💍 Your Custom Prize",
    2: "🍫 Another Prize",
    // ... etc
}
```

### Customizing Riddles

Update the riddles and answers in `script.js`:

```javascript
dailyRiddles: {
    1: "Your custom riddle for day 1",
    2: "Your custom riddle for day 2",
    // ... etc
},
riddleAnswers: {
    1: "answer1",
    2: "answer2",
    // ... etc
}
```

## 📱 How It Works

### For You (Setup):
1. Customize the passwords, messages, prizes, and riddles in `script.js`
2. Give Shayla the main password to enter the website
3. Each day, give her a riddle to solve for that day's password
4. Watch her collect prizes and read your messages!

### For Shayla:
1. Enter the main password to access the website
2. Get her welcome flowers automatically on first visit
3. Click on any mystery box (Days 1-7)
4. Solve the riddle you provide to get the daily password
5. Enter the password to unlock the surprise
6. Read your romantic message and claim the prize
7. Check her collection in the shopping cart

## 🎨 Design Features

- **Romantic Color Scheme**: Pink and purple gradients
- **Beautiful Typography**: Dancing Script for romantic text
- **Smooth Animations**: Hover effects, confetti, floating hearts
- **Modern UI**: Glassmorphism effects and smooth transitions
- **Mobile Responsive**: Perfect on phones, tablets, and computers
- **Special Welcome Box**: Unique styling for Day 0 flowers

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript**: No external dependencies
- **Local Storage**: Saves progress automatically
- **Cross-browser Compatible**: Works on all modern browsers
- **Lightweight**: Fast loading and smooth performance

## 💝 Daily Experience

### Day 0: Welcome & Flowers
- Automatic flowers gift on first visit
- Personalized message for Shayla
- Special flower generator link (placeholder for future feature)

### Days 1-7: Daily Surprises
- Each day requires solving a riddle for the password
- Custom romantic message
- Special prize to claim
- Progress saved automatically

## 🧩 Current Riddles

Here are the current riddles and their answers (you can customize these):

1. **Day 1**: "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?" → `fire`
2. **Day 2**: "What has keys, but no locks; space, but no room; and you can enter, but not go in?" → `keyboard`
3. **Day 3**: "What gets wetter and wetter the more it dries?" → `towel`
4. **Day 4**: "What has a head and a tail but no body?" → `coin`
5. **Day 5**: "What comes once in a minute, twice in a moment, but never in a thousand years?" → `m`
6. **Day 6**: "What has cities, but no houses; forests, but no trees; and rivers, but no water?" → `map`
7. **Day 7**: "What is always in front of you but can't be seen?" → `future`

## 🎯 Tips for Success

1. **Plan Your Messages**: Write heartfelt, personal messages for each day
2. **Choose Meaningful Prizes**: Pick prizes that have special meaning to your relationship
3. **Create Fun Riddles**: Make the riddles personal or related to your relationship
4. **Set Reminders**: Remember to give Shayla the daily riddles
5. **Make It Special**: Consider the timing of when you give her each riddle

## 🔑 Current Passwords

- **Main Password**: `love2024`
- **Day 0 (Flowers)**: `flowers` (automatic)
- **Day 1**: `day1love`
- **Day 2**: `day2love`
- **Day 3**: `day3love`
- **Day 4**: `day4love`
- **Day 5**: `day5love`
- **Day 6**: `day6love`
- **Day 7**: `day7love`

## 🔒 Security Notes

- Passwords are stored in plain text in the JavaScript file
- This is designed for personal use only
- For additional security, consider hosting on a private server

## 🎉 Enjoy Your Anniversary!

This website is designed to make your one-year anniversary celebration extra special. Each day will bring new joy and excitement as Shayla solves riddles, discovers your messages, and collects her prizes.

**Happy Anniversary! 💕**

---

*Created with love for your special celebration* 