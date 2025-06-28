// Configuration - You can customize these passwords and messages
const CONFIG = {
    mainPassword: "jungkook", // Change this to your desired main password
    dailyPasswords: {
        0: "flowers", // Day 0 - Flowers (automatic on first visit)
        1: "blanket",
        2: "BTS", 
        3: "outfit",
        4: "sushi",
        5: "skincare",
        6: "clothes",
        7: "travels"
    },
    dailyMessages: {
        0: "Shayla! You found the secret site! I know you mention that I never give you flowers but here is a bouquet of 365 roses (that will hopefully last you through the next year). Or if you are ever in need of flowers, but I do not have any, you can generate it here (there should be a link. If there isn't, it prob means im too busy / lazy to code it but i will code it in the future LOL)",
        1: "Shayla! This past year, I've grown really close to you! Every time I'm with u, I feel very warm and fuzzy inside :D! And I know that we r both very much homebody people, so i find it fitting that I get you this blanket jacket to kick off the one week long celebration! Hope you enjoy!",
        2: "안녕하세요 jjkluverr. Your obsession with BTS is lowkey weird as fuck but I don't judge. For Day 2, I find it fitting that your daily prizes are paid tickets to BTS's upcoming comeback concert AND NEW AIRPODS SO THAT U CAN LISTEN TO MORE BTS! ENJOYYYYY",
        3: "WELCOME BACK MY ABG. I KNOW THAT YOURE A CHRONIC RAVER (WEIRD). ALSO IM TYPING THIS ENTIRE MESSAGE IN ALL CAPS JUST CUZ I CAN HAHA. ANYWAY, FOR TODAY, YOU GET 3 NEW RAVE OUTFITS (WHATEVER THAT MEANS). AND MAYBE U CAN WEAR THEM FOR ME NEXT TIME ;)",
        4: "welcome to the halfway mark my younging. Weird that you only put one item in your wishlist.. Bro prob thinks im broke. But heres that one item that u asked for for day 4. Enjoy",
        5: "2 MORE DAYS UNTIL THE GRAND FINALEEE WOAHHH. For today, ill keep it light and hearty. I know youre obsessed with ur skincare product and you always want that glass skin look. So heres some skincare product! See u tmrwww",
        6: "tmrw is the big day! For today, you only get clothes. See u trmw!",
        7: "Welcome back to the last day, Shayla! From the very moment I laid eyes on you while I was walking to the library during freshman year, I thought \"dayummmm she bad af. Let me hit.\" (jk). I've grown so much this past year with you, and we've gone so far together. I know I wasn't the best bf in the beginning, but I've truly tried to do better and be better for you. Shayla, you mean the world to me. And I couldn't imagine a world without you. So, to my beautiful shayla, for day 7 (and the last day), I find it fitting that we travel the world together….to explore whats out there beyond Berkeley. But, you get to pick:"
    },
    dailyPrizes: {
        0: "🌹 Bouquet of 365 Roses",
        1: "🎬 Movie Night Date (Squid Game Season 3 + KPOP DEMON HUNTER + Cookie Baking) + Blanket Jacket",
        2: "🎫 BTS Concert Tickets + New AirPods",
        3: "👗 3 New Rave Outfits",
        4: "🐠 Aquarium/Sushi Date + Your Wishlist Item",
        5: "🧴 Skincare Products",
        6: "👕 New Clothes",
        7: "✈️ World Travel Adventure + Michelin Star Restaurant"
    },
    dailyPrizeImages: {
        0: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Roses
        1: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&q=80", // Movie night
        2: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Concert
        3: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", // Rave outfits
        4: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", // Aquarium/sushi
        5: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", // Skincare
        6: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", // Clothes
        7: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"  // Travel
    },
    dailyPrizeDates: {
        0: "June 8, 2024",
        1: "June 9, 2024",
        2: "June 10, 2024",
        3: "June 11, 2024",
        4: "June 12, 2024",
        5: "June 13, 2024",
        6: "June 14, 2024",
        7: "June 15, 2024"
    },
    dailyRiddles: {
        1: "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I? (Hint: Think of something that burns)",
        2: "What has keys, but no locks; space, but no room; and you can enter, but not go in? (Hint: You use this to type)",
        3: "What gets wetter and wetter the more it dries? (Hint: You use this in the bathroom)",
        4: "What has a head and a tail but no body? (Hint: You flip this to make decisions)",
        5: "What comes once in a minute, twice in a moment, but never in a thousand years? (Hint: Look at the word 'minute')",
        6: "What has cities, but no houses; forests, but no trees; and rivers, but no water? (Hint: You use this to find places)",
        7: "What is always in front of you but can't be seen? (Hint: Think about time)"
    },
    riddleAnswers: {
        1: "fire",
        2: "keyboard",
        3: "towel",
        4: "coin",
        5: "m",
        6: "map",
        7: "future"
    },
    destinations: {
        hongkong: {
            name: "Hong Kong",
            description: "🌆 The vibrant city of Hong Kong awaits! Experience the perfect blend of East and West with its stunning skyline, delicious dim sum, and exciting street markets. From the iconic Victoria Peak to the bustling streets of Mong Kok, every moment will be filled with adventure and romance. Get ready for amazing food, shopping, and unforgettable memories together! 🇭🇰"
        },
        bali: {
            name: "Bali, Indonesia",
            description: "🌺 Paradise found in Bali! Immerse yourselves in the beauty of tropical beaches, ancient temples, and lush rice terraces. From the spiritual serenity of Ubud to the vibrant nightlife of Seminyak, Bali offers the perfect romantic getaway. Enjoy stunning sunsets, traditional Balinese massages, and the warm hospitality of this magical island. Let's create memories that will last a lifetime! 🇮🇩"
        }
    }
};

// State management
let currentDay = null;
let claimedPrizes = [];
let isFirstVisit = true;
let onboardingStep = 0;
let showOnboarding = false;
let selectedDestination = null;
let onboardingActive = false; // NEW: track if onboarding is active

// DOM elements
const loginScreen = document.getElementById('loginScreen');
const mainWebsite = document.getElementById('mainWebsite');
const mainPasswordInput = document.getElementById('mainPassword');
const passwordError = document.getElementById('passwordError');
const boxModal = document.getElementById('boxModal');
const modalDay = document.getElementById('modalDay');
const dayPasswordInput = document.getElementById('dayPassword');
const dayPasswordError = document.getElementById('dayPasswordError');
const passwordSection = document.getElementById('passwordSection');
const surpriseSection = document.getElementById('surpriseSection');
const dayMessage = document.getElementById('dayMessage');
const dayPrize = document.getElementById('dayPrize');
const claimButton = document.getElementById('claimButton');
const shoppingCart = document.getElementById('shoppingCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
        isFirstVisit = false;
        loadClaimedPrizes();
        updateCartDisplay();
    } else {
        showOnboarding = true;
    }
    
    // Add enter key support for password inputs
    mainPasswordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkMainPassword();
        }
    });
    
    dayPasswordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkDayPassword();
        }
    });
});

// Main password authentication
function checkMainPassword() {
    const password = mainPasswordInput.value.trim();
    
    if (password === CONFIG.mainPassword) {
        // Success - show main website
        loginScreen.classList.add('hidden');
        mainWebsite.classList.remove('hidden');
        
        // Mark as visited
        localStorage.setItem('hasVisited', 'true');
        
        // If first visit, show onboarding immediately
        if (isFirstVisit) {
            onboardingActive = true;
            showOnboardingProcess();
        }
        
        // Clear password
        mainPasswordInput.value = '';
        passwordError.textContent = '';
    } else {
        // Error
        passwordError.textContent = 'Incorrect password. Please try again.';
        mainPasswordInput.value = '';
        mainPasswordInput.focus();
    }
}

// Show onboarding process
function showOnboardingProcess() {
    onboardingActive = true;
    currentDay = 0;
    modalDay.textContent = "Welcome";
    
    // Show onboarding modal
    passwordSection.classList.add('hidden');
    surpriseSection.classList.remove('hidden');
    
    const message = CONFIG.dailyMessages[0];
    const prize = CONFIG.dailyPrizes[0];
    
    dayMessage.innerHTML = message + '<br><br><a href="#" onclick="generateFlowers()" style="color: #e91e63; text-decoration: underline;">🌹 Generate Flowers Here</a>';
    dayPrize.textContent = prize;
    
    boxModal.classList.remove('hidden');
}

// Generate flowers function (placeholder for future implementation)
function generateFlowers() {
    alert("🌹 Flower Generator coming soon! I'll code this when I'm not too busy/lazy! 😄");
}

// Show first visit surprise (flowers)
function showFirstVisitSurprise() {
    currentDay = 0; // Special day for first visit
    showSurprise(0, CONFIG.dailyMessages[0], CONFIG.dailyPrizes[0]);
    createConfetti();
}

// Show surprise (helper function)
function showSurprise(day, message, prize) {
    currentDay = day;
    modalDay.textContent = day === 0 ? "Welcome" : day;
    passwordSection.classList.add('hidden');
    surpriseSection.classList.remove('hidden');
    // Prize image
    const imageUrl = CONFIG.dailyPrizeImages[day];
    const dateText = CONFIG.dailyPrizeDates[day];
    let imageHtml = `<div class='prize-image-box'><img src='${imageUrl}' alt='Prize Image' class='prize-image'/></div>`;
    let dateHtml = `<div class='prize-date-box'><i class="fas fa-calendar-alt"></i> <span>${dateText}</span></div>`;
    if (day === 0) {
        dayMessage.innerHTML = message + '<br><br><a href="#" onclick="generateFlowers()" style="color: #e91e63; text-decoration: underline;">🌹 Generate Flowers Here</a>';
    } else if (day === 7) {
        dayMessage.innerHTML = message + '<br><br><div class="destination-picker"><h4>Choose Your Adventure:</h4><div class="destination-buttons"><button onclick="selectDestination(\'hongkong\')" class="destination-btn">🇭🇰 Hong Kong</button><button onclick="selectDestination(\'bali\')" class="destination-btn">🇮🇩 Bali, Indonesia</button></div></div>';
    } else {
        dayMessage.textContent = message;
    }
    // Show image above, then prize, then date (all outside the colored box)
    dayPrize.innerHTML = `${imageHtml}<div class='prize-text'>${prize}</div>${dateHtml}`;
    boxModal.classList.remove('hidden');
}

// Select destination for Day 7
function selectDestination(destination) {
    selectedDestination = destination;
    const dest = CONFIG.destinations[destination];
    
    // Update the message with the selected destination
    const originalMessage = CONFIG.dailyMessages[7];
    dayMessage.innerHTML = originalMessage + '<br><br><div class="destination-result"><h4>🎉 Upcoming Destination: ' + dest.name + '</h4><p>' + dest.description + '</p></div>';
    
    // Add some special styling and animation
    const destinationResult = document.querySelector('.destination-result');
    if (destinationResult) {
        destinationResult.style.animation = 'destinationReveal 1s ease-in-out';
    }
    
    // Create extra confetti for the grand reveal
    createConfetti();
    setTimeout(() => createConfetti(), 500);
}

// Open mystery box
function openBox(day) {
    // Prevent opening boxes if onboarding is active
    if (onboardingActive) return;
    currentDay = day;
    modalDay.textContent = day;
    
    // Day 0 (Welcome) should not require a password
    if (day === 0) {
        showSurprise(0, CONFIG.dailyMessages[0], CONFIG.dailyPrizes[0]);
        return;
    }
    // Check if already claimed
    if (claimedPrizes.includes(day)) {
        showAlreadyClaimed(day);
    } else {
        // Show password input
        passwordSection.classList.remove('hidden');
        surpriseSection.classList.add('hidden');
        dayPasswordInput.value = '';
        dayPasswordError.textContent = '';
        boxModal.classList.remove('hidden');
        dayPasswordInput.focus();
    }
}

// Check daily password
function checkDayPassword() {
    const password = dayPasswordInput.value.trim().toLowerCase();
    const expectedPassword = CONFIG.dailyPasswords[currentDay];
    
    if (password === expectedPassword) {
        // Success - show surprise
        passwordSection.classList.add('hidden');
        surpriseSection.classList.remove('hidden');
        
        const message = CONFIG.dailyMessages[currentDay];
        const prize = CONFIG.dailyPrizes[currentDay];
        
        if (currentDay === 7) {
            // Special handling for Day 7 - show destination picker
            dayMessage.innerHTML = message + '<br><br><div class="destination-picker"><h4>Choose Your Adventure:</h4><div class="destination-buttons"><button onclick="selectDestination(\'hongkong\')" class="destination-btn">🇭🇰 Hong Kong</button><button onclick="selectDestination(\'bali\')" class="destination-btn">🇮🇩 Bali, Indonesia</button></div></div>';
        } else {
            dayMessage.textContent = message;
        }
        
        dayPrize.textContent = prize;
        
        // Clear password
        dayPasswordInput.value = '';
        dayPasswordError.textContent = '';
        
    } else {
        // Error
        dayPasswordError.textContent = 'Incorrect password. Please try again.';
        dayPasswordInput.value = '';
        dayPasswordInput.focus();
    }
}

// Show already claimed message
function showAlreadyClaimed(day) {
    passwordSection.classList.add('hidden');
    surpriseSection.classList.remove('hidden');
    
    const message = CONFIG.dailyMessages[day];
    const prize = CONFIG.dailyPrizes[day];
    
    if (day === 0) {
        dayMessage.innerHTML = message + '<br><br><a href="#" onclick="generateFlowers()" style="color: #e91e63; text-decoration: underline;">🌹 Generate Flowers Here</a>';
    } else if (day === 7 && selectedDestination) {
        const dest = CONFIG.destinations[selectedDestination];
        dayMessage.innerHTML = message + '<br><br><div class="destination-result"><h4>🎉 Upcoming Destination: ' + dest.name + '</h4><p>' + dest.description + '</p></div>';
    } else if (day === 7) {
        dayMessage.innerHTML = message + '<br><br><div class="destination-picker"><h4>Choose Your Adventure:</h4><div class="destination-buttons"><button onclick="selectDestination(\'hongkong\')" class="destination-btn">🇭🇰 Hong Kong</button><button onclick="selectDestination(\'bali\')" class="destination-btn">🇮🇩 Bali, Indonesia</button></div></div>';
    } else {
        dayMessage.textContent = message;
    }
    
    dayPrize.textContent = prize;
    claimButton.textContent = 'Already Claimed!';
    claimButton.disabled = true;
    
    boxModal.classList.remove('hidden');
}

// Claim prize
function claimPrize() {
    if (currentDay !== null && !claimedPrizes.includes(currentDay)) {
        // Add to claimed prizes
        claimedPrizes.push(currentDay);
        saveClaimedPrizes();
        
        // Update box appearance
        const box = document.querySelector(`[data-day="${currentDay}"]`);
        if (box) {
            box.classList.add('claimed');
            box.classList.remove('available');
        }
        
        // Update cart
        updateCartDisplay();
        
        // Show success message
        claimButton.textContent = 'Claimed! 💝';
        claimButton.disabled = true;
        
        // Create confetti
        createConfetti();
        
        // Close modal after delay
        setTimeout(() => {
            closeModal();
        }, 2000);
    }
}

// Close modal
function closeModal() {
    boxModal.classList.add('hidden');
    passwordSection.classList.remove('hidden');
    surpriseSection.classList.add('hidden');
    claimButton.textContent = 'Claim Prize';
    claimButton.disabled = false;
    // If onboarding was active, deactivate it after closing
    if (onboardingActive) onboardingActive = false;
    currentDay = null;
    selectedDestination = null;
}

// Toggle shopping cart
function toggleCart() {
    if (shoppingCart.classList.contains('show')) {
        shoppingCart.classList.remove('show');
        shoppingCart.classList.add('hidden');
    } else {
        shoppingCart.classList.add('show');
        shoppingCart.classList.remove('hidden');
        updateCartDisplay();
    }
}

// Update cart display
function updateCartDisplay() {
    cartCount.textContent = claimedPrizes.length;
    
    // Clear existing items
    cartItems.innerHTML = '';
    
    // Add claimed prizes
    claimedPrizes.forEach(day => {
        const prize = CONFIG.dailyPrizes[day];
        const message = CONFIG.dailyMessages[day].substring(0, 100) + '...';
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h4>${day === 0 ? 'Welcome' : 'Day ' + day} - ${prize}</h4>
            <p>${message}</p>
        `;
        
        cartItems.appendChild(cartItem);
    });
}

// Save claimed prizes to localStorage
function saveClaimedPrizes() {
    localStorage.setItem('claimedPrizes', JSON.stringify(claimedPrizes));
}

// Load claimed prizes from localStorage
function loadClaimedPrizes() {
    const saved = localStorage.getItem('claimedPrizes');
    if (saved) {
        claimedPrizes = JSON.parse(saved);
        
        // Update box appearances
        claimedPrizes.forEach(day => {
            const box = document.querySelector(`[data-day="${day}"]`);
            if (box) {
                box.classList.add('claimed');
                box.classList.remove('available');
            }
        });
    }
}

// Create confetti animation
function createConfetti() {
    const colors = ['#e91e63', '#ff6b9d', '#ff4081', '#f50057', '#c2185b'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            
            document.getElementById('confettiContainer').appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 100);
    }
}

// Add hover effects to boxes
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
        const day = parseInt(box.getAttribute('data-day'));
        
        // Add available class to unclaimed boxes
        if (!claimedPrizes.includes(day)) {
            box.classList.add('available');
        }
        
        // Add hover tooltip
        box.addEventListener('mouseenter', function() {
            if (!claimedPrizes.includes(day)) {
                if (day === 0) {
                    this.title = `Click to see your welcome surprise!`;
                } else {
                    this.title = `Click to unlock Day ${day} surprise!`;
                }
            } else {
                if (day === 0) {
                    this.title = `Welcome - Already claimed!`;
                } else {
                    this.title = `Day ${day} - Already claimed!`;
                }
            }
        });
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === boxModal) {
        closeModal();
    }
});

// Close cart when clicking outside
window.addEventListener('click', function(e) {
    if (!shoppingCart.contains(e.target) && !e.target.closest('.cart-icon')) {
        shoppingCart.classList.remove('show');
    }
});

// Add some extra romantic touches
function addRomanticTouches() {
    // Add floating hearts in background
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every interval
            createFloatingHeart();
        }
    }, 3000);
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = '2rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1';
    heart.style.animation = 'floatUp 6s linear';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Add floating animation and destination styles
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .destination-picker {
        margin-top: 1rem;
        text-align: center;
    }
    
    .destination-picker h4 {
        color: #333;
        margin-bottom: 1rem;
        font-size: 1.1rem;
    }
    
    .destination-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .destination-btn {
        background: linear-gradient(45deg, #e91e63, #ff6b9d);
        color: white;
        border: none;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s;
        font-weight: 600;
    }
    
    .destination-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 5px 15px rgba(233, 30, 99, 0.3);
    }
    
    .destination-result {
        margin-top: 1rem;
        padding: 1rem;
        background: linear-gradient(45deg, #4CAF50, #45a049);
        color: white;
        border-radius: 15px;
        text-align: center;
    }
    
    .destination-result h4 {
        color: white;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }
    
    .destination-result p {
        color: white;
        line-height: 1.6;
        margin: 0;
    }
    
    @keyframes destinationReveal {
        0% {
            transform: scale(0.8);
            opacity: 0;
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Start romantic touches after main website loads
setTimeout(addRomanticTouches, 2000); 